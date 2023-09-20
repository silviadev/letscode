import './App.css'
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Nav from './Componentes/Nav';
import ArtigoCima from './Componentes/ArtigoCima';
import ArtigoBaixo from './Componentes/ArtigoBaixo';
import Grid from '@mui/material/Grid';

function App() {

  return (
    <>
      <Grid container spacing={2}>

        <Grid item xs={12}>
        
            <Header/>
          
        </Grid>

      <Grid item xs={4}>
        <Nav/>
      </Grid>

      <Grid item xs={8}>
        <ArtigoCima/>
        <ArtigoBaixo/>
      </Grid>

      <Grid item xs={12}>
        <Footer/>
      </Grid>
    </Grid>
    
    </>
  )
}

export default App;