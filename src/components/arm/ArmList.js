import React, { useContext, useEffect, useState } from "react";
import { ArmContext } from "./ArmProvider.js";
import { ArmCard } from "./ArmCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";

export const ArmList = () => {

  const { armExercises, getArmExercises } = useContext(ArmContext)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    
    getArmExercises()

  }, [])



  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal}/>
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
            return <ArmCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} />
          })
        }

      </div>
    </>
  )
}