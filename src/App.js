import React, { useEffect, useReducer, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import './App.css';

/*
page will have unmoving header which needs to be another component

make cart quantity editable
make cart deletable
add total to cart

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
  } else if (passed.action === 'incrementUpQuantity') {
    const copyCart = [...cart]
    copyCart[passed.index].itemQuantity += 1
    console.log(copyCart)
    return copyCart
  } else if (passed.action === 'removeFromCart') {
    console.log(passed.itemName)
    const filteredArray = cart.filter((item) => item.itemName !== passed.itemName);
    return filteredArray;
  } else if (passed.action === 'changeQuantity') {
    const copyCart = [...cart]
    const itemNameSearchFunction = (element) => element.itemName === passed.itemName;
    let indexInCart = cart.findIndex(itemNameSearchFunction)
    copyCart[indexInCart].itemQuantity = passed.itemQuantity
    console.log(copyCart)
    return copyCart
  }
}

const App = () => {

  let initialCart = []
  const [cart, dispatch] = useReducer(cartReducer, initialCart)
  const [pageState, setPageState] = useState('homePage')
  const [cartTotal, setTotal] = useState('$0.00')

  const addToCart = (item) => {
    const itemNameSearchFunction = (element) => element.itemName === item.itemName;
    let indexInCart = cart.findIndex(itemNameSearchFunction)

    if (indexInCart === -1){
      dispatch({
        action: 'addToCart',
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        itemQuantity: 1,
    })
    } else {
      incrementUpQuantity(indexInCart)
    }
  }

  const removeFromCart = (item) => {

    dispatch({
      action: 'removeFromCart',
      itemName: item.itemName,
    })
  }

  const incrementUpQuantity = (indexInCart) => {
    dispatch({
      action: 'incrementUpQuantity',
      index: indexInCart
    })
  }

  const handleQuantityChange = (e, item) => {
    if (e.target.value < 1) {
      e.target.value = 1
    } else if (e.target.value > 100) {
      e.target.value = 100
    }
    dispatch({
      action: 'changeQuantity',
      itemName: item.itemName,
      itemQuantity: e.target.value,
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


  const displayCart = cart.map((item) =>
        <li key={item.toString()} className='listItem' >
          <h1>{item.itemName}</h1> 
          <div className='listItemInfo'>
            The letter {item.itemName} 
            <input type='number' step={1} min="1" max="100" onChange={(e)=>handleQuantityChange(e, item)} value={item.itemQuantity}/> 
            
            <button id='removeButton' onClick={()=>removeFromCart(item)}>Remove</button>
          </div>
          <div> ${item.itemPrice}</div>
        </li>
  )

  const displayTotal = (
    <div>
      Total: {cartTotal}
    </div>
  )

  useEffect(() =>{
    if (cart.length) {
      const sumOfCart = cart.reduce(
        (total, cartItem) => total + (cartItem.itemPrice * cartItem.itemQuantity), 0
      )
      console.log(sumOfCart)
      setTotal(`$${sumOfCart}.00`);
    }
  }, [cart, cartTotal, setTotal])



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
        <div id='shopPage'>
          <Shop addToCart={addToCart}/>
          { cart.length > 0 &&
            <div id='cart'>
              <h2>Cart</h2>
              <ul id='cartList'>
                {displayCart}        
              </ul>

              {displayTotal}
            </div>
          }
        </div>
      </>
    )
  }


}

export default App;
