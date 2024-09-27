import { create } from "zustand";

interface CartStore {
  isOpen: boolean;
  toggleCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  isOpen: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useCartStore;
