import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ProductForm from "@/components/admin/ProductForm";
import { fetchProduct, updateProduct } from "@/lib/api";
import toast from "react-hot-toast";
import { Product } from "@/types/productType";

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string),
    enabled: !!id,
  });

  const { mutate } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Ürün başarıyla güncellendi");
      router.push("/admin");
    },
    onError: () => {
      toast.error("Ürün güncellenirken bir hata oluştu");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Product could not be fetched</p>;

  const handleUpdateProduct = async (data: Product) => {
    mutate({ ...data, id: product.id });
  };

  return (
    <div>
      <h1>Edit Product</h1>
      {product && (
        <ProductForm
          initialValues={product}
          onSubmit={handleUpdateProduct}
          submitText="Update"
        />
      )}
    </div>
  );
};

export default EditProduct;
