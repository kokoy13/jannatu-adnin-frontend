import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Gallery = () =>{
    return(
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white islamic-pattern">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-purple-900 mb-6">Galeri Kegiatan</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Dokumentasi kegiatan dan momen berharga dari Rumah Qur'an Zawiyah Sakinah
                    </p>
                </div>
            </section>

            {/* <!-- Gallery Filter --> */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-center gap-4 flex-wrap mb-12">
                        <button className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition">
                            Semua
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                            Kegiatan Santri
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                            Pengajian
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                            Acara Spesial
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
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
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-400 to-purple-600 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Khataman Al-Qur'an</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 2 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-300 to-purple-500 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Pembukaan Program</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 3 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-500 to-purple-700 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Pembelajaran Santri</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 4 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-600 to-purple-800 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Outing Program</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 5 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-400 to-purple-700 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Majelis Doa</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 6 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-500 to-purple-600 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Workshop Santri</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 7 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-300 to-purple-600 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Kegiatan Malam</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 8 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-600 to-purple-700 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Perayaan Khusus</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 9 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-400 to-purple-500 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Mushaf Al-Qur'an</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 10 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-500 to-purple-800 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Ruang Belajar</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 11 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-600 to-purple-400 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Kajian Rutin</p>
                                </span>
                            </div>
                        </div>

                        {/* <!-- Image 12 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-lg h-56 bg-gradient-to-br from-purple-700 to-purple-500 hover:shadow-xl transition">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition text-center">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-sm font-semibold">Sertifikasi Santri</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Load More Button --> */}
                    <div className="text-center">
                        <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
                            Muat Lebih Banyak Foto
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