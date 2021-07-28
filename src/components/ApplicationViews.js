import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home.js";
import { LegProvider } from "./leg/LegProvider.js";
import { LegList } from "./leg/LegList.js";
import { ChestProvider } from "./chest/ChestProvider.js";
import {ChestList } from "./chest/ChestList.js";
import { BackProvider } from "./back/BackProvider.js";
import { BackList } from "./back/BackList.js";
import { ArmProvider } from "./arm/ArmProvider.js";
import { ArmList } from "./arm/ArmList.js";
import { BundleAssociationProvider } from "./bundleAssociation/BundleAssociationProvider.js";
import { BundleAssociationList } from "./bundleAssociation/BundleAssociationList.js"



 
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>


            <LegProvider>
                <Route exact path="/leg">
                    <LegList />
                </Route>
            </LegProvider>



            <ChestProvider>
                <Route exact path="/chest">
                    <ChestList />
                </Route>
            </ChestProvider>


            <BackProvider>
                <Route exact path="/back">
                    <BackList />
                </Route>
            </BackProvider>



            <ArmProvider>
                <Route exact path="/arm">
                    <ArmList />
                </Route>
            </ArmProvider>



            <BundleAssociationProvider>
                <Route exact path="/bundleAssociation">
                    <BundleAssociationList />
                </Route>
            </BundleAssociationProvider>
        </>
    )
}
