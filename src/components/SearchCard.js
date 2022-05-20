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
            <div className="offset-3 col-sm-6">
                <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{results.description}</h5>
                        <p className="card-text">{String(results.additionalDescriptions) !== "undefined" ? String(results.additionalDescriptions).replaceAll(";", ". ") : "No description provided"}</p>
                        <Link to={`/check/${results.fdcId}`} className="btn btn-success w-100" onClick={() => handleClick(results)}>Check</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
