import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 🔥 ADDED: Link import
import '../css/Dashnavbar.css';

const Dashnavbar = () => {

  const navigate = useNavigate();

  // ================= STATE MANAGEMENT =================
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  // ADDED FROM CODE 2
  const [cartCount, setCartCount] = useState(0);

  const [showCart, setShowCart] = useState(false); // (not used now but kept)
  const [showUserMenu, setShowUserMenu] = useState(false);

  // ================= LOAD DATA =================
  useEffect(() => {

    // ================= CART LOGIC =================
    // 🔥 UPDATED: now using apexCart (same as your product page)
    const updateCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("apexCart")) || [];
      setCart(savedCart);

      // 🔥 UPDATED: total quantity count instead of length
      const totalItems = savedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCart();

    // ================= USER =================
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    // ================= PROFILE IMAGE =================
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }

    // ================= REAL-TIME UPDATES =================
    const handleStorageChange = () => {
      updateCart(); // 🔥 keeps navbar in sync
      const updatedImage = localStorage.getItem("profileImage");
      setProfileImage(updatedImage);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };

  }, []);

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-dark text-white">

      {/* ================= LOGO ================= */}
      <h4 
        style={{ cursor: "pointer" }} 
        onClick={() => navigate("/")}
      >
        MyShop Hire Michinery And Equipments Tools
      </h4>

      <div className='okeyo'
        style={{ cursor: "pointer", marginBottom: "5px" }}
        onClick={() => navigate("/addproducts")}
      >
        ＋ Add Products
      </div>

      <div className="d-flex align-items-center gap-4">

        {/* ================= CART ================= */}
        <div style={{ position: "relative" }}>
          
          {/* 🔥 REPLACED: span → Link navigation to /cart */}
          <Link 
            to="/cart" 
            style={{ 
              cursor: "pointer", 
              textDecoration: "none", 
              color: "white",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }}
          >
            {/* 🔥 ADDED: cart icon */}
            <span style={{ fontSize: "18px" }}>🛒</span>

            {/* 🔥 ADDED: cart label */}
            <span>Cart</span>

            {/* 🔥 ADDED: badge count */}
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold"
              }}>
                {cartCount}
              </span>
            )}
          </Link>

        </div>
        {/* ================= END CART ================= */}

        {/* ================= USER ================= */}
        <div style={{ position: "relative" }}>
          
          <span
            style={{ 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              gap: "5px" 
            }}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
            ) : (
              "👤"
            )}

            {user?.name || "Guest"}
          </span>

          {showUserMenu && (
            <div style={{
              position: "absolute",
              top: "30px",
              right: "0",
              background: "white",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              width: "150px"
            }}>
              
              <div 
                style={{ cursor: "pointer", marginBottom: "5px" }}
                onClick={() => navigate("/profile")}
              >
                Profile
              </div>

              <div 
                style={{ cursor: "pointer", color: "red" }}
                onClick={handleLogout}
              >
                Logout
              </div>

            </div>
          )}
        </div>
        {/* ================= END USER ================= */}

      </div>
    </div>
  );
};

export default Dashnavbar;