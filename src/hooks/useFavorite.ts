import { useState, useEffect } from "react";
import { useFavStore } from "@/store/FavStore";
import { updateFavs } from "@/lib/api";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Product } from "@/types/productType";

const useFavorite = (product: Product) => {
  const { data: session } = useSession();
  const { favs, setFavs } = useFavStore();
  const [isFav, setIsFav] = useState(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateFavs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favs"] });
    },
    onMutate: ({ favData }) => {
      const prevFavs = favs;
      setFavs(favData.fav);
      return { prevFavs };
    },
    onError: () => {
      toast.error("Favoriler güncellenirken bir hata oluştu!");
    },
  });
  useEffect(() => {
    const favStatus = favs.some((fav) => fav.id === product.id);
    setIsFav(favStatus);
  }, [favs, product.id]);

  const handleFav = () => {
    if (!session) {
      return toast.error(
        "Favorilere ekleme yapabilmek için giriş yapmalısınız."
      );
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
    mutate({
      userId: session.user.id,
      favData: { fav: updatedFavs },
    });
  };

  return {
    isFav,
    handleFav,
  };
};

export default useFavorite;
