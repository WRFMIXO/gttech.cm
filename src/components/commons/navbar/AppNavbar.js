import React, { useState } from "react";
import { Container, Nav, Navbar, NavbarToggle, NavbarCollapse, NavLink } from "react-bootstrap";
import logo from "../../../logo.svg";
import "./appNavbar.css";

const WebsiteNavigation = () => {
    const [navExpanded, setNavExpanded] = useState(false);

    return (
        <Navbar expanded={navExpanded} expand="lg" className="appnavbar">

            <Container fluid>
                <div className="navbar-brand">
                    <a href="/gttech.cm">
                        <img src={logo} alt="company logo" height="100px" width="100px" className="company_logo" /> 
                    </a>
                </div>

                <NavbarToggle aria-controls="collapseContent" onClick={() => setNavExpanded(!navExpanded)} />

                <NavbarCollapse id="collapseContent">
                    
                    <Nav className="ms-auto">

                        <NavLink href="/gttech.cm" className="navigationLink">
                            Accueil
                        </NavLink>

                        <NavLink href="/gttech.cm/services" className="navigationLink">
                            Services
                        </NavLink>

                        <NavLink href="/gttech.cm/team" className="navigationLink">
                            Equipe
                        </NavLink>

                        <NavLink href="/gttech.cm/store" className="navigationLink">
                            Boutique
                        </NavLink>

                        <NavLink href="/gttech.cm/contact" className="navigationLink">
                            Contact
                        </NavLink>
                    </Nav>

                </NavbarCollapse>

            </Container>

        </Navbar>
    );
};

export default WebsiteNavigation;