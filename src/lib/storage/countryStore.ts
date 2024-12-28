import CountryManager from "$lib/classes/CountryManager";
import { writable } from "svelte/store";

let countryStore = writable<CountryManager>(new CountryManager());

export default countryStore;