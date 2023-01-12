import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';

/*
page will have unmoving header which needs to be another component

states need to live in App and setState functions are passed as props in comps
states: cart and page state
multiple pages of shopping in different categories
going to make the alphabet, want state addition to self construct from type constructor

going to do research for good CSS settings
*/

const App = () => {
  const [pageState, setPageState] = useState<string>('homePage')

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

      </>
    )
  }


}

export default App;
