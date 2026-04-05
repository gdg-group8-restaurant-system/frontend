import React, { useState } from "react";
import { MdEditNote } from "react-icons/md"; 
import "./styles.css";

function CartPage({ cart }) {
  const [items, setItems] = useState(() => {
    const grouped = cart.reduce((acc, item) => {
      const existing = acc.find((i) => i.id === item.id);
      if (existing) {
        existing.qty += 1;
      } else {
        acc.push({ ...item, qty: 1 });
      }
      return acc;
    }, []);
    return grouped;
  });

  const increaseQty = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setItems(items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = 5;
  const total = subtotal + tax + deliveryFee;
  return (
    <div className="page">
      <h1 className="title">Your Cart</h1>

      {items.length === 0 ? (
        <p className="empty"> No items yet. Add something delicious!</p>
      ) : (
        <>
         <div className="cart-list">
  {items.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.img} alt={item.name} className="cart-img" />
      <div className="cart-details">
        <h3 className="cart-name">{item.name}</h3>
        <p className="cart-desc">{item.description}</p>
        <div className="cart-row">
          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
          <span className="cart-price">${(item.qty * item.price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  ))}
</div>
<div className="special-requests">
  <label className="special-label">Special Requests</label>
  <div className="special-box">
    <MdEditNote className="special-icon" />
    <input
      type="text"
      placeholder="Add a note to the chef..."
      className="special-input"
    />
  </div>
</div>
<div className="summary-box">
  <h2 className="summary-title">Summary</h2>
  <div className="summary-row">
    <span>Subtotal</span>
    <span>${subtotal.toFixed(2)}</span>
  </div>
  <div className="summary-row">
    <span>Tax (8%)</span>
    <span>${tax.toFixed(2)}</span>
  </div>
  <div className="summary-row">
    <span>Delivery Fee</span>
    <span>${deliveryFee.toFixed(2)}</span>
  </div>
  <div className="summary-row total">
    <strong>Total Amount</strong>
    <strong>${total.toFixed(2)}</strong>
  </div>
</div>        
        </>
      )}
    </div>
  );
}

export default CartPage;