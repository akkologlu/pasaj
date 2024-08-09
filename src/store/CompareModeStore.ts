import { Product } from "@/types/productType";
import { create } from "zustand";

type CompareModeStore = {
  compareMode: boolean;
  setCompareMode: (compareMode: boolean) => void;
  compareProducts: Product[];
  checkInStore: (productId: string | number) => boolean;
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string | number) => void;
  removeAllFromCompare: () => void;
};

export const useCompareModeStore = create<CompareModeStore>((set, get) => ({
  compareMode: false,
  compareProducts: [],
  setCompareMode: (compareMode: boolean) => set({ compareMode }),
  checkInStore: (productId: string | number) => {
    return get().compareProducts.some((product) => product.id === productId);
  },
  addToCompare: (product: Product) =>
    set((state) => ({
      compareProducts: [...state.compareProducts, product],
    })),
  removeFromCompare: (productId: string | number) =>
    set((state) => ({
      compareProducts: state.compareProducts.filter(
        (product) => product.id !== productId
      ),
    })),
  removeAllFromCompare: () => set({ compareProducts: [] }),
}));
