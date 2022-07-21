import React from 'react'
import {Link} from 'react-router-dom'

export default function SearchCard(props) {
    const {results} = props

    const handleClick = (clickResults) => {
        props.searchFood(clickResults)
    }

    return (
    <>
        <div className="row">
            <div className="col-sm-6 w-100">
                <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{results.description}</h5>
                        
                        {/* Displays brand name if it is provided */}
                        {results.brandName ? <p className='text-muted fst-italic'>Brand: {results.brandName}</p> : null}
                        
                        {/* Display item description if provided otherwise prints "No description provided" */}
                        <p className="card-text">{String(results.additionalDescriptions) !== "undefined" && String(results.additionalDescriptions) !== "" ? 
                        String(results.additionalDescriptions).replaceAll(";", ", ") : "No description provided"}</p>

                        {/* Check button */}
                        <Link to={`/check/${results.fdcId}`} className="btn btn-success w- d-block mx-auto" onClick={() => handleClick(results)}>Check</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
