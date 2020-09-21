const Cocktail = require('../classes/cocktail');
exports.getCocktailById = async (req, res) => {
    const id = req.params.id;
    const cocktail = new Cocktail;
    await cocktail.getCocktailById(id);
    res.json(cocktail.getLiteral());
}
exports.cocktailByName = async (req, res) => {
    const name =  req.params.name;
    const cocktail = new Cocktail;
    await cocktail.cocktailByName(name);
    res.json(cocktail.getLiteral());
}

exports.newCocktail = async (req, res) => {
    const cocktail = new Cocktail(req.body);
    await cocktail.newCocktail();
    res.json(cocktail.getLiteral());
}  

exports.updateCocktailById = async (req,res) => {
    const id = req.params.id;
    const cocktail = new Cocktail();
    cocktail.merge(req.body);
    await cocktail.updateCocktailById(id);
    res.json(cocktail.getLiteral());
}
exports.deleteCocktailById = async (req,res) => {
    const id = req.params.id;
    const cocktail = new Cocktail();
    await cocktail.deleteCocktailById(id);
    res.json({deleted: true});
}