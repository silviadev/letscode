/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('material', (table) => {
        table.increments;
        table.string('nome').notNullable().unique();
        table.integer('quantidade').notNullable();
        table.decimal('preco', 10, 10).notNullable();
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropSchemaIfExists('material');
  
};
