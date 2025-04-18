import Logo from "../../assets/logo.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/facebook.png";
import YoutubeIcon from "../../assets/youtube.png";
import TwitterIcon from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-40 pb-8" id="contact">
      <div className="section__container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="logo mb-4">
            <a href="#home">
              <img src={Logo} alt="logo" className="h-12" />
            </a>
          </div>
          <p className="section__description mb-4">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="btn">Book Now</button>
        </div>

        <div>
          <h4 className="font-bold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Browse Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Special Offers & Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Room Types & Amenities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Customer Reviews & Ratings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Travel Tips & Guides
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">OUR SERVICES</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Concierge Assistance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Flexible Booking Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Airport Transfers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--primary-color)]">
                Wellness & Recreation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">CONTACT US</h4>
          <a
            href="mailto:thaparobinson1@gmail.com"
            className="hover:text-[var(--primary-color)]"
          >
            thaparobinson1@gmail.com
          </a>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <img src={FacebookIcon} alt="facebook" className="h-6" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="instagram" className="h-6" />
            </a>
            <a href="#">
              <img src={YoutubeIcon} alt="youtube" className="h-6" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="twitter" className="h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t">
        Copyright © 2024 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
