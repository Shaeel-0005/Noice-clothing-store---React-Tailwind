import { useState } from "react";
import { navLinks, categories } from "../../constants/index";
import {phone,logo} from "../../assets/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // const handleBlur = () => {
  //   if (!buttonRef.current.contains(event.target)) {
  //     setIsHovered(false);
  //   }
  // };

  return (
    <>
      <nav
        className="xl:max-w-[1280px] w-full flex-col items-center justify-between"
        style={{ backgroundColor: "white" }}
      >
        <div className="upper flex py-2 px-16">
          <img
            src={logo}
            alt="logo"
            className="w-auto h-[70px] ml-[-15px]"
          />
          <div className="flex ml-auto items-center">
            
          </div>
          <div className="search-bar">
            <input
              className="py-2 px-3 my-2 mx-3 border-gray-300 border-[0.5px] opacity-50 rounded-md"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-full">
              Search
            </button>
          </div>
        </div>

        <div className="lower flex flex-row justify-between bg-[#ED7A5D] py-0 px-16 w-full self-center items-center">
          {/* Categories dropdown */}
          <div className="dropdown w-[30%] h-[100%] py-4 bg-white relative">
            <button
              className={`h-full w-full text-black font-semibold border border-none py-4 ${
                isHovered ? "bg-white-700 text-[#e95834]" : "hover:text-gray-900"
              }`}
              onMouseOver={handleHover}
              
              
            >
              Categories
            </button>
            {isHovered && (
              <ul className="dropdown-menu absolute bg-white rounded-xl shadow-md w-48 py-2 px-3 font-light">
                {categories.map((cat, index) => (
                  <div
                    key={cat.id}
                    className={`text-black font-bold mr-3 ${
                      index === categories.length - 1 ? "first-nav" : ""
                    }`}
                  >
                    <a href={`#${cat.id}`}>{cat.title}</a>
                  </div>
                ))}
              </ul>
            )}
          </div>
          <div className="second w-[30%] flex flex-row items-center justify-center">
            {/* Menu */}
            {navLinks.map((nav, index) => (
              <div
                key={nav.link}
                className={`text-white font-semibold mr-6 hover:text-red-100${
                  index === navLinks.length - 1 ? "last-nav" : ""
                }`}
              >
                <Link to={`${nav.link}`}>{nav.title}</Link>
              </div>
            ))}
          </div>
          <div className="third w-[30%]">
            {/* Icon box */}
            <div className="flex items-center space-x-4 justify-end">
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                <img
                  className="w-[30px] h-[30px]"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-sm font-light text-white">Call Now!</h3>
                <p className="text-white text-sm">
                  +923 4564665468
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
