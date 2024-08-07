import { useQuery } from "@tanstack/react-query";
import {
  fetchAllProducts,
  fetchBestSellersCategories,
  fetchFavs,
  fetchNavBottomCategories,
  fetchPopularCategories,
  fetchProduct,
  fetchProducts,
  fetchUserCart,
} from "@/lib/api";

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

export const useFetchBestSellersCategories = () => {
  return useQuery({
    queryKey: ["bestSellersCategories"],
    queryFn: fetchBestSellersCategories,
  });
};

export const useFetchNavBottomCategories = () => {
  return useQuery({
    queryKey: ["navBottomCategories"],
    queryFn: fetchNavBottomCategories,
  });
};

export const useFetchPopularCategories = () => {
  return useQuery({
    queryKey: ["popularCategories"],
    queryFn: fetchPopularCategories,
  });
};

export const useFetchUserCart = (userId: string) => {
  return useQuery({
    queryKey: ["userCart", userId],
    queryFn: () => fetchUserCart(userId),
    enabled: !!userId,
  });
};

export const useFetchProducts = (slug: string[]) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });
};

export const useFetchFavs = (userId: string) => {
  return useQuery({
    queryKey: ["favs", userId],
    queryFn: () => fetchFavs(userId),
    enabled: !!userId,
  });
};

export const useFetchProduct = (productId: string) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProduct(productId),
  });
};
