import React from "react";
import WebsiteNavigation from "../components/commons/navbar/AppNavbar";
import ApplicationHeroSectionComponent from "../components/commons/hero/HeroComponent";
import "../assets/css/home.css";
import FeaturedProductsSectionComponent from "../components/commons/featuredProducts/FeaturedProductsSection";

const ApplicationHomepageView = () => {

    return (
        <div className="content">

            <WebsiteNavigation />
            <br />
            <br />

            <ApplicationHeroSectionComponent />
            <br />
            <br />
            
            <FeaturedProductsSectionComponent />


        </div>
    );
};

export default ApplicationHomepageView;