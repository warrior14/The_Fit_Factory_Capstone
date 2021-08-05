import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";



//The <Link/> component comes from the React Router package that was installed. It has an attribute named to.
//It will render a hyperlink in the DOM and when clicked, it will change the URL in the browser to the value of the to attribute.

export const NavBar = () => {

    let [isActive, setIsActive] = useState("home");

    const history = useHistory()

    
    const checkNavState = (navLocation) => {
        let activeClass = "";
        if (isActive === navLocation) {
          activeClass = "active"
        };

        return activeClass;
  
        // or....
        // return isActive === navLocation ? "active" : ""
    };




    const handleLogout = (clickEvent) => {
        clickEvent.preventDefault()
        sessionStorage.removeItem("fitfactory_user")
        history.push("/login")
    };
  



    return (
        
        <div className="nav__div">
            <ul className="navbar">
                <li className={`navbar__item ${checkNavState("home")}`}
                    onClick={() => setIsActive("home")}>
                    <div className="navDiv">
                        <Link className="navbar__link" to="/">Home</Link>
                    </div>
                    <img className="navLogo" src="https://img.icons8.com/ios-filled/50/000000/gum-.png" alt=""/>
                </li>
                <li className={`navbar__item ${checkNavState("bundleList")}`}
                    onClick={() => setIsActive("bundleList")}>
                    <div className="navDiv">
                        <Link className="navbar__link" to="/bundleList">Bundles</Link>
                    </div>
                    <img className="navLogo" src="https://img.icons8.com/color/48/000000/weightlifting-skin-type-2.png" alt=""/>
                </li>
                <li className={`navbar__item ${checkNavState("leg")}`}
                    onClick={() => setIsActive("leg")}>
                    <div className="navDiv">
                        <Link className="navbar__link" to="/leg">Legs</Link>
                    </div>
                    <img className="navLogo" src="https://img.icons8.com/color/48/000000/calves.png" alt=""/>
                </li>
                <li className={`navbar__item ${checkNavState("arm")}`}
                    onClick={() => setIsActive("arm")}>
                    <div className="navDiv">
                        <Link className="navbar__link" to="/arm">Arms</Link>
                    </div>
                    <img className="navLogo" src="https://img.icons8.com/color/48/000000/biceps.png" alt=""/>
                </li>
                <li className={`navbar__item ${checkNavState("chest")}`}
                onClick={() => setIsActive("chest")}>
                    <div className="navDiv">
                        <Link className="navbar__link" to="/chest">Chest</Link>
                    </div>
                    <img className="navLogo" src="https://img.icons8.com/color/48/000000/chest.png" alt=""/>
                </li>
                <li className={`navbar__item ${checkNavState("back")}`}
                onClick={() => setIsActive("back")}>
                    <div className="navDiv">
                        <Link className="navbar__link" to="/back">Back</Link>
                    </div>
                    <img className="navLogo" src="https://img.icons8.com/color/48/000000/back-muscles.png" alt=""/>
                </li>
                <li className="navbar__item" 
                onClick={(clickEvent) => {handleLogout(clickEvent)}}>
                <div className="navDiv">
                <Link className="navbar__link" to="/login">Logout</Link>
                </div>
                <img classNamej="navLogo" src="https://img.icons8.com/material-outlined/50/000000/exit-sign.png" alt=""/>
            </li>
            </ul>
        </div>
    
    )
};