import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"

export const BundleAssociationDetail = () => {
  const { getBundleAssociationExerciseById, currentBundle, getBundleExercises, bundleExercises } = useContext(BundleAssociationContext)

	const [bundleAssociationExercise, setBundleAssociationExercise] = useState({})

	const {bundleAssociationId} = useParams();

  useEffect(() => {
    // getBundleAssociationExerciseById(bundleAssociationId)
    // .then((response) => {
    //   setBundleAssociationExercise(response)
    // })
    getBundleExercises(currentBundle.id);
  }, [])

  return (
    <>

        <button onClick={() => {console.log('bundle exercises', bundleExercises)}}>console log</button>
        
        <h1 className="">{currentBundle.name}</h1>
        {

          bundleExercises.map((exercise) => {
            return <>
                    <section className="bundle"> 
                      <h3 className="">{exercise.name}</h3>
                      <p className="">{exercise.description}</p>
                    </section>


                    <h3>Timer Countdown:</h3>
                    <button>Start Workout</button>
                    <button>Stop Workout</button>
                    <h3>Sets</h3>
                    <h3>Set Time</h3>
                    <h3>Cool Down Time</h3>
                    <h3>Reps</h3>
                    <textarea placeholder="Type Notes..."></textarea>
                </>
          })


        }

    </>
  )
}

