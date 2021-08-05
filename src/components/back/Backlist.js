import React, { useContext, useEffect, useState } from "react";
import { BackContext } from "./BackProvider.js";
import { BackCard } from "./BackCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";
import "./Back.css"



export const BackList = () => {

  const { backExercises, getBackExercises } = useContext(BackContext)
  const [currentExercise, setCurrentExercise] = useState({})

  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    
    getBackExercises()

  }, [])


  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }

  return (
    <>
    <div className="backDiv">
      {exerciseModal}
      <h1 className="backHeader">Back Exercises</h1>
      <div className="back">
        
        {
            backExercises.map(exercise => {
            return <BackCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
      </div>
    </>
  )
}