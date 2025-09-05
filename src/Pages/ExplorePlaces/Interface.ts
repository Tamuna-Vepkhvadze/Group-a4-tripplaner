
export interface CountryType {


    name: {
        common: string;
        official: string;
    };
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    continents: string[];
    
    capital?: string[];
    population: number;
    area: number;
    currencies: {
        [key: string]: {
        name: string;
        symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
    timezones: string[];
    region: string;
    subregion: string;
}

export interface rowData {
    id:string,
    data:CountryType,
    resource: string,
    updatedAt:string,
    createdAt: string,
}

export interface fatchData extends CountryType{
    id:string,
}

export interface sentDataType {
    cardsname:string,
    cardData:CountryType[]
}

export interface DataType {
  id: string;
  resource: string;
  time: string;
  cardsname: string;
  cardData: CountryType[];
}
export interface countryrowdata {
    id:string,
    data:sentDataType,
    resource: string,
    updatedAt:string,
    createdAt: string,
}
