<script lang="ts">
    import { page } from "$app/state";
    import type { Country } from "$lib/classes/CountryManager";
    import countryStore from "$lib/storage/countryStore";
    import { onMount } from "svelte";
    import { writable, type Writable } from "svelte/store";

    // usually not possible but can and will happen if the user messes with the url
    let countryNotFound = writable(false);
    let country: Writable<Country | null> = writable(null);

    onMount(async () => {
        try {
            let result = await $countryStore.getCountryByIdentifier(page.params.country);
            country.set(result);
        } catch (error) {
            countryNotFound.set(true);
        }
    });
</script>

{#if $countryNotFound}
    <div>
        <h1>404 - Country Not Found</h1>
        <p>The country you are looking for does not exist.</p>
    </div>
{:else}
    <div>
        <h1>Country: {JSON.stringify($country)}</h1>
    </div>
{/if}
