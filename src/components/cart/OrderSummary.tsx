import React from "react";
import {
  StyledDiv,
  StyledText,
  StyledCustomButton,
  StyledOrderSummary,
  SpaceBetween,
  FlexCol,
} from "../../styles/styled";
type OrderSummaryProps = {
  cart: {
    oldPrice: number;
    discount: number;
    quantity: number;
  }[];
};
const OrderSummary: React.FC<OrderSummaryProps> = ({ cart }) => {
  const totalOldPrice = cart.reduce(
    (total, item) => total + item.oldPrice * item.quantity,
    0
  );
  const totalDiscount = cart.reduce(
    (total, item) => total + item.discount * item.quantity,
    0
  );
  const finalPrice = totalOldPrice - totalDiscount;

  return (
    <StyledOrderSummary
      $width="100%"
      $bgcolor="lightgrey"
      $radius="1rem"
      $gap="1.5rem"
    >
      <StyledText $fw="700" $margin="0 0 1rem" $padding="1rem 0 0 1rem">
        Sipariş Özeti ({cart.length} Ürün)
      </StyledText>
      <SpaceBetween $padding="0 1rem">
        <h5>Ürünler Toplamı</h5>
        <StyledText as="h5" $fw="600">
          {totalOldPrice.toLocaleString("tr-TR")} TL
        </StyledText>
      </SpaceBetween>
      <FlexCol $gap="0.75rem" className="detail" $padding="1rem">
        <SpaceBetween>
          <h5>Kargo Tutarı</h5>
          <StyledText as="h5" $fw="600">
            Ücretsiz
          </StyledText>
        </SpaceBetween>
        <SpaceBetween>
          <StyledText as="h5" $color="blue">
            İndirimler
          </StyledText>
          {totalDiscount > 0 && (
            <StyledText as="h5" $fw="600" $color="blue">
              -{totalDiscount.toLocaleString("tr-TR")} TL
            </StyledText>
          )}
        </SpaceBetween>
        <SpaceBetween>
          <h5>Ödenecek Tutar (KDV Dahil)</h5>
          <StyledText as="h5" $fw="600">
            {finalPrice.toLocaleString("tr-TR")} TL
          </StyledText>
        </SpaceBetween>
      </FlexCol>
      <StyledDiv $padding="1rem">
        <StyledCustomButton
          as="button"
          $padding="1rem "
          $bgcolor="blue"
          $color="white"
          $radius=".5rem"
        >
          İndirim Kodu Ekle
        </StyledCustomButton>
        <StyledDiv $margin="1rem 0">
          <h5>
            <input type="checkbox" style={{ marginRight: "0.5rem" }} />
            Kullanıcı sözleşmesini okudum, onaylıyorum.
          </h5>
        </StyledDiv>
        <StyledCustomButton
          as="button"
          $padding="0.75rem"
          $bgcolor="yellow"
          $radius="2rem"
        >
          Siparişe Devam Et
        </StyledCustomButton>
      </StyledDiv>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
