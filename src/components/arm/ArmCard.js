import React from "react"
import "./Arm.css"

export const ArmCard = ({exercise}) => (
    <section className="arm">
        <h3 className="arm__name">{exercise.name}</h3>
        <p className="arm__name">{exercise.description}</p>
        <p className="arm__name">Category: {exercise.muscleCategory.name}</p>
        <button className="bundleWorkout">Add Exercise</button>
    </section>
)


