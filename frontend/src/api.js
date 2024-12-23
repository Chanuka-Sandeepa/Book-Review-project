import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/reviews" });

// Fetch all reviews
export const getReviews = () => API.get("/");

// Add a new review
export const createReview = (review) => API.post("/", review);

// Update a review
export const updateReview = (id, review) => API.put(`/${id}`, review);

// Delete a review
export const deleteReview = (id) => API.delete(`/${id}`);
