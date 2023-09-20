/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "categoria" CASCADE');

  await knex('categoria').insert([
    {nome: 'Alimentos'},
    {nome: 'Limpeza'},
    {nome: 'Higiene'},
    {nome: 'Frios'},
    
  ]);
};
