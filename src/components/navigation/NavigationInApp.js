import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationHomepageView from "../../views/Home";
import ApplicationErrorView from "../../views/NotFound";

const ApplicationNavigation = () => {

    return (
        <BrowserRouter>
            <Routes>
                { /** Route Primaire de l'application*/}
                <Route path="/gttech.cm" element={ <ApplicationHomepageView /> } />

                {/** Routes Particulières */}
                <Route path="/gttech.cm/services" />
                <Route path="/gttech.cm/team" />
                <Route path="/gttech.cm/store" />
                <Route path="/gttech.cm/contact" />

                { /** Routes de gestion d'erreurs */}
                <Route path="*" element={ <ApplicationErrorView /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationNavigation;