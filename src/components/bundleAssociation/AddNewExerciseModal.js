import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"
import "./BundleAssociation.css"
import { LightSpeedInAnimation } from "../animations/AnimationHelper";
import {StyleRoot} from 'radium';




export const AddExerciseModal = ({setShowModal, currentExercise}) => {

  const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)



  const [exercise, setExercise] = useState({
    bundleId: "",
    exerciseId: currentExercise.id,
    sets: "",
    setsTimeMinutes: "0",
    setsTimeSeconds: "0",
    cooldownTimeMinutes: "0",
    cooldownTimeSeconds: "0",
    reps: "",
    notes: ""
  })


  const handleExerciseInput = (event) => {
   let newExercise = {...exercise}
   newExercise[event.target.id] = event.target.value
   setExercise(newExercise)
  }


 const postFunctionToBundle = () => {
   
   addExerciseToBundle(exercise);
 }



    return (
      <StyleRoot>

            <div className="modal is-active" style={LightSpeedInAnimation(1)}>
                <div className="modal-background areYouSure"></div>
                <div className="modal-content sureBundle">
                    <h1 className="headerBundle">Add This Exercise To A Bundle!</h1>
                    <div className="setAmtDiv">
                      <label className="labelSection">Amount Of Sets:
                        <input className="set_amount" onChange={(event) => {handleExerciseInput(event)}} id="sets" placeholder="Amount Of Sets" type='number' min="1"/>
                      </label>
                    </div>
                    <div className="setTimeDiv">
                      <label className="labelSection">Sets Time:
                        <input className="set_amount"  onChange={(event) => {handleExerciseInput(event)}} id="setsTimeMinutes" type="number" defaultValue="0" className="timeInput" placeholder="Min" min="0" max="5" step="1"></input>
                        <input className="set_amount"  onChange={(event) => {handleExerciseInput(event)}} id="setsTimeSeconds" type="number" defaultValue="0" placeholder="Sec" min="0" max="59"  step="1"></input>
                      </label>
                    </div>
                    <label className="labelSection">Cool Down Time
                    <input className="set_amount"  onChange={(event) => {handleExerciseInput(event)}} id="cooldownTimeMinutes" type="number" defaultValue="0" placeholder="Min" min="0" max="5" step="1"></input>
                      <input className="set_amount"  onChange={(event) => {handleExerciseInput(event)}} id="cooldownTimeSeconds" type="number" defaultValue="0" placeholder="Sec" min="0" max="59"  step="1"></input>
                    </label>
                    <div className="repDiv">
                      <input className="repsInput"  type="number" min="1" id="reps" placeholder="Reps" onChange={(event) => {handleExerciseInput(event)}}></input>
                    </div>
                    <div className="notesDiv">
                      <textarea className="notesArea" id="notes" placeholder="Type Notes..." onChange={(event) => {handleExerciseInput(event)}}></textarea>
                    </div>

                    <div>
                      <select className="bundle_select" onChange={(event) => {
                        let newExercise = {...exercise}
                        let bundle = JSON.parse(event.target.value)
                        newExercise["bundleId"] = bundle.id
                        setExercise(newExercise)
                      
                      }} name="arms" id="armsSelect">
                        <option className="bundleSelect">Select A Bundle</option>
                      { 
                        userBundleList.map(bundle => {return <option value={JSON.stringify(bundle)}>{bundle.name}</option>}) 
                      }
                      </select>
                    </div>

                    <button className="button is-rounded addBut" onClick={() => {
                      alert("Exercise has been added to your bundle!")
                      setShowModal(false)
                      postFunctionToBundle();
                    }}>Add</button>
                </div>
                <button onClick={() =>{setShowModal(false)}} className="modal-close is-large exitBundle" aria-label="close"></button>
            </div>
      </StyleRoot>
    )
}