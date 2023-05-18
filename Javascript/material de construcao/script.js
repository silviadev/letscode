// Obtenha referências para os elementos do formulário e da tabela
const form = document.getElementById('material-form');
const materialTable = document.getElementById('material-table');
const materialList = document.getElementById('material-list');

// Array para armazenar os materiais
const materiais = [];

// Função para adicionar um novo material
  function adicionarMaterial(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtenha os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const quantidade = document.getElementById('quantidade').value;

  // Crie um objeto material com os valores inseridos
  const material = {
    nome: nome,
    preco: preco,
    quantidade: quantidade
  };

  // Adicione o material ao array
  materiais.push(material);

  // Limpe os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('quantidade').value = '';

  // Atualize a exibição da tabela de materiais
  exibirMateriais();
}

// Função para exibir a tabela de materiais
function exibirMateriais() {
  // Limpe o conteúdo da tabela antes de atualizá-la
  materialList.innerHTML = '';

  // Crie as linhas da tabela com os materiais
    materiais.forEach(function(material, index) {
    const row = document.createElement('tr');

    const nomeCell = document.createElement('td');
    nomeCell.textContent = material.nome;
    row.appendChild(nomeCell);

    const precoCell = document.createElement('td');
    precoCell.textContent = `R$ ${material.preco}`;
    row.appendChild(precoCell);

    const quantidadeCell = document.createElement('td');
    quantidadeCell.textContent = material.quantidade;
    row.appendChild(quantidadeCell);

    const acoesCell = document.createElement('td');

    // ...

    const editarBtn = document.createElement('button');
    editarBtn.innerHTML = '<i class="fas fa-edit"></i>'; // Ícone de edição
    editarBtn.addEventListener('click', function() {
    editarMaterial(index);
});
    acoesCell.appendChild(editarBtn);

    const excluirBtn = document.createElement('button');
    excluirBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Ícone de exclusão
    excluirBtn.addEventListener('click', function() {
    excluirMaterial(index);
});
  acoesCell.appendChild(excluirBtn);


    row.appendChild(acoesCell);

    materialList.appendChild(row);
  });
}


// Função para excluir um material
function excluirMaterial(index) {
  materiais.splice(index, 1);

  // Atualize a exibição da tabela de materiais
  exibirMateriais();
}

// Adicione um ouvinte de evento para o envio do formulário
form.addEventListener('submit', adicionarMaterial);

  
  