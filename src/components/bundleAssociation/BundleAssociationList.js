import React, { useContext, useEffect, useState } from "react"
import { BundleAssociationContext } from "./BundleAssociationProvider.js"
import "./BundleAssociation.css"
import { useParams } from "react-router-dom"
import { ExerciseTimerModal } from "./ExerciseTimerModal"
import { EditModal } from "./EditModal"
// import Swal from "sweetalert2"


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

  // const handleDeleteExercise = () => {
  //   Swal.fire({
  //     title: "Are you sure you want to delete this exercise?",
  //     icon: "warning",
  //     confirmButtonColor: "#DAA520",
  //     showCancelButton: true,
  //     cancelButtonColor: "#BEC3C6",
  //     confirmButtonText: "Yes, I'm sure!"
  //   }).then((res) => {
  //     if (res.isConfirmed) {
  //       bundleAssociations.map(bundleAssociation => {
  //         deleteExercise(currentBundle.id, bundleAssociation.id).then(() => {
  //           Swal.fire(
  //             'Deleted!',
  //             'Exercise has been removed!',
  //             'success'
  //           )
  //         })
  //       })
  //     }
  //   })
  // }


  return (
    <> 
        <h1 className="workoutName">{currentBundle.name}</h1>
        {/* <button onClick={() => {
          checkState()
        }}>check bundle association state</button> */}
        {editedModal}
        {
          timerModalIsDisplayed ? <ExerciseTimerModal setTimerModalIsDisplayed={setTimerModalIsDisplayed} bundle={currentAssociation} sets={currentAssociation.sets} setsTimeMinutes={currentAssociation.setsTimeMinutes} setsTimeSeconds={currentAssociation.setsTimeSeconds}
          coolDownTimeMinutes={currentAssociation.cooldownTimeMinutes} coolDownTimeSeconds={currentAssociation.cooldownTimeSeconds}/> : null
        }
        {
          // change to return whole association to have access to sets, time and notes.
          bundleAssociations.map((bundleAssociation) => {
            return <div onMouseOver={() => {
              console.log('selected exercise', bundleAssociation);
              sessionStorage.setItem("currentAssociation", JSON.stringify(bundleAssociation));
              setCurrentAssociation(bundleAssociation);
            }}>
                    <section className="bundle"> 
                      <h3 className="exercise__name">{bundleAssociation.exercise.name}</h3>
                      {/* <button className="deleteExerciseButton" onClick={() => {
                          handleDeleteExercise(currentBundle.id, bundleAssociation.id)
                        }}><img className="trashIcon" src="https://img.icons8.com/plasticine/100/000000/full-trash.png"/></button> */}
                        <button className="deleteExerciseButton" onClick={() => {
                          alert("Exercise has been deleted!")
                          deleteExercise(currentBundle.id, bundleAssociation.id)
                          console.log(bundleAssociation.exercise)
                        }}><img className="trashIcon" src="https://img.icons8.com/plasticine/100/000000/full-trash.png"/></button>
                      <p className="describe">{bundleAssociation.exercise.description}</p>
                    </section>
                    <div className="workingOut">
                      <div>
                          <button className="button is-rounded startWorkoutBut" onClick={() => {
                          setTimerModalIsDisplayed(true)
                        }}>Start Workout
                      </button>
                      </div>
                      <button className="edit__but" onClick={() => {
                              setShowEditModal(true)
                            }}><img className="pencil" src="https://img.icons8.com/color/48/000000/edit--v1.png"/></button>
                            <div className="setInfo">
                              <h3>Sets: {bundleAssociation.sets}</h3>
                              <h3>Sets Time: {bundleAssociation.setsTimeMinutes}:{bundleAssociation.setsTimeSeconds >= 10 ? bundleAssociation.setsTimeSeconds : `0${bundleAssociation.setsTimeSeconds}`}</h3>
                              <h3>Cool Down Time: {bundleAssociation.cooldownTimeMinutes}:{bundleAssociation.cooldownTimeSeconds >= 10 ? 
                                bundleAssociation.cooldownTimeSeconds : `0${bundleAssociation.cooldownTimeSeconds}`}</h3>
                                <h3>Reps: {bundleAssociation.reps}</h3>
                                <p>Notes: {bundleAssociation.notes}</p>
                                </div>
                                              </div>
                    </div>
          })
        }

    </>
  )
}

