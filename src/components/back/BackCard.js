import React from "react"
import "./Back.css"

export const BackCard = ({exercise}) => (
    <section className="back">
        <h3 className="back__name">{exercise.name}</h3>
        <p className="back__name">{exercise.description}</p>
        <p className="back__name">Category: {exercise.muscleCategory.name}</p>
        <button className="backButton">Add Exercise</button>
    </section>
)


