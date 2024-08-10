import ProductForm from "@/components/admin/ProductForm";
import { createProduct } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Ürün başarıyla oluşturuldu.");
      router.push("/admin");
    },
    onError: () => {
      toast.error("Ürün oluşturulurken bir hata oluştu.");
    },
  });
  const handleCreateProduct = async (data: any) => {
    const newProduct = {
      ...data,
      comments: [],
      qa: [],
      badges: [],
    };
    mutate(newProduct);
  };

  return (
    <div>
      <h1>Create Product</h1>
      <ProductForm onSubmit={handleCreateProduct} submitText="Create" />
    </div>
  );
};

export default CreateProduct;
