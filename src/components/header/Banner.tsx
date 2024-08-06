import { bannerLinks } from "@/lib/mockData";
import { SpaceBetween, StyledText, StyledUl } from "@/styles/styled";

const Banner: React.FC = () => {
  return (
    <SpaceBetween $padding="20px 0">
      <small>turkcell.com.tr</small>
      <StyledUl>
        {bannerLinks.map((link) => (
          <StyledText key={link} as="li" $fs="0.725rem">
            {link}
          </StyledText>
        ))}
      </StyledUl>
    </SpaceBetween>
  );
};

export default Banner;
