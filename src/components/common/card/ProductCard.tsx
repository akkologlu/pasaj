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
        <StyledProductCard $radius="0.75rem" $margin="10px" $bgcolor="#fff">
          <div className="body">
            <CustomSwiper image={product.images} />
            <StyledText $fs="1.25rem" $fw="700">
              {product.title}
            </StyledText>
            {details && (
              <>
                <AlignCenter $gap="0.5rem">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product.rating}
                    readOnly
                  />
                  <StyledText $fs="10px">{product.rating}</StyledText>
                </AlignCenter>
                <StyledRow>
                  {product.badges.map((badge) => (
                    <StyledBadge
                      as="span"
                      key={badge}
                      $bgcolor="#FDF7E7"
                      $textAlign="center"
                      $radius="5px"
                      $padding="0.25rem"
                    >
                      <StyledText
                        $fs="9px"
                        $color="#5f6b76"
                        $center={true}
                        $fw="700"
                      >
                        {badge}
                      </StyledText>
                    </StyledBadge>
                  ))}
                </StyledRow>
              </>
            )}
          </div>
          <PriceSection $padding="1rem" $textAlign="right">
            <StyledText $fs="16px" $color="#2855ac" $fw="700">
              {product.price - product.discountPrice}{" "}
              <StyledText as="sup" $fs="9px">
                TL
              </StyledText>
            </StyledText>
            {product.discountPrice && details ? (
              <StyledText $fs="14px" $color="#5f6b7666" $fw="700">
                <del>
                  {product.price} <sup>TL</sup>
                </del>
                <StyledText as="strong" $fs="10px" $fw="700" $color="#00bafc">
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
