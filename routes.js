const cocktail = require('./controllers/cocktail-controller');
const user = require('./controllers/user-controller');
const reviews = require('./controllers/review-controller');


exports.route = (app) => {
    app.get('/cocktail/id/:id', cocktail.getCocktailById)
    app.get('/cocktail/:name', cocktail.cocktailByName);
    app.post('/cocktail', cocktail.newCocktail);
    app.patch('/cocktail/:id', cocktail.updateCocktailById);
    app.delete('/cocktail/:id', cocktail.deleteCocktailById);


    app.get('/user/:id', user.read);
    app.post('/user', user.newUser);
    app.patch('/user/:id', user.updateUserById);
    app.delete('/user/:id', user.deleteUserById);

    app.get('/rating/:id', reviews.readRating);
    app.get('/review/:id', reviews.readReview);
    app.get('/reviews', reviews.readAllReviews);
    app.get('/reviews/cocktail/:id', reviews.getAllByCocktailId);
    app.get('/review/average/:id', reviews.readAverageRate)

    app.post('/reviews', reviews.newReviewRating);

    app.patch('/reviews/:id', reviews.updateReviews);
    app.delete('/review/:id', reviews.deleteReviewById);
}