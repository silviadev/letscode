let opcaoMenu;
let arrayMaterial = [];
do {
    opcaoMenu = Number(prompt("MENU\n1 - Adicionar Material\n2 - Remover Material\n3 - Alterar Material\n4 - Listar Materiais\n0 - Sair"));

    switch(opcaoMenu) {

        case 1:
            const nomeMaterial = prompt("Digite o nome do Material");
            const qtdeMaterial = Number(prompt("Digite a quantidade de Material"));
            const precoUnitario = Number(prompt("Digite o preço unitário"));
            const Material = {
                nome: nomeMaterial,
                qtdeMaterial: qtdeMaterial,
                precoUnitario: precoUnitario
            };
            arrayMaterial.push(Material);
        break;

        case 2:
            const nomeRemover = prompt("Digite o nome do Material que deseja remover");
            const indexMaterialRemover = arrayMaterial.map(mat => mat.nome).indexOf(nomeRemover);
            if (indexMaterialRemover != -1) {
                arrayMaterial.splice(indexMaterialRemover, 1);
                alert("Remoção realizada com sucesso!");
            }
            else {
                alert("Nome de material inexistente !");
            }
        break;

        case 3:
            const nomeAlterar = prompt("Digite o nome do Material que deseja alterar");
            const indexMaterial = arrayMaterial.map(mat => mat.nome).indexOf(nomeAlterar);
            if (indexMaterial != -1) {
                const nomeMaterial = prompt("Digite o nome do Material");
                const qtdeMaterial = Number(prompt("Digite a quantidade de Material"));
                const precoUnitario = Number(prompt("Digite o preço unitário"));
                const Material = {
                    nome: nomeMaterial,
                    qtdeMaterial: qtdeMaterial,
                    precoUnitario: precoUnitario
                };
                arrayMaterial.splice(indexMaterial, 1, Material);
                alert("Atualização realizada com sucesso!");
            }
            else {
                alert("Nome de material inexistente !");
            }
        break;

        case 4:
            let msgLista = "Nome   Quantidade   Preço(R$)\n";
            arrayMaterial.forEach( mat => {
                msgLista += `${mat.nome}   ${mat.qtdeMaterial}   ${mat.precoUnitario} \n`; 
            });
            alert(msgLista);
        break;

    }

} while (opcaoMenu != 0);
