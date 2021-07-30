import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Leg.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const LegCard = ({exercise, setShowModal}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleIdState, setBundleIdState ] = useState({}) 


    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="leg">
        <h3 className="leg__name">{exercise.name}</h3>
        <p className="leg__name">{exercise.description}</p>
        <p className="leg__name">Category: {exercise.muscleCategory.name}</p>
        <button className="legButton" onClick={() => { 
            console.log('exercise', exercise)
            let newAssociation = {
                bundleId: parseInt(bundleIdState),
                exerciseId: exercise.id
            };
            addExerciseToBundle(newAssociation);
            setShowModal(true)
        }}>
                Add Exercise
        </button>

        </section>
)}



