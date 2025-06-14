import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './style.css';
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <ToastContainer />
  </StrictMode>,
)
