import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Back.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const BackCard = ({exercise}) => {

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
        }} name="back" id="backSelect">
                <option>Select A Bundle</option>
               { userBundleList.map(bundle => {
                   return <option value={bundle.id}>{bundle.name}</option>
               }) }

        </select>
        </section>
)}



