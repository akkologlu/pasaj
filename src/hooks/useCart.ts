import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "@/lib/api";
import { Cart } from "@/types/cartType";
import { Product } from "@/types/productType";
import toast from "react-hot-toast";
type MutationVariables = {
  userId: string;
  cartData: Cart[];
};
const useCart = (userId: string, cart: Cart[]) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ userId, cartData }: MutationVariables) =>
      addToCart({ userId, cartData }),
    onSuccess: (res) => {
      queryClient.setQueryData(["cart"], res.cart);
    },
    onError: () => {
      toast.error("Ürün sepete eklenirken bir hata oluştu!");
    },
  });
  const calculateProductCount = (productId: string | number) => {
    return cart.reduce(
      (acc, item) => (item.productId === productId ? acc + item.quantity : acc),
      1
    );
  };
  const handleAddToCart = (
    product: Product,
    formData: { [key: string]: any }
  ) => {
    const quantity = calculateProductCount(product.id);
    if (quantity > product.limit) {
      return toast.error(
        `Bu üründen en fazla ${product.limit} tane alabilirsiniz!`
      );
    }
    const config = product.configration.reduce(
      (acc: { [key: string]: any }, config: { title: string }) => {
        acc[config.title] = formData[config.title];
        return acc;
      },
      {}
    );
    let isProductInCart = false;
    const updatedCartItems = cart.map((item) => {
      if (
        item.productId === product.id &&
        Object.keys(config).every((key) => item[key] === config[key])
      ) {
        isProductInCart = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    if (!isProductInCart) {
      updatedCartItems.push({
        cartId: crypto.randomUUID(),
        productId: product.id,
        title: product.title,
        image: product.images[0],
        seller: product.seller,
        oldPrice: product.price,
        discount: product.discountPrice,
        limit: product.limit,
        quantity: 1,
        ...config,
      });
    }
    toast.success("Ürün sepete eklendi!");
    mutate({
      userId,
      cartData: updatedCartItems,
    });
  };
  const handleUpdateQuantity = (
    cartId: string | number,
    quantity: number,
    productId: number | string,
    itemLimit: number
  ) => {
    const updatedCart = cart.map((item) =>
      item.cartId === cartId ? { ...item, quantity } : item
    );
    mutate({
      userId,
      cartData: updatedCart,
    });
  };
  const handleDelete = (cartId: string | number) => {
    const updatedCart = cart.filter((item) => item.cartId !== cartId);
    mutate({
      userId,
      cartData: updatedCart,
    });
  };
  return {
    handleAddToCart,
    handleUpdateQuantity,
    handleDelete,
  };
};
export default useCart;
