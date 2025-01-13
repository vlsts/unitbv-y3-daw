<script>
	import { Button, Card } from 'flowbite-svelte';
	import { DownloadOutline, InfoCircleOutline, SearchOutline } from 'flowbite-svelte-icons';
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<!-- Hero Section -->
	<div class="container mx-auto px-4 py-16">
		<div class="text-center mb-16">
			<h1 class="text-4xl font-bold mb-4 dark:text-white">Welcome to countryna.me</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
				Your comprehensive guide to exploring countries worldwide. Access detailed information about
				geography, demographics, and cultural aspects of nations across the globe.
			</p>
		</div>

		<!-- Navigation -->
		<div class="flex flex-wrap justify-center gap-4 mb-16">
			<Button href="/search" size="xl" color="blue">
				<SearchOutline class="w-5 h-5 mr-2" />
				Search Countries
			</Button>
			<Button href="/appinfo" size="xl" color="purple">
				<InfoCircleOutline class="w-5 h-5 mr-2" />
				App Information
			</Button>
			<Button href="/contact" size="xl" color="green">
				<DownloadOutline class="w-5 h-5 mr-2" />
				Contact
			</Button>
		</div>

		<!-- Features -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
			<Card>
				<h3 class="text-xl font-bold mb-2">Comprehensive Data</h3>
				<p>
					Access detailed information about countries including demographics, geography, economics,
					and more.
				</p>
			</Card>
			<Card>
				<h3 class="text-xl font-bold mb-2">Easy Search</h3>
				<p>Find countries by using the search page.</p>
			</Card>
			<Card>
				<h3 class="text-xl font-bold mb-2">Visual Information</h3>
				<p>View flags, coat of arms, and locations on Google Maps or OpenStreetMap.</p>
			</Card>
		</div>

		<!-- How to Use -->
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-2xl font-bold mb-4 dark:text-white">How to Use</h2>
			<div class="text-left space-y-4">
				<p class="dark:text-gray-400">
					1. Use the search button to find a specific country by name
				</p>
				<p class="dark:text-gray-400">2. Browse the complete country list to explore all nations</p>
				<p class="dark:text-gray-400">3. View detailed information including:</p>
				<ul class="list-disc list-inside pl-4 dark:text-gray-400">
					<li>Official names and languages</li>
					<li>Geographic data and population</li>
					<li>Currency and economic information</li>
					<li>Regional and continental affiliations</li>
				</ul>
			</div>
		</div>
	</div>
</div>
