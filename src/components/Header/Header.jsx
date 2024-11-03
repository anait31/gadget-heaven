import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";


const Header = () => {


    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/statistic'}>Statistic</NavLink></li>
    <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    <li><NavLink to={'/about-us'}>About Us</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2">
                            {links}
                        </ul>
                    </div>
                    <h2 className="text-2xl font-bold"><Link to={'/'}>Gadget Heaven</Link></h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <FiShoppingCart></FiShoppingCart>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaRegHeart></FaRegHeart>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;