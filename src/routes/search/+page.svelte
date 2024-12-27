<script lang="ts">
    import countries, { init } from "$lib/storage/countryNameStore"
    import { onMount } from "svelte";

    let countriesWritten: object[];

    const unsubscribe = countries.subscribe(val => countriesWritten = val);


    onMount(() => {
        init()
        return () => unsubscribe()
    });
</script>

<div>{JSON.stringify(countriesWritten)}</div>

{#each countriesWritten as country}
    <h1>{country!.name.common}</h1>
{/each}