import { Link, NavLink, useLocation } from "react-router-dom";
import './Header.css'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { getLocalStorageData } from "../../utilities/utilities";
import { useState, useEffect } from "react";




const Header = () => {
    const [headerBg, setHeaderBg] = useState(false);
    const products = getLocalStorageData();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            setHeaderBg(true); // Purple color for home page
        }
        else {
            setHeaderBg(false)
        }
    }, [pathname]);

    const links = <>
        {/* <li><NavLink to={'/'}>Home</NavLink></li> */}
        <li><NavLink to={'/statistic'}>Statistic</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/about-us'}>About Us</NavLink></li>
    </>

    return (
        <div className={`${headerBg && 'bg-[#9538E2] text-white'}`}>
            <div className="navbar max-w-7xl mx-auto">
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
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2">
                            {links}
                        </ul>
                    </div>
                    <h2 className="md:text-2xl font-bold"><Link to={'/'}>Gadget Heaven</Link></h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FiShoppingCart ></FiShoppingCart>
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaRegHeart></FaRegHeart>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;