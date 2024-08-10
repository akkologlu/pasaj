import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types/productType";
import { productSchema } from "@/validation/product";
import { useEffect, useState } from "react";

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
    watch,
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
      setValue("subcategoryUrl", initialValues.subcategoryUrl || "");
    }
  }, [initialValues?.categoryUrl]);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });
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
        });
        setValue("category", "Bilgisayar");
        break;
      case "beyaz-esya":
        setSubcategories({
          buzdolabi: "Buzdolabı",
          "camasir-makinesi": "Çamaşır Makinesi",
          "bulasik-makinesi": "Bulaşık Makinesi",
        });
        setValue("category", "Beyaz Eşya");
        break;
      case "ev-aletleri":
        setSubcategories({
          supurge: "Süpürge",
          mikser: "Mikser",
          "kahve-makinesi": "Kahve Makinesi",
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>Configurations</label>
        {configFields.map((configField, configIndex) => (
          <div key={configField.id} style={{ marginBottom: "20px" }}>
            <input
              placeholder="Configuration Title"
              {...register(`configration.${configIndex}.title` as const)}
            />
            <button type="button" onClick={() => removeConfig(configIndex)}>
              Remove Configuration
            </button>
            <ConfigOptions
              control={control}
              configIndex={configIndex}
              register={register}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendConfig({ title: "", options: [""] })}
        >
          Add Configuration
        </button>
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          step="0.1"
          {...register("rating", { valueAsNumber: true })}
        />
        {errors.rating && <p>{errors.rating.message}</p>}
      </div>

      <div>
        <label>Stock</label>
        <input type="number" {...register("stock", { valueAsNumber: true })} />
        {errors.stock && <p>{errors.stock.message}</p>}
      </div>

      <div>
        <label>Number of Sales</label>
        <input
          type="number"
          {...register("nofSales", { valueAsNumber: true })}
        />
        {errors.nofSales && <p>{errors.nofSales.message}</p>}
      </div>

      <div>
        <label>Brand</label>
        <input {...register("brand")} />
        {errors.brand && <p>{errors.brand.message}</p>}
      </div>

      <div>
        <label>Seller</label>
        <input {...register("seller")} />
        {errors.seller && <p>{errors.seller.message}</p>}
      </div>

      <div>
        <label>Price</label>
        <input type="number" {...register("price", { valueAsNumber: true })} />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label>Credit Card Available</label>
        <input type="checkbox" {...register("creditCard")} />
      </div>

      <div>
        <label>Installment Count</label>
        <input
          type="number"
          {...register("installmentCount", { valueAsNumber: true })}
        />
        {errors.installmentCount && <p>{errors.installmentCount.message}</p>}
      </div>

      <div>
        <label>Installment Price</label>
        <input
          type="number"
          {...register("installmentPrice", { valueAsNumber: true })}
        />
        {errors.installmentPrice && <p>{errors.installmentPrice.message}</p>}
      </div>

      <div>
        <label>Limit</label>
        <input type="number" {...register("limit", { valueAsNumber: true })} />
        {errors.limit && <p>{errors.limit.message}</p>}
      </div>

      <div>
        <label>End of Discount</label>
        <input
          type="date"
          {...register("endOfDiscount", {
            valueAsDate: true,
          })}
        />
        {errors.endOfDiscount && <p>{errors.endOfDiscount.message}</p>}
      </div>

      <div>
        <label>Discount Price</label>
        <input
          type="number"
          {...register("discountPrice", { valueAsNumber: true })}
        />
        {errors.discountPrice && <p>{errors.discountPrice.message}</p>}
      </div>
      <div>
        <label>Category</label>
        <select
          {...register("categoryUrl", {
            onChange: (e) => handleCategoryChange(e.target.value),
          })}
        >
          <option value="">Select a category</option>
          <option value="telefon">Telefon</option>
          <option value="bilgisayar">Bilgisayar</option>
          <option value="beyaz-esya">Beyaz Eşya</option>
          <option value="ev-aletleri">Ev Aletleri</option>
        </select>
        {errors.categoryUrl && <p>{errors.categoryUrl.message}</p>}
      </div>

      <div>
        <label>Subcategory</label>
        <select
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
        </select>
        {errors.subcategoryUrl && <p>{errors.subcategoryUrl.message}</p>}
      </div>

      <div>
        <label>Free Shipping</label>
        <input type="checkbox" {...register("freeShipping")} />
      </div>

      <div>
        <label>Guarantee Available</label>
        <input type="checkbox" {...register("guarantee")} />
      </div>
      <div>
        <label>Description</label>
        <textarea {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label>Fibabanka Available</label>
        <input type="checkbox" {...register("fibabanka")} />
      </div>

      <div>
        <label>Special For You</label>
        <input type="checkbox" {...register("specialForYou")} />
      </div>

      <div>
        <label>New Product</label>
        <input type="checkbox" {...register("newProduct")} />
      </div>
      <div>
        <label>Specifications</label>
        {specificationFields.map((field, index) => (
          <div key={field.id}>
            <input
              type="text"
              placeholder="Title"
              {...register(`specifications.${index}.title` as const, {
                required: true,
              })}
            />
            <input
              type="text"
              placeholder="Value"
              {...register(`specifications.${index}.value` as const, {
                required: true,
              })}
            />
            {errors.specifications?.[index] && (
              <p>{errors.specifications[index]?.message}</p>
            )}
            <button type="button" onClick={() => removeSpecification(index)}>
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendSpecification({ title: "", value: "" })}
        >
          Add Specification
        </button>
      </div>
      <div>
        <label>Best Offers</label>
        <input type="checkbox" {...register("bestOffers")} />
      </div>
      <div>
        <label>Images</label>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="text"
              {...register(`images.${index}` as const, { required: true })}
            />
            {errors.images?.[index] && <p>{errors.images[index]?.message}</p>}
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ image: "" })}>
          Add Image
        </button>
      </div>
      <button type="submit">{submitText}</button>
    </form>
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
    <div>
      <label>Options</label>
      {optionFields.map((optionField, optionIndex) => (
        <div key={optionField.id}>
          <input
            placeholder={`Option ${optionIndex + 1}`}
            {...register(
              `configration.${configIndex}.options.${optionIndex}` as const
            )}
          />
          <button type="button" onClick={() => removeOption(optionIndex)}>
            Remove Option
          </button>
        </div>
      ))}
      <button type="button" onClick={() => appendOption("")}>
        Add Option
      </button>
    </div>
  );
};
export default ProductForm;
