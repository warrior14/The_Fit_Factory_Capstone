import React, { useState, createContext } from "react"



export const ChestContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const ChestProvider = (props) => {

    const [chestExercises, setChestExercises] = useState([])

    const getChestExercises = () => {
        return fetch("http://localhost:8088/exercises?_expand=muscleCategory")
            .then(res => res.json())
            .then((exercises) => {
                let chestExercises = exercises.filter((exercise) => {
                    if (exercise.muscleCategory.id === 3) {
                        return exercise;
                    }
                });
                return setChestExercises(chestExercises);
            })
    }
    return (
        <ChestContext.Provider value={{chestExercises, getChestExercises}}>
            {props.children}
        </ChestContext.Provider>
    )
}
