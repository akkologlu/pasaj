import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    max-width: 992px;
  }
  @media (max-width: 992px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    max-width: 576px;
  }
  @media (max-width: 576px) {
    max-width: 90%;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface StyledColProps {
  $sizexl?: number;
  $sizelg?: number;
  $sizemd?: number;
  $sizesm?: number;
}

export const StyledCol = styled.div<StyledColProps>`
  @media (min-width: 1200px) {
    width: ${(props) => (props.$sizelg ? (props.$sizelg / 12) * 100 : "100")}%;
  }
  @media (min-width: 992px) {
    width: ${(props) => (props.$sizemd ? (props.$sizemd / 12) * 100 : "100")}%;
  }

  width: 100%;
`;

export const StyledHeaderComp = styled.header`
  background-color: #fafbfd;
  position: relative;
`;

export const StyledFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledFlexEvenly = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledUl = styled.ul`
  display: flex;
  font-size: 13px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    margin-right: 10px;
  }
`;

export const StyledBanner = styled(StyledFlexBetween)`
  padding: 20px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
interface StyledImageProps {
  $height?: number;
  $width?: string;
}
export const StyledImageDiv = styled.div<StyledImageProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height + "px" || "200px"};
  position: relative;
`;
export const StyledProductCard = styled.div`
border-radius: .75rem;
  margin: 10px;
  background-color: #fff;
 box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  .body {
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .footer {
    padding: 1rem;
    border-top: 1px solid #e5e5e5;
    p{
      font-size: 14px;
      color: #5f6b7666;
      font-weight: 700;
      sup{
        font-size: 9px;
      }
        strong{
        padding-left: 0.5rem;
          color: #00bafc;
          font-size: 14px;
          font-weight: 700;
        }
    }
`;
export const StyledRatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
interface StyledBadgeProps {
  $bgcolor?: string;
}
export const StyledBadge = styled.span<StyledBadgeProps>`
  background-color: ${(props) => props.$bgcolor || "#f8f9fa"};
  width: 50px;
  text-align: center;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  p {
    font-size: 9px;
    font-weight: 700;
    color: #5f6b76;
  }
`;
export const StyledBluePrice = styled.h3`
  padding-top: 0.25rem;
  color: #2855ac;
  font-size: 1.125rem;
  font-weight: 700;
  sup {
    font-size: 0.75rem;
  }
`;

export const StyledSearchForm = styled.form`
  z-index: 5;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #eff2f5;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
      color: gray;
    }
  }
`;

type StyledCustomButtonProps = {
  $bgcolor?: string;
  $padding?: string;
};

export const StyledCustomButton = styled.span<StyledCustomButtonProps>`
  width: 100%;
  background-color: ${(props) => props.$bgcolor};
  padding: ${(props) => props.$padding};
  color: black;
  border: none;
  border-radius: 0.25rem;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  position: relative;
`;
export const StyledCartCount = styled.div`
  background-color: #ed6060;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -15px;
  border: 3px solid #fff;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const StyledCenterText = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const StyledHeader = styled.div`
  margin-bottom: 1rem;
`;

export const StyledShowcase = styled.div`
  margin-top: 5rem;
  img {
    border-radius: 0.5rem;
  }
`;

export const StyledWhyPassage = styled.div`
  padding: 5rem 0;
  margin-top: 5rem;
  background-color: #eff2f5;
  h3 {
    font-weight: 500;
  }
`;

export const StyledRoundedDiv = styled.div`
  border-radius: 50%;
  background-color: #27356f;
  width: 92px;
  padding: 1rem;
  margin: 3rem auto 1rem auto;
`;
export const StyledFooter = styled.footer`
  background-color: #27356f;
  padding: 5rem 0;
  * {
    color: #fff;
  }
`;
export const StyledFooterUl = styled.ul`
  list-style-type: none;
  li {
    font-size: 14px;
    margin-bottom: 0.75rem;
  }
`;
export const StyledFooterMiddle = styled.div`
  padding: 2rem 0;
  margin: 1rem 0;
  border-top: 1px solid #5f6b76;
  border-bottom: 1px solid #5f6b76;
`;
export const StyledLogoSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 10px;
  }
  .swiper-pagination-bullets {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    padding: 2px 5px;
  }
  .swiper-pagination-bullet.custom-bullet {
    background-color: #8e9fad;
    width: 30px;
    opacity: 1;
    border-radius: 0.25rem;
  }
  .swiper-pagination-bullet.custom-bullet-active {
    background-color: #ffc900;
    width: 30px;
  }
`;

interface BackgroundImageProps {
  $src: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(20px);
  z-index: -1;
  transition: background-image 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 150px;
  }
`;
export const StyledRelativeDiv = styled.div`
  position: relative;
`;
export const StyledSection = styled.section`
  padding: 5rem 0;
`;
export const StyledNavBottom = styled(StyledFlexBetween)`
  padding: 1rem;
  text-align: center;
  a {
    &:hover {
      color: #ffc900;
    }
  }
`;
export const StyledLoginModal = styled.div`
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  height: 600px;
  background-color: #f6f5f8;
  z-index: 2;
  padding: 4rem;
  a {
    background-color: #ffc900;
    padding: 1rem 2rem;
    width: 100%;
    border-radius: 5rem;
    display: block;
    text-align: center;
    font-weight: 600;
    margin-top: 1rem;
  }
`;
export const StyledBlueBanner = styled(StyledFlexBetween)`
  background-color: #3aa6d8;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: max-content;
    border-radius: 1rem;
    p {
      margin-right: 1rem;
    }
  }
`;
export const StyledBestSellerTab = styled(StyledFlexCenter)`
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;
export const StyledCategoryModal = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  width: 100%;
  height: 600px;
  background-color: #f6f5f8;
  z-index: 2;
  padding: 4rem;
  .subcategories {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  a {
    &:hover {
      color: #ffc900;
    }
  }
  .viewAll {
    color: #144296;
    font-weight: 700;
  }
`;

export const StyledShowArea = styled.div`
  height: 350px;
  width: 100%;
  position: absolute;
  top: 90%;
  left: 0;
  p {
    margin-top: 0.75rem;
  }
  .sanaOzel {
    background-color: #eff2f5;
    padding: 1rem;
  }
  .searches {
    background-color: #fff;
    padding: 1rem;
  }
  small {
    color: #5f6b76;
    small {
      color: #00bafc;
    }
  }
`;
export const StyledSearchBadge = styled.div`
  border-radius: 50%;
  width: max-content;
  background-color: #fff;
  border-radius: 50px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  margin: 1rem 0;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: #144296;
    color: #fff;
  }
`;
export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const StyledCardSwiper = styled(Swiper)`
  .swiper-pagination-bullets {
    background-color: #ecf0f2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    padding: 2px 5px;
    border-radius: 1rem;
  }
  .swiper-pagination-bullet.custom-bullet {
    background-color: #8e9091;
    width: 9px;
    height: 9px;
    opacity: 1;
  }
  .swiper-pagination-bullet.custom-bullet-active {
    background-color: #253342;
    width: 16px;
  }
`;
