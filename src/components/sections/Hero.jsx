import React from 'react';
import videoFile from '../../assets/Views/Video2.mp4';

const Hero = () => {
  return (
    <header className="min-h-[90vh] bg-white flex items-center relative"> 
      {/* Video Background Section */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-[90%] h-94vh object-cover mx-auto"  // Ensures equal padding on both sides and full height
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="section__container text-center z-10 relative px-4"> {/* Added padding for content */}
        <p className="text-lg mb-4">Simple - Unique - Friendly</p>
        <h1 className="text-4xl md:text-6xl font-bold">
          Make Yourself At Home<br />In Our <span className="text-[var(--primary-color)]">Hotel</span>.
        </h1>
      </div>

      {/* Bottom Text Overlay on Video */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
        <p>Your Comfort, Our Priority</p>
      </div>
    </header>
  );
};

export default Hero;
