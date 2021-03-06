exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.string('instructions', 128).unique();
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
