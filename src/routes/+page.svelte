<script>
    import { Button, Kbd } from "flowbite-svelte";
</script>

<div class="h-full flex flex-col justify-center items-center">
    <div class="max-w-md my-10">
        <Kbd class="px-2 py-1.5">countryna.me</Kbd> is a simple web app that provides
        information about countries. You can search for a country by its name or
        by its regional name. Click on the button below to get started.
    </div>
    <Button href="/search" class="my-10">Search</Button>
</div>
