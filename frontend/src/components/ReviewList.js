import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews, onDelete, onEdit }) => {
  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <ReviewItem
            key={review._id}
            review={review}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default ReviewList;
