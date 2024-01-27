import React from "react";
import WebsiteNavigation from "../components/commons/navbar/AppNavbar";
import ApplicationHeroSectionComponent from "../components/commons/hero/HeroComponent";

const ApplicationHomepageView = () => {

    return (
        <div className="content">

            <WebsiteNavigation />

            <ApplicationHeroSectionComponent />

        </div>
    );
};

export default ApplicationHomepageView;