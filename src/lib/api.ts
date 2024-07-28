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
