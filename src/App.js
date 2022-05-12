import React, {useState} from 'react';
import Card from './components/Card';

function App() {
  const [foodData, setFoodData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    let querySearch = e.target.query.value;
    console.log(querySearch);

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-app-id', 'af465950');
    myHeaders.append('x-app-key', 'd9dd4a577cde9aba29887c646d28dadc');

    let data = JSON.stringify({
      query : querySearch
    });

    fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: "POST",
      headers: myHeaders,
      body: data
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setFoodData(data)
    })   
  }  
  return (
    <div className="App">
      <header className="App-header">
        <div className='container vh-100'>
          <div className='pt-5'>
            <h1 className='text-center mb-3'>Home Page</h1>
            <div className='d-flex justify-content-center'>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter Food Here" aria-describedby="button-addon2" id='query'/>
                  <button className="btn btn-primary" type="submit" id="button-addon2">Search</button>
                </div>
              </form>
            </div>
          </div>
          {foodData ? <Card data={foodData}/> : null}
          
        </div>
      </header>
    </div>
  );
}

export default App;
