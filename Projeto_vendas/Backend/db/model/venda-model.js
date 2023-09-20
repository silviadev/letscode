const { Model } = require('objection');

class Venda extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'venda';
  }

  static get idColumn() {
    return 'id';
  }

  static get nome_clienteColumn() {
    return 'nome_cliente';
  }

  static get total_vendaColumn() {
    return 'total_venda';
  }

  static get lucroColumn() {
    return 'lucro';
  }

  static get data_vendaColumn() {
    return 'data_venda';
  }


  static get relationMappings() {
    const Produto = require('./produto-model');
    const ProdutoVenda = require('./produto-venda-model');

    return {  
      produto: {
        relation: Model.ManyToManyRelation,
        modelClass: Produto,
        join: {
          from: 'venda.id',
          through: {
            from: 'produto_venda.venda_fk',
            to: 'produto_venda.produto_fk',
            modelClass: ProdutoVenda,
            extra: ['quantidade']
          },
          to: 'produto.id'
        }
      }
    }
}
}
module.exports = Venda;
