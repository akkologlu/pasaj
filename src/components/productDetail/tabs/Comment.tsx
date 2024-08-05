import { convertDates } from "@/lib/helpers";
import { StyledComment, StyledDiv, StyledText } from "@/styles/styled";
import { Comments } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import { AiOutlineLike } from "react-icons/ai";

const Comment = ({ review }: { review: Comments }) => {
  return (
    <StyledComment key={review.id} $padding="3rem 0" $gap="1rem">
      <StyledDiv $display="flex" $align="center" $gap="0.5rem">
        <Rating style={{ maxWidth: 80 }} value={review.rating} readOnly />
        <StyledDiv
          $fs="12px"
          as="span"
          $bgcolor="#ECF0F2BF"
          $padding="0 .5rem"
          $radius=".5rem"
        >
          {review.rating}
        </StyledDiv>
        <StyledText $fs="12px" $color="#5f6786">
          {review.name} | {convertDates(review.date)}
        </StyledText>
      </StyledDiv>
      <p>{review.comment}</p>
      <div>
        <StyledText $fs="12px" $color="#5f6786">
          Bu yorumu faydalı buldunuz mu?
        </StyledText>
        <StyledText $fs="1.25rem" $color="#5f6786">
          <AiOutlineLike />
        </StyledText>
      </div>
    </StyledComment>
  );
};

export default Comment;
