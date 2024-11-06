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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2">
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
                    <div className="indicator">
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
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaRegHeart></FaRegHeart>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;