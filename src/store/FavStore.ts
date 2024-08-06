import { create } from "zustand";

type FavStore = {
  id: string | number;
  favs: any[];
  setFavs: (favs: string[]) => void;
  deleteFav: (id: string | number) => void;
  addFav: (id: string | number) => void;
};

export const useFavStore = create<FavStore>((set) => ({
  id: "",
  favs: [],
  setFavs: (favs: string[]) => set({ favs }),
  deleteFav: (id: string | number) =>
    set((state: FavStore) => ({
      favs: state.favs.filter((fav) => fav !== id),
    })),
  addFav: (id: string | number) =>
    set((state: FavStore) => ({ favs: [...state.favs, id] })),
}));
