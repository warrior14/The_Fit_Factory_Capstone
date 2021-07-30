import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Arm.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const ArmCard = ({exercise, setShowModal}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleState, setBundleState ] = useState({}) 

    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="arm">
        <h3 className="arm__name">{exercise.name}</h3>
        <p className="arm__name">{exercise.description}</p>
        <p className="arm__name">Category: {exercise.muscleCategory.name}</p>
        <button className="armButton" onClick={() => { 
            console.log('exercise', exercise, bundleState)
            let newAssociation = {
                bundleId: parseInt(bundleState.id),
                exerciseId: exercise.id
            };
            // addExerciseToBundle(newAssociation);
            // alert(`${exercise.name} Added to ${bundleState.name} bundle`)
            setShowModal(true)
        }}>
                Add Exercise
        </button>

        </section>
)}



