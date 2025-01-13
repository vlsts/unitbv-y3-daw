<script lang="ts">
	import { page } from '$app/state';
	import { type Country, CountryFetchingErrors } from '$lib/classes/CountryManager';
	import countryStore from '$lib/storage/countryStore';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import {
		Breadcrumb,
		BreadcrumbItem,
		Card,
		Badge,
		Tabs,
		TabItem,
		Button,
		ButtonGroup,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		Listgroup,
		ListgroupItem,
		Spinner
	} from 'flowbite-svelte';

	// usually not possible but can and will happen if the user messes with the url
	let loading = true;
	let error: CountryFetchingErrors | null = null;
	let country: Writable<Country | null> = writable(null);

	onMount(async () => {
		try {
			loading = true;
			let result = await $countryStore.getCountryByIdentifier(page.params.country);
			country.set(result);
			error = null;
		} catch (err) {
			error = err as CountryFetchingErrors;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="flex items-center justify-center min-h-screen">
		<Spinner size="12" />
	</div>
{:else if error === CountryFetchingErrors.NOT_FOUND}
	<div class="flex flex-col items-center justify-center min-h-screen">
		<h1 class="text-4xl font-bold mb-4">404 - Country Not Found</h1>
		<p class="text-gray-600 mb-4">The country you are looking for does not exist.</p>
		<ButtonGroup>
			<Button href="/search">Browse Countries</Button>
			<Button href="/" color="light">Go Home</Button>
		</ButtonGroup>
	</div>
{:else if error === CountryFetchingErrors.FAILED}
	<div class="flex flex-col items-center justify-center min-h-screen">
		<h1 class="text-4xl font-bold mb-4">Error Loading Country</h1>
		<p class="text-gray-600 mb-4">
			There was an error loading the country data. Please try again later.
		</p>
		<Button href="/search">Browse Countries</Button>
	</div>
{:else}
	<div class="container mx-auto px-4 py-8">
		<!-- Breadcrumb -->
		<Breadcrumb class="mb-6">
			<BreadcrumbItem href="/">Home</BreadcrumbItem>
			<BreadcrumbItem href="/search">Countries</BreadcrumbItem>
			<BreadcrumbItem>{$country!.name.common}</BreadcrumbItem>
		</Breadcrumb>

		<!-- Hero Section  -->
		<div class="relative h-64 mb-8 rounded-lg overflow-hidden">
			{#if $country!.flags?.png}
				<img
					src={$country!.flags.png}
					alt={`Flag of ${$country!.name.common}`}
					class="w-full h-full object-cover filter blur-sm opacity-50" />
			{/if}
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="text-center">
					<h1 class="text-4xl font-bold mb-4 dark:text-gray-white">
						{$country!.name.common}
					</h1>
					<div class="flex gap-2 justify-center">
						{#if $country!.population}
							<Badge color="blue">Population: {$country!.population.toLocaleString()}</Badge>
						{/if}
						{#if $country!.region}
							<Badge color="green">Region: {$country!.region}</Badge>
						{/if}
						{#if $country!.capital}
							<Badge color="red">Capital: {$country!.capital[0]}</Badge>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<!-- Main Content -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- General Information -->
			<Card>
				<h2 class="text-2xl font-bold mb-4">General Information</h2>
				<Listgroup>
					<ListgroupItem>Official Name: {$country!.name.official}</ListgroupItem>
					{#if $country!.languages}
						<ListgroupItem>
							Languages: {Object.values($country!.languages).join(', ')}
						</ListgroupItem>
					{/if}
					{#if $country!.currencies}
						<ListgroupItem>
							Currencies:
							{Object.entries($country!.currencies)
								.map(([code, curr]) => `${curr.name} (${curr.symbol})`)
								.join(', ')}
						</ListgroupItem>
					{/if}
				</Listgroup>
			</Card>

			<!-- Geographic Data -->
			<Card>
				<h2 class="text-2xl font-bold mb-4">Geographic Data</h2>
				<Table>
					<TableBody>
						{#if $country!.latlng}
							<TableBodyRow>
								<TableBodyCell>Coordinates</TableBodyCell>
								<TableBodyCell>{$country!.latlng.join(', ')}</TableBodyCell>
							</TableBodyRow>
						{/if}
						{#if $country!.area}
							<TableBodyRow>
								<TableBodyCell>Area</TableBodyCell>
								<TableBodyCell>{$country!.area.toLocaleString()} km²</TableBodyCell>
							</TableBodyRow>
						{/if}
						{#if $country!.continents}
							<TableBodyRow>
								<TableBodyCell>Continents</TableBodyCell>
								<TableBodyCell>{$country!.continents.join(', ')}</TableBodyCell>
							</TableBodyRow>
						{/if}
						{#if $country!.landlocked !== undefined}
							<TableBodyRow>
								<TableBodyCell>Landlocked</TableBodyCell>
								<TableBodyCell>{$country!.landlocked ? 'Yes' : 'No'}</TableBodyCell>
							</TableBodyRow>
						{/if}
					</TableBody>
				</Table>

				{#if $country!.maps}
					<div class="flex justify-center mt-4">
						<ButtonGroup>
							<Button href={$country!.maps.googleMaps} target="_blank">Google Maps</Button>
							<Button href={$country!.maps.openStreetMaps} target="_blank" color="light">
								OpenStreetMap
							</Button>
						</ButtonGroup>
					</div>
				{/if}
			</Card>

			<!-- Transportation & Communication -->
			<Card>
				<h2 class="text-2xl font-bold mb-4">Transportation & Communication</h2>
				<Table>
					<TableBody>
						{#if $country!.car}
							<TableBodyRow>
								<TableBodyCell>Driving Side</TableBodyCell>
								<TableBodyCell class="capitalize">{$country!.car.side}</TableBodyCell>
							</TableBodyRow>
							{#if $country!.car.signs && $country!.car.signs.length > 0}
								<TableBodyRow>
									<TableBodyCell>Vehicle Signs</TableBodyCell>
									<TableBodyCell>{$country!.car.signs.join(', ')}</TableBodyCell>
								</TableBodyRow>
							{/if}
						{/if}
						{#if $country!.timezones}
							<TableBodyRow>
								<TableBodyCell>Timezones</TableBodyCell>
								<TableBodyCell>{$country!.timezones.join(', ')}</TableBodyCell>
							</TableBodyRow>
						{/if}
						{#if $country!.idd}
							<TableBodyRow>
								<TableBodyCell>Calling Code</TableBodyCell>
								<TableBodyCell>
									{$country!.idd.root}{$country!.idd.suffixes.join(', ')}
								</TableBodyCell>
							</TableBodyRow>
						{/if}
					</TableBody>
				</Table>
			</Card>

			<!-- Administrative Info -->
			<Card>
				<h2 class="text-2xl font-bold mb-4">Administrative Info</h2>
				<Tabs>
					<TabItem open title="Identity">
						<Listgroup>
							{#if $country!.cca2}
								<ListgroupItem>CCA2: {$country!.cca2}</ListgroupItem>
							{/if}
							{#if $country!.cca3}
								<ListgroupItem>CCA3: {$country!.cca3}</ListgroupItem>
							{/if}
							{#if $country!.tld}
								<ListgroupItem>TLD: {$country!.tld.join(', ')}</ListgroupItem>
							{/if}
						</Listgroup>
					</TabItem>
					<TabItem title="Status">
						<Listgroup>
							{#if $country!.independent !== undefined}
								<ListgroupItem>
									Independent: {$country!.independent ? 'Yes' : 'No'}
								</ListgroupItem>
							{/if}
							{#if $country!.unMember !== undefined}
								<ListgroupItem>
									UN Member: {$country!.unMember ? 'Yes' : 'No'}
								</ListgroupItem>
							{/if}
						</Listgroup>
					</TabItem>
				</Tabs>
			</Card>

			<!-- flag / coat of arms -->
			{#if $country!.flags || $country!.coatOfArms}
				<Card>
					<h2 class="text-2xl font-bold mb-4">National Symbols</h2>
					<div class="grid grid-cols-2 gap-4">
						{#if $country!.flags?.png}
							<img
								src={$country!.flags.png}
								alt="National Flag"
								class="w-full h-48 object-contain" />
						{/if}
						{#if $country!.coatOfArms?.png}
							<img
								src={$country!.coatOfArms.png}
								alt="Coat of Arms"
								class="w-full h-48 object-contain" />
						{/if}
					</div>
				</Card>
			{/if}
		</div>
	</div>
{/if}
