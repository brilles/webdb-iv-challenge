exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'ingredient1' },
    { name: 'ingredient2' },
    { name: 'ingredient3' },
    { name: 'ingredient4' },
    { name: 'ingredient5' },
    { name: 'ingredient6' }
  ]);
};
