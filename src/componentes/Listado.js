import React, {useState,useEffect} from "react";
import {Footer} from './Footer'
import { Header } from "./Header";

export default function ListadoPage(){

  const [musica, setMusica] = useState([]);

  useEffect(() =>{
    fetch('http://localhost/pruebaReact/musica.php')
    .then((response) => {
      return response.json();
    })
    .then((musica) =>{
      setMusica(musica)
    })
  }, []);

  return(

    <div>
      <Header>

      </Header>

      <table className="table table-dark table-hover mt-2 mb-2">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>actividad</th>
            <th>genero</th>
            <th>pais</th>
            <th>integrantes</th>
          </tr>
        </thead>
        <tbody>
          {musica.map(ve =>{
            return(
              <tr key = {ve.id}>
                <td>{ve.id}</td>
                <td>{ve.nombre}</td>
                <td>{ve.actividad}</td>
                <td>{ve.genero}</td>
                <td>{ve.pais}</td>
                <td>{ve.integrantes + " "}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Footer>

      </Footer>
    </div>

  );
}