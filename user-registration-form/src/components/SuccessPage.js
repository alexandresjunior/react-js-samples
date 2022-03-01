import React from "react";
import "../assets/css/styles.css";
import logo from "../assets/images/redirect-logo.svg";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const SuccessPage = () => {

    return (
        <div className="container col col-6">
            <h2 className="text-center mt-10 mb-5">Your account was registered with success!</h2>
            <h3 className="text-center mt-5 mb-5">Now you're being redirected to login page.</h3>
            <div className="text-center mt-7">
                <img src={logo} className="redirect-logo" alt="Redirect to login page" />
            </div>            
        </div>
    );
}

export default SuccessPage;