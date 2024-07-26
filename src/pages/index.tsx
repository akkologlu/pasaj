import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import Campaigns from "@/components/homepage/Campaigns";
import Landing from "@/components/homepage/Landing";
import PopularCategories from "@/components/homepage/PopularCategories";
import Showcase from "@/components/homepage/Showcase";
import WhyPasaj from "@/components/homepage/WhyPasaj";
// import SpecialForYou from "@/components/homepage/SpecialForYou";
import {
  fetchAllProducts,
  fetchBestSellersCategories,
  fetchNavBottomCategories,
  fetchPopularCategories,
  // fetchShowcaseProducts,
} from "@/lib/api";
import { StyledContainer } from "@/styles/styled";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";
import BlueBanner from "@/components/homepage/BlueBanner";
import BestSellers from "@/components/homepage/BestSellers";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await Promise.all([
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
    // queryClient.prefetchQuery({
    //   queryKey: ["bestOffers"],
    //   queryFn: () => fetchShowcaseProducts("bestOffers"),
    // }),
    // queryClient.prefetchQuery({
    //   queryKey: ["newOnPasaj"],
    //   queryFn: () => fetchShowcaseProducts("newOnPasaj"),
    // }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
  const opps = [
    {
      id: 1,
      title: "Fırsat 1",
      image: "/opp1.webp",
    },
    {
      id: 2,
      title: "Fırsat 2",
      image: "/opp2.webp",
    },
    {
      id: 3,
      title: "Fırsat 3",
      image: "/opp3.webp",
    },
    {
      id: 4,
      title: "Fırsat 4",
      image: "/opp4.webp",
    },
    {
      id: 5,
      title: "Fırsat 5",
      image: "/opp5.webp",
    },
    {
      id: 6,
      title: "Fırsat 6",
      image: "/opp6.webp",
    },
    {
      id: 7,
      title: "Fırsat 7",
      image: "/opp7.webp",
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Landing />
        <StyledContainer>
          <PopularCategories />
          <Showcase
            title="Sana Özel Ürünler"
            // queryKey="bestOffers"
            // queryFn={() => fetchShowcaseProducts("bestOffers")}
            data={data.filter((product) => product.specialForYou)}
            details={false}
          />
          <BlueBanner />
          <Showcase
            title="En İyi Teklifler"
            // queryKey="bestOffers"
            // queryFn={() => fetchShowcaseProducts("bestOffers")}
            data={data.filter((product) => product.bestOffers)}
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
            // queryKey="newOnPasaj"
            // queryFn={() => fetchShowcaseProducts("newOnPasaj")}
            data={data.filter((product) => product.newProduct)}
          />
        </StyledContainer>
        <WhyPasaj />
        <Footer />
      </main>
    </>
  );
}
