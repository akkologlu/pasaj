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
import { Cart } from "@/types/cartType";

type CartItemProps = {
  item: Cart;
  handleDelete: (id: string | number) => void;
  updateQuantity: (
    cartId: string | number,
    quantity: number,
    productId: string | number,
    itemLimit: number
  ) => boolean;
};
const CartItem: React.FC<CartItemProps> = ({
  item,
  handleDelete,
  updateQuantity,
}) => {
  const {
    cartId,
    productId,
    title,
    image,
    discount,
    seller,
    oldPrice,
    limit,
    quantity,
    ...config
  } = item;

  const [quantityLocal, setQuantity] = useState(item.quantity);
  const price = item.oldPrice - item.discount;
  const incrementQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      const isUpdated = updateQuantity(
        item.cartId,
        newQuantity,
        item.productId,
        item.limit
      );
      return isUpdated ? newQuantity : prev;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        updateQuantity(item.cartId, newQuantity, item.productId, item.limit);
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
      <SpaceBetween $padding="2rem 1rem" $gap=".5rem" $wrap={true}>
        <StyledCol $sizemd={2} $sizesm={5} className="top">
          <CustomImage src={item.image} alt={item.title} height={75} />
        </StyledCol>
        <StyledCol $sizemd={2} $sizesm={6} className="top">
          <p>{item.title}</p>
          {Object.keys(config).map((key) => (
            <StyledText
              as="span"
              $padding="0 .25rem 0 0"
              $color="light"
              key={key}
            >
              {config[key]}
            </StyledText>
          ))}
        </StyledCol>
        <StyledCol $sizemd={2} $sizesm={3.5}>
          <StyledText $color="light">Birim Fiyat</StyledText>
          <StyledText $color="light" $fw="700">
            {item.oldPrice.toLocaleString("tr-TR")} <small>TL</small>
          </StyledText>
          {item.discount > 0 && (
            <StyledText $fs="18px" $color="cyan" $fw="600">
              - {item.discount.toLocaleString("tr-TR")} <small>TL</small>
            </StyledText>
          )}
        </StyledCol>
        <StyledCol $sizemd={2} $sizesm={3.5}>
          <StyledText $margin="0 0 0.5rem" $center="center">
            Adet
          </StyledText>
          <StyledCounter
            $radius="1rem"
            $padding="0.25rem 0.5rem"
            $width="80px"
            $margin="0 auto"
          >
            <StyledDiv as="button" onClick={decrementQuantity}>
              &ndash;
            </StyledDiv>
            <StyledText $fs="14px">{quantityLocal}</StyledText>
            <StyledDiv as="button" onClick={incrementQuantity}>
              +
            </StyledDiv>
          </StyledCounter>
        </StyledCol>
        <StyledCol $sizemd={2} $sizesm={3.5}>
          <StyledText $align="right" $fs="12px" $margin="0 0 .5rem 0">
            Tutar
          </StyledText>
          <StyledText $align="right" as="h4">
            {(price * quantityLocal).toLocaleString("tr-TR")}
            <sup>TL</sup>
          </StyledText>
        </StyledCol>
      </SpaceBetween>
      <StyledCartItemBottom $padding="1rem">
        <StyledText as="small" $color="blue">
          Satıcı: {item.seller}
        </StyledText>
      </StyledCartItemBottom>
    </StyledCartItem>
  );
};

export default CartItem;
