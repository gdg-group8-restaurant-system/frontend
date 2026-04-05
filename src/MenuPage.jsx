import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./styles.css";

function MenuPage({ addToCart, toggleFavorite, favorites }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const carouselRef = useRef(null);

  const dishes = [
      { id: 1, name: "Heirloom Greens", 
        description: "Crisp farm greens with radish, pine nuts, and citrus emulsion.",
         price: 18, img: "/src/assets/heirloom.jpg", 
         category: "Appetizers" },
  { id: 2, name: "Caprese Skewers", 
    description: "Cherry tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
     price: 14,
      img: "/src/assets/caprese.webp", 
      category: "Appetizers" },
  { id: 3, name: "Truffle Arancini", 
    description: "Golden risotto balls filled with truffle and parmesan.", 
    price: 16, img: "/src/assets/arancini.jpg", 
    category: "Appetizers" },
  { id: 4, name: "Smoked Salmon Crostini", 
    description: "Toasted baguette topped with smoked salmon and dill cream.", 
    price: 15, 
    img: "/src/assets/salmon-crostini.jpg", 
    category: "Appetizers" },
  { id: 5, name: "Sambusa", 
    description: "Crispy pastry pockets filled with spiced lentils.",
     price: 12, img: "/src/assets/sambusa.jpg", 
     category: "Appetizers" },
      { id: 6, name: "Braised Rib", description: "Slow‑cooked beef rib in red wine reduction with parsnip purée.", price: 42, img: "/src/assets/rib.webp", category: "Main Course" },
  { id: 7, name: "Butter Chicken", description: "Tender chicken in creamy tomato curry with naan.", price: 26, img: "/src/assets/chicken.webp", category: "Main Course" },
  { id: 8, name: "Grilled Ribeye", description: "Charcoal‑grilled ribeye with chimichurri sauce.", price: 40, img: "/src/assets/libeye.webp", category: "Main Course" },
  { id: 9, name: "Lentil Shepherd’s Pie", description: "Savory lentils topped with mashed potatoes.", price: 24, img: "/src/assets/lentil.jfif", category: "Main Course" },
  { id: 10, name: "Thai Green Curry", description: "Coconut curry with chicken, eggplant, and jasmine rice.", price: 27, img: "/src/assets/thai.webp", category: "Main Course" },
 { id: 11, name: "Midnight Cocoa", description: "Dark chocolate mousse with smoked salt and raspberry.", price: 16, img: "/src/assets/choco.jpg", category: "Desserts" },
  { id: 12, name: "Tiramisu", description: "Espresso‑soaked ladyfingers layered with mascarpone cream.", price: 15, img: "/src/assets/chee.jpg", category: "Desserts" },
  { id: 13, name: "Pistachio Baklava", description: "Flaky pastry layered with pistachios and honey syrup.", price: 14, img: "/src/assets/baklava.webp", category: "Desserts" },
  { id: 14, name: "Crème Brûlée", description: "Silky custard topped with caramelized sugar crust.", price: 16, img: "/src/assets/creme.jpg", category: "Desserts" },  
{ id: 15, name: "Coffee Panna Cotta", description: "Ethiopian coffee‑infused cream with chocolate drizzle.", price: 15, img: "/src/assets/pana.jpg", category: "Desserts" },
 { id: 16, name: "Kitfo", description: "Minced beef seasoned with spiced butter and mitmita.", price: 28, img: "/src/assets/kitfo.jpg", category: "Ethiopian" },
  { id: 17, name: "Shiro Wat", description: "Chickpea flour stew simmered with garlic and berbere.", price: 22, img: "/src/assets/shiro.jpg", category: "Ethiopian" },
  { id: 18, name: "Tibs", description: "Sautéed beef cubes with onions, peppers, and rosemary.", price: 30, img: "/src/assets/tibs.webp", category: "Ethiopian" },
  { id: 19, name: "Gomen", description: "Collard greens cooked with garlic and niter kibbeh.", price: 20, img: "/src/assets/gomen.webp", category: "Ethiopian" },
  { id: 20, name: "Misir Wat", description: "Red lentil stew simmered in berbere sauce.", price: 22, img: "/src/assets/misr.jpg", category: "Ethiopian" },
];

  const categories = ["All", "Appetizers","Ethiopian", "Main Course", "Desserts"];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % filteredDishes.length;
      const cardWidth = carousel.offsetWidth;
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [filteredDishes]);

  return (
    <div className="page">
      <h1 className="title">Menu</h1>
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="carousel" ref={carouselRef}>
        {filteredDishes.map((dish) => (
          <article key={dish.id} className="card">
            <img src={dish.img} alt={dish.name} className="food-img" />
            <div className="dish-header">
              <h2 className="dish-name">{dish.name}</h2>
              <span className="dish-price">${dish.price}</span>
            </div>
            <p className="dish-desc">{dish.description}</p>
            <div className="card-footer">
              <button
                className={`fav-btn ${favorites.includes(dish.id) ? "active" : ""}`}
                onClick={() => toggleFavorite(dish.id)}
              >
                {favorites.includes(dish.id) ? (
                  <FaHeart className="heart-icon" />
                ) : (
                  <FaRegHeart className="heart-icon" />
                )}
                Favorite
              </button>
              <button className="add-btn" onClick={() => addToCart(dish)}>+</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;