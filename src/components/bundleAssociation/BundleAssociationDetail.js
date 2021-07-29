import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"
import { ExerciseTimerModal } from "./ExerciseTimerModal"

export const BundleAssociationDetail = () => {
  const { getBundleAssociationExerciseById, currentBundle, getBundleExercises, bundleExercises } = useContext(BundleAssociationContext)

	const [bundleAssociationExercise, setBundleAssociationExercise] = useState({})

	const {bundleAssociationId} = useParams();

  const [timerIsDisplayed, setTimerIsDisplayed ] = useState(false)

  useEffect(() => {
    // getBundleAssociationExerciseById(bundleAssociationId)
    // .then((response) => {
    //   setBundleAssociationExercise(response)
    // })
    getBundleExercises(currentBundle.id);
  }, [])

  let exerciseTimerModal;
  if (timerIsDisplayed) {
    exerciseTimerModal = <ExerciseTimerModal />
  } else {
    exerciseTimerModal = null;
  }

  return (
    <>

        {/* <button onClick={() => {console.log('bundle exercises', bundleExercises)}}>console log</button> */}
        
        <h1 className="">{currentBundle.name}</h1>
        {

          bundleExercises.map((exercise) => {
            return <>
                    {
                     exerciseTimerModal
                    }
                    <section className="bundle"> 
                      <h3 className="">{exercise.name}</h3>
                      <p className="">{exercise.description}</p>
                    </section>
                    <button onClick={() => {
                      setTimerIsDisplayed(true)
                      console.log("timer state", timerIsDisplayed )
                    }}>Start Workout</button>
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

