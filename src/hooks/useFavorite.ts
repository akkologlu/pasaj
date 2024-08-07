import { useState, useEffect } from "react";
import { useFavStore } from "@/store/FavStore";
import { updateFavs } from "@/lib/api";
import { useSession } from "next-auth/react";

const useFavorite = (product: any) => {
  const { data: session } = useSession();
  const { favs, setFavs } = useFavStore();
  const [isFav, setIsFav] = useState(false);

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
      await updateFavs({
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
