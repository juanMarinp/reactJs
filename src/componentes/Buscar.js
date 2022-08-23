import React, { useState, useEffect } from "react";
import { Footer } from './Footer'
import { Header } from "./Header";
import { GetBanda } from "./GetBanda";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Alert } from "bootstrap";
import { AlertJs } from "./AlertJs"

export default function BuscarPage() {

  const [musica, setMusica] = useState([]);
  const [datosGuardados, setDatosGuardados] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost/pruebaReact/musica.php')
      .then((response) => {
        return response.json();
      })
      .then((musica) => {
        setMusica(musica)
      })
  }, []);

  function obtenerBanda(event) {
    event.preventDefault();
    var idBanda = event.target.id.value;
    console.log(idBanda);
    var index = musica.findIndex(banda => banda.id == idBanda)
    console.log(index);

    if (index != -1){
      var data = {
        "id": musica[index].id,
        "nombre": musica[index].nombre,
        "actividad": musica[index].actividad,
        "genero": musica[index].genero,
        "pais": musica[index].pais,
        "integrantes": musica[index].integrantes,
      };
      localStorage.setItem('banda', JSON.stringify(data));

      setError(false);
    } else {
      setError(true);
    };

    var val = localStorage.getItem('banda')

    val = JSON.parse(val);

    setDatosGuardados(true);

  };

  function Formulario(props){
    return (
      <form onSubmit={props.onObtener}>
        <FloatingLabel
          controlId="id"
          label="Id  Banda"
          className="mt-5 mb-2 container-sm"
        >
          <Form.Control type="number" placeholder="Id Banda" />
        </FloatingLabel>
        <Button variant="secondary" className="mb-3" type="submit">Buscar</Button>
      </form>
    )
  }

  return (

    <div>
      <Header>

      </Header>


      <Formulario onObtener={obtenerBanda}/>

      {(!!error && <AlertJs/>)}

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
          {(!!datosGuardados && <GetBanda/>)}
        </tbody>
      </table>

      <Footer>

      </Footer>
    </div>

  );
}