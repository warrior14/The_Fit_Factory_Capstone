import React from "react"
import "./Leg.css"

export const LegCard = ({exercise}) => (
    <section className="leg">
        <h3 className="leg__name">{exercise.name}</h3>
        <p className="leg__name">{exercise.description}</p>
        <p className="leg__name">Category: {exercise.muscleCategory.name}</p>
        <button className="bundleWorkout">Add Exercise</button>
    </section>
)


