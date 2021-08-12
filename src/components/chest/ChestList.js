import React, { useContext, useEffect, useState } from "react";
import { ChestContext } from "./ChestProvider.js";
import { ChestCard } from "./ChestCard.js";
import { AddExerciseModal } from "./../bundleAssociation/AddNewExerciseModal";
import "./Chest.css"


export const ChestList = () => {

  const { chestExercises, getChestExercises } = useContext(ChestContext)
  const [currentExercise, setCurrentExercise] = useState({})
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    
    getChestExercises()

  }, [])



  
  let exerciseModal;
  if (showModal) {    
    exerciseModal = <AddExerciseModal setShowModal={setShowModal} currentExercise={currentExercise}/>
  } else {
    exerciseModal = null;
  }



  return (
    <>
    <div className="chestDiv">


  {exerciseModal}

      <h1 className="ChestHeader">Chest Exercises</h1>


      <div className="legGifDiv">

<div className="gifText">
    <img className="lg1" src="https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1529964186692-ZLBRMLV2GDRCTU2V3O9L/pause-bench.gif" alt=""/>
    <p className="leggy" >Barbell Bench Press</p>
</div>
<div className="gifText">
  <img className="lg1" src="https://i1.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Incline-Bench-Press.gif?fit=600%2C600&ssl=1" alt=""/>
  <p className="leggy">Incline Bench Press</p>
</div>

<div className="gifText">
  <img className="lg1" src="https://i2.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-chest-fly.gif?fit=600%2C600&ssl=1" alt=""/>
  <p className="leggy">Cable Chest Flyes</p>
</div>  

<div className="gifText">
<img className="lg1" src="http://glutesandabscom.homestead.com/Decline-Bench-Press.gif" alt=""/>
<p className="leggy">Decline Bench Press</p>
</div>


<div className="gifText">    
<img className="lg1" src="https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1526590877144-BYR9X8ZX5FROTGOZ2VHL/ke17ZwdGBToddI8pDm48kK3svdqmw2prsPjqjcUJoBVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG_Q82foFXlATZgWeZbKuDWu8UEUHkxgJke7CVwzRQ8vDFvbuqF0GUInBxxtVhBOn4/DSC_6330.mov.gif" alt=""/>
<p className="leggy">Dumbbell Bench Press</p> 
</div>

<div className="gifText">
  <img className="lg1"  src="https://bodybuilding-wizard.com/wp-content/uploads/2016/12/assisted-triceps-dip-exercise-2-5.gif" alt=""/>
  <p className="leggy">Machine Assisted Dips</p>  
</div>

</div>





    

      <div className="chest">
        
        {
            chestExercises.map(exercise => {
            return <ChestCard key={exercise.id} exercise={exercise} setShowModal={setShowModal} setCurrentExercise={setCurrentExercise}/>
          })
        }

      </div>
      </div>
    </>
  )
}