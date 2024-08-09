import {
  StyledCol,
  StyledCompareBannerItem,
  StyledTimes,
  StyledTimesCompare,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import { useCompareModeStore } from "@/store/CompareModeStore";

type CompareBannerItemProps = {
  title?: string;
  image?: string;
  id?: string | number;
};

const CompareBannerItem: React.FC<CompareBannerItemProps> = ({
  title,
  image,
  id,
}) => {
  const { removeFromCompare } = useCompareModeStore();
  return (
    <StyledCol $sizemd={3}>
      <StyledCompareBannerItem>
        <StyledCol $sizemd={3}>
          <CustomImage
            src={image ? image : "/def_tel.webp"}
            alt="compare"
            height={75}
          />
        </StyledCol>

        <p>{title ? title : "Listeden bir cihaz seçin"}</p>
        {id && (
          <StyledTimesCompare onClick={() => removeFromCompare(id)}>
            &times;
          </StyledTimesCompare>
        )}
      </StyledCompareBannerItem>
    </StyledCol>
  );
};

export default CompareBannerItem;
