//elementos do formulário e da tabela
const form = document.getElementById('material-form');
const materialTable = document.getElementById('material-table');
const materialList = document.getElementById('material-list');

let materiais = [];

    function carregarMateriais() {
      const materiaisArmazenados = localStorage.getItem('materiais');

      if (materiaisArmazenados) {
        materiais = materiaisArmazenados.split(',');
      } else {
        materiais = [];
      }
    }

    function salvarMateriais() {
      localStorage.setItem('materiais', materiais.join(','));
    }

    function adicionarMaterial(event) {
      event.preventDefault();

      const nome = nomeInput.value;
      const preco = precoInput.value;
      const quantidade = quantidadeInput.value;

      const material = `${nome};${preco};${quantidade}`;

      materiais.push(material);

      exibirMateriais();

      nomeInput.value = '';
      precoInput.value = '';
      quantidadeInput.value = '';

      salvarMateriais();
    }

    function editarMaterial(index) {
      const material = materiais[index].split(';');

      nomeInput.value = material[0];
      precoInput.value = material[1];
      quantidadeInput.value = material[2];

      form.removeEventListener('submit', adicionarMaterial);
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        salvarEdicaoMaterial(index);
      });
    }

    function salvarEdicaoMaterial(index) {
      const nome = nomeInput.value;
      const preco = precoInput.value;
      const quantidade = quantidadeInput.value;

      const material = `${nome};${preco};${quantidade}`;

      materiais[index] = material;

      nomeInput.value = '';
      precoInput.value = '';
      quantidadeInput.value = '';

      form.removeEventListener('submit', salvarEdicaoMaterial);
      form.addEventListener('submit', adicionarMaterial);

      exibirMateriais();

      salvarMateriais();
    }

    function excluirMaterial(index) {
      materiais.splice(index, 1);

      exibirMateriais();

      salvarMateriais();
    }

    function exibirMateriais() {
      tabelaBody.innerHTML = '';

      for (let i = 0; i < materiais.length; i++) {
        const material = materiais[i].split(';');
        const nome = material[0];
        const preco = material[1];
        const quantidade = material[2];

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${nome}</td>
          <td>${preco}</td>
          <td>${quantidade}</td>
          <td>
            <button class="editarBtn" onclick="editarMaterial(${i})"><i class="fas fa-edit"></i></button>
            <button class="excluirBtn" onclick="excluirMaterial(${i})"><i class="fas fa-trash"></i></button>
          </td>
        `;

        tabelaBody.appendChild(row);
      }
    }

    form.addEventListener('submit', adicionarMaterial);

    limparBtn.addEventListener('click', function() {
      nomeInput.value = '';
      precoInput.value = '';
      quantidadeInput.value = '';
    });

    carregarMateriais();
    exibirMateriais();