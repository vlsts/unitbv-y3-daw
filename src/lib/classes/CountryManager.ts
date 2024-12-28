export default class CountryManager {
    private countries!: Country[];

    constructor() { }

    getAllCountries(): Country[] {
        return this.countries;
    }

    async getCountryByIdentifier(identifier: string): Promise<Country> {
        const lowerIdentifier = identifier.toLowerCase();

        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${lowerIdentifier}`);
            const countryJSON = await response.json();

            if (response.status !== 200) {
                throw CountryFetchingErrors.NOT_FOUND;
            }

            return countryJSON[0];
        } catch (error) {
            if (error === CountryFetchingErrors.NOT_FOUND) {
                throw CountryFetchingErrors.NOT_FOUND;
            }

            throw CountryFetchingErrors.FAILED;
        }
    }
}

export enum CountryFetchingErrors {
    NOT_FOUND,
    FAILED
}

export type Country = {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    languages: {
        [key: string]: string;
    };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: {
        eng: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
    };
    coatOfArms: object;
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
};