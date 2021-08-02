import React, { useState, createContext } from "react"



export const BundleAssociationContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const BundleAssociationProvider = (props) => {

    const [bundleAssociationExercises, setBundleAssociationExercises] = useState([])
    const [bundleList, setBundleList ] = useState([])
    const [userBundleList, setUserBundleList ] = useState([])
    const [currentBundle, setCurrentBundle] = useState({})
    const [bundleExercises, setBundleExercises] = useState([])
    const [bundleAssociations, setBundleAssociation] = useState([])

    // doing the same thing as another methods see getBundleAssociations
    const getBundleAssociationExercises = () => {
        return fetch("http://localhost:8088/bundleAssociation?_expand=bundle&_expand=exercise")
            .then(res => res.json())
            .then((bundleAssociation) => {
                console.log(bundleAssociation);
                let bundleAssociationExercises = bundleAssociation.filter((bundleExercise) => {
                    if (bundleExercise.bundle.userId === parseInt(sessionStorage.getItem("fitfactory_user"))) {
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


    const getAllBundles = () => {
        return fetch(`http://localhost:8088/bundles`)
        .then(res => res.json())
        .then((bundles) => {
            return setBundleList(bundles) 
        })  
    }

    const getUserBundles = () => {
        return fetch("http://localhost:8088/bundles")
        .then(res => res.json())
        .then((bundles) => {
            let bundleUser = bundles.filter((bundle) => {
                if (parseInt(sessionStorage.getItem("fitfactory_user")) === bundle.userId) {
                    return bundle
                }
            })    
            return setUserBundleList(bundleUser)
        })
    }

    const addNewBundle = (body) => {
        return fetch("http://localhost:8088/bundles ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(getUserBundles)
    };


    const addExerciseToBundle = (body) => {
        return fetch("http://localhost:8088/bundleAssociation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(getUserBundles)
    };

    const logCurrentBundle = (bundle) => {
        setCurrentBundle(bundle)
    }

    const getBundleExercises = (bundleId) => {
        return fetch("http://localhost:8088/bundleAssociation?_expand=exercise")
        .then(res => res.json())
        .then((allBundleAssociations) => {
            let bundleAssociations = allBundleAssociations.filter((association) => {
                if (bundleId === association.bundleId) {
                    return association
                }
            })    
            let exercises = bundleAssociations.map((bundleAssociation) => {
                return bundleAssociation.exercise
            })
            return setBundleExercises(exercises)
        })
    }

    const getBundleAssociations = (bundleId) => {
        return fetch("http://localhost:8088/bundleAssociation?_expand=exercise")
        .then(res => res.json())
        .then((allBundleAssociations) => {
            let bundleAssociations = allBundleAssociations.filter((association) => {
                if (bundleId === association.bundleId) {
                    return association
                }
            })    
            return setBundleAssociation(bundleAssociations)
        })
    }


    const editBundle = (bundle) => {
        return fetch(`http://localhost:8088/bundles/${bundle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bundle)
        }) 
        .then(getUserBundles)
    };


    const deleteTheBundle = (bundleId) => {
        return fetch(`http://localhost:8088/bundles/${bundleId}`, {
            method: "DELETE",
        })
        .then(getUserBundles)
    }

 

    return (
        <BundleAssociationContext.Provider value={{
            bundleAssociationExercises, getBundleAssociationExercises, getBundleAssociationExerciseById,
             addExerciseToBundle, getAllBundles, getUserBundles, userBundleList, logCurrentBundle, currentBundle, getBundleExercises,
              bundleExercises, getBundleAssociations, bundleAssociations, addNewBundle, editBundle, deleteTheBundle
        }}>
            {props.children}
        </BundleAssociationContext.Provider>
    )
}
