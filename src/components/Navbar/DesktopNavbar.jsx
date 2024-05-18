import React, { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import headerlogo from "../../assets/cds-header-logo.png";
import simplifiedlogo from "../../assets/cds-simplified-logo.png";
import { MdCallMade } from "react-icons/md";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/home",
    link: "/"
  },
  {
    id: 2,
    name: "Services",
    link: "/services"
  },
  {
    id: 3,
    name: "About",
    link: "/about"
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact"
  }
];

const DesktopNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isHalfScreen, setIsHalfScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const menuDropdownRef = useRef(null);

  const handleClick = path => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        menuDropdownRef.current &&
        !menuDropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-dropdown-button")
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(
    () => {
      setCurrentPath(location.pathname);
    },
    [location.pathname]
  );

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsHalfScreen(screenWidth > 750 && screenWidth <= 1080);
      setIsMobileScreen(screenWidth <= 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = link => {
    setCurrentPath(link);
    navigate(link);
    setShowMenu(false);
    window.scrollTo({
      top: 0
    });
  };

  return (
    <div className="relative z-10 shadow-md dark:bg-secondary-dark-bg dark:text-gray-200">
      <div className="container py-4">
        <div className="flex justify-between items-center  md:w-11/12 ml-2 md:ml-20 mx-auto">
          {/*Logo container*/}
          <div>
            {!isMobileScreen &&
              <div>
                {isHalfScreen
                  ? <img
                      src={simplifiedlogo}
                      alt="logo"
                      className="w-auto h-12 object-cover"
                    />
                  : <img
                      src={headerlogo}
                      alt="logo"
                      className="w-auto h-12 object-cover hover:cursor-pointer"
                      onClick={() => navigate(Navlinks[0].link)}
                    />}
              </div>}
          </div>
          {/*Menu container*/}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navlinks.map(({ id, name, link }) =>
                <li key={id} className="py-4">
                  <NavLink
                    to={link}
                    onClick={() => handleNavLinkClick(link)}
                    className={`text-sm sm:text-base py-2 hover:border-b-2  ${currentPath ===
                    link
                      ? "text-primary border-b-2 border-primary"
                      : "hover:border-gray-300"}`}
                  >
                    {name}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <div className="hidden md:block">
            <div
              onClick={() => handleClick("/schedule-a-free-consultation")}
              className={`flex items-center cursor-pointer bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-70 text-white py-2 px-4 rounded-full dark:text-black`}
            >
              Book a call
              <MdCallMade className="ml-2" />
            </div>
          </div>

          {/* Mobile view  */}
          <div className="mr-2 flex items-center md:hidden bg-gray-100  hover:drop-shadow-md p-2 rounded-full">
            {/* Mobile Hamburger icon */}
            {showMenu
              ? <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all "
                  size={20}
                />
              : <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={20}
                />}
          </div>
        </div>
      </div>
      <MobileNavbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        menuDropdownRef={menuDropdownRef}
      />
    </div>
  );
};

export default DesktopNavbar;
