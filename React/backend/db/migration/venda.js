/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('venda', (table) => {
        table.increments ('id').primary();
        table.string('nome').notNullable().unique();
        table.string('subclasse').notNullable();
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropSchemaIfExists('venda');
  
};
