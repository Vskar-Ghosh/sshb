import { FaSearch } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="../public/logo.png" className="h-12 w-auto mr-2" />
            <span className="text-white text-lg font-semibold"></span>
          </div>

          {/* Search Bar */}
          <div className="flex flex-grow justify-center">
            <div className="relative rounded-full bg-blue-100 bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center px-4 py-2 w-96">
              <input
                type="text"
                className="bg-transparent focus:outline-none focus:ring-0 w-full text-black font-bold"
              />
              <FaSearch className="text-blue-500" />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  gajghd@gmail.com
                </a>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
