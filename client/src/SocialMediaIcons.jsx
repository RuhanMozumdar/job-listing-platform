import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './icons.css'; // Create a new CSS file for component styles

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center items-center  ">
<div className="mt-4">
            <a href="#" className=" link fb ">
              <i className="fab fa-facebook fa-lg mx-2"></i>
            </a>
            <a href="#" className="link tweet ">
              <i className="fab fa-twitter fa-lg mx-2"></i>
            </a>
            <a href="#" className="link ig ">
              <i className="fab fa-instagram fa-lg mx-2"></i>
            </a>
          </div>
    </div>
  );
};

export default SocialMediaIcons;
