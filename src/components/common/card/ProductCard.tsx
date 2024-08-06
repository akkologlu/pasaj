import {
  AlignCenter,
  PriceSection,
  StyledBadge,
  StyledCol,
  StyledDiv,
  StyledProductCard,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import { Product } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import CustomSwiper from "../CardSwiper";
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
  return (
    <StyledCol $sizemd={size}>
      <Link href={`/product/${product.id}`}>
        <StyledProductCard $radius="0.75rem" $margin="10px" $bgcolor="white">
          <div className="body">
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
          </div>
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
        </StyledProductCard>
      </Link>
    </StyledCol>
  );
};

export default ProductCard;
