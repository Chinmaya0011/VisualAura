import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <div className="flex justify-center space-x-4">
      <FaFacebook size={24} />
      <FaInstagram size={24} />
      <FaTwitter size={24} />
    </div>
    <p className="mt-2">&copy; {new Date().getFullYear()} MyAgency. All rights reserved.</p>
  </footer>
);

export default Footer;
