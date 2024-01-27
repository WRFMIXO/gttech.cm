import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationHomepageView from "../../views/Home";
import ApplicationErrorView from "../../views/NotFound";
import { Spinner } from "react-bootstrap";
import "../../assets/css/home.css";

const ApplicationNavigation = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 600);
    return (
        <BrowserRouter>
            {isLoading ? (
                <div className="spinnerDiv justify-content-center align-items-center">
                    <Spinner variant="primary"/>
                </div>
            ) : (
                <Routes>
                { /** Route Primaire de l'application*/}
                <Route path="/gttech.cm/" element={ <ApplicationHomepageView /> } />

                {/** Routes Particulières */}
                <Route path="/gttech.cm/services" />
                <Route path="/gttech.cm/team" />
                <Route path="/gttech.cm/store" />
                <Route path="/gttech.cm/contact" />

                { /** Routes de gestion d'erreurs */}
                <Route path="*" element={ <ApplicationErrorView /> } />
            </Routes>
            )}
        </BrowserRouter>
    );
};

export default ApplicationNavigation;