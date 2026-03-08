import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Gallery = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-35 pb-20 bg-white relative overflow-hidden">
                {/* Elemen Dekoratif Background untuk kesan elegan */}
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 -ml-20 -mt-20"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6 leading-tight">
                        Galeri Kegiatan
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Dokumentasi momen-momen berharga dan kebersamaan dalam perjalanan dakwah di Rumah Qur'an Jannatu Adnin.
                    </p>
                </div>
            </section>

            {/* <!-- Gallery Filter --> */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-center items-center gap-3 flex-wrap">

                        {/* Tombol yang Sedang Aktif (Semua) */}
                        <button className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-green-600 text-white shadow-lg shadow-emerald-600/20 transition-all duration-300">
                            Semua
                        </button>

                        {/* Tombol Lainnya */}
                        <button className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                            Kegiatan Santri
                        </button>

                        <button className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                            Pengajian
                        </button>

                        <button className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                            Acara Spesial
                        </button>

                        <button className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300">
                            Fasilitas
                        </button>

                    </div>
                </div>
            </section>

            {/* <!-- Gallery Grid --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                        {/* <!-- Image 1 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Khataman Al-Qur'an</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 2 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Pembukaan Program</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 3 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Pembelajaran Santri</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 4 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Outing Program</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 5 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Majelis Do'a</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 6 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Workshop Santri</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 7 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Kegiatan Malam</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 8 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Perayaan Khusus</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 9 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Mushaf Al-Qur'an</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 10 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Ruang Belajar</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 11 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Kajian Rutin</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 12 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 bg-gradient-to-br from-emerald-200 to-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">

                            {/* Overlay dengan efek blur yang modern */}
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">

                                {/* Teks & Ikon muncul saat hover */}
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">🔍</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Sertifikat Santri</p>
                                </span>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Load More Button --> */}
                    <div className="text-center mt-12">
                        <button className="group inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-green-600/40 hover:-translate-y-1 active:scale-95">
                            Muat Lebih Banyak Foto
                            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- Video Section --> */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Video Dokumentasi</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-48 flex items-center justify-center">
                                <span className="text-white text-5xl">▶</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-purple-900 mb-2">Video Profile Rumah Qur'an</h3>
                                <p className="text-gray-700 text-sm mb-4">Pengenalan lengkap tentang Rumah Qur'an Zawiyah Sakinah</p>
                                <button className="text-purple-700 font-semibold hover:text-purple-900">Tonton Video →</button>
                            </div>
                        </div>

                        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-700 h-48 flex items-center justify-center">
                                <span className="text-white text-5xl">▶</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-purple-900 mb-2">Testimoni Santri</h3>
                                <p className="text-gray-700 text-sm mb-4">Kisah inspiratif dari santri-santri Rumah Qur'an</p>
                                <button className="text-purple-700 font-semibold hover:text-purple-900">Tonton Video →</button>
                            </div>
                        </div>

                        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-48 flex items-center justify-center">
                                <span className="text-white text-5xl">▶</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-purple-900 mb-2">Tayangan Khataman</h3>
                                <p className="text-gray-700 text-sm mb-4">Moment spesial pelaksanaan khataman Al-Qur'an</p>
                                <button className="text-purple-700 font-semibold hover:text-purple-900">Tonton Video →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Instagram Section --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Follow Media Sosial Kami</h2>

                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center text-white mb-8">
                        <h3 className="text-2xl font-bold mb-2">@zawiyahsakinahkebumen</h3>
                        <p className="mb-6">Ikuti kami di Instagram untuk update kegiatan terbaru dan konten eksklusif</p>
                        <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Kunjungi Instagram
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg h-48"></div>
                        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg h-48"></div>
                        <div className="bg-gradient-to-br from-pink-300 to-purple-500 rounded-lg h-48"></div>
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg h-48"></div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default Gallery