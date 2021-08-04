import React, { useContext, useState } from "react"
import "./BundleAssociation.css"
import { Link } from "react-router-dom"
import { BundleAssociationContext } from "./BundleAssociationProvider";
import "./BundleAssociation.css"
import { AreYouSureModal } from "./AreYouSureModal";
import "./BundleAssociation.css"

export const BundleCard = ({userBundle}) => {

    const [ deleteTheBundleModal, setDeleteTheBundleModal ] = useState(false)
    
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
   


    let areYouSureModal;
   if (deleteTheBundleModal) {
    areYouSureModal = <AreYouSureModal  setDeleteTheBundleModal={setDeleteTheBundleModal} userBundleId={userBundle.id} />
   } else {
    areYouSureModal = null;
   }
       
    
    return ( <section className="bundle">
        {areYouSureModal}
        {editNameBundleSection}
        <button onClick={() => {
            setEditBundleName(true)
        }}className="editBundleName"><img src="https://img.icons8.com/color/48/000000/edit--v1.png"/></button>
        <Link to={`/bundle/associationList/${userBundle.id}`}>
            <button className="bundleButton" onMouseOver={() => {
                logCurrentBundle(userBundle);
            }}>Select Bundle</button>
        </Link>
        <button className="deleteBundle" onClick={() => {
                setDeleteTheBundleModal(true)
            }}><img src="https://img.icons8.com/plasticine/100/000000/full-trash.png"/></button>
    </section>) 
}
 