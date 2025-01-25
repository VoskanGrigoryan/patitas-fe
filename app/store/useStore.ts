import { create } from 'zustand';

interface StoreState {
  path: string;
  setPath: (newPath: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  path: "/",
  setPath: (newPath) => set({ path: newPath }),
}));
