import { create } from "zustand";

interface SearchStore {
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  page: 1,
  limit: 3,
  setPage: (page) => set(() => ({ page })),
  setLimit: (limit) => set(() => ({ limit })),
}));

export default useSearchStore;
