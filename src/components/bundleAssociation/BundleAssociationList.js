import React, { useContext, useEffect } from "react";
import { BundleAssociationContext } from "./BundleAssociationProvider.js";
import { BundleAssociationCard } from "./BundleAssociationCard.js";


export const BundleAssociationList = () => {

  const { bundleAssociationExercises, getBundleAssociationExercises } = useContext(BundleAssociationContext)

  useEffect(() => {
    
    getBundleAssociationExercises()

  }, [])

  return (
    <>
      <h1 className="bundleHeader">Workout Bundles</h1>

      <div>
        
        {
            bundleAssociationExercises.map(bundleAssociationExercise => {
              console.log(bundleAssociationExercise);
            return <BundleAssociationCard key={bundleAssociationExercise.id} bundleAssociationExercise={bundleAssociationExercise} />
          })
        }

      </div>
    </>
  )
}