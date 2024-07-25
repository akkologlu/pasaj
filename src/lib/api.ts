export const fetchProducts = async (slug: string[]) => {
  const baseUrl = `http://localhost:3001/products?categoryUrl=${slug[0]}`;
  const url = slug[1] ? `${baseUrl}&subcategoryUrl=${slug[1]}` : baseUrl;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchPopularCategories = async () => {
  const res = await fetch("http://localhost:3001/popularCategories");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchShowcaseProducts = async (subUrl: string) => {
  const res = await fetch(`http://localhost:3001/${subUrl}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
