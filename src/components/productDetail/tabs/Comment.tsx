import { convertDates } from "@/lib/helpers";
import {
  AlignCenter,
  StyledComment,
  StyledDiv,
} from "@/styles/styled";
import { Comments } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import { AiOutlineLike } from "react-icons/ai";

const Comment = ({ review }: { review: Comments }) => {
  return (
    <StyledComment key={review.id} $padding="3rem 0" $gap="1rem">
      <AlignCenter $gap="0.5rem">
        <Rating style={{ maxWidth: 80 }} value={review.rating} readOnly />
        <StyledDiv
          $fs="12px"
          as="span"
          $bgcolor="comment"
          $padding="0 .5rem"
          $radius=".5rem"
        >
          {review.rating}
        </StyledDiv>
        <h6>
          {review.name} | {convertDates(review.date)}
        </h6>
      </AlignCenter>
      <p>{review.comment}</p>
      <div>
        <h6>Bu yorumu faydalı buldunuz mu?</h6>
        <h4>
          <AiOutlineLike />
        </h4>
      </div>
    </StyledComment>
  );
};

export default Comment;
