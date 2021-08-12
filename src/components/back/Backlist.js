import React, { useContext, useEffect, useState } from "react";
import { BackContext } from "./BackProvider.js";
import { BackCard } from "./BackCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";
import "./Back.css"



export const BackList = () => {

  const { backExercises, getBackExercises } = useContext(BackContext)
  const [currentExercise, setCurrentExercise] = useState({})

  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    
    getBackExercises()

  }, [])


  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }

  return (
    <>
    <div className="backDiv">
      {exerciseModal}
      <h1 className="backHeader">Back Exercises</h1>

      <div className="legGifDiv">

<div className="gifText">
    <img className="lg1" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/seatedcablerow-1509373251.gif" alt=""/>
    <p className="leggy" >Seated Cable Rows</p>
</div>
<div className="gifText">
  <img className="lg1" src="https://i2.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Barbell-Shrug.gif?fit=600%2C600&ssl=1" alt=""/>
  <p className="leggy">Barbell Shrugs</p>
</div>

<div className="gifText">
  <img className="lg1" src="https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5ea30e7782e991a7e21fcd09_wide-grip-lat-pulldown-exercise-anabolic-aliens.gif" alt=""/>
  <p className="leggy">Seated Lat Pulldowns</p>
</div>  

<div className="gifText">
<img className="lg1" src="https://tiu-assets.s3-us-west-2.amazonaws.com/2018/12/Chyna-Barbell-Bent-Over-Row.gif" alt=""/>
<p className="leggy">Barbell Bent Over Rows</p>
</div>


<div className="gifText">    
<img className="lg1" src="https://www.sparkpeople.com/assets/exercises/Assisted-Pull-up-Machine.gif" alt=""/>
<p className="leggy">Assisted Pull Ups</p> 
</div>

<div className="gifText">
  <img className="lg1"  src="https://thumbs.gfycat.com/RapidOrganicIsabellinewheatear-size_restricted.gif" alt=""/>
  <p className="leggy">Hyperextensions</p>  
</div>

</div>








      <div className="back">
        
        {
            backExercises.map(exercise => {
            return <BackCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
      </div>
    </>
  )
}