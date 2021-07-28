import React, { useState, createContext } from "react"



export const ArmContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const ArmProvider = (props) => {

    const [armExercises, setArmExercises] = useState([])

    const getArmExercises = () => {
        return fetch("http://localhost:8088/exercises?_expand=muscleCategory")
            .then(res => res.json())
            .then((exercises) => {
                let armExercises = exercises.filter((exercise) => {
                    if (exercise.muscleCategory.id === 2) {
                        return exercise;
                    }
                });
                return setArmExercises(armExercises);
            })
    }

    return (
        <ArmContext.Provider value={{
            armExercises, getArmExercises
        }}>
            {props.children}
        </ArmContext.Provider>
    )
}
