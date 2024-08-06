import {
  AddButton,
  RatingBadge,
  SpaceBetween,
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
      <SpaceBetween>
        <RatingBadge $fs="12px" $fw="500" $color="white">
          {rating.toFixed(1)}
        </RatingBadge>
        <StyledText
          as="h5"
          $fw="700"
          $margin="8px 0"
          $color="blue"
          $center="center"
        >
          {storeName.length > 30 ? `${storeName.slice(0, 30)}...` : storeName}
        </StyledText>
      </SpaceBetween>
      <SpaceBetween>
        <StyledText as="h3" $color="grey" $margin="8px 0">
          {price.toLocaleString("tr-TR")}
          <StyledText as="sup" $fs=".85rem">
            TL
          </StyledText>
        </StyledText>
        <StyledDiv $display="flex" $direction="column" $align="center">
          <AddButton>Ekle</AddButton>
          <StyledText as="small" $fw="500" $margin="4px 0">
            {deliveryTime}
          </StyledText>
        </StyledDiv>
      </SpaceBetween>
    </StyledOtherSellerCard>
  );
};

export default OtherSellerCard;
