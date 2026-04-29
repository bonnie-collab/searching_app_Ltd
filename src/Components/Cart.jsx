import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('apexCart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  // Calculate total
  const calculateTotal = (cartItems) => {
    const sum = cartItems.reduce((acc, item) => {
      const price = item.product_cost;
      return acc + (price * item.quantity);
    }, 0);
    setTotal(sum);
  };

  // Add item to cart
  const addToCart = (product) => {
    const newItem = {
      ...product,
      quantity: 1,
      addedAt: new Date().toISOString()
    };

    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('apexCart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('apexCart', JSON.stringify(updatedCart));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('apexCart', JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    setTotal(0);
    localStorage.removeItem('apexCart');
  };

  // Proceed to checkout
  const proceedToCheckout = () => {
    navigate('/checkout', { state: { cart, total } });
  };

  return (
    <div className="cart-wrapper">
      {/* Interactive Background Effect */}
      <div 
        className="cart-glow-effect"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 170, 0.05) 0%, transparent 50%)`
        }}
      />

      <div className="section-header">
        <h2 className="cart-title">
          <span className="title-icon">🛒</span>
          Shopping Cart
          <div className="title-glow"></div>
        </h2>
        <div className="title-underline"></div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some amazing gadgets to get started!</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => navigate('/getproducts')}
          >
            <span className="btn-icon">🛍️</span>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={item.id} className="cart-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="item-image">
                  <img 
                    src={`https://cedric22a.alwaysdata.net/static/images/${item.product_photo}`}
                    alt={item.product_name}
                  />
                </div>
                
                <div className="item-details">
                  <h4 className="item-name">{item.product_name}</h4>
                  
                  <p className="item-description">
                    {item.product_description.slice(0, 80)}...
                  </p>
                  
                  <div className="item-price-section">
                    <p className="item-final-price">
                      Kshs. {item.product_cost}
                    </p>
                  </div>
                  
                  <div className="item-controls">
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <span className="btn-icon">🗑️</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Items ({cart.length})</span>
                <span>Kshs. {total.toLocaleString()}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>Kshs. {total.toLocaleString()}</span>
              </div>
              
              <div className="summary-actions">
                <button 
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button 
                  className="checkout-btn"
                  onClick={proceedToCheckout}
                >
                  <span className="btn-icon">⚡</span>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
