import React, { useContext, useEffect, useState } from "react";
import { LegContext } from "./LegProvider.js";
import { LegCard } from "./LegCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";
import { JelloAnimation } from "../animations/AnimationHelper";
import {StyleRoot} from 'radium';



export const LegList = () => {

  const { legExercises, getLegExercises } = useContext(LegContext)
  const [currentExercise, setCurrentExercise] = useState({})

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    
    getLegExercises()




  }, [])

  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }


  return (
    <StyleRoot>
    <div className="legDivs"  style={JelloAnimation(2)}>
      {exerciseModal}

      <h1 className="legHeader">Leg Exercises</h1>
      <div className="legGifDiv">

          <div className="gifText">
              <img className="lg1" src="https://i.pinimg.com/originals/68/01/cb/6801cb5f259e4e3fb793912c53366b7e.gif" alt=""/>
              <p className="leggy" >Barbell Squats</p>
          </div>
          <div className="gifText">
            <img className="lg1" src="https://i1.wp.com/www.strengthlog.com/wp-content/uploads/2020/11/Deadlift.gif?fit=600%2C600&ssl=1" alt=""/>
            <p className="leggy">Barbell Deadlift</p>
          </div>

          <div className="gifText">
            <img className="lg1" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/legpress-1509458589.gif" alt=""/>
            <p className="leggy">Leg Press</p>
          </div>  
          
          <div className="gifText">
          <img className="lg1" src="https://thumbs.gfycat.com/HarmfulIndelibleHarpyeagle-max-1mb.gif" alt=""/>
          <p className="leggy">Standing Calf Raises</p>
          </div>


          <div className="gifText">    
          <img className="lg1" src="https://thumbs.gfycat.com/ConsiderateSaneCony-max-1mb.gif" alt=""/>
          <p className="leggy">Walking Lunges</p> 
          </div>

          <div className="gifText">
            <img className="lg1"  src="https://i2.wp.com/www.strengthlog.com/wp-content/uploads/2020/04/hack-squat-machine.gif?fit=600%2C600&ssl=1" alt=""/>
            <p className="leggy">Hack Squats</p>  
          </div>

      </div>

      <div className="legs">
        
        {
            legExercises.map(exercise => {
            return <LegCard key={exercise.id} exercise={exercise}  setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
      </div>
    </StyleRoot>
  )
}