import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {Routes, Route, NavLink , Link} from 'react-router-dom';

import MainPage, { Main } from './componentes/Main';
import BuscarPage, { Buscar } from './componentes/Buscar';
import ListadoPage, { Listado } from './componentes/Listado';

import { Footer } from './componentes/Footer';
import { Header } from './componentes/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/buscador' element={<BuscarPage />}/>
        <Route path='/listado' element={<ListadoPage />}/>
      </Routes>  
    </div>
  );
}

export default App;