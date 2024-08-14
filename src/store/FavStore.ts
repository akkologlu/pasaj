import { Fav } from "@/types/cartType";
import { create } from "zustand";

type FavStore = {
  id: string | number;
  favs: Fav[];
  setFavs: (favs: Fav[]) => void;
};

export const useFavStore = create<FavStore>((set) => ({
  id: "",
  favs: [],
  setFavs: (favs: Fav[]) => set({ favs }),
}));
