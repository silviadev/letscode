/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "produto" CASCADE');

  await knex("produto").insert([
  {nome: 'Prego', quantidade: 150, precocompra: 1.5, precovenda:5, data_compra: '12/09/2023', imagem: 'img', categoria_id: 1}
    
  ]);
}