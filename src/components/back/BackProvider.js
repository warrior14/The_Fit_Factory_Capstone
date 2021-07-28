import React, { useState, createContext } from "react"



export const BackContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const BackProvider = (props) => {

    const [backExercises, setBackExercises] = useState([])

    const getBackExercises = () => {
        return fetch("http://localhost:8088/exercises?_expand=muscleCategory")
            .then(res => res.json())
            .then((exercises) => {
                let backExercises = exercises.filter((exercise) => {
                    if (exercise.muscleCategory.id === 4) {
                        return exercise;
                    }
                });
                return setBackExercises(backExercises);
            })
    }

    return (
        <BackContext.Provider value={{
            backExercises, getBackExercises
        }}>
            {props.children}
        </BackContext.Provider>
    )
}
