import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// persist
// subscribeWithSelector
export const useCountStore = create(
  subscribeWithSelector(
    persist(
      immer<CountStore>((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 0 }),
      })),
      {
        name: "counter",
      }
    )
  )
);
