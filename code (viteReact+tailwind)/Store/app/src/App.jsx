import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import SignupPage from "./Pages/SignupPage";
import UserProfilePage from "./Pages/UserProfilePage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import axios from "axios";



const App = () => {

  // we can use useEffect to fetch data from the backend and use it in the frontend
  const fetchapidata = async () =>{
    const response = await axios.get("http://localhost:5000/api")
    console.log(response.data)
  }

  useEffect(() => {
    fetchapidata()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* Dynamic route for product pages */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
