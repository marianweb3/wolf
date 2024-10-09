import { create } from "zustand";

interface Filters {
  minPrice: number;
  maxPrice: number;
  selectedSizes: string[];
  selectedColors: string[];
}

interface FiltersStore {
  isOpen: boolean;
  toggleMenu: () => void;

  filters: Filters; // New filters object

  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;

  selectedColors: string[];
  toggleColor: (id: string) => void;

  selectedSizes: string[];
  toggleSize: (size: string) => void;

  sortOption: string | null;
  setSortOption: (option: string | null) => void;

  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;

  setFilters: (filters: Filters) => void; // New function to set filters
}

const useFiltersStore = create<FiltersStore>((set) => ({
  isOpen: false,
  minPrice: 0,
  maxPrice: 17000, // Initial default values
  selectedColors: [],
  selectedSizes: [],
  sortOption: null,
  page: 1,
  limit: 2,

  filters: {
    minPrice: 0,
    maxPrice: 17000, // Initial default values
    selectedColors: [],
    selectedSizes: [],
  },

  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setMinPrice: (value) => set(() => ({ minPrice: value })),
  setMaxPrice: (value) => set(() => ({ maxPrice: value })),
  toggleColor: (id: string) =>
    set((state) => {
      const isSelected = state.selectedColors.includes(id);
      const updatedColors = isSelected
        ? state.selectedColors.filter((colorId) => colorId !== id)
        : [...state.selectedColors, id];
      return { selectedColors: updatedColors };
    }),
  toggleSize: (size: string) =>
    set((state) => {
      const isSelected = state.selectedSizes.includes(size);
      const updatedSizes = isSelected
        ? state.selectedSizes.filter((s) => s !== size)
        : [...state.selectedSizes, size];
      return { selectedSizes: updatedSizes };
    }),
  setSortOption: (option) => set({ sortOption: option }),
  setPage: (page) => set(() => ({ page })),
  setLimit: (limit) => set(() => ({ limit })),

  // New function to set filters
  setFilters: (filters) => set(() => ({ filters })),
}));

export default useFiltersStore;
