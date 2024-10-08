import { FieldError, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types/productType";
import { productSchema } from "@/validation/product";
import { useEffect, useState } from "react";
import { checkboxLabels, numberLabels, stringLabels } from "@/lib/mockData";
import {
  FlexCol,
  JustifyBetweenAlignCenter,
  SpaceBetween,
  StyledCol,
  StyledContainer,
  StyledFieldButton,
  StyledInput,
  StyledLabel,
  StyledPrimaryFormButton,
  StyledRemoveButton,
} from "@/styles/styled";
import { uploadImage } from "@/lib/cloudinary";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
type ProductFormProps = {
  initialValues?: Product;
  onSubmit: (data: Product) => void;
  submitText: string;
};
const ProductForm = ({
  initialValues,
  onSubmit,
  submitText,
}: ProductFormProps) => {
  const [subcategories, setSubcategories] = useState<Record<string, string>>();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: { ...initialValues },
  });
  useEffect(() => {
    if (initialValues?.categoryUrl) {
      handleCategoryChange(initialValues.categoryUrl);
      setTimeout(() => {
        setValue("subcategoryUrl", initialValues?.subcategoryUrl || "");
      }, 0);
    }
  }, [initialValues?.categoryUrl]);
  const [images, setImages] = useState<string[]>(initialValues?.images || []);
  const { mutate, isPending: imageLoading } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (url) => {
      setImages([...images, url]);
      setValue("images", [...images, url]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      mutate(file);
    }
  };
  const {
    fields: configFields,
    append: appendConfig,
    remove: removeConfig,
  } = useFieldArray({
    control,
    name: "configration",
  });
  const {
    fields: specificationFields,
    append: appendSpecification,
    remove: removeSpecification,
  } = useFieldArray({
    control,
    name: "specifications",
  });

  const handleCategoryChange = (categoryUrl: string) => {
    switch (categoryUrl) {
      case "telefon":
        setSubcategories({
          "ios-telefonlar": "IOS Telefonlar",
          "android-telefonlar": "Android Telefonlar",
        });
        setValue("category", "Telefon");
        break;
      case "bilgisayar":
        setSubcategories({
          masaustu: "Masaüstü",
          dizustu: "Dizüstü",
          tablet: "Tablet",
          macbook: "Macbook",
        });
        setValue("category", "Bilgisayar");
        break;
      case "beyaz-esya":
        setSubcategories({
          buzdolaplari: "Buzdolabı",
          "camasir-makineleri": "Çamaşır Makinesi",
          "bulasik-makineleri": "Bulaşık Makinesi",
        });
        setValue("category", "Beyaz Eşya");
        break;
      case "ev-aletleri":
        setSubcategories({
          supurge: "Süpürge",
          mikser: "Mikser",
          "kahve-makinesi": "Kahve Makinesi",
          utuler: "Ütüler",
        });
        setValue("category", "Ev Aletleri");
        break;
      default:
        setSubcategories({});
        setValue("category", "");
    }
  };
  const handleSubcategoryChange = (subcategoryUrl: string) => {
    const subcategoryName = subcategories?.[subcategoryUrl];
    setValue("subcategory", subcategoryName || "");
  };
  return (
    <StyledContainer>
      <SpaceBetween as="form" onSubmit={handleSubmit(onSubmit)} $wrap={true}>
        <StyledCol $sizemd={3.75}>
          {stringLabels.map((label) => (
            <FlexCol key={label.db} $margin="1rem 0">
              <label>{label.title}</label>
              <StyledInput {...register(label.db)} />
              {errors[label.db] && (
                <p>{(errors[label.db] as FieldError)?.message}</p>
              )}
            </FlexCol>
          ))}

          <FlexCol>
            <label>Konfigrasyon</label>
            {configFields.map((configField, configIndex) => (
              <div key={configField.id}>
                <JustifyBetweenAlignCenter>
                  <StyledInput
                    placeholder="Configuration Title"
                    {...register(`configration.${configIndex}.title` as const)}
                  />
                  <StyledRemoveButton
                    type="button"
                    onClick={() => removeConfig(configIndex)}
                  >
                    Kaldır
                  </StyledRemoveButton>
                </JustifyBetweenAlignCenter>
                <ConfigOptions
                  control={control}
                  configIndex={configIndex}
                  register={register}
                />
              </div>
            ))}
            <StyledFieldButton
              type="button"
              onClick={() => appendConfig({ title: "", options: [""] })}
            >
              Konfigrasyon Ekle
            </StyledFieldButton>
          </FlexCol>
        </StyledCol>
        <StyledCol $sizemd={3.75}>
          {numberLabels.map((label) => (
            <FlexCol key={label.db} $margin="1rem 0">
              <label>{label.title}</label>
              <StyledInput
                step={label.db === "rating" ? "0.1" : "1"}
                type="number"
                {...register(label.db, { valueAsNumber: true })}
              />
              {errors[label.db] && (
                <p>{(errors[label.db] as FieldError)?.message}</p>
              )}
            </FlexCol>
          ))}
          <FlexCol>
            <label>İndirim Bitiş Tarihi</label>
            <StyledInput type="date" {...register("endOfDiscount")} />
            {errors.endOfDiscount && <p>{errors.endOfDiscount.message}</p>}
          </FlexCol>
          <FlexCol>
            <label>Resimler</label>
            {images.map((img, index) => (
              <JustifyBetweenAlignCenter key={index}>
                <StyledInput type="text" value={img} readOnly />
                <StyledRemoveButton
                  type="button"
                  onClick={() => {
                    setImages(images.filter((_, i) => i !== index));
                    setValue(
                      "images",
                      images.filter((_, i) => i !== index)
                    );
                  }}
                >
                  Kaldır
                </StyledRemoveButton>
              </JustifyBetweenAlignCenter>
            ))}
            {imageLoading ? (
              <p>Fotoğraf yükleniyor. Lütfen bekleyiniz...</p>
            ) : (
              <StyledInput
                type="file"
                onChange={handleFileUpload}
                accept="image/*"
              />
            )}
          </FlexCol>
        </StyledCol>
        <StyledCol $sizemd={3.75}>
          <FlexCol>
            <label>Category</label>
            <StyledInput
              as="select"
              {...register("categoryUrl", {
                onChange: (e) => handleCategoryChange(e.target.value),
              })}
            >
              <option value="">Select a category</option>
              <option value="telefon">Telefon</option>
              <option value="bilgisayar">Bilgisayar</option>
              <option value="beyaz-esya">Beyaz Eşya</option>
              <option value="ev-aletleri">Ev Aletleri</option>
            </StyledInput>
            {errors.categoryUrl && <p>{errors.categoryUrl.message}</p>}
          </FlexCol>

          <StyledCol>
            <label>Subcategory</label>
            <StyledInput
              as="select"
              {...register("subcategoryUrl", {
                onChange: (e) => handleSubcategoryChange(e.target.value),
              })}
            >
              <option value="">Select a subcategory</option>
              {Object.entries(subcategories ?? {}).map(([url, name]) => (
                <option key={url} value={url}>
                  {name}
                </option>
              ))}
            </StyledInput>
            {errors.subcategoryUrl && <p>{errors.subcategoryUrl.message}</p>}
          </StyledCol>

          <FlexCol $gap="1rem">
            {checkboxLabels.map((label) => (
              <StyledLabel key={label.db}>
                {label.title}
                <input type="checkbox" {...register(label.db)} />
              </StyledLabel>
            ))}

            <FlexCol>
              <label>Özellikler</label>
              {specificationFields.map((field, index) => (
                <JustifyBetweenAlignCenter $gap="1rem" key={field.id}>
                  <StyledInput
                    type="text"
                    placeholder="Title"
                    {...register(`specifications.${index}.title` as const, {
                      required: true,
                    })}
                  />
                  <StyledInput
                    type="text"
                    placeholder="Value"
                    {...register(`specifications.${index}.value` as const, {
                      required: true,
                    })}
                  />
                  {errors.specifications?.[index] && (
                    <p>{errors.specifications[index]?.message}</p>
                  )}
                  <StyledRemoveButton
                    type="button"
                    onClick={() => removeSpecification(index)}
                  >
                    Kaldır
                  </StyledRemoveButton>
                </JustifyBetweenAlignCenter>
              ))}
              <StyledFieldButton
                type="button"
                onClick={() => appendSpecification({ title: "", value: "" })}
              >
                Özellik Ekle
              </StyledFieldButton>
            </FlexCol>
            <StyledPrimaryFormButton type="submit">
              {submitText}
            </StyledPrimaryFormButton>
          </FlexCol>
        </StyledCol>
        {errors.root && <p>{errors.root.message}</p>}
      </SpaceBetween>
    </StyledContainer>
  );
};
type ConfigOptionsProps = {
  control: any;
  configIndex: number;
  register: any;
};

const ConfigOptions: React.FC<ConfigOptionsProps> = ({
  control,
  configIndex,
  register,
}) => {
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `configration.${configIndex}.options`,
  });

  return (
    <FlexCol>
      <label>Seçenek</label>
      {optionFields.map((optionField, optionIndex) => (
        <JustifyBetweenAlignCenter key={optionField.id}>
          <StyledInput
            placeholder={`Option ${optionIndex + 1}`}
            {...register(
              `configration.${configIndex}.options.${optionIndex}` as const
            )}
          />
          <StyledRemoveButton
            type="button"
            onClick={() => removeOption(optionIndex)}
          >
            Kaldır
          </StyledRemoveButton>
        </JustifyBetweenAlignCenter>
      ))}
      <StyledFieldButton type="button" onClick={() => appendOption("")}>
        Seçenek Ekle
      </StyledFieldButton>
    </FlexCol>
  );
};
export default ProductForm;
