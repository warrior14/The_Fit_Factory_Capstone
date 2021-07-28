import React, { useContext, useEffect } from "react";
import { BundleContext } from "./BundleProvider.js";
import { BundleCard } from "./BundleCard.js";


export const BundleList = () => {

  const { bundleExercises, getBundleExercises } = useContext(BundleContext)


  useEffect(() => {
    
    getBundleExercises()

  }, [])

  return (
    <>
      <h1 className="bundleHeader">Workout Bundles</h1>
    

      <div className="">
        
        {
            bundleExercises.map(bundle => {
            return <BundleCard key={bundle.id} bundle={bundle} />
          })
        }

      </div>
    </>
  )
}