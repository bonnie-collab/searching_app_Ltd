import React, { useState } from 'react';
import '../css/Watchlist.css';

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWatchlist = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="watchlist-container">
      {/* Watchlist Toggle Button */}
      <div className="watchlist-toggle" onClick={toggleWatchlist} title="Watchlist">
        <i className="fas fa-lock"></i>
        <span className="hover-text">Watchlist</span>
      </div>

      {/* Watchlist Panel */}
      {isOpen && (
        <div className="watchlist-panel">
          <div className="watchlist-header">
            <h4>My Watchlist</h4>
            <button onClick={toggleWatchlist}>✖</button>
          </div>
          <div className="watchlist-items">
            {watchlist.length === 0 ? (
              <p>No items in watchlist</p>
            ) : (
              <div className="watchlist-flex">
                {watchlist.map((item) => (
                  <div key={item.product_id} className="watchlist-item">
                    <img src={`https://bonnie.alwaysdata.net/static/images/${item.product_photo}`} alt={item.product_name} />
                    <h6>{item.product_name}</h6>
                    <p>KSh {item.product_cost}</p>
                    <button onClick={() => removeFromWatchlist(item.product_id)}>Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;