import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [profileImage, setProfileImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load saved profile image on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('cartProfileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // if not logged in redirect to signin
  if (!user) {
    navigate('/signin');
    return null;
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        setProfileImage(imageData);
        localStorage.setItem('cartProfileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setProfileImage('');
    localStorage.removeItem('cartProfileImage');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('cartProfileImage');
    navigate('/signin');
  };

  return (
    <div className="profile-wrapper">
      {/* Interactive Background Effect */}
      <div 
        className="profile-glow-effect"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 170, 0.05) 0%, transparent 50%)`
        }}
      />

      <div className="section-header">
        <h2 className="profile-title">
          <span className="title-icon">👤</span>
          My Profile
          <div className="title-glow"></div>
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="profile-content">

        {/* Main Profile Card */}
        <div className="main-profile-card">

          {/* back symbol to the product page */}
          <div className="col-md-1">
            <input type="button"
            className="btn btn-primary"
            value="<- Back"
            onClick={() => navigate("/getproduct2") } />
          </div>
          {/* ends here the back symbol sign */}

          <div className="profile-header">
            <div className="avatar-section">
              <div className="avatar-container">
                <div className="avatar-wrapper">
                  
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="profile-avatar-img"
                    />
                  ) : (
                    <div className="default-avatar">
                      <span className="avatar-text">{user.username[0].toUpperCase()}</span>
                    </div>
                  )}
                  <div className="avatar-overlay">
                    <div className="overlay-content">
                      <button 
                        className="camera-btn"
                        onClick={() => setIsEditing(true)}
                      >
                        📷
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="user-info">
                  <h3 className="username-display">{user.username}</h3>
                  <p className="user-status">● Apex Member</p>
                </div>
              </div>
            </div>

            <div className="profile-content-grid">
              {/* Account Information Card */}
              <div className="info-card">
                <div className="card-header">
                  <span className="card-icon">👤</span>
                  <h3 className="card-title">Account Information</h3>
                </div>
                <div className="card-content">
                  <div className="info-item">
                    <span className="info-label">Username</span>
                    <span className="info-value">{user.username}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <span className="info-value">{user.phone}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Member Since</span>
                    <span className="info-value">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Profile Customization Card */}
              <div className="info-card">
                <div className="card-header">
                  <span className="card-icon">🎨</span>
                  <h3 className="card-title">Profile Customization</h3>
                </div>
                <div className="card-content">
                  <div className="customization-section">
                    <label className="upload-label">Change Profile Picture</label>
                    <div className="upload-area">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="file-input"
                        id="profile-image-input"
                      />
                      <label htmlFor="profile-image-input" className="upload-btn">
                        <span className="upload-icon">📤</span>
                        <span>Choose Photo</span>
                      </label>
                      
                      {profileImage && (
                        <button 
                          className="remove-image-btn"
                          onClick={handleImageRemove}
                        >
                          <span className="btn-icon">🗑️</span>
                          Remove Photo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="logout-section">
              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                <span className="btn-icon">🚪</span>
                <span className="btn-text">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Upload Modal */}
        {isEditing && (
          <div className="modal-overlay" onClick={() => setIsEditing(false)}>
            <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Update Profile Picture</h3>
              <div className="modal-upload-area">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="modal-file-input"
                  id="modal-file-input"
                />
                <label htmlFor="modal-file-input" className="modal-upload-btn">
                  <span className="upload-icon">📷</span>
                  <span>Select Photo</span>
                </label>
              </div>
              <div className="modal-actions">
                <button 
                  className="modal-btn cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;