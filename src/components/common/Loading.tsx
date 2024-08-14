import { FullCenter } from "@/styles/styled";
import CustomImage from "./CustomImage";

const Loading = () => {
  return (
    <FullCenter $height="50vh">
      <CustomImage src="/bouncing-squares.svg" alt="Loading" height={100} />
    </FullCenter>
  );
};

export default Loading;
