import React from "react";
import { Container } from "react-bootstrap";
import "./unavailableroad.css";

const RoadErrorComponent = () => {

    return (
        <Container className="errordiv justify-content-center align-items-center">
            <span className="errorspan justify-content-center align-items-center">
                <p className="errortext">4 0 4 </p>
                <p className="errorannouncement"> La ressource que vous recherchez est indisponible ou a été déplacée temporairerement </p>
                <p className="errorannouncement_last"> Vous serez redirigé dans 5 secondes </p>
            </span>
        </Container>
    );
};

export default RoadErrorComponent;