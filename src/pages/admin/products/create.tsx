import ProductForm from "@/components/admin/ProductForm";
import { createProduct } from "@/lib/api";
import { StyledDiv, StyledText } from "@/styles/styled";
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
    <StyledDiv $margin="1rem 0">
      <StyledText as="h3" $center="center" $margin="2rem 0" $color="darkBlue">
        Ürün Ekle
      </StyledText>
      <ProductForm onSubmit={handleCreateProduct} submitText="Create" />
    </StyledDiv>
  );
};

export default CreateProduct;
