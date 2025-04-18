import AboutImage from '../../assets/Views/View3.jpeg';



const About = () => {
  return (
    <section className="section__container py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="about">
      <div className="about__image">
        <img src={AboutImage} alt="about" className=" w-full" />
      </div>
      <div>
        <p className="section__subheader" >ABOUT US</p>
        <h2 className="section__header">The Best Holidays Start Here!</h2>
        <p className="section__description mb-8">
          With a focus on quality accommodations, personalized experiences, and
          seamless booking, our platform is dedicated to ensuring that every
          traveler embarks on their dream holiday with confidence and
          excitement.
        </p>
        <button className="btn">Read More</button>
      </div>
    </section>
  );
};
export default About;
