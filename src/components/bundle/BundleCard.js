import React from "react"
import "./Bundle.css"

export const BundleCard = ({bundle}) => (
    <section className="bundle">
        <h3 className="bundle__name">{bundle.name}</h3>
        <button className="bundleButton">Select Bundle</button>
    </section>
)
