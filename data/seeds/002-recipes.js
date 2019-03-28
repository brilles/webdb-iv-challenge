exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'recipeA', dish_id: 1 },
    { name: 'recipeB', dish_id: 1 },
    { name: 'recipeC', dish_id: 2 },
    { name: 'recipeD', dish_id: 2 },
    { name: 'recipeE', dish_id: 3 },
    { name: 'recipeG', dish_id: 3 },
    { name: 'recipeH', dish_id: 4 },
    { name: 'recipeI', dish_id: 4 },
    { name: 'recipeJ', dish_id: 5 },
    { name: 'recipeK', dish_id: 5 },
    { name: 'recipeL', dish_id: 6 },
    { name: 'recipeM', dish_id: 6 },
    { name: 'recipeN', dish_id: 6 }
  ]);
};
