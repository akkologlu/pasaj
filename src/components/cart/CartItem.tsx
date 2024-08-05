import {
  StyledCartItem,
  StyledCartItemBottom,
  StyledCol,
  StyledDiv,
  StyledText,
  StyledTimes,
  StyledCounter,
  SpaceBetween,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import React, { useState } from "react";

type CartItemProps = {
  item: {
    cartId: string;
    productId: string;
    title: string;
    image: string;
    seller: string;
    oldPrice: number;
    discount: number;
    quantity: number;
    Renk?: string;
    Hafıza?: string;
  };
  handleDelete: (id: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
};
const CartItem: React.FC<CartItemProps> = ({
  item,
  handleDelete,
  updateQuantity,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const price = item.oldPrice - item.discount;
  const incrementQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      updateQuantity(item.cartId, newQuantity);
      return newQuantity;
    });
  };
  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        updateQuantity(item.cartId, newQuantity);
        return newQuantity;
      }
      return prev;
    });
  };
  return (
    <StyledCartItem $radius="1rem" $pos="relative">
      <StyledTimes onClick={() => handleDelete(item.cartId)}>
        &times;
      </StyledTimes>
      <SpaceBetween $padding="2rem 1rem" $gap=".5rem">
        <StyledCol $sizemd={2}>
          <CustomImage src={item.image} alt={item.title} height={75} />
        </StyledCol>
        <StyledCol $sizemd={2}>
          <StyledText $fw="600">{item.title}</StyledText>
          <StyledText $color="#8e9fad">{item.Renk}</StyledText>
        </StyledCol>
        <StyledCol $sizemd={2}>
          <StyledText $color="#8e9fad" $fs="14px" $fw="400">
            Birim Fiyat
          </StyledText>
          <StyledText $color="#8e9fad" $fw="600">
            {item.oldPrice.toLocaleString("tr-TR")} <small>TL</small>
          </StyledText>
          {item.discount > 0 && (
            <StyledText $fs="18px" $color="#00bafc" $fw="600">
              - {item.discount.toLocaleString("tr-TR")} <small>TL</small>
            </StyledText>
          )}
        </StyledCol>
        <StyledCol $sizemd={2}>
          <StyledText $fs="14px" $fw="600" $margin="0 0 0.5rem" $center={true}>
            Adet
          </StyledText>
          <StyledCounter
            $radius="1rem"
            $padding="0.25rem 0.5rem"
            $width="80px"
            $margin="0 auto"
          >
            <StyledDiv
              as="button"
              onClick={decrementQuantity}
              $bgcolor="transparent"
            >
              &ndash;
            </StyledDiv>
            <StyledText $fs="14px">{quantity}</StyledText>
            <StyledDiv
              as="button"
              onClick={incrementQuantity}
              $bgcolor="transparent"
            >
              +
            </StyledDiv>
          </StyledCounter>
        </StyledCol>
        <StyledCol $sizemd={2}>
          <StyledText $align="right" $fs="12px" $margin="0 0 .5rem 0">
            Tutar
          </StyledText>
          <StyledText $color="#253342" $align="right" $fs="18px" $fw="600">
            {(price * quantity).toLocaleString("tr-TR")}
            <StyledText as="sup" $fs="8px">
              TL
            </StyledText>
          </StyledText>
        </StyledCol>
      </SpaceBetween>
      <StyledCartItemBottom $padding="1rem">
        <StyledText $fw="400" $fs="12px" $color="#2855ac">
          Satıcı:
          <StyledText as="span" $fw="600">
            {item.seller}
          </StyledText>
        </StyledText>
      </StyledCartItemBottom>
    </StyledCartItem>
  );
};

export default CartItem;
