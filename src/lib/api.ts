import { Cart, User } from "@/types/cartType";
import { Product } from "@/types/productType";

export const fetchProducts = async (slug: string[]) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_DB_URL}/products?categoryUrl=${slug[0]}`;
  const url = slug[1] ? `${baseUrl}&subcategoryUrl=${slug[1]}` : baseUrl;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
export const fetchAllProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/products`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
export const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
export const fetchPopularCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/popularCategories`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchShowcaseProducts = async (subUrl: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/${subUrl}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchBestSellersCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/bestSellersCategories`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchNavBottomCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/navBottomCategories`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchSearchProducts = async (search: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/products?q=${search}`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const addUser = async (data: User) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const getUser = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchUserCart = async (id: string) => {
  const user = await getUser(id);
  return user.cart;
};

export const addToCart = async ({
  userId,
  cartData,
}: {
  userId: string;
  cartData: Cart[];
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: cartData }),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
export const updateProduct = async ({
  id,
  data,
}: {
  id: string | number;
  data: Product;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
export const fetchFavs = async (id: string) => {
  const user = await getUser(id);
  return user.fav;
};
export const updateFavs = async ({
  userId,
  favData,
}: {
  userId: string;
  favData: any;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(favData),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
