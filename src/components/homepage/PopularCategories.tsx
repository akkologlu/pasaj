import { fetchPopularCategories } from "@/lib/api";
import {
  StyledCenterText,
  StyledCol,
  StyledHeader,
  StyledList,
  StyledSection,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import CustomImage from "../common/CustomImage";
import Link from "next/link";

type PopularCategoriesProps = {
  title: string;
  image: string;
  url: string;
};
const PopularCategories = () => {
  const { data } = useQuery({
    queryKey: ["popularCategories"],
    queryFn: fetchPopularCategories,
  });
  return (
    <StyledSection>
      <StyledHeader as="h1">Popüler Kategoriler</StyledHeader>
      <StyledList>
        {data.map((category: PopularCategoriesProps) => (
          <StyledCol key={category.image} $sizemd={1}>
            <li>
              <Link href="#">
                <CustomImage
                  src={category.image}
                  alt={category.title}
                  height="88px"
                  style={{
                    borderRadius: "50%",
                    boxShadow: "0 0 10px 0 #0000001a",
                  }}
                  imageStyle={{ borderRadius: "50%" }}
                />
                <StyledCenterText as="p">{category.title}</StyledCenterText>
              </Link>
            </li>
          </StyledCol>
        ))}
      </StyledList>
    </StyledSection>
  );
};

export default PopularCategories;
