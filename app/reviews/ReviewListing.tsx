import { ReviewCard } from "./ReviewCard";

export const ReviewListing = ({ reviews }: { reviews: any[] }) => {
  return (
    <div className="grid gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};
