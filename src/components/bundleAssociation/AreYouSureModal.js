import React, { useState, useContext, useEffect }from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider"



export const AreYouSureModal = ({setDeleteTheBundleModal, userBundleId}) => {


    const {deleteTheBundle} = useContext(BundleAssociationContext)

 return (

    <div className="modal is-active">
          <div className="modal-background areYouSure"></div>
          <div className="modal-content sureBundle">
              <h1 className="sureHeader">Are You Sure You Want To Delete This Bundle?</h1>
              <button className="button is-rounded saveBut" onClick={() => {
                  deleteTheBundle(userBundleId)
              }}>Yes</button>
              <button className="button is-rounded saveBut" onClick={() => {
                  setDeleteTheBundleModal(false)
              }}>No</button>
          </div>
          <button onClick={() => {
              setDeleteTheBundleModal(false)
          }}
          className="modal-close is-large exitBundle" aria-label="close"></button>
    </div>

 )
    
}