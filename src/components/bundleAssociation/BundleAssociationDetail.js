import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"

export const BundleAssociationDetail = () => {
  const { getBundleAssociationExerciseById } = useContext(BundleAssociationContext)

	const [bundleAssociation, setBundleAssociation] = useState({})

	const {bundleAssociationId} = useParams();

  useEffect(() => {
    console.log("useEffect", bundleAssociationId)
    getBundleAssociationExerciseById(bundleAssociationId)
    .then((response) => {
      setBundleAssociation(response)
    })
  }, [])

  return (
    <>
        <h2>Timer Countdown:</h2>
        <button>Start Workout</button>
        <button>Stop Workout</button>
        <h2>Sets:</h2>
        <h2>Sets Time:</h2>
        <h2>Cool Down Time:</h2>
        <h2>Reps:</h2>

        <label>Notes:</label>
        <textarea placeholder="Type notes..."></textarea>

        <section className="bundle">
            <h3 className="bundle__name">{bundleAssociation.bundle?.name}</h3>
            <div className=""></div>
            <div className="">Exercise Name: {bundleAssociation.exercise?.name}</div>
            <div className="">Description: {bundleAssociation.exercise?.description}</div>
        </section>
    </>
  )
}
