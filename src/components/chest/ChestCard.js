import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Chest.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const ChestCard = ({exercise}) => {

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
        <button onClick={() => { 
            console.log('exercise', exercise)
            let newAssociation = {
                bundleId: parseInt(bundleIdState),
                exerciseId: exercise.id
            };
            addExerciseToBundle(newAssociation);
        }}>
                Add Exercise
        </button>
        <select onChange={(event) => {

                console.log(event.target.value)
                setBundleIdState(event.target.value);
        }} name="chest" id="chestSelect">
                <option>Select A Bundle</option>
               { userBundleList.map(bundle => {
                   return <option value={bundle.id}>{bundle.name}</option>
               }) }

        </select>
        </section>
)}


