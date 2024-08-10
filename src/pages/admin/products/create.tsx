import ProductForm from "@/components/admin/ProductForm";
import { createProduct } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const handleCreateProduct = async (data: any) => {
    const newProduct = {
      ...data,
      configration: [],
      specifications: [],
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
