import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import "./Leg.css"
import { BundleAssociationContext } from "./../bundleAssociation/BundleAssociationProvider";


export const LegCard = ({exercise}) => {

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
        }}>
                Add Exercise
        </button>
        <select onChange={(event) => {

                console.log(event.target.value)
                setBundleIdState(event.target.value);
        }} name="legs" id="legSelect">
                <option>Select A Bundle</option>
               { userBundleList.map(bundle => {
                   return <option value={bundle.id}>{bundle.name}</option>
               }) }

        </select>
        </section>
)}



