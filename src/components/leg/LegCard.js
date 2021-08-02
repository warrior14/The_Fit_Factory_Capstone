import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Leg.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const LegCard = ({exercise, setShowModal, setCurrentExercise}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleState, setBundleState ] = useState({}) 


    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="leg">
        <h3 className="leg__name">{exercise.name}</h3>
        <p className="leg__name">{exercise.description}</p>
        <p className="leg__name">Category: {exercise.muscleCategory.name}</p>
        <button className="legButton" onClick={() => { 
            setCurrentExercise(exercise)
            setShowModal(true)
        }}>
                Add Exercise
        </button>

        </section>
)}



