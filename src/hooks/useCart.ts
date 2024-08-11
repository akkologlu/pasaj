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

  const handleMutation = (updatedCart: Cart[]) => {
    mutate({ userId, cartData: updatedCart });
  };

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
      0
    );
  };

  const handleAddToCart = (
    product: Product,
    formData: { [key: string]: string | number }
  ) => {
    const quantity = calculateProductCount(product.id) + 1;
    if (quantity > product.limit) {
      return toast.error(
        `Bu üründen en fazla ${product.limit} tane alabilirsiniz!`
      );
    }

    const config = product.configration.reduce((acc, config) => {
      acc[config.title] = formData[config.title];
      return acc;
    }, {} as { [key: string]: string | number });

    let updatedCartItems = cart.map((item) =>
      item.productId === product.id &&
      Object.keys(config).every((key) => item[key] === config[key])
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    if (!cart.some((item) => item.productId === product.id)) {
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
    handleMutation(updatedCartItems);
  };

  const handleUpdateQuantity = (
    cartId: string | number,
    quantity: number,
    productId: number | string,
    itemLimit: number
  ): boolean => {
    const currentItem = cart.find((item) => item.cartId === cartId);
    if (!currentItem) {
      toast.error("Ürün sepette bulunamadı!");
      return false;
    }

    const totalQuantityInCart =
      calculateProductCount(productId) - currentItem.quantity + quantity;
    if (totalQuantityInCart > itemLimit) {
      toast.error(`Bu üründen en fazla ${itemLimit} tane alabilirsiniz!`);
      return false;
    }

    const updatedCart = cart.map((item) =>
      item.cartId === cartId ? { ...item, quantity } : item
    );
    handleMutation(updatedCart);
    return true;
  };

  const handleDelete = (cartId: string | number) => {
    const updatedCart = cart.filter((item) => item.cartId !== cartId);
    handleMutation(updatedCart);
  };

  return {
    handleAddToCart,
    handleUpdateQuantity,
    handleDelete,
  };
};

export default useCart;
