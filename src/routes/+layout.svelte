<script lang="ts">
	import "../app.css";
	let { children } = $props();

	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';

</script>

<Navbar>
	<NavBrand href="/">
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>CountryName</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">Search</NavLi>
		<NavLi href="/docs/components/navbar">Info</NavLi>
	</NavUl>
</Navbar>

{@render children()}
