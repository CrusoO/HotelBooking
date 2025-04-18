import ExploreBgImage from '../../assets/Explore.png'; // You'll need this background image

const Explore = () => {
  return (
    <section className="py-5" id="explore">
      <div className="section__container">
        <p className="section__subheader text-center">EXPLORE</p>
        <h2 className="section__header text-center">What's New Today.</h2>
        
        <div 
          className="explore__bg mt-8 rounded-lg overflow-hidden relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ExploreBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }}
        >
          <div className="explore__content p-8 md:p-16 text-white relative z-10">
            <div className="max-w-md">
              <p className="text-lg mb-4 text-gray-200">10th MAR 2024</p>
              <h4 className="text-2xl md:text-3xl font-bold mb-6">
                A New Menu Is Available In Our Hotel.
              </h4>
              <button className="btn hover:bg-[var(--hover-color)] hover:text-[var(--primary-color)] transition-colors">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;