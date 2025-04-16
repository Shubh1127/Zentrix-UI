import React, { useState } from "react";

const AddToCartButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setIsDone(true);
      setTimeout(() => setIsDone(false), 2000); // Reset after 2 seconds
    }, 3000); // Animation duration
  };

  return (
    <div className="relative flex items-center justify-center h-32">
      {/* Cart Animation */}
      {isAnimating && (
        <div className="absolute left-0 flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full animate-cart-move">
          <div className="w-6 h-6 bg-yellow-500 rounded-sm animate-parcel-drop"></div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className={`px-6 py-3 text-white font-bold rounded-md transition ${
          isDone ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isDone ? "Done!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCartButton;