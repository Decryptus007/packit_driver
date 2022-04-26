
import React from "react"
import { Link } from "react-router-dom"

import './PageNotFound..css'

export default function PageNotFound() {

    return (
        <div className="nullPage">
            <div className="nullPageInfo">
                <h1>Page Not Found</h1>
                <p>Go back to the <Link to="/">Homepage</Link></p>
            </div>
        </div>
    )
}