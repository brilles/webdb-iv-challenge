exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredients_id: 1 },
    { recipe_id: 2, ingredients_id: 2 },
    { recipe_id: 3, ingredients_id: 3 },
    { recipe_id: 4, ingredients_id: 4 },
    { recipe_id: 5, ingredients_id: 5 },
    { recipe_id: 6, ingredients_id: 6 },
    { recipe_id: 6, ingredients_id: 1 },
    { recipe_id: 3, ingredients_id: 1 },
    { recipe_id: 2, ingredients_id: 1 }
  ]);
};
