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
import useFavorite from "@/hooks/useFavorite";

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
  const { isFav, handleFav } = useFavorite(product);

  return (
    <StyledCol $sizemd={size}>
      <StyledProductCard
        $radius="0.75rem"
        $margin="10px"
        $bgcolor="white"
        $pos="relative"
        $details={details}
      >
        <StyledHeart onClick={handleFav}>
          {isFav ? (
            <FaHeart size={24} color="#ffc900" />
          ) : (
            <CiHeart size={30} color="#ffc900" />
          )}
        </StyledHeart>
        <Link href={`/product/${product.id}`}>
          <FlexCol $gap="0.75rem" $padding="1.75rem 1rem" className="body">
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
                      <StyledText
                        as="small"
                        $color="grey"
                        $center="center"
                        $fs="0.5rem"
                      >
                        {badge}
                      </StyledText>
                    </StyledBadge>
                  ))}
                </StyledRow>
              </>
            )}
          </FlexCol>
          <PriceSection $padding="1rem" $textAlign="right" className="footer">
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
