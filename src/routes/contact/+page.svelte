<script>
	import { Avatar, Card, ButtonGroup, Button, Heading, P } from 'flowbite-svelte';
</script>

<div class="container mx-auto px-4 flex items-center justify-center h-full">
	<Card class="text-center w-full max-w-2xl">
		<!-- Profile Section -->
		<div class="flex flex-col items-center space-y-4">
			<Avatar
				src="https://avatars.githubusercontent.com/u/26856087?v=4"
				alt="Profile picture"
				class="w-32 h-32" />
			<Heading tag="h1">Vlad-Stefan Sas</Heading>
			<a href="mailto:me@vlad.pm" class="text-blue-600 dark:text-blue-400 hover:underline">
				me@vlad.pm
			</a>
		</div>

		<!-- About Section -->
		<div class="flex flex-col items-center text-left my-4">
			<P>DevOps / Cybersecurity Passionate</P>
		</div>

		<!-- Social Links -->
		<div class="flex justify-center">
			<ButtonGroup>
				<Button href="https://github.com/vlsts" target="_blank">GitHub Profile</Button>
				<Button href="https://github.com/vlsts/countryname" target="_blank" color="purple">
					Repository
				</Button>
				<Button href="https://linkedin.com/in/vlsts" target="_blank" color="blue">LinkedIn</Button>
			</ButtonGroup>
		</div>
	</Card>
</div>
