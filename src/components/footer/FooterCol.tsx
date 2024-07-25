import { StyledCol, StyledFooterUl, StyledHeader } from "@/styles/styled";
import Link from "next/link";

type FooterColProps = {
  title: string;
  list: string[];
};

const FooterCol: React.FC<FooterColProps> = ({ title, list }) => {
  return (
    <StyledCol $sizemd={1.75}>
      <StyledFooterUl>
        <StyledHeader as="h3">{title}</StyledHeader>
        {list.map((item, index) => (
          <li key={index}>
            <Link href="#">{item}</Link>
          </li>
        ))}
      </StyledFooterUl>
    </StyledCol>
  );
};

export default FooterCol;
