import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home(props) {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        let querySearch = e.target.query.value.replaceAll(' ', '+');
        
        let queryString = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${querySearch}&requireAllWords=true&api_key=${process.env.REACT_APP_API_KEY}&pageSize=5`;

        fetch(queryString)
        .then(res => res.json())
        .then(data => {
            props.getSearchResults(data)
            navigate('/results')
        })
    } 

  return (
    <>
        <div className='container vh-100'>
            <div className='pt-5'>
            <h1 className='text-center mb-3'>Home Page</h1>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Food Here" aria-describedby="button-addon2" id='query'/>
                        <button to={'/results'}className="btn btn-primary" type="submit" id="button-addon2">Search</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </>
  )
}
