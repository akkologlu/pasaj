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
    <StyledDiv $bgcolor="breadcrumb" $padding="1rem 0">
      <StyledContainer>
        <AlignCenter>
          <Link href="/">
            <span>Pasaj</span>
          </Link>
          {links.map((link, index) => (
            <span key={index}>
              <StyledText as="span" $color="yellow" $margin="0 .5rem">
                <IoChevronForwardSharp />
              </StyledText>
              <Link href={link.url}>
                <span>{link.name}</span>
              </Link>
            </span>
          ))}
        </AlignCenter>
      </StyledContainer>
    </StyledDiv>
  );
};

export default Breadcrumb;
