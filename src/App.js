import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import DisplaySearch from './views/DisplaySearch';
import Check from './views/Check';
import NavBar from './components/NavBar';

function App() {
  const [searchResults, setSearchResults] = useState()
  const [checkFood, setCheckFood] = useState()
  
  const getSearchResults = (results) => {
    setSearchResults(results)
    window.sessionStorage.setItem('results', JSON.stringify(results));
  }

  const getCheckFood = (food) => {
    setCheckFood(food)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home getSearchResults={getSearchResults}></Home>}></Route>
            <Route path='results' element={<DisplaySearch results={searchResults} getCheckFood={getCheckFood}></DisplaySearch>}></Route>
            <Route path='check/:foodId' element={<Check checkFood={checkFood}></Check>}></Route>
          </Routes>  
        </div>
      </header>
    </div>
  );
}

export default App;
