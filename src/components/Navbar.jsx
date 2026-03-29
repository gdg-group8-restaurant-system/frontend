import { useState } from "react";
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-md text-white">
            🍴
          </div>
          <span className="font-semibold text-gray-800">Campus Eats</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Menu</li>
          <li className="hover:text-orange-500 cursor-pointer">Favorites</li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <Heart className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          <User className="w-5 h-5 cursor-pointer hover:text-orange-500" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700">
          <span className="text-orange-500">Home</span>
          <span>Menu</span>
          <span>Favorites</span>

          <div className="flex gap-5 pt-2">
            <Heart className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </div>
      )}
    </nav>
  );
}