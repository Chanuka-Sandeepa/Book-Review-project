import React, { useState, useEffect } from "react";

const ReviewForm = ({ onSave, editingReview }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    if (editingReview) {
      setTitle(editingReview.title);
      setAuthor(editingReview.author);
      setRating(editingReview.rating);
      setReviewText(editingReview.reviewText);
    }
  }, [editingReview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, author, rating, reviewText });
    setTitle("");
    setAuthor("");
    setRating(1);
    setReviewText("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="1"
        max="5"
        required
      />
      <textarea
        placeholder="Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editingReview ? "Update Review" : "Add Review"}</button>
    </form>
  );
};

export default ReviewForm;
