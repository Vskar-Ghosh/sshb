import { Link } from 'react-router-dom'; // assuming you're using React Router
import { AiOutlineDashboard, AiOutlineBarChart, AiOutlineUnorderedList, AiOutlineShop, AiOutlineShopping, AiOutlineTags, AiOutlineUser, AiOutlineBgColors, AiOutlineSliders, AiOutlineGlobal } from 'react-icons/ai';

const AdminSidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 flex flex-col">
            <div className="p-4 border-b border-gray-700">
                <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <div className="flex-1 p-4">
                <Link to="/dashboard" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineDashboard className="mr-2" /> Dashboard
                </Link>
                <Link to="/report" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineBarChart className="mr-2" /> Report
                </Link>
                <Link to="/categories" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineUnorderedList className="mr-2" /> Categories
                </Link>
                <Link to="/product" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineShop className="mr-2" /> Product
                </Link>
                <Link to="/order" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineShopping className="mr-2" /> Order
                </Link>
                <Link to="/coupon" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineTags className="mr-2" /> Coupon
                </Link>
                <Link to="/admin" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineUser className="mr-2" /> Admin
                </Link>
                <Link to="/customization" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineBgColors className="mr-2" /> Customization
                </Link>
                <Link to="/slider" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineSliders className="mr-2" /> Slider
                </Link>
                <a href="/" className="flex items-center py-2 px-4 text-gray-400 hover:text-white">
                    <AiOutlineGlobal className="mr-2" /> Visit Site
                </a>
            </div>
        </div>
    );
};

export default AdminSidebar;
