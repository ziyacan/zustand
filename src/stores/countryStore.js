import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useCountryStore = create(
  devtools(
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
  )
);

export default useCountryStore;
