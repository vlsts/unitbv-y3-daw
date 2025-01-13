<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, DarkMode } from 'flowbite-svelte';
</script>

<div class="h-screen flex flex-col">
	<Navbar>
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				countryna.me
			</span>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/search">Search</NavLi>
			<NavLi href="/appinfo">App Info</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
		<div class="flex md:order-2">
			<DarkMode />
		</div>
	</Navbar>
	<div class="flex-grow dark:bg-gray-900">
		{@render children()}
	</div>
</div>
