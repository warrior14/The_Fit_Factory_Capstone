import React from "react"
import "./BundleAssociation.css"
import { Link } from "react-router-dom"


export const BundleAssociationCard = ({bundleAssociationExercise}) => (
    <section className="bundle">
        <h3 className="bundle__name">{bundleAssociationExercise.bundle.name}</h3>
        <Link to={`/bundleAssociation/detail/${bundleAssociationExercise.id}`}>
            <button className="bundleButton">Select Bundle</button>
        </Link>
    </section>
)
