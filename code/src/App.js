
import './App.css';
import React, { useEffect } from 'react'
import NavBar from './components/NavBar';
// import News from './components/News';
// import NewsItem from './components/NewsItem';
import Timer from './components/Timer';
import Board from './Tic/Board';
import Item from './components/Item';
import Cart from './components/Cart';
import CardWhether from './components/CardWhether';
import InputWeather from './components/InputWeather';
import ButtonWhether from './components/ButtonWhether';
import { useWeather } from './Context/Weather';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(){ 
    const weather=useWeather();
    console.log(weather);
    console.log(weather.city);
    console.log(weather.data);
    console.log(weather.fetchData);
    // CREATE USEEFFECT FOR LAT AND LON
    useEffect(()=>{
      // get current location here
        weather.fetchCurrentUserLocationData();
    },[]);
    return (
      <div>
        <Router>
        <NavBar/>
        <div className="container my-3">
        {/* <News/> */}
        {/* <NewsItem/> */}
        <Switch>
          <Route exact path="/">
          <Timer/>
          </Route>
          <Route exact path="/tic tie Game" >
          <Board/>
          </Route>
          <Route exact path="/billing" >
          <Item name="macbook pro" price={100000}/>
        <Item name="pendrive" price={1000}/>
        <Item name="mobile" price={10000}/>
        <Cart/>
          </Route>    
          <Route exact path="/whether">
        <div className="App">
          <h1>Weather ForeCast</h1>
          <InputWeather/>
          <ButtonWhether onClick={weather.fetchData} value="search"/>
          <CardWhether/>
          {/* <ButtonWhether value="Refresh"/> */}
        </div>
          </Route>  
          <Route exact path="/meme">
         
          </Route>  
        </Switch> 
        </div>
        </Router>
      </div>
    )
  
}
export default App;

