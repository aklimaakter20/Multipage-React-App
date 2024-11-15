import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <section>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center py-4">
              <img className="w-10" src={Logo} alt="" />
              <ul className="flex gap-6">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                  <Link to="/courses">Courses</Link>
                </li> */}
                <li>
                  <Link to="/about">About</Link>
                </li>
                {/* <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li> */}
              </ul>
            </div>
            <div className="flex gap-6">
              <button>SignUp</button>
              <button className="bg-primary text-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
