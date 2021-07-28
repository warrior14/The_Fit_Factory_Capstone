import React, { useContext, useEffect } from "react";
import { ArmContext } from "./ArmProvider.js";
import { ArmCard } from "./ArmCard.js";


export const ArmList = () => {

  const { armExercises, getArmExercises } = useContext(ArmContext)


  useEffect(() => {
    
    getArmExercises()

  }, [])

  return (
    <>
      <h1 className="armHeader">Arm Exercises</h1>
    

      <div className="arms">
        
        {
            armExercises.map(exercise => {
            return <ArmCard key={exercise.id} exercise={exercise} />
          })
        }

      </div>
    </>
  )
}