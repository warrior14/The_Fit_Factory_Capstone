import React, { useContext, useEffect, useState } from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider.js";
import { BundleCard } from "./BundleCard.js";
import { CreateBundleModal } from "./CreateBundleModal"
import "./BundleAssociation.css"
import { JelloAnimation } from "../animations/AnimationHelper";
import {StyleRoot} from 'radium';


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
    <StyleRoot>
    <div className="bundleDiv" style={JelloAnimation(2)}>
      <h1 className="hero ac">Workout Bundles</h1>
      <button className="button is-rounded creationBundle  mayo" onClick={() => {
        setShowBundleModal(true);
      }}>Create A Workout Bundle</button>
        
      <div className="bb">
        {bundleCreationModal}
          {
            userBundleList.map(userBundle => {
              console.log('bundle association exercies s', userBundle);
            return <BundleCard key={userBundle.id} userBundle={userBundle} />
          })
        }
      </div>
      </div>
    </StyleRoot>
  )
}