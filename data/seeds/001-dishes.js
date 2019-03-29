exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    { name: 'dish01' },
    { name: 'dish2' },
    { name: 'dish3' },
    { name: 'dish4' },
    { name: 'dish5' },
    { name: 'dish6' }
  ]);
};
