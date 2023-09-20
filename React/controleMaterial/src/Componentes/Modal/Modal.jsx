import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [nomeAtualizado, setNomeAtualizado] = useState(props.nomeEdit);
  let [quantidadeAtualizado, setQuantidadeAtualizado] = useState(props.quantidadeEdit);
  let [precoAtualizado, setPrecoAtualizado] = useState(props.precoEdit);

  return (
    <div>
      <Button onClick={handleOpen}>
            <EditNoteIcon sx={{ fontSize: 30 }}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        position: 'absolute',
        top: '50%',
        left: '50%',
        alignContent: "center",
        alignItems: "center",
        display: "grid",
        backgroundColor: "#D8F0CC",
        margin: "10 px",
        padding: "10px",
        borderRadius: '10px'
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField
            onChange={(event)=> {
                setNomeAtualizado(event.target.value)
            }}
            id="outlined-multiline-flexible"
            label="Produto"
            defaultValue={props.nomeEdit}
            multiline
            maxRows={4}
            
            />
        </div>

        <div>
            <TextField
            onChange={(event)=> {
                setQuantidadeAtualizado(event.target.value)
            }}
            id="outlined-multiline-flexible"
            label="Quantidade"
            defaultValue={props.quantidadeEdit}
            multiline
            maxRows={4}
           
            />
        </div>

        <div>
            <TextField
            onChange={(event)=> {
                setPrecoAtualizado(event.target.value)
            }}
            id="outlined-multiline-flexible"
            label="Preço R$"
            defaultValue={props.precoEdit}
            multiline
            maxRows={4}
           
            />
        </div>

        <div>
            {/* <Button label="Success" severity="success" raised /> */}
            <Button variant="contained" color="success" onClick={()=>{
                if(nomeAtualizado !== ''){
                axios({
                    method: "put",
                    url: "http://localhost:3000/material/alterar/"+props.idProduto,
                    data: {
                    nome: nomeAtualizado,
                    quantidade: Number(quantidadeAtualizado),
                    preco: Number(precoAtualizado)
                        },
                      })
                      .then(()=>{
                        console.log("Material atualizado com sucesso!")
                        props.atualizou (props.atualizar ? false : true)
                        // if(controle==false){
                        //     props.atualizou (true)
                        //     setControle(true)
                        // }
                        // else{
                        //     props.atualizou(false)
                        //     setControle(false)
                        // }
                        handleClose();
                      });
                }
            }}>Salvar</Button>
        </div>

    </Box>

      </Modal>
    </div>
  );
}