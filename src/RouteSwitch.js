import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Home from "./Home";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Header" element={<Header />} />
        <Route path="Home" element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;