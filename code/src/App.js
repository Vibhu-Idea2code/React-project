
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import Timer from './components/Timer';
import Board from './Tic/Board';
import Item from './components/Item';
import Cart from './components/Cart';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
        <NewsItem/>
        <Timer/>
        <Board/>
        <Item name="macbook pro" price={100000}/>
        <Item name="pendrive" price={1000}/>
        <Item name="mobile" price={10000}/>
        <Cart/>


      </div>
    )
  }
}

