import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.jpg"
import { Instagram } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path
            ? "text-green-600 border-b-2 border-green-600"
            : "hover:text-green-600";

    return (
        <nav className="fixed w-full flex justify-center bg-white z-50">
            <div className="flex w-full py-3 max-w-6xl justify-between items-center">
                
                <div>
                    <img className="w-20" src={logo} alt="" />
                </div>

                <ul className="flex gap-8 text-gray-700 font-medium">
                    <li>
                        <Link to="/" className={isActive("/")}>
                            Beranda
                        </Link>
                    </li>

                    <li>
                        <Link to="/pengumuman" className={isActive("/pengumuman")}>
                            Pengumuman
                        </Link>
                    </li>

                    <li>
                        <Link to="/artikel" className={isActive("/artikel")}>
                            Artikel
                        </Link>
                    </li>

                    <li>
                        <Link to="/galeri" className={isActive("/galeri")}>
                            Galeri
                        </Link>
                    </li>

                    <li>
                        <Link to="/tentangkami" className={isActive("/tentangkami")}>
                            Tentang Kami
                        </Link>
                    </li>
                </ul>

                <ul className="flex gap-8 text-gray-700 font-medium">
                    <li>
                        <Link to="/donasi" className="bg-green-600 hover:bg-green-700 transition-all duration-200 px-5 py-2 text-white rounded-full">
                            Donasi
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/rqjannatuadnin/" target="_blank">
                            <Instagram />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}