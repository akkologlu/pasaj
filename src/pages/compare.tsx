import CompareItem from "@/components/compareMode/CompareItem";
import { useCompareModeStore } from "@/store/CompareModeStore";
import { Flex, StyledContainer } from "@/styles/styled";

const Compare = () => {
  const { compareProducts } = useCompareModeStore();
  return (
    <StyledContainer $padding="5rem 0">
      <Flex $gap="2rem">
        {compareProducts.map((product) => (
          <CompareItem key={product.id} product={product} />
        ))}
      </Flex>
    </StyledContainer>
  );
};

export default Compare;
