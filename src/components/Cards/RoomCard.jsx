import React from 'react';

const RoomCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
      <div className="relative">
        {/* Update the image height with a valid Tailwind class */}
        <img src={image} alt={title} className="w-full h-60 object-cover" /> {/* Adjust the height as needed */}
        
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-white p-2 rounded-full">
            <i className="ri-heart-fill text-[var(--primary-color)]"></i>
          </span>
          <span className="bg-white p-2 rounded-full">
            <i className="ri-paint-fill text-[var(--primary-color)]"></i>
          </span>
          <span className="bg-white p-2 rounded-full">
            <i className="ri-shield-star-line text-[var(--primary-color)]"></i>
          </span>
        </div>
      </div>
      {/* <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <h5 className="mb-4">
          Starting from <span className="text-[var(--primary-color)] font-bold">${price}/night</span>
        </h5>
        <button className="btn w-full">Book Now</button>
      </div> */}
    </div>
  );
};

export default RoomCard;
