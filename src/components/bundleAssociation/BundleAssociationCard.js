import React from "react"
import "./BundleAssociation.css"

export const BundleAssociationCard = ({bundleAssociationExercise}) => (
    <section className="bundle">
        <h3 className="bundle__name">{bundleAssociationExercise.bundle.name}</h3>
        <button className="bundleButton">Select Bundle</button>
    </section>
)
