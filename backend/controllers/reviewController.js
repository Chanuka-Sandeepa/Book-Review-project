const Review = require('../model/Review');

// Get all reviews
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ dateAdded: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new review
const createReview = async (req, res) => {
    try {
        const { title, author, rating, reviewText } = req.body;
        const review = new Review({ title, author, rating, reviewText });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a review
const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        await Review.findByIdAndDelete(id);
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getReviews,
    createReview,
    updateReview,
    deleteReview,
};
