import React from "react";
import WebsiteNavigation from "../components/commons/navbar/AppNavbar";
import RoadErrorComponent from "../components/commons/errors/roadsErrors/RoadsErrorComponent";

const ApplicationErrorView = () => {
    return(
        <div className="top">
            <WebsiteNavigation />

            <div className="errorContent justify-content-center align-items-center" style={{
                width: "100%",
            }}>
                <RoadErrorComponent />
            </div>
        </div>
    );
};

export default ApplicationErrorView;