import styled from "styled-components";
import { Swiper } from "swiper/react";
import theme from "./theme";
type StyledContainerProps = {
  $padding?: string;
};
export const StyledContainer = styled.div<StyledContainerProps>`
  padding: ${(props) => props.$padding};
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
  @media (min-width: 350px) {
    width: ${(props) => (props.$sizesm ? (props.$sizesm / 12) * 100 : "100")}%;
  }
  @media (min-width: 992px) {
    width: ${(props) => (props.$sizemd ? (props.$sizemd / 12) * 100 : "100")}%;
  }
  width: 100%;
`;
type StyledTextProps = {
  $fs?: string;
  $fw?: string;
  $color?: keyof typeof theme.colors;
  $margin?: string;
  $padding?: string;
  $center?: string;
  $letterSpacing?: string;
  $lineHeight?: string;
  $align?: string;
};
export const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => props.$fs};
  font-weight: ${(props) => props.$fw};
  * {
    color: ${({ theme, $color }) => theme.colors[$color || "dark"]};
  }
  color: ${({ theme, $color }) => theme.colors[$color || "dark"]};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  text-align: ${(props) => (props.$center ? props.$center : "left")};
  letter-spacing: ${(props) => props.$letterSpacing};
  line-height: ${(props) => props.$lineHeight};
  text-align: ${(props) => props.$align};
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
  $fs?: string;
  $wrap?: boolean;
};
export const StyledDiv = styled.div<StyledDivProps>`
  display: ${(props) => props.$display};
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  background-color: ${({ theme, $bgcolor }) =>
    theme.colors[$bgcolor || "transparent"]};
  border-radius: ${(props) => props.$radius};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${({ theme, $color }) => theme.colors[$color || "dark"]};
  position: ${(props) => props.$pos};
  text-align: ${(props) => props.$textAlign};
  font-size: ${(props) => props.$fs};
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
`;
export const Flex = styled(StyledDiv)`
  display: flex;
`;
export const FlexCol = styled(Flex)`
  flex-direction: column;
`;
export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
`;
export const AlignCenter = styled(Flex)`
  align-items: center;
`;
export const JustifyCenter = styled(Flex)`
  justify-content: center;
`;
export const JustifyBetweenAlignCenter = styled(SpaceBetween)`
  align-items: center;
`;
export const FullCenter = styled(JustifyCenter)`
  align-items: center;
`;
export const SpaceEvenly = styled(Flex)`
  justify-content: space-evenly;
`;
export const FlexEnd = styled(Flex)`
  justify-content: flex-end;
`;
export const FullCenterCol = styled(FullCenter)`
  flex-direction: column;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledBanner = styled(StyledDiv)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledAccountButton = styled(FullCenter)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  height: 2.85rem;
`;
type StyledImageProps = {
  $height?: number;
  $width?: string;
  $smheight?: number;
};
export const StyledImageDiv = styled.div<StyledImageProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height + "px" || "200px"};
  position: relative;
  @media (max-width: 768px) {
    height: ${(props) => props.$smheight + "px"};
  }
`;
type StyledProductCardProps = {
  $details?: boolean;
};
export const StyledProductCard = styled(StyledDiv)<StyledProductCardProps>`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  .body {
    min-height: ${(props) => (props.$details ? "375px" : "310px")};
  }
  .footer {
    min-height: ${(props) => (props.$details ? "75px" : "50px")};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.yellow};
  }
`;
export const PriceSection = styled(StyledDiv)`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  strong {
    padding-left: 0.5rem;
  }
`;
export const StyledBadge = styled(FullCenter)`
  width: 50px;
  margin-right: 5px;
`;
export const StyledBluePrice = styled(StyledText)`
  padding-top: 0.25rem;
  color: ${({ theme }) => theme.colors.blue};
  * {
    color: ${({ theme }) => theme.colors.blue};
  }
  text-align: ${(props) => (props.$align ? props.$align : "right")};
`;
export const StyledSearchForm = styled(AlignCenter)`
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
type StyledBestSellerTabProps = {
  $active?: boolean;
};
export const StyledBestSellerTab = styled(StyledText)<StyledBestSellerTabProps>`
  cursor: pointer;
  border-bottom: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.blue : "transparent")};
  height: 2.5rem;
