import { useState } from 'react';
import './App.css'
import Cadastro from './Componentes/Cadastro/Cadastro'
import BasicTable from './Componentes/Exibir/Exibir';
import Grid from '@mui/material/Grid';

function App() {

  let [atualizar, setAtualizar] = useState(false);

  return (
    <>
    
  <Grid container spacing={8}>
     <Grid item xs={4}>
      <Cadastro salvou = {setAtualizar}/>
    </Grid>

  <Grid item xs={8}>
    <BasicTable atualizar={atualizar}/>
  </Grid>
  
</Grid>
      
    </>
  )
}

export default App
