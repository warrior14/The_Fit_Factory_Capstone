import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider";
import "./BundleAssociation.css"
import { LightSpeedInAnimation } from "../animations/AnimationHelper";
import {StyleRoot} from 'radium';


export const CreateBundleModal = ({setShowBundleModal}) => {


    const {addNewBundle} = useContext(BundleAssociationContext)

    const [newBundle, setNewBundle] = useState(
        {
            name: "",
            userId: parseInt(sessionStorage.getItem("fitfactory_user")) 
        }
    )



return (
    <StyleRoot>
    <div className="modal is-active" style={LightSpeedInAnimation(1)}>
    <div className="modal-background createBundleModal"></div>
    <div className="modal-content bundleForm">
        <h1 className="headerBundle">Create Your Workout Bundle!</h1>
        <input className="bundleInput" onChange={(event) => {
            let newObj =  {
                name: event.target.value,
                userId: parseInt(sessionStorage.getItem("fitfactory_user")) 
            }
            setNewBundle(newObj)
        }} placeholder="Name"></input>
        <button className="button is-rounded createBut" onClick={() => {
            addNewBundle(newBundle) 
            setShowBundleModal(false)
            alert("Your bundle has been created!")
        }}>Create Bundle</button>
        

    </div>
    <button onClick={() => {
            setShowBundleModal(false)}}className="modal-close is-large exitBundle" aria-label="close"></button>
    </div>
    </StyleRoot>
)


}

