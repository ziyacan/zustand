import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "count-storage",
      getStorage: () => localStorage,
    }
  )
);

const unsubscribe = useCounterStore.subscribe(
  (newValue, oldValue) => {
    console.log("new value", newValue);
    console.log("old value", oldValue);
  },
  (state) => {
    return state.count;
  }
);

export default useCounterStore;
