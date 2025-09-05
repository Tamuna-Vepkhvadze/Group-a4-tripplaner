import React from 'react'
import type { CountryType } from '../../Pages/ExplorePlaces/Interface'
import ListItem from './ListItem'
import { AreaIcon, CapitalIcon, ContinentsIcon, CurrencyIcon, LanguagesIcon, MapPinIcon, PeopleIcon, TimezonesIcon } from './ListIcons';



const CountryInfoDiv:React.FC<CountryType> = ({area,continents,currencies,languages,population,capital,timezones,region, subregion}) => {
  
const capitalStr = Array.isArray(capital) ? capital.join(", ") : "N/A";
const currencyStr = currencies
  ? Object.values(currencies)
      .map((c) => `${c.name} (${c.symbol})`)
      .join(", ")
  : "N/A";
const languageStr = languages
  ? Object.values(languages).join(", ")
  : "N/A";
const continentStr = Array.isArray(continents) ? continents.join(", ") : "N/A";
const timezonesStr = timezones?.length ? timezones.join(", ") : "N/A";
const populationStr = population ? population.toLocaleString() : "N/A";
const areaStr = area ? area.toLocaleString() + " km²" : "N/A";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <ListItem icon={<MapPinIcon/>} label="Region" value={`${region}, ${subregion}`} />   
        <ListItem icon={<CapitalIcon/>} label="Capital" value={capitalStr} />
        <ListItem icon={<PeopleIcon />} label="Population" value={populationStr} />
        <ListItem icon={<AreaIcon/>} label="Area" value={areaStr} />
      </div>
      <div className="space-y-4">
        <ListItem icon={<CurrencyIcon/>} label="Currency" value={currencyStr} />
        <ListItem icon={<LanguagesIcon/>} label="Languages" value={languageStr} />
        <ListItem icon={<TimezonesIcon/>} label="Timezones" value={timezonesStr} />
        <ListItem icon={<ContinentsIcon/>} label="Continent" value={continentStr} />
      </div>
    </div>
  );
};


export default CountryInfoDiv
