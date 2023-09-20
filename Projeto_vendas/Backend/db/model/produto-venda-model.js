const { Model } = require('objection');

class ProdutoVenda extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'produto_venda';
  }

  static get id_vendaColumn() {
    return 'venda_fk';
  }

  static get id_produtoColumn() {
    return 'produto_fk';
  }

}

module.exports = ProdutoVenda;
