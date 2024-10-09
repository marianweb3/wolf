import { create } from "zustand";

interface CartStore {
  isOpen: boolean;
  toggleCart: () => void;

  quantity: number;
  selectedSize: string;
  selectedColor: string;

  setQuantity: (quantity: number) => void;
  setSelectedSize: (size: string) => void;
  setSelectedColor: (color: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
  isOpen: false,
  quantity: 1,
  selectedSize: "", // Initial state for selected size
  selectedColor: "", // Initial state for selected color

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  setQuantity: (quantity) => set(() => ({ quantity })),
  setSelectedSize: (size) => set(() => ({ selectedSize: size })),
  setSelectedColor: (color) => set(() => ({ selectedColor: color })),
}));

export default useCartStore;
