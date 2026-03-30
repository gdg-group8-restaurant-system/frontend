import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FavoritesPage from "./pages/FavoritesPage";
import LoginPage from "./pages/LoginPage";

// Temporary pages for now
function CartPage() {
  return (
    <div className="p-6 text-xl font-semibold">
      Cart Page
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="p-6 text-xl font-semibold">
      Profile Page
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        {/* NEW ROUTES */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
