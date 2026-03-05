import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.jpg"

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path
            ? "text-[#0e867b] border-b-2 border-[#0e867b]"
            : "hover:text-[#0e867b]";

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                
                <div>
                    <img className="w-20" src={logo} alt="" />
                </div>

                <ul className="flex gap-8 text-gray-700 font-medium">
                    <li>
                        <Link to="/" className={isActive("/")}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className={isActive("/about")}>
                            About Us
                        </Link>
                    </li>

                    <li>
                        <Link to="/article" className={isActive("/article")}>
                            Articles
                        </Link>
                    </li>

                    <li>
                        <Link to="/gallery" className={isActive("/gallery")}>
                            Gallery
                        </Link>
                    </li>

                    <li>
                        <Link to="/announcement" className={isActive("/announcement")}>
                            Announcement
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}