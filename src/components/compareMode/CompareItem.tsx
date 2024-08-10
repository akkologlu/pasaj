import {
  FlexCol,
  StyledBluePrice,
  StyledCol,
  StyledCompareItem,
  StyledDiv,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import { Product } from "@/types/productType";
import CustomImage from "../common/CustomImage";
import Link from "next/link";

type CompareItemProps = {
  product: Product;
};
const CompareItem: React.FC<CompareItemProps> = ({ product }) => {
  return (
    <StyledCompareItem $radius="1rem" $padding="1rem">
      <StyledRow>
        <StyledCol $sizemd={3}>
          <CustomImage
            src={product.images[0]}
            alt={product.title}
            height={75}
          />
        </StyledCol>
        <StyledCol $sizemd={5}>
          <p>{product.title}</p>
          <Link href={`/product/${product.id}`}>
            Seç <span>&gt;</span>
          </Link>
        </StyledCol>
      </StyledRow>
      <FlexCol $padding="2rem 0" $gap="1rem">
        <StyledText $fw="700">Kontratlı Fiyat</StyledText>
        <StyledBluePrice as="h3" $align="left">
          {product.installmentPrice.toLocaleString("tr-TR")}{" "}
          <StyledText as="sup" $fs="0.75rem">
            TL x {product.installmentCount} AYDAN BAŞLAYAN FİYATLARLA
          </StyledText>
        </StyledBluePrice>
      </FlexCol>
      <FlexCol $padding="2rem 0" $gap="1rem">
        <StyledText $fw="700">Peşin Fiyat</StyledText>
        <StyledBluePrice as="h3" $align="left">
          {product.price.toLocaleString("tr-TR")}{" "}
          <StyledText as="sup" $fs="0.75rem">
            TL
          </StyledText>
        </StyledBluePrice>
      </FlexCol>
      {product.specifications.map((spec, index: number) => (
        <StyledDiv key={index} $padding="1rem 0">
          <StyledText $fw="700">{spec.title}</StyledText>
          <StyledText>{spec.value}</StyledText>
        </StyledDiv>
      ))}
    </StyledCompareItem>
  );
};

export default CompareItem;
