import React, { useReducer, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import './App.css';
import { stringLiteral } from '@babel/types';

/*
page will have unmoving header which needs to be another component

need to move into Shop component

multiple pages of shopping in different categories
going to make the alphabet, want state addition to self construct from type constructor

going to do research for good CSS settings
*/

function cartReducer(cart, passed) {
  if (passed.action === 'addToCart') {
    return [...cart, {
      itemName: passed.itemName,
      itemPrice: passed.itemPrice,
      itemQuantity: passed.itemQuantity
    }]
  }
}

const App = () => {

  let initialCart = []
  const [cart, dispatch] = useReducer(cartReducer, initialCart)
  const [pageState, setPageState] = useState('homePage')

  const addToCart = (item) => {
    console.log(cart)
    dispatch({
      action: 'addToCart',
      itemName: item.name,
      itemPrice: item.price,
      itemQuantity: 1,
    })
  }

  const shopClick = () => {
    if (pageState === 'homePage') {
      setPageState('shopPage')
    }
  }

  const homeClick = () => {
    if (pageState === 'shopPage') {
      setPageState('homePage')
    }
  }

  //declare states and types
  //conditional returning based on pageState(landing, shopping, and checkout)
  if (pageState === 'homePage') {
    return (
      <div>
        <Header homeClick={homeClick} shopClick={shopClick} />
        <Home shopClick={shopClick}  />
      </div>
    )
  } else if (pageState === 'shopPage') {
    return (
      <>
        <Header homeClick={homeClick} shopClick={shopClick} />
        <Shop addToCart={addToCart}/>
      </>
    )
  }


}

export default App;
