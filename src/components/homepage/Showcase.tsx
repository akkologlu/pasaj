import {
  StyledFlexBetween,
  StyledHeader,
  StyledShowcase,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../common/card/ProductCard";

type ShowcaseProps = {
  title: string;
  queryKey: string;
  queryFn: () => void;
};

const Showcase: React.FC<ShowcaseProps> = ({ title, queryKey, queryFn }) => {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  });
  return (
    <StyledShowcase>
      <StyledHeader as="h1">{title}</StyledHeader>
      <StyledFlexBetween>
        {data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledFlexBetween>
    </StyledShowcase>
  );
};

export default Showcase;
