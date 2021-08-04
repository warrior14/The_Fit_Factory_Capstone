import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"

export const EditModal = ({setShowEditModal, currentAssociation}) => {


    const {patchExerciseAssociation} = useContext(BundleAssociationContext)

    const [valuesToEdit, setValuesToEdit] = useState({id: currentAssociation.id, bundleId: currentAssociation.bundleId})

    // this function is dynamic, all of the fields have access to it, even the notes
    // which means the numbers will be strings when they get posted to the database.
    // If I was to parseInt here, this will break when the notes are typed because they arent numbers.
    const handleEdit = (event) => {
        let editValues = {...valuesToEdit}
        editValues[event.target.id] = event.target.value
        setValuesToEdit(editValues)
    }

    return (

        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
        <input id="sets" onChange={(event) => {
                handleEdit(event)
            }} placeholder="Amount Of Sets"></input>
            <input onChange={(event) => {
                handleEdit(event)
                }} id="setsTimeMinutes" placeholder="Sets Time In Min"></input>
                <input onChange={(event) => {
                handleEdit(event)
                }} id="setsTimeSeconds" placeholder="Sets Time In Sec"></input>
                <input onChange={(event) => {
                handleEdit(event)
                }}id="coolDownTimeMinutes" placeholder="Cool Down Time In Min"></input>
                <input onChange={(event) => {
                handleEdit(event)
                }} id="coolDownTimeSeconds" placeholder="Cool Down Time In Sec"></input>
                <input onChange={(event) => {
                handleEdit(event)
                }} id="reps" placeholder="Amount Of Reps"></input>
                <textarea onChange={(event) => {
                handleEdit(event)
                }} id="notes" placeholder="Type Notes..."></textarea>
                <button className="button" onClick={() => {
                // this is where the post function goes
                    patchExerciseAssociation(valuesToEdit)
                    setShowEditModal(false)
                }}>Save</button>
                <button className="button" onClick={() => {
                    setShowEditModal(false)
                }}>Cancel</button>

        </div>
        <button onClick={() => {
           setShowEditModal(false)
        }}
        className="modal-close is-large" aria-label="close"></button>
  </div>
    )
}