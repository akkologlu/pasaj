import { Product } from "@/types/productType";
import { create } from "zustand";

interface CartState {
  cartItems: Product[];
  addItemToCart: (item: Product) => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],

  addItemToCart: (item) => {
    set({ cartItems: [...get().cartItems, { ...item }] });
  },
}));

export default useCartStore;
