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
      $bgcolor="#F5F7F9"
      $radius="1rem"
      $gap="1.5rem"
    >
      <StyledText
        $fs="1rem"
        $fw="600"
        $margin="0 0 1rem"
        $padding="1rem 0 0 1rem"
      >
        Sipariş Özeti ({cart.length} Ürün)
      </StyledText>
      <SpaceBetween $padding="0 1rem">
        <StyledText $fs="0.875rem" $color="#666">
          Ürünler Toplamı
        </StyledText>
        <StyledText $fs="0.875rem" $fw="600">
          {totalOldPrice.toLocaleString("tr-TR")} TL
        </StyledText>
      </SpaceBetween>
      <FlexCol $gap="0.75rem" className="detail" $padding="1rem">
        <SpaceBetween>
          <StyledText $fs="0.875rem" $color="#666">
            Kargo Tutarı
          </StyledText>
          <StyledText $fs="0.875rem" $fw="600">
            Ücretsiz
          </StyledText>
        </SpaceBetween>
        <SpaceBetween>
          <StyledText $fs="0.875rem" $color="#007bff">
            İndirimler
          </StyledText>
          {totalDiscount > 0 && (
            <StyledText $fs="0.875rem" $color="#007bff">
              -{totalDiscount.toLocaleString("tr-TR")} TL
            </StyledText>
          )}
        </SpaceBetween>
        <SpaceBetween>
          <StyledText $fs="0.875rem" $color="#666">
            Ödenecek Tutar (KDV Dahil)
          </StyledText>
          <StyledText $fs="0.875rem" $color="#666">
            {finalPrice.toLocaleString("tr-TR")} TL
          </StyledText>
        </SpaceBetween>
      </FlexCol>
      <StyledDiv $padding="1rem">
        <StyledCustomButton
          as="button"
          $padding="1rem "
          $bgcolor="#2855ac"
          $color="#fff"
          $radius=".5rem"
        >
          İndirim Kodu Ekle
        </StyledCustomButton>
        <StyledDiv $margin="1rem 0">
          <StyledText $fs="0.875rem">
            <label>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Kullanıcı sözleşmesini okudum, onaylıyorum.
            </label>
          </StyledText>
        </StyledDiv>
        <StyledCustomButton
          as="button"
          $padding="0.75rem"
          $bgcolor="#ffc107"
          $radius="2rem"
        >
          Siparişe Devam Et
        </StyledCustomButton>
      </StyledDiv>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
