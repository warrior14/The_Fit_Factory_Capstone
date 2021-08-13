import React, { useContext, useEffect, useState } from "react";
import { ArmContext } from "./ArmProvider.js";
import { ArmCard } from "./ArmCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";
import "./Arm.css"

export const ArmList = () => {

  const { armExercises, getArmExercises } = useContext(ArmContext)
  const [currentExercise, setCurrentExercise] = useState({})

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    
    getArmExercises()

  }, [])



  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }

  return (
    <>
    <div className="armDiv">
      {exerciseModal}
      <h1 className="armHeader">Arm Exercises</h1>

      <div className="legGifDiv">

<div className="gifText">
    <img className="lg1" src="https://www.strengthlog.com/wp-content/uploads/2020/02/Hammer-curl.gif" alt=""/>
    <p className="leggy" >Hammer Curls</p>
</div>
<div className="gifText">
  <img className="lg1" src="https://thumbs.gfycat.com/FluffyCarefulBaboon-size_restricted.gif" alt=""/>
  <p className="leggy">Standing Dumbell Press</p>
</div>

<div className="gifText">
  <img className="lg1" src="https://d2culxnxbccemt.cloudfront.net/bowl/content/uploads/2020/10/13101949/tricep-2.gif" alt=""/>
  <p className="leggy">Overhead Extensions</p>
</div>  

<div className="gifText">
<img className="lg1" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/barbellcurl-1509456994.gif" alt=""/>
<p className="leggy">Barbell Curls</p>
</div>


<div className="gifText">    
<img className="lg1" src="https://i0.wp.com/thumbs.gfycat.com/QuaintMeanBuckeyebutterfly-size_restricted.gif?w=1155&h=840" alt=""/>
<p className="leggy">Dumbbell Lateral Raises</p> 
</div>

<div className="gifText">
  <img className="lg1"  src="https://media.self.com/photos/5e6be6e61e8d0000080851ee/master/w_320%2Cc_limit/dumbbell-bent-over-triceps-kick-back-Cookie_051%2520(1).gif" alt=""/>
  <p className="leggy">Tricep Kickbacks</p>  
</div>

</div>





      <div className="arms">
        
        {
            armExercises.map(exercise => {
            return <ArmCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
      </div>
    </>
  )
}