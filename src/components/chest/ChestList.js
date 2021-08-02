import React, { useContext, useEffect, useState } from "react";
import { ChestContext } from "./ChestProvider.js";
import { ChestCard } from "./ChestCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";


export const ChestList = () => {

  const { chestExercises, getChestExercises } = useContext(ChestContext)
  const [currentExercise, setCurrentExercise] = useState({})
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    
    getChestExercises()

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

      <h1 className="ChestHeader">Chest Exercises</h1>
    

      <div className="chest">
        
        {
            chestExercises.map(exercise => {
            return <ChestCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
    </>
  )
}