import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Sample from "./Pages/Sample";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MenShop from "./Pages/Shop/MenShop";
import WomenShop from "./Pages/Shop/WomenShop";
import ProductView from "./Pages/Shop/ProductView";
import ShopingBag from "./Pages/Shop/ShopingBag";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="/shop/men" element={<MenShop />} />
                    <Route path="/shop/women" element={<WomenShop />} />
                    <Route path="/view" element={<ProductView />} />
                    <Route path="/bag" element={<ShopingBag />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
