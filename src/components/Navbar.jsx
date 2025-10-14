import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Top navigation bar */}
      <div className="w-full fixed top-0 left-0 bg-white z-50">
        <div className="max-w-7xl mx-auto tracking-tight text-md text-gray-900 flex justify-end items-center px-2 py-3 gap-10">
          
          {/* Projects Link */}
          <Link to="/" className="relative inline-block pb-1">
            Projects
            <span
              className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 h-[2px] bg-black transition-all duration-300 ${
                pathname === "/" ? "w-6" : "w-0"
              }`}
            ></span>
          </Link>

          {/* About Me Link */}
          <Link to="/about" className="relative inline-block pb-1">
            About Me
            <span
              className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 h-[2px] bg-black transition-all duration-300 ${
                pathname === "/about" ? "w-6" : "w-0"
              }`}
            ></span>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Navbar;
