const db = require('../data/dbConfig.js');

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

// DISHES
// return a list of all dishes in the database
function getDishes() {
  return db('dishes');
}

// return the dish with the provided id and include a list of the related recipes.
function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

// add the dish to the database and return the id of the new dish.
function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

// RECIPES
// return a list of all recipes in the database including the dish they belong to.
function getRecipes() {
  return db('recipes');
}

// add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
