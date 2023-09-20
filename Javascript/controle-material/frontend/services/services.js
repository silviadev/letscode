export async function addMaterial(material) {
    console.log(material);
    await fetch("http://localhost:3000/material/cadastrar",
    {
        method: 'POST',
        body: JSON.stringify(material),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then( (response) => {
        console.log(response);
    })
    .catch( (error) => {
        console.log(error);
    });
}

export async function listMaterial() {
    const response = await fetch("http://localhost:3000/material/",
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }) 
    return response.json()
}

export async function updateMaterial(id,material) {
    await fetch(`http://localhost:3000/material/alterar/${id}`,
    {
        method: 'PUT',
        body: JSON.stringify(material),
        headers: {
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        console.log(response);
        return response;
    })
    .catch( (error) => {
        console.log(error);
    });
}

export async function deleteMaterial(id) {
    await fetch(`http://localhost:3000/material/deletar/${id}`,
    {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        console.log(response);
        return response;
    })
    .catch( (error) => {
        console.log(error);
    });
}

export default {
    addMaterial,
    listMaterial,
    updateMaterial,
    deleteMaterial
}