<script lang="ts">
	import { onMount } from 'svelte';
	import { Card, Input, Spinner } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import countryStore from '$lib/storage/countryStore';
	import type { Country } from '$lib/classes/CountryManager';

	let searchTerm = '';
	let countries: Country[] = [];
	let loading = true;
	let error = '';

	$: filteredCountries = countries.filter(
		(country) =>
			country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
			country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
	);

	onMount(async () => {
		try {
			const manager = $countryStore;
			countries = await manager.getAllCountriesSimple();
			loading = false;
		} catch (err) {
			console.log(err);
			error = 'Failed to load countries';
			loading = false;
		}
	});
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Search Input -->
	<div class="max-w-xl mx-auto mb-8">
		<Input size="lg" placeholder="Search countries..." bind:value={searchTerm}>
			<SearchOutline slot="left" class="w-5 h-5 text-gray-500" />
		</Input>
	</div>

	{#if loading}
		<div class="flex justify-center items-center h-64">
			<Spinner size="12" />
		</div>
	{:else if error}
		<div class="text-center text-red-500">
			{error}
		</div>
	{:else}
		<!-- Country Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each filteredCountries as country (country.cca2)}
				<a
					href="/country/{country.cca2?.toLowerCase()}"
					class="transform hover:scale-105 transition-transform duration-200">
					<Card class="h-full flex flex-col items-center justify-center p-4">
						{#if country.flags?.png}
							<img
								src={country.flags.png}
								alt="{country.name.common} flag"
								class="w-32 h-20 object-cover mb-4 rounded shadow-sm" />
						{/if}
						<h3 class="text-md font-semibold text-center">
							{country.name.common}
						</h3>
					</Card>
				</a>
			{/each}
		</div>
	{/if}
</div>
