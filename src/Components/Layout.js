import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                    <Container>
                        <Navbar.Brand className><Link to="/">Canaima</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto justify-content-center" >
                                <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                                <a href='/#Menu' target="_self" className='nav-item nav-link'>Menú</a>
                                <Nav.Link><Link to="Nosotros">Nosotros</Link></Nav.Link>
                                <Nav.Link><Link to="Contacto">Contacto</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </header>
            <div>
                <br />
                <br />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout