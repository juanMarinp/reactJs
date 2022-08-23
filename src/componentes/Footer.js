import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

export const Footer = () => {
  return(
    <Card className="text-center bg-secondary">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Prueba_React</Card.Title>
        <Card.Text>
          &copy;Integrantes | Jesús Rojas and Juan Marin | D-B50-N3-P12-C3 
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-gb-dark">12 - 07 - 2022</Card.Footer>
    </Card>
  )
};
