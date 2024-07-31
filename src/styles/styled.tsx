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
type StyledColProps = {
  $sizexl?: number;
  $sizelg?: number;
  $sizemd?: number;
  $sizesm?: number;
};
export const StyledCol = styled.div<StyledColProps>`
  @media (min-width: 1200px) {
    width: ${(props) => (props.$sizelg ? (props.$sizelg / 12) * 100 : "100")}%;
  }
  @media (min-width: 992px) {
    width: ${(props) => (props.$sizemd ? (props.$sizemd / 12) * 100 : "100")}%;
  }

  width: 100%;
`;
type StyledTextProps = {
  $fs?: string;
  $fw?: string;
  $color?: string;
  $margin?: string;
  $padding?: string;
  $center?: boolean;
  $letterSpacing?: string;
  $lineHeight?: string;
};
export const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => (props.$fs ? props.$fs : "1rem")};
  font-weight: ${(props) => (props.$fw ? props.$fw : "400")};
  color: ${(props) => (props.$color ? props.$color : "#253342")};
  margin: ${(props) => (props.$margin ? props.$margin : "0")};
  padding: ${(props) => (props.$padding ? props.$padding : "0")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  letter-spacing: ${(props) =>
    props.$letterSpacing ? props.$letterSpacing : "0"};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : "1.2")};
`;
type StyledDivProps = {
  $display?: string;
  $direction?: string;
  $align?: string;
  $justify?: string;
  $gap?: string;
  $margin?: string;
  $padding?: string;
  $bgcolor?: string;
  $radius?: string;
  $width?: string;
  $height?: string;
  $color?: string;
  $pos?: string;
  $textAlign?: string;
};
export const StyledDiv = styled.div<StyledDivProps>`
  display: ${(props) => props.$display};
  flex-direction: ${(props) => (props.$direction ? props.$direction : "row")};
  align-items: ${(props) => (props.$align ? props.$align : "flex-start")};
  justify-content: ${(props) =>
    props.$justify ? props.$justify : "flex-start"};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  background-color: ${(props) =>
    props.$bgcolor ? props.$bgcolor : "transparent"};
  border-radius: ${(props) => props.$radius};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${(props) => (props.$color ? props.$color : "#253342")};
  position: ${(props) => (props.$pos ? props.$pos : "static")};
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "left")};
  width: 100%;
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
export const StyledBanner = styled(StyledDiv)`
  @media (max-width: 768px) {
    display: none;
  }
`;
type StyledImageProps = {
  $height?: number;
  $width?: string;
};
export const StyledImageDiv = styled.div<StyledImageProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height + "px" || "200px"};
  position: relative;
`;
export const StyledProductCard = styled(StyledDiv)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .body {
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;
export const PriceSection = styled(StyledDiv)`
  border-top: 1px solid #e5e5e5;
  strong {
    padding-left: 0.5rem;
  }
`;
export const StyledBadge = styled(StyledDiv)`
  width: 50px;
  margin-right: 5px;
`;
export const StyledBluePrice = styled(StyledText)`
  padding-top: 0.25rem;
  text-align: right;
`;
export const StyledSearchForm = styled(StyledDiv)`
  z-index: 5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  input {
    width: 100%;
    min-height: 50px;
    height: 100%;
    background-color: transparent;
    &::placeholder {
      color: gray;
    }
  }
`;
export const StyledCustomButton = styled(StyledDiv)`
  width: 100%;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;
export const StyledCartCount = styled(StyledDiv)`
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  right: -15px;
  border: 3px solid #fff;
`;
export const StyledShowcase = styled(StyledDiv)`
  img {
    border-radius: 0.5rem;
  }
`;
export const StyledRoundedDiv = styled(StyledDiv)`
  width: 90px;
  height: 90px;
  font-size: 3rem;
`;
export const StyledFooter = styled(StyledDiv)`
  * {
    color: #fff;
  }
`;
export const StyledFooterMiddle = styled(StyledDiv)`
  border-top: 1px solid #5f6b76;
  border-bottom: 1px solid #5f6b76;
`;
export const StyledSwiper = styled(Swiper)`
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
type BackgroundImageProps = {
  $src: string;
};
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
export const StyledNavBottom = styled(StyledDiv)`
  padding: 1rem;
  text-align: center;
  a {
    &:hover {
      color: #ffc900;
    }
  }
