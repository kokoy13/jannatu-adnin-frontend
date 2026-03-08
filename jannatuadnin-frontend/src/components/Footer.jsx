import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Rumah Qur'an</h3>
                        <p>Mewujudkan lingkungan yang membawa keberkahan bagi santri dan masyarakat.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigasi</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
                            <li><Link to="/tentangkami" className="hover:text-purple-400">About Us</Link></li>
                            <li><Link to="/artikel" className="hover:text-purple-400">Articles</Link></li>
                            <li><Link to="/galeri" className="hover:text-purple-400">Gallery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
                        <p>Email: info@rumahquran.id</p>
                        <p>Telepon: +62 812-3456-7890</p>
                        <p>Alamat: Jl. Qur'an No. 123, Kebumen</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p>&copy; 2025 Rumah Qur'an - Zawiyah Sakinah. Semua hak dilindungi.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer