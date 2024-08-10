import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types/productType";
import { productSchema } from "@/validation/product";
import { useEffect, useState } from "react";
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
  const [images, setImages] = useState<string[]>(initialValues?.images || []);
  const [subcategories, setSubcategories] = useState<Record<string, string>>();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: { ...initialValues, images },
  });
  useEffect(() => {
    if (initialValues?.categoryUrl) {
      handleCategoryChange(initialValues.categoryUrl);
      setValue("subcategoryUrl", initialValues.subcategoryUrl || "");
    }
  }, [initialValues?.categoryUrl]);
  const handleAddImage = () => {
    if (images[images.length - 1] !== "") {
      setImages([...images, ""]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

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

  const onSubmitForm = (data: Product) => {
    if (images[images.length - 1] !== "") {
      onSubmit({ ...data, images });
    } else {
      toast.error("Please fill out the last image field before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
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
          type="datetime-local"
          {...register("endOfDiscount", { valueAsDate: true })}
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
        <label>Best Offers</label>
        <input type="checkbox" {...register("bestOffers")} />
      </div>
      <div>
        <label>Images</label>
        {images.map((image, index) => (
          <div key={index}>
            <input
              type="text"
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              required
            />
            {errors.images?.[index] && <p>{errors.images[index]?.message}</p>}
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddImage}
          disabled={images[images.length - 1] === ""}
        >
          Add Image
        </button>
      </div>
      <button type="submit">{submitText}</button>
    </form>
  );
};

export default ProductForm;
