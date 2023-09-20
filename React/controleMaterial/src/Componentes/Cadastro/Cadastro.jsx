import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import { Button } from 'primereact/button';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

function Cadastro(props){

        let [nome, setNome] = useState([])
        let [quantidade, setQuant] = useState([])
        let [preco, setPreco] = useState([])

        let [controle, setControle] = useState(false)
    
        let pegaNome = (e) => {
            setNome(e.target.value)
        }

        let pegaQuant = (e) => {
            setQuant(e.target.value)
        }

        let pegaPreco = (e) => {
            setPreco(e.target.value)
        }

    return (
    <>
    <h2>Cadastrar Produtos</h2>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        alignContent: "center",
        width: "100%",
        borderRadius:"25px",
        display: "grid",
        backgroundColor: "#D8F0CC",
        margin: "10 px",
        padding: "10px"
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField
            id="outlined-multiline-flexible"
            label="Produto"
            multiline
            maxRows={4}
            onChange={pegaNome}
            />
        </div>

        <div>
            <TextField
            id="outlined-multiline-flexible"
            label="Quantidade"
            multiline
            maxRows={4}
            onChange={pegaQuant}
            />
        </div>

        <div>
            <TextField
            id="outlined-multiline-flexible"
            label="Preço R$"
            multiline
            maxRows={4}
            onChange={pegaPreco}
            />
        </div>

        <div>
            {/* <Button label="Success" severity="success" raised /> */}
            <Button variant="contained" color="success" onClick={()=>{
                if(nome !== ''){
                axios({
                    method: "post",
                    url: "http://localhost:3000/material/cadastrar/",
                    data: {
                    nome: nome,
                    quantidade: Number(quantidade),
                    preco: Number(preco)
                        },
                      })
                      .then(()=>{
                        console.log("Material cadastrado!")
                        if(controle==false){
                            props.salvou (true)
                            setControle(true)
                        }
                        else{
                            props.salvou(false)
                            setControle(false)
                        }
                      })
                }
            }}>Salvar</Button>
        </div>

    </Box>

    </>);
}

export default Cadastro;