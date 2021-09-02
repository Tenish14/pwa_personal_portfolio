import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import  { Link } from "react-router-dom"

function TopNav () {
    return (
    <Navbar expand ="md" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="mx-4">
            <h4>Tenish</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu"/>
        <Navbar.Collapse id="menu" className="justify-content-end">
            <React.Fragment >
                <Nav >
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/project">Project</Link>
                    <Link className="nav-link" to="/skills">Skills</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>

                </Nav>
                
            </React.Fragment>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default TopNav