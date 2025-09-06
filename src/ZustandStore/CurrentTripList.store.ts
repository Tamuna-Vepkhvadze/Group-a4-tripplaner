import { create } from 'zustand';
import type { CountryType } from '../../src/Pages/ExplorePlaces/Interface';

interface TripState {
  tripCountries: CountryType[];
  addCountry: (country: CountryType) => void;
  removeCountry: (nameCommon: string) => void;
  clearAll: () => void;
}

export const useTripStore = create<TripState>((set) => ({
  tripCountries: JSON.parse(localStorage.getItem('country') || '[]'),
  
  addCountry: (country) =>
    set((state) => {
      // Prevent duplicates by name
      const exists = state.tripCountries.some(
        (c) => c.name.common === country.name.common
      );
      if (exists) return state;

      const updated = [...state.tripCountries, country];
      localStorage.setItem('country', JSON.stringify(updated));
      return { tripCountries: updated };
    }),

  removeCountry: (nameCommon: string) =>
    set((state) => {
      const updated = state.tripCountries.filter(
        (c) => c.name.common !== nameCommon
      );
      localStorage.setItem('country', JSON.stringify(updated));
      return { tripCountries: updated };
    }),

  clearAll: () =>
    set(() => {
      localStorage.removeItem('country');
      return { tripCountries: [] };
    }),
}));