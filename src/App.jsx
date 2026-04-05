import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";   // 🍴 replacement
import { FaShoppingCart } from "react-icons/fa"; // 🛒 replacement
import MenuPage from "./MenuPage";
import CartPage from "./CartPage";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <MenuPage
                addToCart={addToCart}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>

        {/* ✅ Glass nav bar with icons + labels */}
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

export default App;