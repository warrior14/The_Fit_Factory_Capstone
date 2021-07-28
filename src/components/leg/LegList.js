
import React, { useContext, useEffect } from "react";
import { LegContext } from "./LegProvider.js";
import { LegCard } from "./LegCard.js";


export const LegList = () => {

  const { legExercises, getLegExercises } = useContext(LegContext)


  useEffect(() => {
    
    getLegExercises()

  }, [])

  return (
    <>
      <h1 className="legHeader">Leg Exercises</h1>
    

      <div className="legs">
        
        {
            legExercises.map(exercise => {
            return <LegCard key={exercise.id} exercise={exercise} />
          })
        }

      </div>
    </>
  )
}