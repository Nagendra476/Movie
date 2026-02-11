import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">

        {/* Logo / Brand */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-red-500">MovieBox</h1>
          <p className="text-gray-400 mt-2">Your favorite movies, all in one place.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Movies Section */}
          <div>
            <h2 className="font-semibold">Movies</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><Link to="/">Now Showing</Link></li>
              <li><Link to="/">Upcoming Movies</Link></li>
              <li><Link to="/">Top Rated</Link></li>
              <li><Link to="/">Trailers</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="font-semibold">Support</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/cancellation">Cancellation</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="font-semibold">Follow Us</h2>
            <ul className="mt-3 flex flex-col gap-4 text-gray-400">

              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaFacebookF className="text-xl" />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaTwitter className="text-xl" />
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" />
                  Instagram
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500">
        © 2025 MovieBox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