`;
export const StyledCustomButton = styled(FullCenter)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`;
export const StyledCartCount = styled(FullCenter)`
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  right: -15px;
  border: 3px solid ${({ theme }) => theme.colors.white};
`;
export const StyledShowcase = styled(StyledDiv)`
  img {
    border-radius: 0.5rem;
  }
`;
export const StyledRoundedDiv = styled(FullCenter)`
  width: 90px;
  height: 90px;
  font-size: 3rem;
`;
export const StyledFooter = styled(StyledDiv)`
  * {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const StyledFooterMiddle = styled(StyledDiv)`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
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
    background-color: ${({ theme }) => theme.colors.light};
    width: 30px;
    opacity: 1;
    border-radius: 0.25rem;
  }
  .swiper-pagination-bullet.custom-bullet-active {
    background-color: ${({ theme }) => theme.colors.yellow};
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
export const StyledNavBottom = styled(SpaceBetween)`
  padding: 1rem;
  text-align: center;
  flex-wrap: wrap;
  a {
    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
type StyledNavBottomMobileProps = {
  $active: boolean;
};
export const StyledNavBottomMobile = styled(
  FlexCol
)<StyledNavBottomMobileProps>`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.$active ? "flex" : "none")};
  }
`;
export const StyledHamburgerMenuIcon = styled(StyledDiv)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const StyledLoginModal = styled(StyledDiv)`
  top: 160px;
  left: 0;
  width: 100%;
  min-height: 600px;
  z-index: 2;
  a {
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 1rem 2rem;
    width: 100%;
    border-radius: 5rem;
    display: block;
    text-align: center;
    font-weight: 600;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    top: 230px;
  }
