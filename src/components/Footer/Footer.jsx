import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center max-w-7xl mx-auto space-y-5 py-4">
            <div className="space-y-2">
                <h3 className="text-3xl font-bold">Gadget Heaven</h3>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-around">
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Services</h4>
                    <ul>
                        <li><Link to={'/'}>Product Support</Link></li>
                        <li><Link to={'/'}>Order Tracking</Link></li>
                        <li><Link to={'/'}>Shipping & Delivery</Link></li>
                        <li><Link to={'/'}>Returns</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Company</h4>
                    <ul>
                        <li><Link to={'/'}>About Us</Link></li>
                        <li><Link to={'/'}>Careers</Link></li>
                        <li><Link to={'/'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Legal</h4>
                    <ul>
                        <li><Link to={'/'}>Terms of Service</Link></li>
                        <li><Link to={'/'}>Privacy Policy</Link></li>
                        <li><Link to={'/'}>Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Gadget Heaven Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;