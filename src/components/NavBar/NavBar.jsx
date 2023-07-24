import CartWidget from '../CartWidget/CartWidget'

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

// CSS
import './NavBar.css'


const NavBar = () => {
    // Definimos estados y funciones auxiliares para hacer que el menú offcanvas se cierre al clickear sobre él

    // Define un estado que diga si el menú está o no abierto
    const [menuAbierto, setMenuAbierto] = useState(false);

    // FUNCIONES AUXILIARES: cambiar de estado el menu, y un handler para cerrar el menú
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto)
    };

    const handleClose = () => setMenuAbierto(false);

    return (

        <header>
            <Link to={'/'} className='logo link'>
                <h1>Gatitienda</h1>
                <img src="../img/paw.png" alt="Logo" />
            </Link>


            <Navbar expand='md' className="my-1 navbar">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" className='m-auto' onClick={toggleMenu} />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        placement="end"
                        restoreFocus={false}
                        show={menuAbierto}
                        onHide={handleClose}
                        className="pt-2 background-color w-auto px-3"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" className='pe-5'>
                                Categorías
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-md-evenly flex-grow-1">
                                <Nav.Link as={NavLink} to="/categoria/cariñosos" className="navbar-categoria" onClick={handleClose} >Cariñosos</Nav.Link>
                                <Nav.Link as={NavLink} to="/categoria/tranquilos" className="navbar-categoria" onClick={handleClose}>Tranquilos</Nav.Link>
                                <Nav.Link as={NavLink} to="/categoria/independientes" className="navbar-categoria" onClick={handleClose}>Independientes</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <CartWidget />
        </header>
    )
}

export default NavBar