import React, { useState } from 'react';
import App from './App';

type AppProps = {
    shopClick: () => void;
}

const Home = ({ shopClick }: AppProps) => {
    //lay out with grid in CSS
    return (
        <div id='home'>
            <h1 id='homeTitle'>This Website</h1>
            <div id='image'>image</div>
            <div>text</div>
            <button onClick={shopClick}>Go to Shop</button>
        </div>
    )
}

export default Home;