`;
export const StyledLoginModal = styled(StyledDiv)`
  top: 160px;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: 2;
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
export const StyledBlueBanner = styled(StyledDiv)`
  button {
    width: max-content;
    border-radius: 1rem;
  }
`;
export const StyledCategoryModal = styled(StyledDiv)`
  top: 170px;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: 2;
  a {
    &:hover {
      color: #ffc900;
    }
  }
`;
export const StyledShowArea = styled(StyledDiv)`
  height: 350px;
  width: 100%;
  top: 90%;
  left: 0;
  }
`;
export const StyledSearchBadge = styled(StyledText)`
  border-radius: 50%;
  width: max-content;
  background-color: #fff;
  border-radius: 50px;
  padding: 0.5rem 0.75rem;
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
export const StyledMyAccountModal = styled(StyledDiv)`
  top: 40px;
  left: 0;
  width: 100%;
  z-index: 2;
`;

export const StyledLimitBadge = styled(StyledDiv)`
  width: 70%;
`;
export const StyledConfigurator = styled(StyledDiv)`
  button {
    background-color: #ffc900;
    padding: 1rem;
    border-radius: 2rem;
  }
`;
export const StyledCountDown = styled(StyledText)`
  border: 1px solid #5f6b76;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  span {
    color: #2855ac;
    font-size: 14px;
    font-weight: 700;
  }
`;
export const StyledSelect = styled(StyledCol)`
  position: relative;
  label {
    font-weight: 700;
    font-size: 12px;
    color: #8e9fad;
    position: absolute;
    top: 0.25rem;
    left: 0.75rem;
  }
  select {
    width: 100%;
    padding: 1.5rem 0.5rem;
    border: 1px solid #dee3ed;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    font-size: 16px;
    }
  }
`;
type OptionWrapperProps = {
  $selected: boolean;
};
export const OptionWrapper = styled(StyledDiv)<OptionWrapperProps>`
  border: 1px solid #ccc;
  background-color: ${(props) => (props.$selected ? "#EFF5FF" : "white")};
  border-color: ${(props) => (props.$selected ? "#2855AC" : "#ccc")};
  cursor: pointer;
  width: 100%;
  small {
    color: #8e9fad;
  }
`;
export const Label = styled.div<OptionWrapperProps>`
  font-size: 14px;
  color: ${(props) => (props.$selected ? "#2855AC" : "#333")};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .selectRound {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => (props.$selected ? "#FFC900" : "white")};
    border: 1px solid #2855ac;
  }
`;
export const StyledOtherSellerCard = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: #fff;
  gap: 1rem;
`;
export const RatingBadge = styled(StyledText)`
  background-color: #0bc15c;
  border-radius: 0.5rem;
  padding: 0.1rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddButton = styled.button`
  background-color: #ffd700;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`;
export const StyledFilterSection = styled(StyledDiv)`
  border: 1px solid #e5e5e5;
`;
export const StyledLabel = styled(StyledText)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  input[type="checkbox"] {
    appearance: none;
    width: 1.5em;
    height: 1.25rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5rem;
    position: relative;
    cursor: pointer;
    &:checked::after {
      content: "\\2713";
      font-size: 0.8rem;
      font-weight: 900;
      color: #f0b90b;
      position: absolute;
      left: 4px;
    }
  }
`;
export const StyledRadioLabel = styled(StyledText)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  input[type="radio"] {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #ccc;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    cursor: pointer;
    &:checked::before {
      content: "";
      width: 0.75rem;
      height: 0.75rem;
      background-color: #f0b90b;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const StyledSwitchLabel = styled.label`
  padding: 1rem;
  background-color: #f5f7f9;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #8e9fad;
  font-weight: 700;
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .switch {
    position: relative;
    width: 2rem;
    height: 1rem;
    background-color: #ccc;
    border-radius: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .switch:before {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: white;
    top: 0.1rem;
    left: 0.1rem;
    transition: transform 0.2s;
  }
  input:checked + .switch {
    background-color: #f0b90b;
  }
  input:checked + .switch:before {
    transform: translateX(1rem);
  }
`;
