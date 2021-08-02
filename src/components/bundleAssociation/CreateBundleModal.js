import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider";
import "./BundleAssociation.css"


export const CreateBundleModal = ({setShowBundleModal}) => {


    const {addNewBundle} = useContext(BundleAssociationContext)

    const [newBundle, setNewBundle] = useState(
        {
            name: "",
            userId: parseInt(sessionStorage.getItem("fitfactory_user")) 
        }
    )



return (
    <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-content">
        <h1 className="createBundleButton">Create Your Workout Bundle!</h1>
        <input onChange={(event) => {
            let newObj =  {
                name: event.target.value,
                userId: parseInt(sessionStorage.getItem("fitfactory_user")) 
            }
            setNewBundle(newObj)
        }} placeholder="name"></input>
        <button className="createBundleButton" onClick={() => {
            addNewBundle(newBundle) 
            setShowBundleModal(false)
        }}>Create Bundle</button>
        

    </div>
    <button onClick={() => {
            setShowBundleModal(false)}}className="modal-close is-large" aria-label="close"></button>
    </div>
)


}

