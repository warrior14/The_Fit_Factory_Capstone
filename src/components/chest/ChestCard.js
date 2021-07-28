import React from "react"
import "./Chest.css"

export const ChestCard = ({exercise}) => (
    <section className="chest">
        <h3 className="chest__name">{exercise.name}</h3>
        <p className="chest__name">{exercise.description}</p>
        <p className="chest__name">Category: {exercise.muscleCategory.name}</p>
        <button className="bundleWorkout">Add Exercise</button>
    </section>
)


