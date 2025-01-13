export default class CountryManager {
    private countries: Country[] = [];

    constructor() { }

    async getAllCountriesSimple(): Promise<Country[]> {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags');
            if (!response.ok) throw CountryFetchingErrors.FAILED;
            this.countries = await response.json();

            // Sort countries by common name
            this.countries.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );

            return this.countries;
        } catch (error) {
            console.error(error);
            throw CountryFetchingErrors.FAILED;
        }
    }

    async getCountryByIdentifier(identifier: string): Promise<Country> {
        const lowerIdentifier = identifier.toLowerCase();
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${lowerIdentifier}`);
            if (response.status === 404) {
                throw CountryFetchingErrors.NOT_FOUND;
            }
            if (!response.ok) {
                throw CountryFetchingErrors.FAILED;
            }
            const countries = await response.json();
            return countries[0];
        } catch (error) {
            if (error === CountryFetchingErrors.NOT_FOUND) {
                throw CountryFetchingErrors.NOT_FOUND;
            }
            throw CountryFetchingErrors.FAILED;
        }
    }
}

export enum CountryFetchingErrors {
    NOT_FOUND = "NOT_FOUND",
    FAILED = "FAILED",
    LOADING = "LOADING"
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
    tld?: string[];
    cca2?: string;
    ccn3?: string;
    cca3?: string;
    independent?: boolean;
    status?: string;
    unMember?: boolean;
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd?: {
        root: string;
        suffixes: string[];
    };
    capital?: string[];
    altSpellings?: string[];
    region?: string;
    languages?: {
        [key: string]: string;
    };
    translations?: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng?: number[];
    landlocked?: boolean;
    area?: number;
    demonyms?: {
        eng: {
            f: string;
            m: string;
        };
    };
    flag?: string;
    maps?: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population?: number;
    car?: {
        signs: string[];
        side: string;
    };
    timezones?: string[];
    continents?: string[];
    flags?: {
        png: string;
        svg: string;
    };
    coatOfArms?: {
        png: string;
        svg: string;
    };
    startOfWeek?: string;
    capitalInfo?: {
        latlng: number[];
    };
};