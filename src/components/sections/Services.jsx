import ExploreBgImage from '../../assets/GreenBack.jpg';// You'll need this background image

const Services = () => {
  const services = [
    {
      icon: 'ri-shield-star-line',
      title: 'High Class Security',
      description: 'State-of-the-art security systems and trained personnel'
    },
    {
      icon: 'ri-24-hours-line',
      title: '24 Hours Room Service',
      description: 'Round-the-clock assistance for your comfort'
    },
    {
      icon: 'ri-headphone-line',
      title: 'Conference Room',
      description: 'Fully equipped meeting spaces for business needs'
    },
    {
      icon: 'ri-map-2-line',
      title: 'Tourist Guide Support',
      description: 'Expert local guides to enhance your experience'
    }
  ];

  return (
    <section className="relative py-10" id="service">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ExploreBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="section__container relative z-10">
        <div className="max-w-xl">
          <p className="section__subheader text-white">SERVICES</p>
          <h2 className="section__header text-white">
            Strive Only For The Best.
          </h2>
          
          <ul className="mt-8 space-y-6">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-4 text-white">
                <span className="flex-shrink-0 w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <i className={`${service.icon} text-2xl`}></i>
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;