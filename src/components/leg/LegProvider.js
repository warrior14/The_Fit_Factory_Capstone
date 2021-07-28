import React, { useState, createContext } from "react"



export const LegContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const LegProvider = (props) => {

    const [legExercises, setLegExercises] = useState([])

    const getLegExercises = () => {
        return fetch("http://localhost:8088/exercises?_expand=muscleCategory")
            .then(res => res.json())
            .then((exercises) => {
                let legExercises = exercises.filter((exercise) => {
                    if (exercise.muscleCategory.id === 1) {
                        return exercise;
                    }
                });
                return setLegExercises(legExercises);
            })
    }

    return (
        <LegContext.Provider value={{
            legExercises, getLegExercises
        }}>
            {props.children}
        </LegContext.Provider>
    )
}
