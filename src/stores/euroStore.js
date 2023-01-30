import { create } from "zustand";
import produce from "immer";

const limit = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
      if (get().euro > 10) {
        return set((state) => (state.euro = 10));
      }
      if (get().euro < 0) {
        return set((state) => (state.euro = 0));
      }
    },
    get,
    api
  );

// Turn the set method into an immer proxy
const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

const useEuroStore = create(
  limit(
    immer((set) => ({
      euro: 0,
      increaseEuro: () => set((state) => void (state.euro = state.euro + 1)),
      decreaseEuro: () => set((state) => void (state.euro = state.euro - 1)),
    }))
  )
);

export default useEuroStore;
