import React, { useContext } from "react"
import "./BundleAssociation.css"
import { Link } from "react-router-dom"
import { BundleAssociationContext } from "./BundleAssociationProvider";


export const BundleAssociationCard = ({userBundle}) => {
    
    const {logCurrentBundle} = useContext(BundleAssociationContext)
    
    return ( <section className="bundle">
        <p className="bundle__name">{userBundle.name}</p>
        <Link to={`/bundle/detail/${userBundle.id}`}>
            <button className="bundleButton" onMouseOver={() => {
                logCurrentBundle(userBundle);
            }}>Select Bundle</button>
        </Link>
    </section>) 
}
 