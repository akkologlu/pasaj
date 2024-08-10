import { useCompareModeStore } from "@/store/CompareModeStore";
import {
  JustifyBetweenAlignCenter,
  StyledCompareBanner,
  StyledContainer,
  StyledDiv,
} from "@/styles/styled";
import CompareBannerItem from "./CompareBannerItem";
import Link from "next/link";

const CompareBanner = () => {
  const { compareProducts, removeAllFromCompare } = useCompareModeStore();

  const displayedProducts = [
    ...compareProducts,
    ...Array(3 - compareProducts.length).fill(null),
  ];

  return (
    <StyledCompareBanner>
      <StyledContainer className="compareContainer">
        <JustifyBetweenAlignCenter $padding="1rem 0">
          {displayedProducts.map((product, index) => (
            <CompareBannerItem
              key={index}
              title={product?.title}
              image={product?.images[0]}
              id={product?.id}
            />
          ))}
          <button onClick={() => removeAllFromCompare()}>Temizle</button>
          <StyledDiv
            $bgcolor="yellow"
            $radius="1.5rem"
            $padding=".75rem 1.5rem"
            onClick={() =>
              compareProducts.length < 2 && alert("en az iki ürün")
            }
          >
            {compareProducts.length > 1 ? (
              <Link href={`/compare`}>Karşılaştır</Link>
            ) : (
              <p>Karşılaştır</p>
            )}
          </StyledDiv>
        </JustifyBetweenAlignCenter>
      </StyledContainer>
    </StyledCompareBanner>
  );
};

export default CompareBanner;
