import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Announcement = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-35  bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Pengumuman & Berita
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Temukan informasi terkini, kegiatan santri, dan perkembangan terbaru dari
                        <span className="font-semibold text-gray-800"> Rumah Qur'an Jannatu Adnin</span>.
                    </p>
                </div>
            </section>

            {/* <!-- Featured Announcement --> */}
            <section className="py-15 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-4xl shadow-green-950/5 transition-all duration-500 hover:shadow-2xl hover:shadow-green-950/10 hover:-translate-y-2">

                        <div className="flex flex-col md:flex-row gap-8 items-start">

                            {/* Konten Teks */}
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-green-600 font-bold text-xs tracking-widest uppercase">
                                        Pengumuman Penting
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-6 leading-tight">
                                    Pendaftaran Santri Baru Dibuka untuk Tahun Ajaran 2026
                                </h2>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Kami dengan senang hati mengumumkan pembukaan pendaftaran santri baru untuk tahun ajaran 2026.
                                    Pendaftaran dibuka mulai 1 Februari hingga 31 Mei 2026. Mari bergabung bersama kami dalam
                                    perjalanan menghafal dan memahami Al-Qur'an dengan metode yang mudah dan benar.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-95">
                                        Daftar Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Announcements List --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-black text-center mb-12">Pengumuman Terbaru</h2>

                    {/* <!-- Announcement 1 --> */}
                    <article className="group bg-white rounded-3xl border border-gray-100 p-8 mb-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Konten Teks */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                                        28 November 2025
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-emerald-600 transition-colors">
                                    Kunjungan Tim Kemenag Kebumen: Verifikasi Legalitas TPQ Zawiyah Sakinah
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Jumat, 28 November 2025 menjadi hari yang penuh keberkahan bagi Zawiyah Sakinah Kebumen. Seusai pelaksanaan program pembelajaran Al-Qur'an, tim dari Kementerian Agama Kabupaten Kebumen melakukan kunjungan untuk verifikasi legalitas dan status operasional TPQ.
                                </p>

                                {/* Meta Info Box */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Lokasi</p>
                                        <p className="text-sm font-semibold text-gray-800">Kantor Zawiyah Sakinah</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Peserta</p>
                                        <p className="text-sm font-semibold text-gray-800">Tim Kemenag & Pengurus</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder (Profesional & Aesthetic) */}
                            <div className="md:w-72 h-64 md:h-auto bg-gradient-to-tr from-emerald-100 to-green-200 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                                {/* Anda bisa menambahkan tag <img> di sini nantinya */}
                                <span className="text-emerald-700/50 font-medium text-sm">Foto Kegiatan</span>
                            </div>

                        </div>
                    </article>

                    {/* <!-- Announcement 2 --> */}
                    <article className="group bg-white rounded-3xl border border-gray-100 p-8 mb-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Konten Teks */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                                        25 Oktober 2025
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-emerald-600 transition-colors">
                                    Muktamar I Jam'iyah Zawiyah Nusantara (JAZIRA) Resmi Digelar di Gunung Kidul
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Bismillahirrahmanirrahim. Alhamdulillah, Muktamar I Jam'iyah Zawiyah Nusantara (JAZIRA) telah terlaksana dengan sukses. Pertemuan tahunan ini menjadi wadah strategis untuk membahas inovasi metode pembelajaran dan pengembangan SDM di seluruh zawiyah Indonesia.
                                </p>

                                {/* Meta Info Box */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Lokasi</p>
                                        <p className="text-sm font-semibold text-gray-800">Auditorium Pendidikan Gunung Kidul</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Peserta</p>
                                        <p className="text-sm font-semibold text-gray-800">300+ Pengurus Zawiyah</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="md:w-72 h-64 md:h-auto bg-gradient-to-tr from-emerald-200 to-emerald-400 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <span className="text-emerald-900/40 font-medium text-sm">Foto Muktamar</span>
                            </div>

                        </div>
                    </article>

                    {/* <!-- Announcement 3 --> */}
                    <article className="group bg-white rounded-3xl border border-gray-100 p-8 mb-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Konten Teks */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                                        9 Agustus 2025
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-emerald-600 transition-colors">
                                    Silaturahmi Pendiri Zawiyah Indonesia ke Kantor PWNU DKI Jakarta
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Pendiri Zawiyah Indonesia, KH. M. Hilmy Al Aroky, melakukan kunjungan silaturahmi strategis ke kantor PWNU DKI Jakarta. Pertemuan ini difokuskan untuk memperkuat hubungan dan meningkatkan kolaborasi dalam memajukan pendidikan Islam di Indonesia.
                                </p>

                                {/* Meta Info Box */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Lokasi</p>
                                        <p className="text-sm font-semibold text-gray-800">Kantor PWNU DKI Jakarta</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Peserta</p>
                                        <p className="text-sm font-semibold text-gray-800">Pimpinan Zawiyah & Pengurus PWNU</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="md:w-72 h-64 md:h-auto bg-gradient-to-tr from-emerald-300 to-emerald-600 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <span className="text-white/70 font-medium text-sm">Foto Silaturahmi</span>
                            </div>

                        </div>
                    </article>

                    {/* <!-- Announcement 4 --> */}
                    <article className="group bg-white rounded-3xl border border-gray-100 p-8 mb-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Konten Teks */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                                        15 Juli 2025
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-emerald-600 transition-colors">
                                    Program Beasiswa Santri Berprestasi 2025 Resmi Dibuka
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Dalam rangka mendukung pendidikan Al-Qur'an dan membuka peluang bagi santri berpotensi, kami meluncurkan program beasiswa penuh. Program ini mencakup biaya pendaftaran, pelatihan intensif, dan perlengkapan belajar bagi santri yang terpilih secara objektif.
                                </p>

                                {/* Meta Info Box */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Target Kuota</p>
                                        <p className="text-sm font-semibold text-gray-800">50 Santri Berprestasi</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Cakupan Beasiswa</p>
                                        <p className="text-sm font-semibold text-gray-800">Penuh (Full Scholarship)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="md:w-72 h-64 md:h-auto bg-gradient-to-tr from-emerald-200 to-emerald-500 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <span className="text-white/70 font-medium text-sm">Beasiswa 2025</span>
                            </div>

                        </div>
                    </article>

                    {/* <!-- Announcement 5 --> */}
                    {/* */}
                    <article className="group bg-white rounded-3xl border border-gray-100 p-8 mb-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Konten Teks */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full">
                                        20 Juni 2025
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-emerald-600 transition-colors">
                                    Khataman Al-Qur'an Bersama: Penutupan Tahun Ajaran 2024-2025
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Tahun ajaran 2024-2025 ditutup dengan pelaksanaan Khataman Al-Qur'an yang penuh keberkahan. Sebanyak 15 santri telah berhasil menyelesaikan hafalan 30 juz Al-Qur'an, sebuah pencapaian luar biasa yang dirayakan bersama seluruh wali santri dan masyarakat umum.
                                </p>

                                {/* Meta Info Box */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Capaian</p>
                                        <p className="text-sm font-semibold text-gray-800">15 Penghafal 30 Juz Lulus</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Peserta</p>
                                        <p className="text-sm font-semibold text-gray-800">Ribuan Santri & Masyarakat</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="md:w-72 h-64 md:h-auto bg-gradient-to-tr from-emerald-200 to-emerald-600 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <span className="text-white/70 font-medium text-sm">Foto Khataman</span>
                            </div>

                        </div>
                    </article>
                </div>
            </section>


            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default Announcement