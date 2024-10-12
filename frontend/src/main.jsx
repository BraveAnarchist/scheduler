import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './Sign.jsx';
import Login from './Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/schedule" element={<App />} />
        </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
