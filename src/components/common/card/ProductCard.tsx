import {
  AlignCenter,
  FlexCol,
  PriceSection,
  StyledBadge,
  StyledCol,
  StyledHeart,
  StyledProductCard,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import { Product } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import CustomSwiper from "../CardSwiper";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useFavStore } from "@/store/FavStore";
import { useSession } from "next-auth/react";
import { updateFavs } from "@/lib/api";

type ProductCardProps = {
  product: Product;
  details?: boolean;
  size?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  details = true,
  size = 3,
}) => {
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

  return (
    <StyledCol $sizemd={size}>
      <StyledProductCard
        $radius="0.75rem"
        $margin="10px"
        $bgcolor="white"
        $pos="relative"
      >
        <StyledHeart onClick={handleFav}>
          {isFav ? (
            <FaHeart size={24} color="#ffc900" />
          ) : (
            <CiHeart size={30} color="#ffc900" />
          )}
        </StyledHeart>
        <Link href={`/product/${product.id}`}>
          <FlexCol $gap="0.75rem" $padding="1.75rem 1rem">
            <CustomSwiper image={product.images} />
            <h4>{product.title}</h4>
            {details && (
              <>
                <AlignCenter $gap="0.5rem">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product.rating}
                    readOnly
                  />
                  <small>{product.rating}</small>
                </AlignCenter>
                <StyledRow>
                  {product.badges.map((badge) => (
                    <StyledBadge
                      as="span"
                      key={badge}
                      $bgcolor="sand"
                      $textAlign="center"
                      $radius="5px"
                      $padding="0.25rem"
                    >
                      <StyledText as="small" $color="grey" $center="center">
                        {badge}
                      </StyledText>
                    </StyledBadge>
                  ))}
                </StyledRow>
              </>
            )}
          </FlexCol>
          <PriceSection $padding="1rem" $textAlign="right">
            <StyledText $color="blue" $fw="700">
              {product.price - product.discountPrice} <sup>TL</sup>
            </StyledText>
            {product.discountPrice && details ? (
              <StyledText as="h5" $color="grey" $fw="700">
                <del>
                  {product.price} <sup>TL</sup>
                </del>{" "}
                <StyledText as="small" $color="cyan">
                  {product.discountPrice} TL indirim
                </StyledText>
              </StyledText>
            ) : null}
          </PriceSection>
        </Link>
      </StyledProductCard>
    </StyledCol>
  );
};

export default ProductCard;
