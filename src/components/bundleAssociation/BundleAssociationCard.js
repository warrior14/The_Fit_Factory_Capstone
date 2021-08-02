import React, { useContext, useState } from "react"
import "./BundleAssociation.css"
import { Link } from "react-router-dom"
import { BundleAssociationContext } from "./BundleAssociationProvider";
import "./BundleAssociation.css"

export const BundleAssociationCard = ({userBundle}) => {
    
    const {logCurrentBundle, editBundle} = useContext(BundleAssociationContext)

    const [editBundleName, setEditBundleName] = useState(false)

    const [bundleToEdit, setBundleToEdit] = useState({
        id: userBundle.id,
        name: "",
        userId: parseInt(sessionStorage.getItem("fitfactory_user"))
    })

    let editNameBundleSection;
    if (editBundleName) {
        editNameBundleSection = 
        <div>
            <input onChange={(event) => {
                let editedBundle = {...bundleToEdit}
                editedBundle["name"] = event.target.value
                setBundleToEdit(editedBundle)
            }}placeholder="name" defaultValue={userBundle.name} ></input>
            <button onClick={() => {
                editBundle(bundleToEdit)
                setEditBundleName(false)
            }}>Save</button>
            <button onClick={() => {
                setEditBundleName(false)
            }}>Cancel</button>
        </div>
    } else {
        editNameBundleSection = <p className="bundle__name">{userBundle.name}</p>
    }
    

   
       
    
    return ( <section className="bundle">
        {editNameBundleSection}
        <button onClick={() => {
            setEditBundleName(true)
        }}className="editBundleName">Edit Bundle Name</button>
        <Link to={`/bundle/detail/${userBundle.id}`}>
            <button className="bundleButton" onMouseOver={() => {
                logCurrentBundle(userBundle);
            }}>Select Bundle</button>
        </Link>
    </section>) 
}
 