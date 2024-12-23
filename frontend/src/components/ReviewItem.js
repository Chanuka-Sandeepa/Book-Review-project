import React from "react";

const ReviewItem = ({ review, onDelete, onEdit }) => {
  return (
    <div className="review-item">
      <h3>{review.title}</h3>
      <p>by {review.author}</p>
      <p>Rating: {review.rating} / 5</p>
      <p>{review.reviewText}</p>
      <div>
        <button onClick={() => onEdit(review)}>Edit</button>
        <button onClick={() => onDelete(review._id)}>Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
