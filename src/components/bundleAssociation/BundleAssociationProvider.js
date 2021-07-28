import React, { useState, createContext } from "react"



export const BundleAssociationContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const BundleAssociationProvider = (props) => {

    const [bundleAssociationExercises, setBundleAssociationExercises] = useState([])

    const getBundleAssociationExercises = () => {
        return fetch("http://localhost:8088/bundleAssociation?_expand=bundle&_expand=exercise")
            .then(res => res.json())
            .then((bundleAssociation) => {
                console.log(bundleAssociation);
                let bundleAssociationExercises = bundleAssociation.filter((bundleExercise) => {
                    if (bundleExercise.bundle.userId === 1) {
                        return bundleExercise.bundle.name;
                    }
                });
                return setBundleAssociationExercises(bundleAssociationExercises);
            })    
    }

    const getBundleAssociationExerciseById = (id) => {
        return fetch(`http://localhost:8088/bundleAssociation/${id}?_expand=bundle&_expand=exercise`)
        .then(res => res.json())
    }

    return (
        <BundleAssociationContext.Provider value={{
            bundleAssociationExercises, getBundleAssociationExercises, getBundleAssociationExerciseById
        }}>
            {props.children}
        </BundleAssociationContext.Provider>
    )
}
