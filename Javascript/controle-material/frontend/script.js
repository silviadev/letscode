import MaterialService from "./services/services.js";
import { listMaterial } from "./services/services.js";
import { deleteMaterial } from "./services/services.js";
import { updateMaterial } from "./services/services.js";

const form = document.getElementById("form");
const nomeInput = document.getElementById("nomeInput");
const precoInput = document.getElementById("precoInput");
const quantidadeInput = document.getElementById("quantidadeInput");
const tabelaBody = document.getElementById("tabelaBody");
const nomeEditar = document.getElementById("nomeEditar");
const precoEditar = document.getElementById("precoEditar");
const quantidadeEditar = document.getElementById("quantidadeEditar");
const btnSalvar = document.getElementById("btnSalvar");


function adicionarMaterial() {

  const nome = nomeInput.value;
  const preco = Number(precoInput.value);
  const quantidade = Number(quantidadeInput.value);

  //const material = `${nome};${preco};${quantidade}`;

  const material = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
  };
  //alert(JSON.stringify(material));
  MaterialService.addMaterial(material);
  //exibirMateriais();

  nomeInput.value = "";
  precoInput.value = "";
  quantidadeInput.value = "";

  //salvarMateriais();
}

async function exibirMateriais() {
  const materiaisArmazenados = await listMaterial().then((dados)=> {return dados})
  let materiais = [...materiaisArmazenados];
  //tabelaBody.innerHTML = "";

  materiais.forEach(elemento =>{
    let linha = tabelaBody.insertRow();
    linha.insertCell(0).innerHTML=elemento.nome;
    linha.insertCell(1).innerHTML=elemento.preco;
    linha.insertCell(2).innerHTML=elemento.quantidade;

    let btnEditar = document.createElement("button");
    btnEditar.id = elemento.id;
    let editarId = btnEditar.id;
    btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #59cf5b;"></i>';
    linha.insertCell(3).append(btnEditar);

    let btnApagar = document.createElement("button");
    btnApagar.id = elemento.id;
    btnApagar.innerHTML = '<i class="fa-solid fa-trash" style="color: #f0310f;"></i>';
    linha.insertCell(4).append(btnApagar);

    btnApagar.addEventListener("click", ()=>{
      deleteMaterial(btnApagar.id);
      window.location.reload();
    })

    btnEditar.addEventListener("click", ()=>{
      const popup = document.getElementById("editar");
      popup.style.display = "flex";
      nomeEditar.value = elemento.nome;
      precoEditar.value = elemento.preco;
      quantidadeEditar.value = elemento.quantidade;
      
      btnSalvar.addEventListener("click", ()=>{
        const material = {
          nome: nomeEditar.value,
          preco: Number(precoEditar.value),
          quantidade: Number(quantidadeEditar.value),
        };

        updateMaterial(editarId, material);
        popup.style.display="none";
        window.location.reload();
      })
    })

  })
  
}

form.addEventListener("submit", adicionarMaterial);
//carregarMateriais();
exibirMateriais();
