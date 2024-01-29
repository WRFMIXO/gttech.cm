import React from "react";
import "./featuredProductSection.css";
import { Col, Container, Button } from "react-bootstrap";

const FeaturedProductsSectionComponent = () => {

    return (
        <div className="row" style={{width: "100%", marginTop: "13rem"}}>
            <Col>
                <Container className="featuredProductTitleContainer">
                    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 40, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Produits Vedettes</div>
                    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 4, wordWrap: 'break-word'}}>Découvrez notre catalogue de produits haut de gamme</div>

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
            </Col>

            <Col>
                
            </Col>
            
        </div>
    );
};

export default FeaturedProductsSectionComponent;