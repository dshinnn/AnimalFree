import React, {useState, useEffect} from 'react'

export default function Check(props) {
    const [nonVeganFoods, setNonVeganFoods] = useState([])

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/hmontazeri/is-vegan/master/src/i18n/en/nonvegan.json')
      .then(res => res.json())
      .then(data => {
        setNonVeganFoods(data);
      });
    }, [])
    
    // TODO: Find a way to check foodNutrients against the nonvegan dataset
    // TODO: Display the confidence level of vegan and list and highlight nonvegan ingredients

    return (
      <div>Check</div>
    )
}
