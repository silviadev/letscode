import React from "react";
import { useParams } from "react-router-dom";
import Register from "./Register";

function Login () {

    const {nome} = useParams();
        
        return (
            <>
                <h1>Olá {nome}</h1>
                <Register />
            </>
        );
    }


export default Login