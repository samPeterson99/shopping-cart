import React from 'react';

type AppProps = {
    shopClick: () => void;
    homeClick: () => void;
}

const Header = ({homeClick, shopClick}: AppProps) => {
    return (
        <div id='header'>
            <div id='headerLogo'>a fake letter store</div>
            <div id='pageBar'>
                <div onClick={homeClick}>Home</div>
                <div onClick={shopClick}>Shop</div>
            </div>
        </div>
    )
}

export default Header;