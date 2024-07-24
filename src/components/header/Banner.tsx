import { StyledBanner, StyledUl } from "@/styles/styled";

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <small>turkcell.com.tr</small>
      <StyledUl>
        <li>Favorilerim</li>
        <li>Kampanyalar</li>
        <li>Yardım</li>
        <li>Neden Pasaj</li>
        <li>Pasaj Blog</li>
        <li>Sipariş Sorgulama</li>
      </StyledUl>
    </StyledBanner>
  );
};

export default Banner;
