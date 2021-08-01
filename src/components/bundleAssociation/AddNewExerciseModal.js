import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"





export const AddExerciseModal = ({setShowModal, currentExercise}) => {

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
    console.log('event', exercise, currentExercise);
   
    if (event.target.value.includes(":")) {
        let minutesAndSeconds = event.target.value.split(":")
        let minutes = minutesAndSeconds[0];
        let seconds = minutesAndSeconds[1];
        if (minutes >= 5) {
          const newExercise = {...exercise}
          newExercise["setsTimeMinutes"] = 5;
          newExercise["setsTimeSeconds"] = seconds;
          setExercise(newExercise)
        } else {
          const newExercise = {...exercise}
          newExercise["setsTimeMinutes"] = minutes;
          newExercise["setsTimeSeconds"] = seconds;
          setExercise(newExercise)
        }
    } else {
      const newExercise = {...exercise}
      newExercise[event.target.id] = event.target.value
      setExercise(newExercise)
    }
  }


  const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

  const [ bundleState, setBundleState ] = useState({}) 

 const postFunctionToBundle = () => {
   console.log("bundle state", bundleState, "exercise in add modal", exercise)
   let exerciseToAddToBundle = {
    bundleId: bundleState.id,
    exerciseId: JSON.parse(sessionStorage.getItem("currentAssociation").exerciseId),
    sets: exercise.setAmount,
    setsTimeMinutes: exercise.setTime.split(":")[0],
    setsTimeSeconds: exercise.setTime.split(":")[1],
    cooldownTimeMinutes: exercise.coolDown.split(":")[0],
    cooldownTimeSeconds: exercise.coolDown.split(":")[1],
    reps: "",
    notes: exercise.notes
   }

   addExerciseToBundle(exerciseToAddToBundle)
 }

    return (


      <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
              <h1>Add This Exercise To A Bundle!</h1>
              <label>Amount Of Sets:
                <input onChange={handleExerciseInput} id="sets" placeholder="Amount Of Sets" type='number' className="sets"/>
              </label>
              <label>Sets Time:
                <input onChange={handleExerciseInput} id="setTime" placeholder="Sets Time" type='time'  max='00:59' min='30:00' className="without" ng-model="endTime" />
              </label>
              <label>Cool Down Time
                <input onChange={handleExerciseInput} id="coolDown" placeholder="Cool Down Time" type='time'  max='00:59' min='30:00' className="without" ng-model="endTime"/>
              </label>
              <textarea id="notes" placeholder="Type Notes..." onChange={handleExerciseInput}></textarea>
              <select onChange={(event) => {
                console.log(event.target.value)
                setBundleState(JSON.parse(event.target.value));
              }} name="arms" id="armsSelect">
                <option>Select A Bundle</option>
              { 
                userBundleList.map(bundle => {return <option value={JSON.stringify(bundle)}>{bundle.name}</option>}) 
              }
              </select>
              <button onClick={() => {
                postFunctionToBundle();
              }}>Add</button>
          </div>
          <button onClick={() =>{setShowModal(false)}}className="modal-close is-large" aria-label="close"></button>
      </div>
    )
}