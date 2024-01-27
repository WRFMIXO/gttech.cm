import React from "react";
import "./featuredProductSection.css";
import { Col, Container, Button } from "react-bootstrap";

const FeaturedProductsSectionComponent = () => {

    return (
        <div className="row" style={{width: "100%", marginTop: "13rem"}}>
            <Col>
                <Container className="featuredProductTitleContainer">
                    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 40, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Produits Vedettes</div>
                    <div style={{alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 4, wordWrap: 'break-word'}}>Découvrez notre catalogue de produits </div>

                    <br />
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                        <Button style={{width: 160, padding: 12, borderRadius: 8, border: '1px black solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>View All</div>
                        </Button>
                        <Button style={{width: 160, padding: 12, background: 'black', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Shop Now</div>
                        </Button>
                    </div> 
                </Container>
            </Col>
            
            
        </div>
    );
};

export default FeaturedProductsSectionComponent;