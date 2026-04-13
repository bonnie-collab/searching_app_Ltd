import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashnavbar = () => {

  const navigate = useNavigate(); // hook for navigation between pages

  // ================= STATE MANAGEMENT =================
  const [cart, setCart] = useState([]); // holds cart items
  const [user, setUser] = useState(null); // holds logged-in user info
  const [profileImage, setProfileImage] = useState(null); // holds profile image

  // controls visibility of dropdowns
  const [showCart, setShowCart] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // ================= LOAD DATA ON COMPONENT MOUNT =================
  useEffect(() => {

    // load cart
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    // load user
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    // load profile image
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }

    // ================= REAL-TIME UPDATE (IMPORTANT) =================
    // listens when profile image changes in another component (Profile page)
    const handleStorageChange = () => {
      const updatedImage = localStorage.getItem("profileImage");
      setProfileImage(updatedImage);
    };

    window.addEventListener("storage", handleStorageChange);

    // cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };

  }, []);

  // ================= LOGOUT FUNCTION =================
  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user session
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-dark text-white">

      {/* ================= LOGO / TITLE ================= */}
      <h4 
        style={{ cursor: "pointer" }} 
        onClick={() => navigate("/")}
      >
        MyShop Hire Michinery And Equipments Tools
      </h4>

      <div className="d-flex align-items-center gap-4">

        {/* ================= CART SECTION ================= */}
        <div style={{ position: "relative" }}>
          
          <span 
            style={{ cursor: "pointer" }} 
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cart.length})
          </span>

          {showCart && (
            <div style={{
              position: "absolute", // card stylings
              top: "30px",
              right: "0",
              background: "white",
              color: "black",
              padding: "10px",
              width: "250px",
              borderRadius: "5px"
            }}>
              
              <h6>Cart Items</h6>

              {cart.length === 0 && <p>No items in cart</p>}

              {cart.map((item) => (
                <div 
                  key={item.product_id}
                  style={{ cursor: "pointer", marginBottom: "5px" }}
                  onClick={() => navigate("/product-details", { state: { product: item } })}
                >
                  {item.product_name} (x{item.quantity})
                </div>
              ))}

            </div>
          )}
        </div>
        {/* ================= END CART ================= */}

        {/* ================= USER SECTION ================= */}
        <div style={{ position: "relative" }}>
          
          {/* UPDATED USER DISPLAY WITH PROFILE IMAGE */}
          <span
            style={{ 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              gap: "5px" 
            }}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            {/* show image if available, else icon */}
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

            {/* show user name */}
            {user?.name || "Guest"}
          </span>

          {/* dropdown menu */}
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