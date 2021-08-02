import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Back.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const BackCard = ({exercise, setShowModal, setCurrentExercise}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleState, setBundleState ] = useState({}) 

    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="back">
        <h3 className="back__name">{exercise.name}</h3>
        <p className="back__name">{exercise.description}</p>
        <p className="back__name">Category: {exercise.muscleCategory.name}</p>
        <button className="backButton" onClick={() => { 
            
            setCurrentExercise(exercise)
            setShowModal(true)
        }}>
                Add Exercise
        </button>
        </section>
)}



