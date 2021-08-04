import React, { useContext, useEffect, useState } from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider.js";
import { BundleCard } from "./BundleCard.js";
import { CreateBundleModal } from "./CreateBundleModal"
import "./BundleAssociation.css"



export const BundleList = () => {

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
      <button className="creationBundle" onClick={() => {
        setShowBundleModal(true);
      }}>Create A Workout Bundle</button>
        
      <div>
        {bundleCreationModal}
          {
            userBundleList.map(userBundle => {
              console.log('bundle association exercies s', userBundle);
            return <BundleCard key={userBundle.id} userBundle={userBundle} />
          })
        }
      </div>
    </>
  )
}