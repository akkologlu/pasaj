import Campaigns from "@/components/homepage/Campaigns";
import Landing from "@/components/homepage/Landing";
import PopularCategories from "@/components/homepage/PopularCategories";
import Showcase from "@/components/homepage/Showcase";
import WhyPasaj from "@/components/homepage/WhyPasaj";
import {
  fetchAllProducts,
  fetchBestSellersCategories,
  fetchNavBottomCategories,
  fetchPopularCategories,
} from "@/lib/api";
import { StyledContainer } from "@/styles/styled";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import BlueBanner from "@/components/homepage/BlueBanner";
import BestSellers from "@/components/homepage/BestSellers";
import { opps } from "@/lib/mockData";
import { Product } from "@/types/productType";
import { useFetchAllProducts } from "@/hooks/useDataFetching";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  const queries = [
    queryClient.prefetchQuery({
      queryKey: ["popularCategories"],
      queryFn: fetchPopularCategories,
    }),
    queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: fetchAllProducts,
    }),
    queryClient.prefetchQuery({
      queryKey: ["bestSellersCategories"],
      queryFn: fetchBestSellersCategories,
    }),
    queryClient.prefetchQuery({
      queryKey: ["navBottomCategories"],
      queryFn: fetchNavBottomCategories,
    }),
  ];
  await Promise.all(queries);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { data } = useFetchAllProducts();
  return (
    <>
      <Head>
        <title>Pasaj</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        <StyledContainer>
          <PopularCategories />
          <Showcase
            title="Sana Özel Ürünler"
            data={data.filter((product: Product) => product.specialForYou)}
            details={false}
          />
          <BlueBanner />
          <Showcase
            title="En İyi Teklifler"
            data={data.filter((product: Product) => product.bestOffers)}
          />
          <Campaigns />
          <BestSellers />
          <Showcase
            title="Kaçırılmayacak Fırsatlar"
            data={opps}
            isProductsCard={false}
          />
          <Showcase
            title="Pasaj'ın Yenileri"
            data={data.filter((product: Product) => product.newProduct)}
          />
        </StyledContainer>
        <WhyPasaj />
      </main>
    </>
  );
}
