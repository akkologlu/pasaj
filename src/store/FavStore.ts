import { create } from "zustand";

type FavStore = {
  id: string | number;
  favs: any[];
  setFavs: (favs: string[]) => void;
};

export const useFavStore = create<FavStore>((set) => ({
  id: "",
  favs: [],
  setFavs: (favs: string[]) => set({ favs }),
}));
