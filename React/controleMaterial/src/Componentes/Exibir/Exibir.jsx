import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

import BasicModal from '../Modal/Modal';


export default function BasicTable(props) {

    let [dadosBd, setDadosBd] = useState([]);   
    let [retornoDel, setRetornoDel] = useState(false);

    useEffect(() => {
    axios.get("http://localhost:3000/material/")
        .then((response) => {
            setDadosBd(response.data)
            console.log([...dadosBd])
        })

},[props.atualizar, retornoDel])


  return (
    <>
    <h2>Materiais</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx = {{fontWeight:600, fontSize: 18}}>Produto</TableCell>
            <TableCell align="right" sx = {{fontWeight:600, fontSize: 18}}>Quantidade</TableCell>
            <TableCell align="right" sx = {{fontWeight:600, fontSize: 18}}>Preço</TableCell>
            <TableCell align="right" sx = {{fontWeight:600, fontSize: 18}}>Editar</TableCell>
            <TableCell align="right" sx = {{fontWeight:600, fontSize: 18}}>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dadosBd.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.quantidade}</TableCell>
              <TableCell align="right">{row.preco}</TableCell>
              <TableCell align="right">

                    <BasicModal 
                      nomeEdit = {row.nome}
                      quantidadeEdit = {row.quantidade}
                      precoEdit = {row.preco}
                      idProduto = {row.id}
                      atualizou = {(update)=>{
                        setRetornoDel(update)
                      }}
                      atualizar = {retornoDel}//retorna true ou false
                      />

              </TableCell>
              <TableCell align="right">
                <Button onClick={()=>{
                  axios({
                    method: 'delete',
                    url: `http://localhost:3000/material/deletar/${row.id}`
                  }).then(()=>{

                    setRetornoDel(retornoDel == false ? true : false);
                    console.log('Item deletado!')
                  })
                }}>
                    <DeleteIcon sx={{ fontSize: 30, color:'#CC2006' }}/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
}

