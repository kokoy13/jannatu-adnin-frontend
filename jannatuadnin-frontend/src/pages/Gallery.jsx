import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import khatam from "../assets/img/khatam.jpg"
import pembukaan from "../assets/img/pembukaanProgram.jpg"
import outing from "../assets/img/outingProgram.jpg"
import pembelajaran from "../assets/img/pemebelajaranSantri.jpg"
import img1 from "../assets/img/image1.jpg"
import img2 from "../assets/img/image2.jpg"
import img3 from "../assets/img/image3.jpg"
import img4 from "../assets/img/image4.jpg"
import img5 from "../assets/img/image5.jpg"
import img6 from "../assets/img/image6.jpg"
import img7 from "../assets/img/image7.jpg"
import img8 from "../assets/img/image8.jpg"
import bg1cover from "../assets/img/bg1cover.jpg"
import ig1 from "../assets/img/ig1.jpg"
import ig2 from "../assets/img/ig2.jpg"
import ig3 from "../assets/img/ig3.jpg"
import ig4 from "../assets/img/ig4.jpg"


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
                        Galeri <span className="text-emerald-600">Kegiatan</span>
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
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={khatam}
                                alt="Khataman Al-Qur'an"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Khataman Al-Qur'an</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 2 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={pembukaan}
                                alt="Pembuakaan Program"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Pembukaan Program</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 3 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={pembelajaran}
                                alt="Pembelajaran Santri"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Pembelajaran Santri</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 4 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={outing}
                                alt="Pembuakaan Program"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Outing Program</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 5 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img1}
                                alt="Pembuakaan Program"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Majelis Do'a</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 6 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img2}
                                alt="Workshop Santri"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Workshop Santri</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 7 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img3}
                                alt="kegiatan Malam"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Kegiatan Malam</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 8 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img4}
                                alt="Perayaan Khusus"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Perayaan Khusus</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 9 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img5}
                                alt="Mushaf Al-Qur'an"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Mushaf Al-Qur'an</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 10 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img6}
                                alt="Ruang Belajar"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Ruang Belajar</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 11 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img7}
                                alt="Kajian Rutin"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Kajian Rutin</p>
                                </span>

                            </div>
                        </div>

                        {/* <!-- Image 12 --> */}
                        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-64 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-950/10">
                            <img
                                src={img8}
                                alt="Sertifikat Santri  "
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-all duration-300 flex items-center justify-center">

                                <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-6">
                                    <div className="text-3xl mb-3">✨</div>
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
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 text-center mb-16">
                        Video <span className="text-emerald-600">Dokumentasi</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Video 1 */}
                        <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2">
                            <div className="relative h-56 bg-gradient-to-tr from-emerald-200 to-emerald-600 flex items-center justify-center overflow-hidden">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-2xl">▶</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-bold text-gray-950 mb-3 group-hover:text-emerald-600 transition-colors">Video Profile Rumah Qur'an</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Pengenalan lengkap tentang Rumah Qur'an Jannatu Adnin.</p>
                                <button className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Tonton Video →</button>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2">
                            <div className="relative h-56 bg-gradient-to-tr from-emerald-200 to-emerald-600 flex items-center justify-center overflow-hidden">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-2xl">▶</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-bold text-gray-950 mb-3 group-hover:text-emerald-600 transition-colors">Testimoni Santri</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Kisah inspiratif dari santri-santri Rumah Qur'an.</p>
                                <button className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Tonton Video →</button>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2">
                            <div className="relative h-56 bg-gradient-to-tr from-emerald-200 to-emerald-600 flex items-center justify-center overflow-hidden">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-2xl">▶</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-bold text-gray-950 mb-3 group-hover:text-emerald-600 transition-colors">Tayangan Khataman</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Moment spesial pelaksanaan khataman Al-Qur'an.</p>
                                <button className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Tonton Video →</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Instagram Section --> */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 text-center mb-16">
                        Ikuti Kami di <span className="text-emerald-600">Media Sosial</span>
                    </h2>

                    {/* Banner Utama */}
                    <div className="relative rounded-3xl p-12 text-center text-white mb-12 shadow-xl overflow-hidden">
                        {/* Gambar Background */}
                        <img src={bg1cover} alt="Background" className="absolute inset-0 w-full h-full object-cover" />

                        {/* Konten */}
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">@zawiyahsakinahkebumen</h3>
                            <p className="mb-8 text-emerald-50 max-w-lg mx-auto leading-relaxed">
                                Ikuti kami di Instagram untuk mendapatkan update kegiatan terbaru, tips menghafal, dan konten eksklusif lainnya.
                            </p>
                            <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                                Kunjungi Instagram →
                            </button>
                        </div>
                    </div>

                    {/* Grid Gambar Sosial Media */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {/* Gambar 1 */}
                        <div className="group relative rounded-3xl h-60 overflow-hidden cursor-pointer">
                            <img src={ig1} alt="Galeri 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Gambar 2 */}
                        <div className="group relative rounded-3xl h-60 overflow-hidden cursor-pointer">
                            <img src={ig2} alt="Galeri 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Gambar 3 */}
                        <div className="group relative rounded-3xl h-60 overflow-hidden cursor-pointer">
                            <img src={ig3} alt="Galeri 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Gambar 4 */}
                        <div className="group relative rounded-3xl h-60 overflow-hidden cursor-pointer">
                            <img src={ig4} alt="Galeri 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default Gallery