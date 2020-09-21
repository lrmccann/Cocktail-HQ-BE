const Cocktail = require('../classes/cocktail');

describe("Cocktail", () => {
    describe('new cocktail', () => {
        it('should create a new object', () => {
            const cocktail_obj = {
                "id": 1,
                "cocktail_name": "apple pie",
                "ingredients": "green apple liquer, applecider, ice"
            }
            const c = new Cocktail(cocktail_obj);
            expect(typeof c).toBe('object');
        });
    });
    describe('cocktail name', () => {
        it('should return name of cocktail', () => {
            const cocktail_obj = {
                "id": 1,
                "cocktail_name": "apple pie",
                "ingredients": "green apple liquer, applecider, ice"
            }
            const c = new Cocktail(cocktail_obj);
            expect(c.cocktail_name).toBe('apple pie');
        });
    });
});