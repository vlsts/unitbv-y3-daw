<script>
	import { Card, Heading } from 'flowbite-svelte';
</script>

<div class="container mx-auto px-4 py-8">
	<div class="max-w-6xl mx-auto space-y-8">
		<!-- Project Overview -->
		<div class="flex justify-center">
			<Card class="text-center mb-8 w-full max-w-2xl">
				<Heading tag="h1" class="mb-4">Technologies Behind countryna.me</Heading>
			</Card>
		</div>

		<!-- Stack Cards Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
			<!-- Frontend Section -->
			<Card>
				<Heading tag="h2" class="mb-4 text-blue-600 dark:text-blue-500">Frontend Stack</Heading>
				<div class="flex flex-col items-center p-4">
					<img src="https://bun.sh/logo.svg" alt="Bun" class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">Bun</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">
						JavaScript runtime & toolkit
					</p>
				</div>
				<div class="flex flex-col items-center p-4">
					<img
						src="https://svelte.dev/svelte-logo-horizontal.svg"
						alt="SvelteKit"
						class="w-24 mb-2" />
					<h3 class="font-bold mb-1">Svelte + SvelteKit</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">Application framework</p>
				</div>
				<div class="flex flex-col items-center p-4 col-span-1 sm:col-span-2">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						alt="Flowbite"
						class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">Flowbite Svelte</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">
						UI component library + Icons
					</p>
				</div>
                <div class="flex flex-col items-center p-4 col-span-1 sm:col-span-2">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
						alt="Tailwind CSS"
						class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">Tailwind CSS</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">
						Easy component styling
					</p>
				</div>
			</Card>

			<!-- Backend Section - Unchanged -->
			<Card>
				<Heading tag="h2" class="mb-4 text-red-600 dark:text-red-500">Backend Stack</Heading>
				<div class="flex flex-col items-center p-4">
					<svg
						class="w-12 h-12 mb-2 text-gray-400"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
							fill="currentColor" />
					</svg>
					<h3 class="font-bold mb-1">None</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">
						Static site, no backend required
					</p>
				</div>
			</Card>

			<!-- DevOps Section -->
			<Card>
				<Heading tag="h2" class="mb-4 text-purple-600 dark:text-purple-500">
					DevOps & Infrastructure
				</Heading>
				<div class="flex flex-col items-center p-4">
					<img
						src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
						alt="Docker"
						class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">Docker</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">Containerization</p>
				</div>
				<div class="flex flex-col items-center p-4">
					<img
						src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
						alt="GitHub"
						class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">GitHub</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">
						Version control & hosting
					</p>
				</div>
				<div class="flex flex-col items-center p-4 col-span-1 sm:col-span-2">
					<img
						src="https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg"
						alt="GitHub Actions"
						class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">GitHub Actions</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">CI/CD pipeline</p>
				</div>
				<div class="flex flex-col items-center p-4 col-span-1 sm:col-span-2">
					<img
						src="https://iconape.com/wp-content/png_logo_vector/namecheap.png"
						alt="Namecheap"
						class="w-12 h-12 mb-2" />
					<h3 class="font-bold mb-1">Namecheap</h3>
					<p class="text-sm text-center text-gray-600 dark:text-gray-400">Domain registrar</p>
				</div>
			</Card>
		</div>
	</div>
</div>
