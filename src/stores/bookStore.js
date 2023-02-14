import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBookStore = create(
  persist(
    (set, get) => ({
      amount: 0,
      updateAmount: (newAmount) => {
        const amountState = get().amount;

        set({ amount: newAmount + amountState });
      },
    }),
    {
      name: "book-storage",
      getStorage: () => localStorage,
    }
  )
);

const unsubscribe = useBookStore.subscribe(
  (newValue, oldValue) => {
    console.log("new value", newValue);
    console.log("old value", oldValue);
  },
  (state) => {
    return state.count;
  }
);

export default useBookStore;
