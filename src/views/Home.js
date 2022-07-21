import React from 'react';
import {useNavigate} from 'react-router-dom';
import homepageLogo from '../images/animal-free-logo4.png';

export default function Home(props) {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        let querySearch = e.target.query.value;
        let querySearchCleaned = querySearch.replaceAll(' ', '+');
        
        let queryString = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${querySearchCleaned}&api_key=${process.env.REACT_APP_API_KEY}`;

        fetch(queryString)
        .then(res => res.json())
        .then(data => {
            props.getSearchResults([querySearch, data]);
            navigate('/results');
        })
    }

  return (
    <>
        <div className='container'>
            <div className='pt-5 mt-5'>
            <img src={homepageLogo} alt='Animal Free Logo' className='w-25 d-block mx-auto mb-5'/>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit} className='w-75 px-3 py-3'>
                    <div className="input-group mb-3 h-100 d-flex justify-content-center">
                        <input type="text" className="w-75 ps-2 bg-light fs-2 rounded-start border border-3 border-success" placeholder="Search.." aria-describedby="button-addon2" id='query' />
                        <button type="submit" className="btn btn-success w=100 fs-3 rounded-end">Search</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </>
  )
}
