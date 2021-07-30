import React, { useContext, useEffect, useState } from "react";
import { LegContext } from "./LegProvider.js";
import { LegCard } from "./LegCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";


export const LegList = () => {

  const { legExercises, getLegExercises } = useContext(LegContext)


  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    
    getLegExercises()




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

      <h1 className="legHeader">Leg Exercises</h1>
    

      <div className="legs">
        
        {
            legExercises.map(exercise => {
            return <LegCard key={exercise.id} exercise={exercise}  setShowModal={setShowModal} />
          })
        }

      </div>
    </>
  )
}