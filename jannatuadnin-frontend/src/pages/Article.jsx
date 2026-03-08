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
                <div className="absolute top-0 right-0 w-80 h-80  rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6 leading-tight">
                        Artikel & <span className="text-emerald-600">Wawasan</span>
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

                                    <a href="#article1" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-95">
                                        Baca Selengkapnya →
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Articles Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                            {/* Header Gambar dengan Gradient Emerald */}
                            <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                                    <a href="#article2" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Baca →
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                            {/* Header Gambar dengan Gradient Emerald */}
                            <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                                    <a href="#article3" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Baca →
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                            {/* Header Gambar dengan Gradient Emerald */}
                            <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                                    <a href="#article4" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Baca →
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                            {/* Header Gambar dengan Gradient Emerald */}
                            <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Konten Utama */}
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="w-fit inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                    10 Desember 2025
                                </span>

                                <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                                    Fadail Al-Qur'an: Keutamaan Mempelajari Kitab Suci
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                    Al-Qur'an adalah kalam Allah yang penuh dengan keutamaan dan keajaiban. Dalam artikel ini, kita akan mengenal berbagai fadail atau keutamaan Al-Qur'an bagi kehidupan seorang mukmin.
                                </p>

                                {/* Footer Kartu dengan Metadata */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium">7 menit baca</span>
                                    <a href="#article5" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Baca →
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                            {/* Header Gambar dengan Gradient Emerald */}
                            <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Konten Utama */}
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="w-fit inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                    9 Desember 2025
                                </span>

                                <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                                    Tartil: Cara Membaca Al-Qur'an dengan Indah dan Benar
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                    Tartil adalah membaca Al-Qur'an dengan perlahan dan merenungkan setiap ayatnya. Metode ini tidak hanya meningkatkan pemahaman tetapi juga kekhusyukan dalam membaca.
                                </p>

                                {/* Footer Kartu dengan Metadata */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium">6 menit baca</span>
                                    <a href="#article6" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Baca →
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Tambahkan flex flex-col h-full di sini */}
                        <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 flex flex-col h-full">

                            {/* Header Gambar */}
                            <div className="h-56 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden"></div>

                            {/* Konten Utama */}
                            <div className="p-8 flex flex-col flex-grow"> {/* flex-grow memastikan container ini mengisi ruang kosong */}
                                <span className="w-fit inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                    8 Desember 2025
                                </span>

                                <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                                    Interaksi Orang Tua dalam Mendampingi Tahfidz Anak
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                    Peran orang tua sangat krusial dalam mendukung program tahfidz anak...
                                </p>

                                {/* Footer Kartu - mt-auto akan mendorong elemen ini ke bawah */}
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium">5 menit baca</span>
                                    <a href="#article7" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Baca →
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="flex justify-center items-center gap-2 mb-20">
                        {/* Tombol Sebelumnya (Opsional: bisa disembunyikan jika di halaman pertama) */}
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                            ←
                        </button>

                        {/* Angka Halaman */}
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${page === 1
                                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Tombol Selanjutnya */}
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                            →
                        </button>
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