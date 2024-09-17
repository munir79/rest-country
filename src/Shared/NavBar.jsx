import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaToggleOn } from "react-icons/fa6";


const NavBar = () => {

  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
const NavOption=<>

<Link to='/'>  <li><a>Home</a></li></Link>
<Link to='/latest'>  <li><a>Latest</a></li></Link>
<Link >  <li><a>Item 3</a></li></Link>

</>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {NavOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavOption}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn" onClick={toggleTheme}>
        <FaToggleOn />  change Theme
      </button>
        </div>
      </div>
    );
};

export default NavBar;