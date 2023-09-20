import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css"
import './App.css'
import { Link } from 'react-router-dom';


function App() { //estático (ex: uma nav) está em todas as páginas

  return (
    <>
   <nav><ul>
    <li>
      <Link to = '/'>Home</Link>
    </li>

    <li>
      <Link to = 'login'>Login</Link>
    </li>

    <li>
      <Link to = 'profile'>Profile</Link>
    </li>

    </ul>
    </nav>
      
    </>
  )
}

export default App
