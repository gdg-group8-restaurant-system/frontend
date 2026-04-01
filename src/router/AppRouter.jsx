import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";
import FavoritesPage from "../pages/FavoritesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import Dashboard from "../pages/admin-page/Dashboard";
import MenuManagement from "../pages/admin-page/MenuManagement";
import Orders from "../pages/admin-page/Orders";
import OpenPage from "../pages/OpenPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

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
          <Route path="menu" element={<MenuManagement />} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}