import React from "react";

const Button = () => {
  return (
    <button className="relative flex items-center justify-center text-white font-semibold text-xl">
      Contact Us
      <svg
        width="300"
        height="130"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-73%] left-[-62.5%]"
      >
        <rect width="200" height="100" x="10" y="10" fill="white" />
      </svg>
    </button>
  );
};

export default Button;
