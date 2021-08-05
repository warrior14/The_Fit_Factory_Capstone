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
        <div className="modal-background areYouSure"></div>
        <div className="modal-content sureBundle">
            <h1 className="headerBundle">Edit Exercise</h1>
            <input className="exerciseInput"  id="sets" defaultValue={currentAssociation.sets} onChange={(event) => {
                    handleEdit(event)
                }} placeholder="Amount Of Sets"></input>

                <input className="exerciseInput" id="setsTimeMinutes" defaultValue={currentAssociation.setsTimeMinutes} onChange={(event) => {
                    handleEdit(event)
                    }}  placeholder="Sets Time In Min"></input>

                    <input id="setsTimeSeconds" className="exerciseInput" onChange={(event) => {
                    handleEdit(event)
                    }}  defaultValue={currentAssociation.setsTimeSeconds} placeholder="Sets Time In Sec"></input>

                    <input id="coolDownTimeMinutes" className="exerciseInput" onChange={(event) => {
                    handleEdit(event)
                    }} defaultValue={currentAssociation.cooldownTimeMinutes} placeholder="Cool Down Time In Min"></input>

                    <input id="coolDownTimeSeconds" className="exerciseInput" onChange={(event) => {
                    handleEdit(event)
                    }} defaultValue={currentAssociation.cooldownTimeSeconds} placeholder="Cool Down Time In Sec"></input>

                    <input id="reps" className="exerciseInput" onChange={(event) => {
                    handleEdit(event)
                    }} defaultValue={currentAssociation.reps} placeholder="Amount Of Reps"></input>

                    <textarea id="notes" className="textAreaModal" onChange={(event) => {
                    handleEdit(event)
                    }} defaultValue={currentAssociation.notes} placeholder="Type Notes..."></textarea>

                    <div className="divButtons">
                        <button className="button is-rounded saveBut"  onClick={() => {
                        // this is where the post function goes
                            patchExerciseAssociation(valuesToEdit)
                            setShowEditModal(false)
                        }}>Save</button>
                        <button className="button is-rounded saveBut"  onClick={() => {
                            setShowEditModal(false)
                        }}>Cancel</button>
                    </div>

            </div>
            <button onClick={() => {
            setShowEditModal(false)
            }}
            className="modal-close is-large exitBundle" aria-label="close"></button>
  </div>
    )
}