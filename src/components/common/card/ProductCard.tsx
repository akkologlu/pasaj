import {
  StyledBadge,
  StyledBluePrice,
  StyledCol,
  StyledProductCard,
  StyledRatingDiv,
  StyledRow,
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
      <Link href="#">
        <StyledProductCard>
          <div className="body">
            <CustomSwiper image={product.images} />
            <h3>{product.title}</h3>
            {details && (
              <>
                <StyledRatingDiv>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product.rating}
                    readOnly
                  />
                  <small>{product.rating}</small>
                </StyledRatingDiv>
                <StyledRow>
                  {product.badges.map((badge) => (
                    <StyledBadge key={badge} $bgcolor="#FDF7E7">
                      <p>{badge}</p>
                    </StyledBadge>
                  ))}
                </StyledRow>
              </>
            )}
          </div>
          <div className="footer">
            <StyledBluePrice>
              {product.price - product.discountPrice} <sup>TL</sup>
            </StyledBluePrice>
            {product.discountPrice && details ? (
              <p>
                <del>
                  {product.price} <sup>TL</sup>
                </del>
                <strong>{product.discountPrice} TL indirim</strong>
              </p>
            ) : null}
          </div>
        </StyledProductCard>
      </Link>
    </StyledCol>
  );
};

export default ProductCard;
