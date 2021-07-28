import React, { useContext, useEffect } from "react";
import { BackContext } from "./BackProvider.js";
import { BackCard } from "./BackCard.js";


export const BackList = () => {

  const { backExercises, getBackExercises } = useContext(BackContext)


  useEffect(() => {
    
    getBackExercises()

  }, [])

  return (
    <>
      <h1 className="backHeader">Back Exercises</h1>
    

      <div className="backs">
        
        {
            backExercises.map(exercise => {
            return <BackCard key={exercise.id} exercise={exercise} />
          })
        }

      </div>
    </>
  )
}