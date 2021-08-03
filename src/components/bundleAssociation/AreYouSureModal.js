import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"



export const AreYouSureModal = ({setDeleteTheBundleModal, userBundleId}) => {


    const {deleteTheBundle} = useContext(BundleAssociationContext)

 return (

    <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
              <h1>Are You Sure You Want To Delete This Bundle?</h1>
              <button className="button" onClick={() => {
                  deleteTheBundle(userBundleId)
              }}>Yes</button>
              <button className="button" onClick={() => {
                  setDeleteTheBundleModal(false)
              }}>No</button>
          </div>
          <button onClick={() => {
              setDeleteTheBundleModal(false)
          }}
          className="modal-close is-large" aria-label="close"></button>
    </div>

 )
    
}