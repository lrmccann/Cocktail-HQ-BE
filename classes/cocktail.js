const cocktailModel = require('../models/cocktail-model');

class Cocktail {
    constructor(cocktail_obj) {
        this._cocktail = cocktail_obj;
    }
    get id() {
        return this._cocktail.id;
    }
    get cocktail_name() {
        return this._cocktail.cocktail_name;
    }

    set cocktail_name(cocktail_name) {
        this._cocktail.cocktail_name = cocktail_name;
    }

    get ingredients() {
        return this._cocktail.ingredients;
    }

    set ingredients(ingredients) {
        this._cocktail.ingredients = ingredients;
    }

    get directions() {
        return this._cocktail.directions;
    }

    set directions(directions) {
        this._cocktail.directions = directions;
    }
    async getCocktailById(id){
        this._cocktail = await cocktailModel.getCocktailById(id);
    }
    async cocktailByName(name) {
        this._cocktail = await cocktailModel.cocktailByName(name);
    }

    async newCocktail() {
        const results = await cocktailModel.insert(this._cocktail);
        this._cocktail.id = results.insertId;
    }

    async updateCocktailById(id) {
        await cocktailModel.updateCocktailById(id, this._cocktail);
    }

    async deleteCocktailById(id) {
        await cocktailModel.deleteCocktailById(id);
    }
    getLiteral() {
        return this._cocktail;
    }
    merge(new_cocktail) {
        this._cocktail = ({ ...this._cocktail, ...new_cocktail });
    }
}

module.exports = Cocktail;