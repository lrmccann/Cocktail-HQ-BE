const mysql = require('./connection');
exports.getByReviewId = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews WHERE id = ?;`, id);
    return data;
}
exports.getAllByCocktailId = async (cocktail_id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM cocktails INNER JOIN reviews review on cocktails.id = review.cocktail_id WHERE cocktail_id = ?;`, cocktail_id);
    return data;
}
exports.getAllReviews = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews;`);
    return data;
}
exports.getAverageRate = async (cocktail_id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT AVG(rate_cocktail) AS 'average_rate' FROM reviews WHERE cocktail_id = ?;`, cocktail_id);
    return data;
}

exports.newReviewRating = async (reviews_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO reviews SET ?;`,reviews_obj);
    return data;
}

exports.updateReviews = async (id, reviews_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE reviews SET ? WHERE id = ?;`, [reviews_obj, id]);
    return data;
}
exports.deleteReviewById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`DELETE FROM reviews WHERE id = ?`, [id]);
    return data;
}

