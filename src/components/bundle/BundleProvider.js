import React, { useState, createContext } from "react"



export const BundleContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const BundleProvider = (props) => {

    const [bundleExercises, setBundleExercises] = useState([])

    const getBundleExercises = () => {
        return fetch("http://localhost:8088/bundles")
            .then(res => res.json())
            .then((bundles) => {
                let bundleExercises = bundles.filter((bundle) => {
                    if (bundle.userId === 1) {
                        return bundle.name;
                    }
                });
                return setBundleExercises(bundleExercises);
            })
    }

    return (
        <BundleContext.Provider value={{
            bundleExercises, getBundleExercises
        }}>
            {props.children}
        </BundleContext.Provider>
    )
}
