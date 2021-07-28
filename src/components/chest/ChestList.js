import React, { useContext, useEffect } from "react";
import { ChestContext } from "./ChestProvider.js";
import { ChestCard } from "./ChestCard.js";


export const ChestList = () => {

  const { chestExercises, getChestExercises } = useContext(ChestContext)


  useEffect(() => {
    
    getChestExercises()

  }, [])

  return (
    <>
      <h1 className="chestHeader">Chest Exercises</h1>
    

      <div className="chests">
        
        {
            chestExercises.map(exercise => {
            return <ChestCard key={exercise.id} exercise={exercise} />
          })
        }

      </div>
    </>
  )
}