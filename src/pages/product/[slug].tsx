import Breadcrumb from "@/components/common/Breadcrumb";
import DetailTabs from "@/components/productDetail/DetailTabs";
import ImageSwiper from "@/components/productDetail/ImageSwiper";
import OtherSellers from "@/components/productDetail/OtherSellers";
import ProductConfigration from "@/components/productDetail/ProductConfigration";
import TakenTogether from "@/components/productDetail/TakenTogether";
import {
  useFetchProduct,
  useFetchSimilarProducts,
} from "@/hooks/useDataFetching";
import { fetchProduct } from "@/lib/api";
import {
  StyledCol,
  StyledContainer,
  StyledDiv,
  StyledLimitBadge,
  StyledText,
  SpaceBetween,
} from "@/styles/styled";
import type { Image, Product } from "@/types/productType";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);
  const { slug } = context.params as { slug: string };
  await queryClient.prefetchQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProduct(slug),
  });
  return {
    props: { dehydratedState: dehydrate(queryClient), slug, session },
  };
};
const Product = ({ slug, session }: { slug: string; session: Session }) => {
  const { data } = useFetchProduct(slug);
  const { data: similarProducts, isLoading } = useFetchSimilarProducts(
    data.categoryUrl
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Breadcrumb
        links={[
          {
            name: data.category,
            url: `/products/${data.categoryUrl}`,
          },
          {
            name: data.subcategory,
            url: `/products/${data.categoryUrl}/${data.subcategoryUrl}`,
          },
          {
            name: data.title,
            url: `/product/${slug}`,
          },
        ]}
      />
      <StyledDiv $padding="5rem 0">
        <StyledContainer>
          <SpaceBetween $wrap={true}>
            <StyledCol $sizemd={6}>
              <ImageSwiper images={data.images as Image[]} />
              <StyledLimitBadge
                $padding="0.75rem 2rem"
                $radius="0.5rem"
                $bgcolor="cyan"
                $margin="1rem auto 3rem auto"
              >
                <StyledText $fw="700" $color="white">
                  Ürün alımları {data.limit} adet ile sınırlıdır.
                </StyledText>
              </StyledLimitBadge>
            </StyledCol>
            <StyledCol $sizemd={5.75}>
              <ProductConfigration session={session} data={data} />
            </StyledCol>
          </SpaceBetween>
          <StyledCol $sizemd={6}>
            <TakenTogether data={similarProducts} />
          </StyledCol>
        </StyledContainer>
        <OtherSellers data={data.otherSellers} />
        <DetailTabs data={data} />
      </StyledDiv>
    </>
  );
};

export default Product;
