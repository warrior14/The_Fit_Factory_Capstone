import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Chest.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";
// import "./BundleAssociation.css"


export const ChestCard = ({exercise, setShowModal, setCurrentExercise}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleState, setBundleState ] = useState({}) 

    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="chest">
        <h3 className="cp">{exercise.name}</h3>
        <p className="chest__name">{exercise.description}</p>
        <p className="chest__name">Category: {exercise.muscleCategory.name}</p>
        <button className="chestButton" onClick={() => { 
      
            setCurrentExercise(exercise)
            setShowModal(true)
        }}>
                Add Exercise
        </button>
        </section>
)}


