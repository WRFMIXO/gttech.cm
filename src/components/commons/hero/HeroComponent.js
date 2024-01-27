import React from "react";
import { Button, Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Typewriter from "typewriter-effect";
import "./herocomponent.css";

const ApplicationHeroSectionComponent = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={-200}
    >
      <div className="herosection">
        <Container className="containers">
          <h2 className="sectiontitle">
            Gentle Technologies Entreprise
            <Typewriter
              options={{
                strings: ["Welcome"],
                autoStart: true,
                loop: true,
              }}
            />
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
          <div className="blackVoile"></div>
        </Container>
      </div>
    </Parallax>
  );
};

export default ApplicationHeroSectionComponent;
