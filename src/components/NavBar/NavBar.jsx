import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
    return (

        <header>
            <div className='logo'>
                <h1>Gatitienda</h1>
                <img src="src/assets/img/paw.png" alt="Mano Gatito Corazón" />
            </div>


            <Navbar bg="light" expand='md' className="my-1 navbar">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" className='m-auto'/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="end" className="pt-2"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"                         className="offcanvas-title">
                                Categorías
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-md-evenly flex-grow-1">
                                <Nav.Link href="#action1" className="navbar-categoria">Lindos</Nav.Link>
                                <Nav.Link href="#action2" className="navbar-categoria">Graciosos</Nav.Link>
                                <Nav.Link href="#action2" className="navbar-categoria">Enojados</Nav.Link>
                                <Nav.Link href="#action2" className="navbar-categoria">Pensativos</Nav.Link>
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