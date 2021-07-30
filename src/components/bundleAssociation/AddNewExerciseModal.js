import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"




export const AddExerciseModal = ({setShowModal}) => {


  const { addExerciseToBundle, userBundleList, getUserBundles } = useContext(BundleAssociationContext)

  const [ bundleState, setBundleState ] = useState({}) 



    return (


      <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <h1>Add This Exercise To A Bundle!</h1>
            <input type="number" placeholder="asd"/>
            <input type="number" placeholder="asd"/>
            <input type="number" placeholder="asd"/>
            <textarea placeholder="" defaultValue="Notes..."></textarea>
            <select onChange={(event) => {
              console.log(event.target.value)
              setBundleState(JSON.parse(event.target.value));
            }} name="arms" id="armsSelect">
              <option>Select A Bundle</option>
            { 
              userBundleList.map(bundle => {return <option value={JSON.stringify(bundle)}>{bundle.name}</option>}) 
            }
            </select>
          </div>
          <button onClick={() =>{setShowModal(false)}}className="modal-close is-large" aria-label="close"></button>
      </div>
    )
}