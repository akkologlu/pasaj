import {
  AddButton,
  RatingBadge,
  StyledDiv,
  StyledOtherSellerCard,
  StyledText,
} from "@/styles/styled";
type OtherSellerCardProps = {
  rating: number;
  storeName: string;
  price: number;
  deliveryTime: string;
};
const OtherSellerCard: React.FC<OtherSellerCardProps> = ({
  rating,
  storeName,
  price,
  deliveryTime,
}) => {
  return (
    <StyledOtherSellerCard>
      <StyledDiv $display="flex" $justify="space-between">
        <RatingBadge $fs="12px" $fw="500" $color="#fff">
          {rating.toFixed(1)}
        </RatingBadge>
        <StyledText
          $fs="14px"
          $fw="700"
          $margin="8px 0"
          $color="#2855ac"
          $center={true}
        >
          {storeName.length > 30 ? `${storeName.slice(0, 30)}...` : storeName}
        </StyledText>
      </StyledDiv>
      <StyledDiv $display="flex" $justify="space-between">
        <StyledText $fs="1.5rem" $fw="700" $color="#5f6b76" $margin="8px 0">
          {price.toLocaleString("tr-TR")}
          <StyledText as="sup" $fs="12px">
            TL
          </StyledText>
        </StyledText>
        <StyledDiv $display="flex" $direction="column" $align="center">
          <AddButton>Ekle</AddButton>
          <StyledText $fs="12px" $color="#777" $margin="4px 0">
            {deliveryTime}
          </StyledText>
        </StyledDiv>
      </StyledDiv>
    </StyledOtherSellerCard>
  );
};

export default OtherSellerCard;
