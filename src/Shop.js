import { useState } from "react";
import letters from "./shopItems";

//add shop page state to handle different displays

const Shop = ({ addToCart }) => {
    let itemID = 0;
    const [displayState, setDisplayState] = useState('displayAll')



    const addToCartWrapper = (item) => {
        addToCart(item)
    }
    
    const buttonCategoryHandler = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'all') {
            setDisplayState('displayAll')
        } else if (e.target.value === 'Vowels') {
            setDisplayState('displayVowels')
        } else if (e.target.value === 'Consonants') {
            setDisplayState('displayConsonants')
        } else if (e.target.value === 'Y') {
            setDisplayState('Y')
        }
    }

    let list 
    if (displayState === "displayAll") {
        list = letters
    } else if (displayState === "displayVowels") {
        list = letters.filter(item => item.category === 'Vowel')
    } else if (displayState === "displayConsonants") {
        list = letters.filter(item => item.category === 'Consonant')
    } else if (displayState === "Y") {
        list = letters.filter(item => item.category === 'Y')
    }

    const displayItems = list.map((item) =>
        <div key={item.key} id="shopDisplayItem">
            <h1>{item.itemName}</h1>
            <h5 id="shopMiddleTerm">The Letter {item.itemName}<br></br>${item.itemPrice}.00</h5>
            <button onClick={() => addToCartWrapper(item)} key={itemID++}>Add to Cart</button>
        </div>)




    //lay out with flex in CSS
    return (
        <div id="shop">
            <h1 id="shopTitle">Shop</h1>
            <div id="shopButtonHolder">
                <button onClick={buttonCategoryHandler} value='all'>All</button>
                <button onClick={buttonCategoryHandler} value='Consonants'>Consonants</button>
                <button onClick={buttonCategoryHandler} value='Vowels'>Vowels</button>
                <button onClick={buttonCategoryHandler} value='Y'>???</button>
            </div>
            <div id="shopItems">
                {displayItems}
            </div>
        </div>
    )
}

export default Shop;