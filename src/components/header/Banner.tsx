import { bannerLinks } from "@/lib/mockData";
import { StyledBanner, StyledText, StyledUl } from "@/styles/styled";

const Banner: React.FC = () => {
  return (
    <StyledBanner $display="flex" $padding="20px 0" $justify="space-between">
      <small>turkcell.com.tr</small>
      <StyledUl>
        {bannerLinks.map((link) => (
          <StyledText key={link} as="li" $fs="10px">
            {link}
          </StyledText>
        ))}
      </StyledUl>
    </StyledBanner>
  );
};

export default Banner;
