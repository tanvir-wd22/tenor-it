import logo from '../assets/logo.png';
import { FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral text-neutral-content">
        <div className="footer sm:footer-horizontal  items-center p-4">
          <aside className="grid-flow-col items-center">
            <img src={logo} className="w-8" alt="" />
            <p className="text-xl font-bold">Tenor It</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <FaXTwitter></FaXTwitter>
            <FaLinkedin></FaLinkedin>
            <FaFacebook></FaFacebook>
          </nav>
        </div>
        <hr className="border-t border-gray-200 w-11/12 mx-auto" />
        <p className="text-center py-2">Copyright © 2026 - All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
