const dbSetup = require('./db/db_setup');
const CategoriaModel = require('./db/model/categoria-model');
const ProdutoModel = require ('./db/model/produto-model');
const VendaModel = require ('./db/model/venda-model');
const express = require('express')
const cors = require('cors');
const Venda = require('./db/model/venda-model');

dbSetup();

//npx knex migrate:make --migrations-directory "./db/migrations" init

const app = express()

app.use(express.json());
app.use(cors({
  origin: '*'
}));

const port = 3000

app.get('/produto/', async (req, res) => {
  try {
    const produto = await ProdutoModel.query().withGraphFetched('categoria');
    res.json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

app.get('/produto/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const produto = await ProdutoModel.query().findById(id);
    res.json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

app.post('/produto/cadastrar/', async (req, res) => {

  try {
    const produto = req.body;

    console.log(produto);

    await ProdutoModel.query().insert(produto);

    res.send("Produto cadastrado com sucesso !");
    
  } catch (err) {
    res.status(500).json(err);
  }

});

app.put('/produto/alterar/:id', async (req, res) => {

  try {
    const id = req.params.id;
    const produto = req.body;

    console.log(produto);

    await ProdutoModel.query().patch(produto)
    .where('nome', '=', `${produto.nome}`);
    // .where('nome', 'like', `%${material.nome}%`);
    // .where('nome', 'like', `{material.nome}`);;

    res.send("Produto alterado com sucesso !");
    
  } catch (err) {
    res.status(500).json(err);
  }

});

app.delete('/produto/deletar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const produto = await ProdutoModel.query().deleteById(id);
    res.send("Produto deletado com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})


app.get('/venda/', async (req, res) => {
  try {
    const venda = await VendaModel.query();
    res.json(venda);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

app.get('/venda/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const venda = await VendaModel.query().findById(id);
    res.json(venda);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

app.post('/venda/cadastrar/', async (req, res) => {

  try {
    const venda = req.body;

    console.log(venda);

    await ProdutoModel.relatedQuery('venda')
      .for([4,8]) // id do produto
      .insert(venda);

      //update na tabela produto com Id do produto que vai diminuir a (quantidade) do produto menos a quantidade da tabela produto_venda

    res.send("Venda cadastrada com sucesso !");
    
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }

});

// app.post('/produto_venda/', async (req, res) => {

//     try {
//       const produto_venda = req.body;//Json que vem do frontend/input

//       await ProdutoVenda.query()
//       .for(produto_venda.)
      
//     }



// app.get('/categoria/', async (req, res) => {
//   try {
//     const categoria = await CategoriaModel.query();
//     res.json(categoria);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// })

app.get('/categorias', async (req, res) => {
  try {
    const categoriasComProdutos = await CategoriaModel.query().withGraphFetched('produto');
    res.json(categoriasComProdutos);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

/** 
 * C - Create -> POST
 * R - Read -> GET
 * U - Update -> PUT
 * D - Delete -> Delete
*/

app.listen(port, () => {
  console.log(`Servidor ativo na porta ${port}`)
})