import { StyledImageDiv } from "@/styles/styled";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  height: string;
  alt: string;
  width?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  height,
  width = "100%",
  alt,
  objectFit = "contain",
}) => {
  return (
    <StyledImageDiv $height={height} $width={width}>
      <Image src={src} alt={alt} fill style={{ objectFit: objectFit }} />
    </StyledImageDiv>
  );
};

export default CustomImage;
