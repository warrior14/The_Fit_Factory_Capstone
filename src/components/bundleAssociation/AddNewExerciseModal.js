import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"





export const AddExerciseModal = ({setShowModal, currentExercise}) => {

  const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)



  const [exercise, setExercise] = useState({
    bundleId: "",
    exerciseId: currentExercise.id,
    sets: "",
    setsTimeMinutes: "",
    setsTimeSeconds: "",
    cooldownTimeMinutes: "",
    cooldownTimeSeconds: "",
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


      <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
              <h1>Add This Exercise To A Bundle!</h1>
              <label>Amount Of Sets:
                <input onChange={(event) => {handleExerciseInput(event)}} id="sets" placeholder="Amount Of Sets" type='number' min="1" className="sets"/>
              </label>
              <label>Sets Time:
                <input onChange={(event) => {handleExerciseInput(event)}} id="setsTimeMinutes" type="number" className="timeInput" placeholder="Min" min="0" max="5" step="1"></input>
                <input onChange={(event) => {handleExerciseInput(event)}} id="setsTimeSeconds" type="number" className="timeInput" placeholder="Sec" min="0" max="59"  step="1"></input>
              </label>
              <label>Cool Down Time
              <input onChange={(event) => {handleExerciseInput(event)}} id="cooldownTimeMinutes" type="number" className="timeInput" placeholder="Min" min="0" max="5" step="1"></input>
                <input onChange={(event) => {handleExerciseInput(event)}} id="cooldownTimeSeconds" type="number" className="timeInput" placeholder="Sec" min="0" max="59"  step="1"></input>
              </label>
              <input type="number" min="1" id="reps" placeholder="Reps" onChange={(event) => {handleExerciseInput(event)}}></input>
              <textarea id="notes" placeholder="Type Notes..." onChange={(event) => {handleExerciseInput(event)}}></textarea>


              <select onChange={(event) => {
                let newExercise = {...exercise}
                let bundle = JSON.parse(event.target.value)
                newExercise["bundleId"] = bundle.id
                setExercise(newExercise)
               
              }} name="arms" id="armsSelect">
                <option>Select A Bundle</option>
              { 
                userBundleList.map(bundle => {return <option value={JSON.stringify(bundle)}>{bundle.name}</option>}) 
              }
              </select>


              <button onClick={() => {
                alert("Exercise has been added to your bundle!")
                setShowModal(false)
                postFunctionToBundle();
              }}>Add</button>
          </div>
          <button onClick={() =>{setShowModal(false)}}className="modal-close is-large" aria-label="close"></button>
      </div>
    )
}