import {
  AlignCenter,
  FlexCol,
  SpaceBetween,
  StyledCol,
  StyledComment,
  StyledCommentButton,
  StyledDiv,
  StyledReviewSection,
  StyledSortSelect,
  StyledText,
} from "@/styles/styled";
import { Comments } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import Comment from "./Comment";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type ReviewsProps = {
  reviews: Comments[];
  onRating: number;
  handleAddNewComment: (data: any) => void;
};
const Reviews: React.FC<ReviewsProps> = ({
  reviews,
  onRating,
  handleAddNewComment,
}) => {
  const session = useSession();
  const [showForm, setShowForm] = useState(false);
  const [sortedReviews, setSortedReviews] = useState<Comments[]>(reviews);
  const { register, handleSubmit, reset, control } = useForm();
  const { register: registerSort, watch } = useForm();
  const sortOption = watch("sort");
  useEffect(() => {
    if (sortOption) {
      let sorted = [...reviews];
      switch (sortOption) {
        case "newest":
          sorted.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          break;
        case "oldest":
          sorted.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
          break;
        case "highest":
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        case "lowest":
          sorted.sort((a, b) => a.rating - b.rating);
          break;
        default:
          break;
      }
      setSortedReviews(sorted);
    }
  }, [sortOption, reviews]);

  return (
    <FlexCol>
      <SpaceBetween $margin="3rem 0" $wrap={true}>
        <StyledCol $sizemd={5}>
          <StyledReviewSection $gap="0.5rem" $padding="3rem 2rem">
            <StyledText $color="grey">Ürün Değerlendirmeleri</StyledText>
            {reviews.length > 0 && (
              <StyledText as="h4" $color="light">
                {reviews.length} kere puanlandı.
              </StyledText>
            )}
            <AlignCenter $gap=".5rem" $padding="0 0 1rem 0">
              <Rating style={{ maxWidth: 80 }} value={4.5} readOnly />
              <StyledDiv
                as="small"
                $bgcolor="comment"
                $padding="0 .5rem"
                $radius=".5rem"
              >
                {onRating}
              </StyledDiv>
            </AlignCenter>
            <StyledComment $padding="1rem 0">
              {!showForm && (
                <>
                  <StyledCommentButton
                    onClick={() => {
                      if (!session?.data?.user) {
                        alert("login first");
                        return;
                      }
                      setShowForm(true);
                    }}
                  >
                    Yorum Yaz
                  </StyledCommentButton>
                  <StyledText as="small" $fw="400">
                    * Satın alınan ürünler kullanıcılar tarafından
                    değerlendirilebilir
                  </StyledText>
                </>
              )}
              {showForm && (
                <form
                  onSubmit={handleSubmit((data) => {
                    handleAddNewComment(data);
                    setShowForm(false);
                    reset({ rating: 0, comment: "" });
                  })}
                >
                  <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <textarea
                    {...register("comment")}
                    placeholder="Yorumunuzu yazınız"
                    style={{ width: "100%", padding: "1rem" }}
                  ></textarea>
                  <StyledCommentButton type="submit">
                    Gönder
                  </StyledCommentButton>
                </form>
              )}
            </StyledComment>
          </StyledReviewSection>
        </StyledCol>
        <StyledCol $sizemd={5}>
          <form>
            <StyledSortSelect id="sortComment" {...registerSort("sort")}>
              <option value="newest">En Yeniler</option>
              <option value="oldest">En Eskiler</option>
              <option value="highest">En Yüksek Puan</option>
              <option value="lowest">En Düşük Puan</option>
            </StyledSortSelect>
          </form>
        </StyledCol>
      </SpaceBetween>
      {sortedReviews.map((review) => (
        <Comment key={review.id} review={review} />
      ))}
    </FlexCol>
  );
};
export default Reviews;
