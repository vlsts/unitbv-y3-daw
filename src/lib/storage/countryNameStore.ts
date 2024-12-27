import { writable } from "svelte/store";

async function fetchCountries(): Promise<object[]> {
    let result = (await fetch("https://restcountries.com/v3.1/all?fields=name")).json()

    return result;
}

let countries = writable(await fetchCountries());

export default countries;