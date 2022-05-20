import React from 'react';
import SearchCard from '../components/SearchCard'

export default function SearchDisplay(props) {
    const {results} = props;

    const getFoodFromSearch = (searchFood) => {
        props.getCheckFood(searchFood)
    }

    return (
        <>
            <div className="container pb-5">
                <h1 className='text-center py-5'>Search Results</h1>
                {results.foods.map((v, k) => <SearchCard results={v} key={k} searchFood={getFoodFromSearch}></SearchCard>)}
            </div>
        </>
    )
}
