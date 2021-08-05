import React, { useContext, useEffect, useState } from "react";
import { LegContext } from "./LegProvider.js";
import { LegCard } from "./LegCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";


export const LegList = () => {

  const { legExercises, getLegExercises } = useContext(LegContext)
  const [currentExercise, setCurrentExercise] = useState({})

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    
    getLegExercises()




  }, [])

  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }


  return (
    <>
    <div className="legDivs">
      {exerciseModal}

      <h1 className="legHeader">Leg Exercises</h1>
    

      <div className="legs">
        
        {
            legExercises.map(exercise => {
            return <LegCard key={exercise.id} exercise={exercise}  setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
      </div>
    </>
  )
}