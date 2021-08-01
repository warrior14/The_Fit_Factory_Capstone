import React, { useContext, useEffect, useState } from "react";
import { ArmContext } from "./ArmProvider.js";
import { ArmCard } from "./ArmCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";

export const ArmList = () => {

  const { armExercises, getArmExercises } = useContext(ArmContext)
  const [currentExercise, setCurrentExercise] = useState("")

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    
    getArmExercises()

  }, [])



  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }



  return (
    <>
    
      {exerciseModal}

      <h1 className="armHeader">Arm Exercises</h1>
      <div className="arms">
        
        {
            armExercises.map(exercise => {
            return <ArmCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
    </>
  )
}