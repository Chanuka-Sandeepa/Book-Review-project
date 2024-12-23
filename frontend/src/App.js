import React, { useState, useEffect } from "react";
import { getReviews, createReview, updateReview, deleteReview } from "./api";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import "./styles.css";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  // Fetch reviews on load
  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await getReviews();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  // Add or update a review
  const handleSave = async (review) => {
    if (editingReview) {
      const { data } = await updateReview(editingReview._id, review);
      setReviews(reviews.map((r) => (r._id === data._id ? data : r)));
    } else {
      const { data } = await createReview(review);
      setReviews([data, ...reviews]);
    }
    setEditingReview(null);
  };

  // Delete a review
  const handleDelete = async (id) => {
    await deleteReview(id);
    setReviews(reviews.filter((review) => review._id !== id));
  };

  // Start editing a review
  const handleEdit = (review) => {
    setEditingReview(review);
  };

  return (
    <div className="app">
      <h1>Book Reviews</h1>
      <ReviewForm onSave={handleSave} editingReview={editingReview} />
      <ReviewList reviews={reviews} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
