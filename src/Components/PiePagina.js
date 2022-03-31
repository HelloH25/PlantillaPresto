import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PiePagina = () => {
    return (
        <div>
            <center>
                <h3>Canaima</h3>
            </center>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link><Link to="/">Active</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='piePagina' style={{borderLeft:"2px", borderColor:"white"}}><Link to="/Nosotros" style={{borderLeft:"2px", borderColor:"white"}}>Link</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='piePagina' ><Link to="/Contacto">Link</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <br/>
        </div>
    )
}

export default PiePagina