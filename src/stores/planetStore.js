import { create } from "zustand";

const usePlanetStore = create((set) => ({
  planetNames: [],
  setPlanetNames: (data) => set({ planetNames: data }),
}));

export default usePlanetStore;
