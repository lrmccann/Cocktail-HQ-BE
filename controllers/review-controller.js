const Review = require('../classes/review');

exports.readRating = async (req, res) => {
    const id = req.params.id;
    const review = new Review();
    await review.getByReviewId(id);
    res.json(review.getRating());    
}
exports.readReview = async (req, res) => {
    const id = req.params.id;
    const review = new Review();
    await review.getByReviewId(id);
    res.json(review.getReview());   
}
exports.getAllByCocktailId = async (req, res) => {
    const cocktail_id = req.params.id;
    const review = new Review();
    await review.getAllByCocktailId(cocktail_id);
    res.json(review.getLiteral());
}
exports.readAllReviews = async (req, res) => {
    const review = new Review();
    await review.getAllReviews();
    res.json(review.getLiteral());   
}
exports.readAverageRate = async (req,res) => {
    const cocktail_id = req.params.id;
    const review = new Review();
    await review.getAverageRate(cocktail_id);
    res.json(review.getLiteral());
}

exports.newReviewRating = async (req, res) => {
    const review = new Review(req.body);
    await review.newReviewRating();
    res.json(review.getLiteral());
}

exports.updateReviews = async (req, res) => {
    const id = req.params.id;
    const review = new Review();
    review.merge(req.body);
    await review.updateReviews(id);
    res.json(review.getLiteral());
}
exports.deleteReviewById = async (req,res) => {
    const id = req.params.id;
    const review = new Review();
    await review.deleteReviewById(id);
    res.json({deleted: true});
}
