const reviewModel = require('../models/review-model');

class Review {
    constructor(review_obj) {
        this._review = review_obj;
    }
    get id(){
        return this._review.id;
    }
    get rate_cocktail(){
        return this._review.rate_cocktail;
    }
    set rate_cocktail(rate_cocktail){
        this._review.rate_cocktail = rate_cocktail;
    }
    get average_rate(){
        return this._review.average_rate;
    }
    set average_rate(average_rate){
        this._review.average_rate = average_rate;
    }

    get review_cocktail(){
        return this._review.review_cocktail;
    }
    set review_cocktail(review_cocktail){
        this._review.review_cocktail = review_cocktail;
    }

    get user_id(){
        return this._review.user_id;
    }
    set user_id(user_id){
        this._review.user_id = user_id;
    }

    get cocktail_id(){
        return this._review.cocktail_id;
    }
    set cocktail_id(cocktail_id){
        this._review.cocktail_id = cocktail_id;
    }

    merge(new_review) {
        this._review = ({...this._review, ...new_review});
    }
    getLiteral(){
        return this._review;
    }
    getRating(){
        return this._review[0].rate_cocktail;
    }
    getReview(){
        return this._review[0].review_cocktail;
    }

    async getAllReviews(){
        this._review = await reviewModel.getAllReviews();
    }
    async getByReviewId(id){
        this._review = await reviewModel.getByReviewId(id);
    }
    async getAllByCocktailId(cocktail_id){
        this._review = await reviewModel.getAllByCocktailId(cocktail_id);
    }
    async getAverageRate(cocktail_id){
        this._review = await reviewModel.getAverageRate(cocktail_id);
        console.log(this._review);
    }

    async newReviewRating() {
        const results = await reviewModel.newReviewRating(this._review);
        this._review.id = results.insertId;
    }

    async updateReviews(id) {
        await reviewModel.updateReviews(id, this._review);
    }

    async deleteReviewById(id) {
        await reviewModel.deleteReviewById(id);
    }
}
module.exports = Review;