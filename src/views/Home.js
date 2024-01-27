import React, { useState } from "react";
import WebsiteNavigation from "../components/commons/navbar/AppNavbar";
import ApplicationHeroSectionComponent from "../components/commons/hero/HeroComponent";
import { Spinner } from "react-bootstrap";
import "../assets/css/home.css";

const ApplicationHomepageView = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <div>
            {isLoading ? (
                <div className="spinnerDiv justify-content-center align-items-center">
                    <Spinner variant="primary"/>
                </div>
            ) : (
                <div className="content">

                    <WebsiteNavigation />

                    <ApplicationHeroSectionComponent />

                </div>
            )}
        </div>
    );
};

export default ApplicationHomepageView;