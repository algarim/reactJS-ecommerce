import './NavBar.css'

import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

import { Link, NavLink } from 'react-router-dom'

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
    return (

        <header>
            <Link to={'/'} className='logo link'>
                <h1>Gatitienda</h1>
                <img src="../img/paw.png" alt="Logo" />
            </Link>


            <Navbar expand='md' className="my-1 navbar">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" className='m-auto'/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="end" className="pt-2 background-color w-auto px-3"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" className='pe-5'>
                                Categorías
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-md-evenly flex-grow-1">
                                <Nav.Link as={NavLink} to="/categoria/cariñosos" className="navbar-categoria">Cariñosos</Nav.Link>
                                <Nav.Link as={NavLink} to="/categoria/tranquilos" className="navbar-categoria">Tranquilos</Nav.Link>
                                <Nav.Link as={NavLink} to="/categoria/independientes" className="navbar-categoria">Independientes</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <CartWidget/>
        </header>
    )
}

export default NavBar