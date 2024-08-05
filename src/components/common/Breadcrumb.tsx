import {
  AlignCenter,
  StyledContainer,
  StyledDiv,
  StyledText,
} from "@/styles/styled";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
type BreadcrumbProps = {
  links: { name: string; url: string }[];
};
const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <StyledDiv $bgcolor="#f8f8f8" $padding="1rem 0">
      <StyledContainer>
        <AlignCenter>
          <Link href="/">
            <StyledText as="span">Pasaj</StyledText>
          </Link>
          {links.map((link, index) => (
            <span key={index}>
              <StyledText as="span" $color="#ffc900" $margin="0 .5rem">
                <IoChevronForwardSharp />
              </StyledText>
              <Link href={link.url}>
                <StyledText as="span">{link.name}</StyledText>
              </Link>
            </span>
          ))}
        </AlignCenter>
      </StyledContainer>
    </StyledDiv>
  );
};

export default Breadcrumb;
