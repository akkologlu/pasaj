import { useQuery } from "@tanstack/react-query";
import {
  fetchAllProducts,
  fetchBestSellersCategories,
  fetchFavs,
  fetchNavBottomCategories,
  fetchPopularCategories,
  fetchProduct,
  fetchProducts,
  fetchSimilarProducts,
  fetchUserCart,
} from "@/lib/api";

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

export const useFetchSimilarProducts = (category: string) => {
  return useQuery({
    queryKey: ["similarProducts", category],
    queryFn: () => fetchSimilarProducts(category),
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
    queryKey: ["cart"],
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
    queryKey: ["favs"],
    queryFn: () => fetchFavs(userId),
    enabled: !!userId,
  });
};

export const useFetchProduct = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });
};
