import { create } from "zustand";
import { FormValues } from "@/pages/checkout/ui/form-layout";
import { CartItem } from "@/store/cartStore";

// Define the combined state
interface OrderState {
  order: {
    formValues: FormValues;
    cartItems: CartItem[];
    paymentType: string;
  };
  setOrder: (newOrder: Partial<OrderState["order"]>) => void;
}

// Initialize the store with Zustand
const useOrderStore = create<OrderState>((set) => ({
  // Initial state
  order: {
    formValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      city: "",
      region: "",
      postal_code: "",
    },
    cartItems: [],
    paymentType: "", // e.g., "credit card", "paypal", etc.,
  },

  // Method to update the order state
  setOrder: (newOrder) =>
    set((state) => ({
      order: {
        ...state.order,
        ...newOrder,
      },
    })),
}));

export default useOrderStore;
