import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"

export const BundleAssociationDetail = () => {
  const { getBundleAssociationExerciseById } = useContext(BundleAssociationContext)

	const [bundleAssociationExercise, setBundleAssociationExercise] = useState({})

	const {bundleAssociationId} = useParams();

  useEffect(() => {
    getBundleAssociationExerciseById(bundleAssociationId)
    .then((response) => {
      setBundleAssociationExercise(response)
    })
  }, [])

  return (
    <>

        <section className="bundle">
            <h3 className="">{bundleAssociationExercise.bundle?.name}</h3>
            <h3 className="">{bundleAssociationExercise.exercise?.name}</h3>
            <h3 className="">{bundleAssociationExercise.exercise?.description}</h3>
        </section>


        <h1>Timer Countdown:</h1>
        <button>Start Workout</button>
        <button>Stop Workout</button>
        <h2>Sets</h2>
        <h2>Set Time</h2>
        <h2>Cool Down Time</h2>
        <h2>Reps</h2>
        <textarea placeholder="Type Notes..."></textarea>

    </>
  )
}

