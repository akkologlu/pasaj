import { StyledCol, StyledText } from "@/styles/styled";
import Link from "next/link";

type FooterColProps = {
  title: string;
  list: string[];
};

const FooterCol: React.FC<FooterColProps> = ({ title, list }) => {
  return (
    <StyledCol $sizemd={1.75}>
      <ul>
        <StyledText as="h3" $fs="16px">
          {title}
        </StyledText>
        {list.map((item, index) => (
          <StyledText as="li" $fs="14px" $margin=".5rem 0" key={index}>
            <Link href="#">{item}</Link>
          </StyledText>
        ))}
      </ul>
    </StyledCol>
  );
};

export default FooterCol;
