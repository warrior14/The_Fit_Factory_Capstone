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
        <ul className="navbar">
             <li className={`navbar__item ${checkNavState("home")}`}
                onClick={() => setIsActive("home")}>
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className={`navbar__item ${checkNavState("workoutBundles")}`}
                onClick={() => setIsActive("workoutBundles")}>
                <Link className="navbar__link" to="/workoutBundles">Workout Bundles</Link>
            </li>
            <li className={`navbar__item ${checkNavState("legs")}`}
                onClick={() => setIsActive("legs")}>
                <Link className="navbar__link" to="/legs">Legs</Link>
            </li>
            <li className={`navbar__item ${checkNavState("arms")}`}
                onClick={() => setIsActive("arms")}>
                <Link className="navbar__link" to="/arms">Arms</Link>
            </li>
            <li className={`navbar__item ${checkNavState("chest")}`}
              onClick={() => setIsActive("chest")}>
                <Link className="navbar__link" to="/chest">Chest</Link>
            </li>
            <li className={`navbar__item ${checkNavState("back")}`}
              onClick={() => setIsActive("back")}>
                <Link className="navbar__link" to="/back">Back</Link>
            </li>
            <li className="navbar__item" 
            onClick={(clickEvent) => {handleLogout(clickEvent)}}>
              <Link className="navbar__link" to="/login">Logout</Link>
          </li>
        </ul>
    )
};