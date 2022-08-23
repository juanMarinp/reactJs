import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
/* Import img */
import banner01 from '../bannerprueba/banner01.webp';
import banner02 from '../bannerprueba/banner02.webp';
import banner03 from '../bannerprueba/banner03.webp';
import logo01 from '../bannerprueba/logo01.png'
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link className="navbar-brand" to="/">
              <img src={logo01} alt="logo" width="30" height="30" className="d-inline-block align-top" />
            </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              <Link className="nav-link active" aria-current="page" to="/listado">Listado</Link>
              <Link className="nav-link active" aria-current="page" to="/Buscador">Buscar</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner03}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner03}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner03}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
};
