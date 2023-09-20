import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function Header (){
    //let nome = "cabeça";
    let [nome, setNome] = useState("topo");
    let [backgroundColor, setBackgroundColor] = useState("green");
    //nome="topo";
    useEffect (()=>{
        setNome("Header");
        //console.log(nome);
    },[])

    
    return (
       <>
       <Box
      sx={{
        height: 300,
        backgroundColor: {backgroundColor},
        justifySelf: 'center'
      }}
    >
            <h1>
                {nome}
            </h1>
            <Button variant="contained" onClick={()=>{
                if(backgroundColor === "green"){
                    setBackgroundColor("blue");
                }
                else {
                    setBackgroundColor("green")
                }
            }}>Mudar cor</Button>
        </Box>
        </>
    )
}

export default Header;
