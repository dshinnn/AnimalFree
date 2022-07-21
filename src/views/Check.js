import React, {useState, useEffect} from 'react';
import redX from '../images/remove.png';
import greenCheck from '../images/check.png';
import '../Check.css';

export default function Check(props) {
    const [checkResults, setCheckResults] = useState([]);

    // Grabs the food item selected from the search results (SearchCard)
    const {checkFood} = props;

    //  Fetches nonvegan food dataset from github
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/hmontazeri/is-vegan/master/src/i18n/en/nonvegan.json')
      .then(res => res.json())
      .then(data => {
        let nutrients = [];
        let nonVeganNutrients = [];

        // Cross-examines non-vegan ingredients dataset with the specified food ingredients and nutrients
        function getResults() {
          if (checkFood) {
            const nutrientDetails = checkFood.foodNutrients;

            //  Checks the list of ingredients if provided
            if(checkFood.ingredients) {
              //  Grabs the ingredients and parses it for crosscheck
              var ingredients = String(checkFood.ingredients).toLowerCase().replaceAll(')', '');

              ingredients = ingredients.replaceAll(' (', ', ');
              ingredients = ingredients.replaceAll(';', ',');

              //  Parsed ingredients
              const cleanedIngredients = ingredients.split(', ');
        
              //  Checks for non-vegan ingredients
              for (let i=0; i<cleanedIngredients.length; i++) {
                if(data.find(e => e === cleanedIngredients[i])) {
                  nonVeganNutrients.push(cleanedIngredients[i]);
                }
              }
            }
            
            // Extracts nutrient name from checkFood data
            for(let i=0; i<nutrientDetails.length; i++) {
              if(nutrientDetails[i].value > 0) {
                nutrients.push(nutrientDetails[i].nutrientName.toLowerCase());
              }
            }

            //  Checks for non-vegan nutrients
            for (let i=0; i<nutrients.length; i++) {
              if (data.find(e => e === nutrients[i]) && nonVeganNutrients.indexOf(nutrients[i])) {
                nonVeganNutrients.push(nutrients[i]);
              }
            }
          }
        }
        getResults(); 
        setCheckResults(nonVeganNutrients);
      });
      // eslint-disable-next-line
    }, [])

    return (
      <>
      <h1 className='text-center pt-5'>Results</h1>
        <div className="card w-50 d-block mx-auto mt-5 border border-body">
            <div className="card-body">
                <h3 className="card-title text-center pt-2">{checkFood.description}</h3>
                {checkResults && !!checkResults.length ? 
                  <div>
                    <img src={redX} alt='red X' className='checkImg'/>
                    <p className="card-text">Non-vegan ingredients listed below: </p>
                  </div>
                 : <div>
                   <img src={greenCheck} alt='green check' className='checkImg'></img>
                   <h5 className="card-text text-center">Non-vegan ingredients not found!</h5>
                   </div>
                }
            </div>
            <ul className="list-group list-group-flush">
              {checkResults ? checkResults.map((v, k) => <li className="list-group-item bg-danger text-white border border-secondary" key={k}>{k+1}. {v}</li>) : null}
            </ul>
        </div>
      </>
    )
}
