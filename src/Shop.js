import React, { useState } from 'react';
import App from './App';



const Shop = ({ addToCart }) => {
    let itemID = 0;
    function ShopItem(name, price) {
        this.name = name;
        this.price = price;
    }

    const onDisplay = [];

    ShopItem.prototype.display = function() {
        onDisplay.push(this)
    }
        
    const letterI = new ShopItem('I', '1')
    
    letterI.display()

    const addToCartWrapper = (item) => {
        addToCart(item)
    }

    const displayItems = onDisplay.map((item) =>
        <button onClick={() => addToCartWrapper(item)} key={itemID++}>{item.name}{item.price}</button>
    )



    //lay out with flex in CSS
    return (
        <div>
            {displayItems}
        </div>
    )
}

export default Shop;