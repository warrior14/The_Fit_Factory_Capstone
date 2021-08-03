import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"
import { ExerciseTimerModal } from "./ExerciseTimerModal"
import { EditModal } from "./EditModal"

export const BundleAssociationList = () => {

  const { getBundleAssociationExerciseById, currentBundle, getBundleExercises, bundleExercises, bundleAssociations, getBundleAssociations, patchExerciseAssociation, deleteExercise } = useContext(BundleAssociationContext)

  useEffect(() => {
    getBundleAssociations(currentBundle.id);
  }, [])

	const [bundleAssociationExercise, setBundleAssociationExercise] = useState({})

	const {bundleAssociationId} = useParams();

  const [timerModalIsDisplayed, setTimerModalIsDisplayed ] = useState(false)

  const [currentAssociation, setCurrentAssociation] = useState(JSON.parse(sessionStorage.getItem("currentAssociation")))

 const [showEditModal, setShowEditModal] = useState(false)




let editedModal;
if (showEditModal) {
  editedModal = <EditModal setShowEditModal={setShowEditModal}  currentAssociation={currentAssociation}/>
} else {
  editedModal = null;
}

let checkState = () => {
  console.log('state', bundleAssociations)
}


  return (
    <> 
        <h1 className="">{currentBundle.name}</h1>
        <button onClick={() => {
          checkState()
        }}>check bundle association state</button>
        {editedModal}
        {
          timerModalIsDisplayed ? <ExerciseTimerModal setTimerModalIsDisplayed={setTimerModalIsDisplayed} bundle={currentAssociation} sets={currentAssociation.sets} setsTimeMinutes={currentAssociation.setsTimeMinutes} setsTimeSeconds={currentAssociation.setsTimeSeconds}
          coolDownTimeMinutes={currentAssociation.cooldownTimeMinutes} coolDownTimeSeconds={currentAssociation.cooldownTimeSeconds}/> : null
        }
        {
          // change to return whole association to have access to sets, time and notes.
          bundleAssociations.map((bundleAssociation) => {
            return <div onMouseOver={() => {
              sessionStorage.setItem("currentAssociation", JSON.stringify(bundleAssociation));
              setCurrentAssociation(bundleAssociation);
            }}>
                    <section className="bundle"> 
                      <h3 className="">{bundleAssociation.exercise.name}</h3>
                        <button onClick={() => {
                          deleteExercise(bundleAssociation.id)
                          console.log(bundleAssociation.exercise)
                        }}>Delete</button>
                      <p className="">{bundleAssociation.exercise.description}</p>
                    </section>
                    <button onClick={() => {
                      setTimerModalIsDisplayed(true)
                    }}>Start Workout</button>
                    <button onClick={() => {
                            setShowEditModal(true)
                          }}>Edit</button>
                          <h3>Sets: {bundleAssociation.sets}</h3>
                          <h3>Sets Time: {bundleAssociation.setsTimeMinutes}:{bundleAssociation.setsTimeSeconds > 10 ? bundleAssociation.setsTimeSeconds : `0${bundleAssociation.setsTimeSeconds}`}</h3>
                          <h3>Cool Down Time: {bundleAssociation.cooldownTimeMinutes}:{bundleAssociation.cooldownTimeSeconds > 10 ? 
                            bundleAssociation.cooldownTimeSeconds : `0${bundleAssociation.cooldownTimeSeconds}`}</h3>
                            <h3>Reps: {bundleAssociation.reps}</h3>
                            <p>{bundleAssociation.notes}</p>
                                            </div>
          })
        }

    </>
  )
}

