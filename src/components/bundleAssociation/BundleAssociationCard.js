import React, { useContext } from "react"
import "./BundleAssociation.css"
import { Link } from "react-router-dom"
import { BundleAssociationContext } from "./BundleAssociationProvider";


export const BundleAssociationCard = ({bundleAssociationExercise}) => {
    
    const {logCurrentBundle} = useContext(BundleAssociationContext)
    
    return ( <section className="bundle">
        <p className="bundle__name">{bundleAssociationExercise.bundle.name}</p>
        <Link to={`/bundle/detail/${bundleAssociationExercise.bundle.id}`}>
            <button className="bundleButton" onMouseOver={() => {
                logCurrentBundle(bundleAssociationExercise.bundle);
            }}>Select Bundle</button>
        </Link>
    </section>) 
}
 