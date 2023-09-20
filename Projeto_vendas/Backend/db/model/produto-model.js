const { Model } = require('objection');

class Produto extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'produto';
  }

  static get idColumn() {
    return 'id';
  }

  static get nomeColumn() {
    return 'nome';
  }

  static get quantidadeColumn() {
    return 'quantidade';
  }

  static get preco_compraColumn() {
    return 'preco_compra';
  }

  static get preco_vendaColumn() {
    return 'preco_venda';
  }

  static get data_compraColumn() {
    return 'data_compra';
  }

  static get imagemColumn() {
    return 'imagem';
  }

  static get relationMappings() {
    const Categoria = require('./categoria-model');
    const Venda = require('./venda-model');
    const ProdutoVenda = require('./produto-venda-model');
    return {
        categoria: {
          relation: Model.BelongsToOneRelation,
          modelClass: Categoria,
          filter: query => query.select('nome'),
        join: {
          from : 'produto.categoria_id',
          to: 'categoria.id'
        }
      },

      venda: {
        relation: Model.ManyToManyRelation,
        modelClass: Venda,
        join: {
          from: 'produto.id',
          through: {
            from: 'produto_venda.produto_fk',
            to: 'produto_venda.venda_fk',
            modelClass: ProdutoVenda,
            extra: ['quantidade']
          },
          to: 'venda.id'
        }
      }

    }
  }

}

module.exports = Produto;