`;
export const StyledBlueBanner = styled(SpaceEvenly)`
  button {
    width: max-content;
    border-radius: 1rem;
  }

  h3 {
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;
type StyledCategoryModalProps = {
  $modal: boolean;
};
export const StyledCategoryModal = styled(StyledDiv)<StyledCategoryModalProps>`
  top: 170px;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: 15;
  a {
    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
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
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
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
    background-color: ${({ theme }) => theme.colors.comment};
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
    background-color: ${({ theme }) => theme.colors.dark};
    width: 16px;
  }
`;
export const StyledMyAccountModal = styled(FlexCol)`
  top: 45px;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 1rem 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  gap: 0.5rem;
`;

export const StyledLimitBadge = styled(StyledDiv)`
  width: 70%;
`;
export const StyledConfigurator = styled(FlexCol)`
  button {
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 1rem;
    border-radius: 2rem;
  }
`;
export const StyledCountDown = styled(StyledText)`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  span {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 14px;
    font-weight: 700;
  }
`;
export const StyledSelect = styled(StyledCol)`
  position: relative;
  label {
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.light};
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
export const OptionWrapper = styled(
  JustifyBetweenAlignCenter
)<OptionWrapperProps>`
  border: 1px solid #ccc;
  background-color: ${(props) => (props.$selected ? "#EFF5FF" : "white")};
  border-color: ${(props) =>
    props.$selected ? ({ theme }) => theme.colors.blue : "#ccc"};
  cursor: pointer;
  width: 100%;
  small {
    color: ${({ theme }) => theme.colors.light};
  }
`;
export const Label = styled.div<OptionWrapperProps>`
  font-size: 14px;
  color: ${(props) =>
    props.$selected ? ({ theme }) => theme.colors.blue : "#333"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .selectRound {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$selected ? ({ theme }) => theme.colors.yellow : "white"};
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
export const StyledOtherSellerCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 1rem;
`;
export const RatingBadge = styled(StyledText)`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  padding: 0.1rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`;
export const StyledFilterSection = styled(StyledDiv)`
  border: 1px solid ${({ theme }) => theme.colors.border};
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
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    margin-right: 0.5rem;
    position: relative;
    cursor: pointer;
    &:checked::after {
      content: "\\2713";
      font-size: 0.8rem;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.yellow};
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
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    cursor: pointer;
    &:checked::before {
      content: "";
      width: 0.75rem;
      height: 0.75rem;
      background-color: ${({ theme }) => theme.colors.yellow};
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
  background-color: ${({ theme }) => theme.colors.lightgrey};
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
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
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  input:checked + .switch:before {
    transform: translateX(1rem);
  }
`;
export const StyledComporeModeSwitch = styled(StyledSwitchLabel)`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  justify-content: flex-end;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.grey};
  .switch {
    width: 3rem;
    height: 1.5rem;
  }
  .switch:before {
    width: 1.25rem;
    height: 1.25rem;
  }
  input:checked + .switch:before {
    transform: translateX(1.5rem);
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  margin: 0.5rem 0;
`;
export const StyledFormButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  margin: 0.5rem 0;
  cursor: pointer;
  text-align: center;
`;
export const StyledPrimaryFormButton = styled(StyledFormButton)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: white;
`;
export const StyledSecondaryFormButton = styled(StyledFormButton)`
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  color: black;
  background-color: white;
  a {
    display: block;
  }
`;
export const StyledCartItem = styled(StyledDiv)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  .top {
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`;
export const StyledCartItemBottom = styled(FlexEnd)`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
export const StyledTimes = styled(StyledText)`
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
`;
export const StyledOrderSummary = styled(FlexCol)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  .detail {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
export const StyledCounter = styled(JustifyBetweenAlignCenter)`
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
export const StyledComment = styled(FlexCol)`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
export const StyledReviewSection = styled(FlexCol)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const StyledCommentButton = styled(StyledPrimaryFormButton)`
  width: 220px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 0.75rem;
  font-size: 1rem;
`;
export const StyledSortSelect = styled.select`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  color: #5b5b5b;
`;
export const StyledQuestionCard = styled(StyledDiv)`
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.grey};
`;
export const StyledDate = styled.span`
  font-weight: 400;
  margin: 0 1rem;
  font-size: 14px;
`;
export const StyledSellerText = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 700;
`;
export const StyledQuestionSection = styled(StyledComment)`
  padding: 1.5rem 0 0 0;
  margin-top: 1.5rem;
`;
export const StyledWhyPassage = styled(StyledDiv)`
  * {
    text-align: center;
  }
`;
export const StyledHeart = styled(StyledDiv)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  z-index: 10;
`;
export const StyledHeartDetail = styled(StyledDiv)`
  position: relative;
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
type StyledCompareModeLayerProps = {
  $inStore: boolean;
};
export const StyledCompareModeLayer = styled(
  StyledDiv
)<StyledCompareModeLayerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ $inStore, theme }) =>
      $inStore ? theme.colors.yellow : theme.colors.grey};
  }
  .topright {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: ${({ $inStore, theme }) =>
      $inStore ? theme.colors.yellow : theme.colors.grey};
    border-bottom-left-radius: 100%;
    border-top-right-radius: 0.75rem;
    &:after {
      content:${({ $inStore }) => ($inStore ? "'✔'" : "")};
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      position: absolute;
      top: 40%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
`;
export const StyledCompareBanner = styled(StyledDiv)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 13vh;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 50;
  * {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;
export const StyledCompareBannerItem = styled(JustifyBetweenAlignCenter)`
  position: relative;
  gap: 1rem;
  padding: 0.5rem 1rem;
  height: max-content;
  * {
    color: ${({ theme }) => theme.colors.grey};
  }
  box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
  @media (max-width: 768px) {
    p {
      display: none;
    }
    padding: 0;
  }
`;
export const StyledTimesCompare = styled(StyledTimes)`
  top: 0;
  right: 0.5rem;
  font-size: 2rem;
`;
export const StyledCompareItem = styled(StyledDiv)`
  flex: 1;
  box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
  a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
  }
`;
export const StyledAdminList = styled(JustifyBetweenAlignCenter)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  @media (max-width: 768px) {
    * {
      text-align: center;
    }
  }
`;
export const StyledYellowButton = styled(StyledPrimaryFormButton)`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 1rem;
`;
export const StyledFieldButton = styled(StyledFormButton)`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
`;
export const StyledRemoveButton = styled(StyledFieldButton)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1rem;
  height: 3rem;
`;
export const StyledQuestionForm = styled(StyledDiv)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.5rem;
  padding: 3rem;
  margin-top: 1rem;
`;
export const StyledError = styled(StyledText)`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.9rem;
`;
