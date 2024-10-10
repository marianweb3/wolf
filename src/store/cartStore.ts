import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  img: string;
  title: string;
  price: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

interface CartStore {
  isOpen: boolean;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  cartItems: CartItem[];
  toggleCart: () => void;
  setQuantity: (quantity: number) => void;
  setSelectedSize: (size: string) => void;
  setSelectedColor: (color: string) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateItemQuantity: (index: number, quantity: number) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      isOpen: false,
      quantity: 1,
      selectedSize: "",
      selectedColor: "",
      cartItems: [],
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      setQuantity: (quantity) => set({ quantity }),
      setSelectedSize: (size) => set({ selectedSize: size }),
      setSelectedColor: (color) => set({ selectedColor: color }),
      addToCart: (newItem) =>
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (item) =>
              item.title === newItem.title &&
              item.selectedSize === newItem.selectedSize &&
              item.selectedColor === newItem.selectedColor
          );

          if (existingItemIndex !== -1) {
            const updatedItems = [...state.cartItems];
            updatedItems[existingItemIndex].quantity += newItem.quantity;
            return { cartItems: updatedItems };
          } else {
            return { cartItems: [...state.cartItems, newItem] };
          }
        }),
      removeFromCart: (index) =>
        set((state) => ({
          cartItems: state.cartItems.filter((_, i) => i !== index),
        })),
      updateItemQuantity: (index, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item, i) =>
            i === index ? { ...item, quantity } : item
          ),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
