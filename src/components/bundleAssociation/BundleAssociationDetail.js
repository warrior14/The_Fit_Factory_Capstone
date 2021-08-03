import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"
import { ExerciseTimerModal } from "./ExerciseTimerModal"

export const BundleAssociationDetail = () => {

  useEffect(() => {
    getBundleAssociations(currentBundle.id);

  }, [])

  const { getBundleAssociationExerciseById, currentBundle, getBundleExercises, bundleExercises, bundleAssociations, getBundleAssociations } = useContext(BundleAssociationContext)

	const [bundleAssociationExercise, setBundleAssociationExercise] = useState({})

	const {bundleAssociationId} = useParams();

  const [timerModalIsDisplayed, setTimerModalIsDisplayed ] = useState(false)

  const [currentAssociation, setCurrentAssociation] = useState(JSON.parse(sessionStorage.getItem("currentAssociation")))

 const [editSets, setEditSets] = useState(false)

 const [editSetsTime, setEditSetsTime] = useState(false)

 const [editCoolDownTime, setEditCoolDownTime] = useState(false)

 const [editReps, setEditReps] = useState(false)

 const [editNotes, setEditNotes] = useState(false)


// let editSets;
// if (editSets) {
//   let editSets = 
// }



  return (
    <>

        
        
        <h1 className="">{currentBundle.name}</h1>
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
                      <p className="">{bundleAssociation.exercise.description}</p>
                    </section>
                    <button onClick={() => {
                      setTimerModalIsDisplayed(true)
                    }}>Start Workout</button>
                    <h3>Sets: {bundleAssociation.sets}</h3><button>Edit</button>
                    <h3>Sets Time: {bundleAssociation.setsTimeMinutes}:{bundleAssociation.setsTimeSeconds > 10 ? bundleAssociation.setsTimeSeconds : `0${bundleAssociation.setsTimeSeconds}`}</h3><button>Edit</button>
                    <h3>Cool Down Time: {bundleAssociation.cooldownTimeMinutes}:{bundleAssociation.cooldownTimeSeconds > 10 ? bundleAssociation.cooldownTimeSeconds : `0${bundleAssociation.cooldownTimeSeconds}`}</h3><button>Edit</button>
                    <h3>Reps: {bundleAssociation.reps}</h3><button>Edit</button>
                    <textarea placeholder="Type Notes..." defaultValue={bundleAssociation.notes}></textarea><button>Edit</button>

                </div>
          })


        }

    </>
  )
}

