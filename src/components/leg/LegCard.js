import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Leg.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const LegCard = ({exercise, setShowModal, setCurrentExercise}) => {

    const { getUserBundles } = useContext(BundleAssociationContext)




    useEffect(() => {
        getUserBundles();
    }, [])


    
    return ( 
    <section className="legName">
        <h1 className="leg">{exercise.name}</h1>
        <p className="cloown">{exercise.description}</p>
        <p className="brown">Category: {exercise.muscleCategory.name}</p>
        {/* <p>Example: {exercise.photo}</p> */}
        <button className="legButton" onClick={() => { 
            setCurrentExercise(exercise)
            setShowModal(true)
        }}>
                Add Exercise
        </button>

        </section>
)}



