import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";
import FavoritesPage from "../pages/FavoritesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import Dashboard from "../pages/admin/Dashboard";
import LandingPage from "../pages/LandingPage";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

        {/* Public Layout */}
        <Route path="/user" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
     </Route>

      </Routes>
    </BrowserRouter>
  );
}