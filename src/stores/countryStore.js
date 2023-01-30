import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCountryStore = create(
  persist(
    (set) => ({
      country: "Turkey",
      setCountry: (country) => set({ country }),
    }),
    {
      name: "country",
      getStorage: () => localStorage,
    }
  )
);

export default useCountryStore;
