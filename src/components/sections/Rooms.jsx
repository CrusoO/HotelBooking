import React from 'react';
import RoomCard from '../Cards/RoomCard';  // Make sure to import RoomCard component

// Importing images for the rooms
import RoomImage from '../../assets/Views/Room.jpeg';  // Update path based on your file structure

const Rooms = () => {
  const rooms = [
    {
      image: RoomImage,  // Using the imported image for the room
      title: 'Deluxe Ocean View',
      description: 'Bask in luxury with breathtaking ocean views from your private suite.',
      price: 299
    },
    // Add more room objects if needed
  ];

  return (
    <section className="section__container py-16 font-sans">
      <p className="section__subheader text-center">OUR LIVING ROOM</p>
      <h2 className="section__header text-center">The Most Memorable Rest Time Starts Here.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default Rooms;
