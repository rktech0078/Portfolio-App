import { ReviewCard } from "./ReviewCard";

type Review = {
  _id: string;
  name: string;
  message: string;
  rating: number;
  // Add other fields as needed, e.g. author, content, rating, etc.
};

export const ReviewListing = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="grid gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};
