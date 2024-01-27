import React from "react";
import { Button, Container } from "react-bootstrap";
import "./herocomponent.css";

const ApplicationHeroSectionComponent = () => {

    return (
        <div className="herosection justify-content-center align-items-center">
            <Container className="containers justify-content-center align-items-center">
                <h2 className="sectiontitle">
                    Gentle Technologies <br />Entreprise
                </h2>

                <br />
                <span className="description">
                    Faites l'expérience d'un service client disponible et à l'écoute
                </span>

                <br />
                <div className="action_buttons">
                    <a href="/gttech.cm?#getInTouch">
                        <Button variant="" className="btn btn-outline-light" id="actionButton">
                            En Savoir Plus
                        </Button>
                    </a>

                    <a href="/gttech.cm/services">
                        <Button variant="" className="btn btn-dark" id="actionButton">
                            Découvrir
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default ApplicationHeroSectionComponent;