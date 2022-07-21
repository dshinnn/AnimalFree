import React, {useState, useEffect} from 'react';
import SearchCard from '../components/SearchCard';
import previous from '../images/previous.png';
import next from '../images/next.png';
import '../DisplaySearch.css';

export default function SearchDisplay(props) {
    // const {results} = props;
    const results = JSON.parse(window.sessionStorage.getItem('results'));
    const [startIndex, setStartIndex] = useState(0);
    const [searchList, setSearchList] = useState(results[1].foods.slice(0, 5));

    useEffect(() => {
        setSearchList(results[1].foods.slice(startIndex, startIndex + 5));
    }, [startIndex])

    //  Returns selected food to be used in the Check.js
    const getFoodFromSearch = (searchFood) => {
        props.getCheckFood(searchFood);
    }

    //  Displays the next or previous 5 results
    const handleClick = (isNext) => {
        if(isNext) {
            setStartIndex(prevIndex => prevIndex + 5);
        } else if (startIndex > 0 && !isNext) {
            setStartIndex(prevIndex => prevIndex - 5);
        }
        window.scrollTo(0,0);
    }

    return (
        <>
            <div className="pb-5 d-flex flex-column align-items-center">
                <h1 className='py-3'>Search for "{results[0]}"</h1>

                <div className='w-50'>
                    {searchList.map((v, k) => <SearchCard results={v} key={k} searchFood={getFoodFromSearch}></SearchCard>)}
                </div>

                {/* Previous and Next Button */}
                <div className='row offset-3 d-flex'>
                        {startIndex !== 0 ? 
                            <div className='col-3 d-flex-justify-content-start'>
                                <img src={previous} alt='previous button' className='btn searchBtn h-100' onClick={()=>handleClick(false)} />
                            </div>
                        : 
                            <div className='col-3 d-flex-justify-content-start invisible'>
                                <img src={previous} alt='previous button' className='btn searchBtn h-100' onClick={()=>handleClick(false)} />
                            </div>
                        } 
                        
                        {startIndex < results[1].foods.length - 5 ?
                            <div className='col-3 offset-2 d-flex justify-content-end'>
                                <img src={next} alt='next button' className='btn searchBtn h-100' onClick={()=>handleClick(true)}/>
                            </div>
                        : 
                            <div className='col-3 offset-2 d-flex justify-content-end invisible'>
                                <img src={next} alt='next button' className='btn searchBtn h-100' onClick={()=>handleClick(true)}/>
                            </div>
                        } 
                        
                </div>
            </div>
        </>
    )
}
