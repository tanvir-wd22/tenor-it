import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="hidden sm:block">
            <Link to="/">
              <button className="btn btn-ghost flex items-center gap-1">
                <img src={logo} className="w-8" alt="logo" />
                <span className="text-xl text-purple-700 font-bold">
                  Tenor It
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/tanvir-wd22">
            <button className="btn btn-sm flex gap-1 items-center text-white bg-linear-to-r from-purple-700 to-violet-400 ">
              <FaGithub></FaGithub>
              <span>Contribute</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
