import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
  root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRoutes/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
