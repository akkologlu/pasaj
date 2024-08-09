import { useState, useEffect } from "react";
import { useFavStore } from "@/store/FavStore";
import { updateFavs } from "@/lib/api";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useFavorite = (product: any) => {
  const { data: session } = useSession();
  const { favs, setFavs } = useFavStore();
  const [isFav, setIsFav] = useState(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateFavs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favs"] });
    },
    onMutate: async ({ favData }) => {
      const prevFavs = favs;
      setFavs(favData.fav);
      return { prevFavs };
    },
  });
  useEffect(() => {
    const favStatus = favs.some((fav) => fav.id === product.id);
    setIsFav(favStatus);
  }, [favs, product.id]);

  const handleFav = async () => {
    if (!session) {
      return alert("Favorilere eklemek için giriş yapmalısınız.");
    }
    const updatedFavs = isFav
      ? favs.filter((fav) => fav.id !== product.id)
      : [
          ...favs,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            discountPrice: product.discountPrice,
            images: product.images,
          },
        ];
    setFavs(updatedFavs);
    setIsFav(!isFav);
    try {
      mutate({
        userId: session.user.id,
        favData: { fav: updatedFavs },
      });
    } catch (error) {
      console.error("Failed to update favorites on server:", error);
      setFavs(isFav ? [...favs, { ...product }] : updatedFavs);
      setIsFav(isFav);
    }
  };

  return {
    isFav,
    handleFav,
  };
};

export default useFavorite;
