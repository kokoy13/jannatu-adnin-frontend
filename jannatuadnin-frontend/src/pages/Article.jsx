import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Article = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-35 pb-20 bg-white relative overflow-hidden">
                {/* Elemen Dekoratif Background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6 leading-tight">
                        Artikel & Wawasan
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Membaca dan memahami Al-Qur'an melalui artikel-artikel mendalam dan penuh manfaat untuk memperkaya khazanah keilmuan santri dan masyarakat.
                    </p>
                </div>
            </section>

            {/* <!-- Articles Grid --> */}
            <section className="py-15 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    {/* <!-- Featured Article --> */}
                    <div className="mb-16 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-3">

                            {/* Kolom Gambar/Aksen */}
                            <div className="md:col-span-1 bg-gradient-to-br from-emerald-200 to-emerald-500 h-64 md:h-auto flex items-center justify-center">
                                <span className="text-white font-bold tracking-widest opacity-50 uppercase text-sm">Hero Image</span>
                            </div>

                            {/* Kolom Konten */}
                            <div className="md:col-span-2 p-8 md:p-12">
                                <span className="inline-block bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                    Artikel Unggulan
                                </span>

                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-6 leading-tight">
                                    Sejarah Turunnya Al-Qur'an: Dari Gua Hira hingga Generasi Muslim Kini
                                </h2>

                                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    Al-Qur'an adalah kitab suci umat Islam yang menjadi pedoman hidup dalam berbagai aspek kehidupan.
                                    Perjalanan sejarah ini mencerminkan kebijaksanaan Allah dalam menyampaikan petunjuk kepada umatnya,
                                    dimulai dari wahyu pertama di Gua Hira hingga terjaga hingga saat ini.
                                </p>

                                <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-8">
                                    <p className="text-gray-500 text-sm font-medium">
                                        <span className="text-gray-900 font-semibold">12 Desember 2025</span> • 8 menit baca
                                    </p>

                                    <a href="#article1" className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
                                        Baca Selengkapnya →
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Articles Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48"></div>
                            <div className="p-6">
                                <span className="text-sm text-purple-700 font-semibold">12 Desember 2025</span>
                                <h3 className="text-xl font-bold text-purple-900 mb-3 mt-2">Metode Menghafal Al-Qur'an yang Efektif untuk Santri Pemula</h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    Menghafal Al-Qur'an adalah salah satu amalan paling mulia dalam Islam. Dalam artikel ini, kami akan membahas berbagai metode efektif yang terbukti membantu santri pemula dalam perjalanan tahfidz mereka.
                                </p>
                                <div className="text-sm text-gray-600 mb-4">5 menit baca</div>
                                <a href="#article2" className="text-purple-700 font-semibold hover:text-purple-900">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48"></div>
                            <div className="p-6">
                                <span className="text-sm text-purple-700 font-semibold">12 Desember 2025</span>
                                <h3 className="text-xl font-bold text-purple-900 mb-3 mt-2">Mengapa Surat Yasin Disebut Qalb Qur'an? Ini Penjelasannya</h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    Surat Yasin memiliki kedudukan istimewa dalam Al-Qur'an. Keistimewaan ini tercermin dari julukan "Qalb Qur'an" atau hati dari Al-Qur'an yang sering disandangnya.
                                </p>
                                <div className="text-sm text-gray-600 mb-4">6 menit baca</div>
                                <a href="#article3" className="text-purple-700 font-semibold hover:text-purple-900">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48"></div>
                            <div className="p-6">
                                <span className="text-sm text-purple-700 font-semibold">11 Desember 2025</span>
                                <h3 className="text-xl font-bold text-purple-900 mb-3 mt-2">Etika Bertanya Dalam Pembelajaran Al-Qur'an</h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    Bertanya adalah metode pembelajaran yang sangat dianjurkan dalam Islam. Artikel ini membahas etika dan cara yang tepat dalam bertanya selama pembelajaran Al-Qur'an.
                                </p>
                                <div className="text-sm text-gray-600 mb-4">4 menit baca</div>
                                <a href="#article4" className="text-purple-700 font-semibold hover:text-purple-900">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48"></div>
                            <div className="p-6">
                                <span className="text-sm text-purple-700 font-semibold">10 Desember 2025</span>
                                <h3 className="text-xl font-bold text-purple-900 mb-3 mt-2">Fadail Al-Qur'an: Keutamaan Mempelajari Kitab Suci</h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    Al-Qur'an adalah kalam Allah yang penuh dengan keutamaan dan keajaiban. Dalam artikel ini, kita akan mengenal berbagai fadail atau keutamaan Al-Qur'an.
                                </p>
                                <div className="text-sm text-gray-600 mb-4">7 menit baca</div>
                                <a href="#article5" className="text-purple-700 font-semibold hover:text-purple-900">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48"></div>
                            <div className="p-6">
                                <span className="text-sm text-purple-700 font-semibold">9 Desember 2025</span>
                                <h3 className="text-xl font-bold text-purple-900 mb-3 mt-2">Tartil: Cara Membaca Al-Qur'an dengan Indah dan Benar</h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    Tartil adalah membaca Al-Qur'an dengan perlahan dan merenungkan setiap ayatnya. Metode ini tidak hanya meningkatkan pemahaman tetapi juga kekhusyukan dalam membaca.
                                </p>
                                <div className="text-sm text-gray-600 mb-4">6 menit baca</div>
                                <a href="#article6" className="text-purple-700 font-semibold hover:text-purple-900">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48"></div>
                            <div className="p-6">
                                <span className="text-sm text-purple-700 font-semibold">8 Desember 2025</span>
                                <h3 className="text-xl font-bold text-purple-900 mb-3 mt-2">Interaksi Orang Tua dalam Mendampingi Tahfidz Anak</h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    Peran orang tua sangat penting dalam mendukung program tahfidz anak. Artikel ini memberikan panduan praktis bagi orang tua dalam mendampingi anak tahfidz.
                                </p>
                                <div className="text-sm text-gray-600 mb-4">5 menit baca</div>
                                <a href="#article7" className="text-purple-700 font-semibold hover:text-purple-900">Baca Selengkapnya →</a>
                            </div>
                        </article>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="flex justify-center gap-2 mb-16">
                        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">1</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">2</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">3</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">→</button>
                    </div>
                </div>
            </section>

            {/* <!-- Subscribe Section --> */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Dapatkan Artikel Terbaru</h2>
                    <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                        Berlangganan newsletter kami untuk mendapatkan artikel-artikel baru tentang Al-Qur'an dan pembelajaran Islam langsung ke email Anda.
                    </p>
                    <div className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                            Berlangganan
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default Article