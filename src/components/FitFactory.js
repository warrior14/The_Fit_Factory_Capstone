import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import "./FitFactory.css";


export const FitFactory = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("fitfactory_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/Login" />
        }
      }}
    />
    <Route path="/Login">
      <Login />
    </Route>
    <Route path="/Register">
      <Register />
    </Route>
  </>
);
