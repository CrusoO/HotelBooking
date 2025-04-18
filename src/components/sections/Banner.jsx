const Banner = () => {
    const stats = [
      {
        number: "25+",
        text: "Properties Available"
      },
      {
        number: "350+",
        text: "Bookings Completed"
      },
      {
        number: "600+",
        text: "Happy Customers"
      }
    ];
  
    return (
      <section className="section__container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="banner__card bg-gray-50 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-4xl font-bold text-[var(--primary-color)] mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Banner;