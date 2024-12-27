import { writable } from "svelte/store";

function fetchCountries(): Promise<object[]> {
    return fetch("https://restcountries.com/v3.1/all?fields=name")
        .then(response => response.json())
}

let countries = writable<object[]>();

export function init() {
    fetchCountries()
        .then(countriesJSON => {
            countries.set(countriesJSON)
        })
}

export default countries;