import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <App />}>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
   
    </Route>
  </Routes>
  
  </BrowserRouter>
   
  
  </React.StrictMode>

);

