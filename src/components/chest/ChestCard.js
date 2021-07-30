import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Chest.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const ChestCard = ({exercise, setShowModal}) => {

    const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

    const [ bundleIdState, setBundleIdState ] = useState({}) 

    useEffect(() => {
        getUserBundles();
    }, [])

    return ( 
    <section className="chest">
        <h3 className="chest__name">{exercise.name}</h3>
        <p className="chest__name">{exercise.description}</p>
        <p className="chest__name">Category: {exercise.muscleCategory.name}</p>
        <button className="chestButton" onClick={() => { 
            console.log('exercise', exercise)
            let newAssociation = {
                bundleId: parseInt(bundleIdState.id),
                exerciseId: exercise.id
            };
            addExerciseToBundle(newAssociation);
            setShowModal(true)
        }}>
                Add Exercise
        </button>
        </section>
)}


