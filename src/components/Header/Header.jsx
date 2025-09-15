import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header" id='home'>
      <img src='/public/SAVE_20250915_110058.jpg' alt="Food Banner" className="header-img" />
      
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your craving and elevate your dining experience,
          one delicious meal at a time.
        </p>
        <a href='#explore-menu'>
        <button>View Menu</button>
        </a>
      </div>
    </div>
  );
}

export default Header;