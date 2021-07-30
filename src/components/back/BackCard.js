import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Back.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const BackCard = ({exercise, setShowModal}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleIdState, setBundleIdState ] = useState({}) 

    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="back">
        <h3 className="back__name">{exercise.name}</h3>
        <p className="back__name">{exercise.description}</p>
        <p className="back__name">Category: {exercise.muscleCategory.name}</p>
        <button className="backButton" onClick={() => { 
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



