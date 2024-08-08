import { StyledImageDiv } from "@/styles/styled";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  height: number;
  smheight?: number;
  alt: string;
  width?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  height,
  width = "100%",
  alt,
  objectFit = "contain",
  style = {},
  imageStyle = {},
  smheight,
}) => {
  return (
    <StyledImageDiv
      $height={height}
      $width={width}
      style={style}
      $smheight={smheight}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: objectFit, ...imageStyle }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </StyledImageDiv>
  );
};

export default CustomImage;
