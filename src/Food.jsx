import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";  
import { FaShoppingCart } from "react-icons/fa"; 
import MenuPage from "./MenuPage.jsx";
import CartPage from "./CartPage.jsx";
import "./styles.css";

function Food() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));
  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  return (
    <Router>
      <div className="food">
        <Routes>
          <Route
            path="/"
            element={
              <MenuPage
                addToCart={addToCart}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                cart={cart}   
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                favorites={favorites}
                removeFromCart={removeFromCart} 
              />
            }
          />
        </Routes>
        <nav className="bottom-nav">
          <NavLink to="/" className="nav-item">
            <FaUtensils size={20} />
            <span>Menu</span>
          </NavLink>
          <NavLink to="/cart" className="nav-item cart-link">
            <FaShoppingCart size={20} />
            <span>Orders</span>
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </Router>
  );
}

export default Food;