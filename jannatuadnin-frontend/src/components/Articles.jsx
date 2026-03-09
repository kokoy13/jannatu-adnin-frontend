import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import arti1 from "../assets/img/arti1.jpg"
import arti2 from "../assets/img/arti2.jpg"
import arti3 from "../assets/img/arti3.jpg"
import arti4 from "../assets/img/arti4.jpg"
import arti5 from "../assets/img/arti5.jpg"
import arti6 from "../assets/img/arti6.jpg"
import arti7 from "../assets/img/arti7.jpg"
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-center text-black mb-4">Artikel</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-15">
                    Proses pembelajaran Al-Qur'an yang dilakukan secara bertahap
                    agar santri memahami bacaan dengan benar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <article className="group bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                        {/* Header Gambar dengan Gradient Emerald */}
                        <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/5  transition-opacity">
                                <img
                                    src={arti2}
                                    alt="Foto Kegiatan"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Konten Utama */}
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="w-fit inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                12 Desember 2025
                            </span>

                            <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                                Metode Menghafal Al-Qur'an yang Efektif untuk Santri Pemula
                            </h3>

                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                Menghafal Al-Qur'an adalah salah satu amalan paling mulia dalam Islam. Dalam artikel ini, kami akan membahas berbagai metode efektif yang terbukti membantu santri pemula dalam perjalanan tahfidz mereka.
                            </p>

                            {/* Footer Kartu dengan Metadata */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                <span className="text-xs text-gray-400 font-medium">5 menit baca</span>
                                <Link
                                    to="/artikel/2"
                                    className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Baca →
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="group bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                        {/* Header Gambar dengan Gradient Emerald */}
                        <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/5  transition-opacity">
                                <img
                                    src={arti3}
                                    alt="Foto Kegiatan"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Konten Utama */}
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="w-fit inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                12 Desember 2025
                            </span>

                            <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                                Mengapa Surat Yasin Disebut Qalb Qur'an? Ini Penjelasannya
                            </h3>

                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                Surat Yasin memiliki kedudukan istimewa dalam Al-Qur'an. Keistimewaan ini tercermin dari julukan "Qalb Qur'an" atau hati dari Al-Qur'an yang sering disandangnya.
                            </p>

                            {/* Footer Kartu dengan Metadata */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                <span className="text-xs text-gray-400 font-medium">6 menit baca</span>
                                <Link
                                    to="/artikel/3"
                                    className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Baca →
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="group bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                        {/* Header Gambar dengan Gradient Emerald */}
                        <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/5  transition-opacity">
                                <img
                                    src={arti4}
                                    alt="Foto Kegiatan"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Konten Utama */}
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="w-fit inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                11 Desember 2025
                            </span>

                            <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                                Etika Bertanya Dalam Pembelajaran Al-Qur'an
                            </h3>

                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                Bertanya adalah metode pembelajaran yang sangat dianjurkan dalam Islam. Artikel ini membahas etika dan cara yang tepat dalam bertanya selama pembelajaran Al-Qur'an agar lebih produktif dan beradab.
                            </p>

                            {/* Footer Kartu dengan Metadata */}
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                <span className="text-xs text-gray-400 font-medium">4 menit baca</span>
                                <Link
                                    to="/artikel/4"
                                    className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Baca →
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="text-center">
                    <Link
                        to="/artikel"
                        className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 inline-block hover:-translate-y-1"
                    >
                        Lihat Semua Artikel →
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Articles