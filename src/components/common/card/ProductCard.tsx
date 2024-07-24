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
import CustomSwiper from "../CustomSwiper";
type ProductCardProps = {
  product: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledCol $sizemd={3}>
      <Link href="#">
        <StyledProductCard>
          <div className="body">
            <CustomSwiper image={product.images} />
            <h3>{product.title}</h3>
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
          </div>
          <div className="footer">
            <StyledBluePrice>
              {product.price - product.discountPrice} <sup>TL</sup>
            </StyledBluePrice>
            {product.discountPrice ? (
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
