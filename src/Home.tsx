
type AppProps = {
    shopClick: () => void;
}

const Home = ({ shopClick }: AppProps) => {
    //lay out with grid in CSS
    return (
        <div id='home'>
            <div id='homeTitle'>This Website</div>
            <div id='homeText'>This is a simple web page that shows my ability to write in React. The only thing missin (other than a sleek design) is an option to check out the purchase. To be fair, there is no purchase.
            <br></br><br></br>
            <button id="homeButton" onClick={shopClick}>Go to Shop</button>
            </div>
        </div>
    )
}

export default Home;