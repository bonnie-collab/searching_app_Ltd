import React, { useState, useEffect } from "react";
import "../css/Profile.css";

const Profile = () => {
  const [image, setImage] = useState(null);

  // Load saved image on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem("profileImage", base64Image); // save image
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <div className="profile-card">
        {image ? (
          <img src={image} alt="Profile" className="profile-img" />
        ) : (
          <div className="placeholder">No Image</div>
        )}

        <input type="file" onChange={handleImageChange} />
      </div>
    </div>
  );
};

export default Profile;