import { create } from "zustand";

interface FiltersStore {
  isOpen: boolean;
  toggleMenu: () => void;
}

const useFiltersStore = create<FiltersStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useFiltersStore;
