import React, { useContext, useEffect, useState } from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider.js";
import { BundleAssociationCard } from "./BundleAssociationCard.js";
import { CreateBundleModal } from "./CreateBundleModal"
import "./BundleAssociation.css"



export const BundleAssociationList = () => {

  const { bundleAssociationExercises, getBundleAssociationExercises, getUserBundles, userBundleList } = useContext(BundleAssociationContext)
  const [showBundleModal, setShowBundleModal] = useState(false)

  useEffect(() => {
    
    getBundleAssociationExercises()
    getUserBundles()

  }, [])

  let bundleCreationModal;
  if (showBundleModal) {
    bundleCreationModal = <CreateBundleModal setShowBundleModal={setShowBundleModal} />
  } else {
    bundleCreationModal = null;
  }

  return (
    <>
      <h1 className="hero">Workout Bundles</h1>
      <button className="createBundleButton" onClick={() => {
        setShowBundleModal(true);
      }}>Create A Workout Bundle</button>
        
      <div>
        {bundleCreationModal}
        {/* {
            bundleAssociationExercises.map(bundleAssociationExercise => {
              console.log('bundle association exercies s', bundleAssociationExercise);
            return <BundleAssociationCard key={bundleAssociationExercise.id} bundleAssociationExercise={bundleAssociationExercise} />
          })
        } */}
          {
            userBundleList.map(userBundle => {
              console.log('bundle association exercies s', userBundle);
            return <BundleAssociationCard key={userBundle.id} userBundle={userBundle} />
          })
        }

      </div>
    </>
  )
}