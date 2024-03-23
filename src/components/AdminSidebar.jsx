import { useState } from "react";

const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
  };
  return (
    <div className=" bottom-0 relative ">
      <div className=" absolute right-0">
        <button
          onClick={handleClick}
          className=" px-4 py-2 bg-black text-white m-2 sm:hidden"
        >
          Menubar
        </button>
      </div>
      <div
        className=" bg-gray-800 text-white h-full w-64 hidden sm:flex
     flex-col"
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Admin Sidebar</h2>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Dashboard</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Report</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Categories</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Product</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Order</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Coupon</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Admin</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Customization</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Slider</a>
            </li>
          </ul>
        </nav>
        <div className="p-4 mt-auto">
          <ul className="space-y-2">
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="#">Visit Site</a>
            </li>
          </ul>
        </div>
      </div>
      {sidebarOpen && (
        <div
          className=" bg-gray-800 text-white h-full w-64 flex
     flex-col"
        >
          <div className="p-4">
            <h2 className="text-lg font-bold">Admin Sidebar</h2>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Dashboard</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Report</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Categories</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Product</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Order</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Coupon</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Admin</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Customization</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Slider</a>
              </li>
            </ul>
          </nav>
          <div className="p-4 mt-auto">
            <ul className="space-y-2">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Visit Site</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
