import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"
import { ExerciseTimerModal } from "./ExerciseTimerModal"

export const BundleAssociationDetail = () => {
  const { getBundleAssociationExerciseById, currentBundle, getBundleExercises, bundleExercises, bundleAssociations, getBundleAssociations } = useContext(BundleAssociationContext)

	const [bundleAssociationExercise, setBundleAssociationExercise] = useState({})

	const {bundleAssociationId} = useParams();

  const [timerIsDisplayed, setTimerIsDisplayed ] = useState(false)

  useEffect(() => {
    // getBundleAssociationExerciseById(bundleAssociationId)
    // .then((response) => {
    //   setBundleAssociationExercise(response)
    // })
    // getBundleExercises(currentBundle.id);
    getBundleAssociations(currentBundle.id);
  }, [])

  // let exerciseTimerModal;
  // if (timerIsDisplayed) {
  //   exerciseTimerModal = <ExerciseTimerModal />
  // } else {
  //   exerciseTimerModal = null;
  // }

  return (
    <>

        {/* <button onClick={() => {console.log('bundle exercises', bundleExercises)}}>console log</button> */}
        
        <h1 className="">{currentBundle.name}</h1>
        {

// change to return whole association to have access to sets, time and notes.
          bundleAssociations.map((bundleAssociation) => {
            return <>
                    {
                      timerIsDisplayed ? <ExerciseTimerModal setTimerIsDisplayed={setTimerIsDisplayed}/> : null
                    }
                    <section className="bundle"> 
                      <h3 className="">{bundleAssociation.exercise.name}</h3>
                      <p className="">{bundleAssociation.exercise.description}</p>
                    </section>
                    <button onClick={() => {
                      setTimerIsDisplayed(true)
                    }}>Start Workout</button>
                    <h3>Sets: {bundleAssociation.sets}</h3>
                    <h3>Set Time: {bundleAssociation.setsTime}</h3>
                    <h3>Cool Down Time: {bundleAssociation.cooldownTimeMinutes}:{bundleAssociation.cooldownTimeSeconds > 10 ? bundleAssociation.cooldownTimeSeconds : `0${bundleAssociation.cooldownTimeSeconds}`}</h3>
                    <h3>Reps: {bundleAssociation.reps}</h3>
                    <textarea placeholder="Type Notes..."></textarea>
                </>
          })


        }

    </>
  )
}

