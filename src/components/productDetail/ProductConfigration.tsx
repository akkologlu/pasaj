import useCart from "@/hooks/useCart";
import { useFetchUserCart } from "@/hooks/useDataFetching";
import useFavorite from "@/hooks/useFavorite";
import {
  AlignCenter,
  JustifyBetweenAlignCenter,
  Label,
  OptionWrapper,
  PriceSection,
  SpaceBetween,
  StyledBluePrice,
  StyledConfigurator,
  StyledCountDown,
  StyledHeartDetail,
  StyledSelect,
  StyledText,
} from "@/styles/styled";
import { Option, Product } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import { Session } from "next-auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
type ProductConfigrationProps = {
  session: Session;
  data: Product;
};
const ProductConfigration: React.FC<ProductConfigrationProps> = ({
  session,
  data,
}) => {
  const { data: cart } = useFetchUserCart(session?.user?.id);
  const { handleAddToCart } = useCart(session?.user?.id, cart);
  const { isFav, handleFav } = useFavorite(data);
  const [selectedOption, setSelectedOption] = useState(2);

  const options = [
    {
      id: 1,
      label: "Alışveriş Kredisi",
      price: data.installmentPrice,
      fullPrice: data.installmentPrice * data.installmentCount,
      installmentCount: `TL x ${data.installmentCount} AY`,
      delivery:
        "Kredi sorgulama sonucunuza göre tutarlar değişiklik gösterebilir.",
    },
    {
      id: 2,
      label: "Turkcell Satış A.Ş.",
      price: data.price - data.discountPrice,
      fullPrice: data.price - data.discountPrice,
      oldPrice: data.price,
      discount: "75.499 TL %12 İndirim",
      delivery: "1 iş gününde kargoda",
    },
  ];
  const defaultOption = options.find((option) => option.id === selectedOption);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Record<string, string | number>>({
    defaultValues: {
      price: defaultOption ? defaultOption.fullPrice : 0,
    },
  });
  return (
    <StyledConfigurator
      $gap="1.5rem"
      as="form"
      onSubmit={handleSubmit((formData) => {
        if (!session) {
          return toast.error("Lütfen giriş yapınız.");
        }
        handleAddToCart(data, formData);
      })}
    >
      <JustifyBetweenAlignCenter>
        <h1>{data.title}</h1>{" "}
        <StyledHeartDetail onClick={handleFav}>
          {isFav ? (
            <FaHeart size={30} color="#ffc900" />
          ) : (
            <CiHeart size={36} color="#ffc900" />
          )}
        </StyledHeartDetail>
      </JustifyBetweenAlignCenter>

      <AlignCenter $gap="0.5rem">
        <Rating style={{ maxWidth: 80 }} value={data.rating} readOnly />
        <small>{data.rating}</small>
      </AlignCenter>
      <SpaceBetween>
        <StyledText $fw="700">
          İndirim bitmesine{" "}
          <StyledCountDown as="span" $color="grey" $fs=".85rem">
            <span>1</span> Gn <span>10</span> Sa <span>16</span> Dk
          </StyledCountDown>{" "}
          kaldı.
        </StyledText>{" "}
        <StyledText $fw="700" $color="yellow">
          {data.stock}&apos;dan az ürün kalmıştır.
        </StyledText>
      </SpaceBetween>
      <SpaceBetween $gap="1rem">
        {data.configration.map((config: Option, index: number) => (
          <StyledSelect $sizemd={5.75} key={index}>
            <label htmlFor={config.title}>{config.title}</label>
            <select
              {...register(config.title)}
              name={config.title}
              id={config.title}
            >
              {config.options.map((option: string, index: number) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </StyledSelect>
        ))}
      </SpaceBetween>
      {options.map((option) => (
        <OptionWrapper
          $radius="5px"
          $padding="0 0.5rem"
          $textAlign="center"
          key={option.id}
          $selected={selectedOption === option.id}
          onClick={() => {
            setSelectedOption(option.id);
            setValue("price", option.fullPrice);
          }}
        >
          <Label $selected={selectedOption === option.id}>
            <div className="selectRound"></div> {option.label}
          </Label>
          <PriceSection $padding="1rem" $textAlign="right">
            <StyledBluePrice as="h3" $color="blue">
              {option.price.toLocaleString("tr-TR")}{" "}
              <StyledText as="sup" $fs="0.75rem">
                {option.installmentCount}
              </StyledText>
            </StyledBluePrice>
            <small>{option.delivery}</small>
          </PriceSection>
        </OptionWrapper>
      ))}
      <button type="submit">Sepete Ekle</button>
    </StyledConfigurator>
  );
};

export default ProductConfigration;
