import { useCompareModeStore } from "@/store/CompareModeStore";
import {
  JustifyBetweenAlignCenter,
  StyledCompareBanner,
  StyledContainer,
} from "@/styles/styled";
import CompareBannerItem from "./CompareBannerItem";
import CustomButton from "../common/CustomButton";

const CompareBanner = () => {
  const { compareProducts, removeAllFromCompare } = useCompareModeStore();

  const displayedProducts = [
    ...compareProducts,
    ...Array(3 - compareProducts.length).fill(null),
  ];

  return (
    <StyledCompareBanner>
      <StyledContainer className="compareContainer">
        <JustifyBetweenAlignCenter>
          {displayedProducts.map((product, index) => (
            <CompareBannerItem
              key={index}
              title={product?.title}
              image={product?.images[0]?.url}
              id={product?.id}
            />
          ))}
          <button onClick={() => removeAllFromCompare()}>Temizle</button>
          <CustomButton
            href="/compare"
            bgcolor="yellow"
            round="1.5rem"
            padding=".75rem 1.5rem"
          >
            Karşılaştır
          </CustomButton>
        </JustifyBetweenAlignCenter>
      </StyledContainer>
    </StyledCompareBanner>
  );
};

export default CompareBanner;
