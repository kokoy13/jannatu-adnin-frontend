import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Announcement = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-40 pb-16 bg-white relative overflow-hidden">
                {/* Dekorasi tipis agar tidak terlalu polos */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

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
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-8 mb-8">
                        <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">Pengumuman Penting</span>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pendaftaran Santri Baru Dibuka untuk Tahun Ajaran 2026</h2>
                        <p className="text-gray-700 mb-6">
                            Kami dengan senang hati mengumumkan pembukaan pendaftaran santri baru untuk tahun ajaran 2026. Pendaftaran dibuka mulai tanggal 1 Februari 2026 hingga 31 Mei 2026 atau sampai kuota penuh. Bergabunglah dengan ratusan santri kami dalam menghafal Al-Qur'an.
                        </p>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                            Daftar Sekarang
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- Announcements List --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-purple-900 mb-12">Pengumuman Terbaru</h2>

                    {/* <!-- Announcement 1 --> */}
                    <article className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-purple-700 hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <span className="text-sm text-purple-700 font-semibold bg-purple-100 px-3 py-1 rounded-full">28 November 2025</span>
                                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">Kunjungan Tim Kemenag Kebumen: Verifikasi Legalitas TPQ Zawiyah Sakinah</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Jumat, 28 November 2025 menjadi hari yang penuh keberkahan bagi Zawiyah Sakinah Kebumen. Seusai pelaksanaan program pembelajaran Al-Qur'an, tim dari Kementerian Agama Kabupaten Kebumen melakukan kunjungan untuk verifikasi legalitas dan status operasional TPQ (Taman Pendidikan Al-Qur'an) Zawiyah Sakinah.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Kunjungan ini merupakan bagian dari program peningkatan kualitas lembaga pendidikan Islam di wilayah Kebumen. Tim Kemenag telah melakukan survei lengkap terhadap fasilitas, kurikulum, dan kompetensi pengajar kami. Kami sangat bersyukur karena hasil verifikasi menunjukkan bahwa Zawiyah Sakinah telah memenuhi standar yang ditetapkan.
                                </p>
                                <div className="text-sm text-gray-600">
                                    <p className="mb-2"><strong>Lokasi:</strong> Kantor Zawiyah Sakinah Kebumen</p>
                                    <p><strong>Peserta:</strong> Tim Kemenag, Pengurus & Santri Zawiyah Sakinah</p>
                                </div>
                            </div>
                            <div className="md:w-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg h-48 flex-shrink-0"></div>
                        </div>
                    </article>

                    {/* <!-- Announcement 2 --> */}
                    <article className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-purple-700 hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <span className="text-sm text-purple-700 font-semibold bg-purple-100 px-3 py-1 rounded-full">25 Oktober 2025</span>
                                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">Muktamar I Jam'iyah Zawiyah Nusantara (JAZIRA) Resmi Digelar di Gunung Kidul</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Bismillahirrahmanirrahim. Alhamdulillah, Muktamar I Jam'iyah Zawiyah Nusantara (JAZIRA) telah terlaksana pada 25 Oktober 2025 bertempat di Gunung Kidul. Muktamar ini merupakan pertemuan tahunan untuk membahas strategi pengembangan lembaga pendidikan Al-Qur'an di seluruh Indonesia.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Acara ini dihadiri oleh lebih dari 300 peserta dari berbagai daerah, termasuk pendiri, pengurus, dan guru-guru dari puluhan zawiyah di Indonesia. Diskusi yang hangat dan produktif terjadi seputar inovasi metode pembelajaran, pengembangan SDM, dan strategi pembinaan santri yang lebih efektif.
                                </p>
                                <div className="text-sm text-gray-600">
                                    <p className="mb-2"><strong>Lokasi:</strong> Auditorium Pendidikan Islam Gunung Kidul</p>
                                    <p><strong>Peserta:</strong> 300+ Pengurus Zawiyah dari Seluruh Indonesia</p>
                                </div>
                            </div>
                            <div className="md:w-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg h-48 flex-shrink-0"></div>
                        </div>
                    </article>

                    {/* <!-- Announcement 3 --> */}
                    <article className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-purple-700 hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <span className="text-sm text-purple-700 font-semibold bg-purple-100 px-3 py-1 rounded-full">9 Agustus 2025</span>
                                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">Silaturahmi Pendiri dan Pemilik Zawiyah Indonesia ke Kantor PWNU DKI Jakarta</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Pendiri Zawiyah Indonesia, KH. M. Hilmy Al Aroky, bersama para pemilik sejumlah Zawiyah di Indonesia melakukan kunjungan silaturahmi ke kantor Pengurus Wilayah Nahdlatul Ulama (PWNU) DKI Jakarta. Kunjungan ini bertujuan untuk memperkuat hubungan dan meningkatkan kolaborasi dalam bidang pendidikan Islam.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Dalam pertemuan tersebut, terjadi dialog yang sangat produktif tentang strategi pengembangan lembaga pendidikan Al-Qur'an, pembiayaan berkelanjutan, dan jaringan kemitraan. PWNU menyambut baik inisiatif ini dan menawarkan berbagai bentuk dukungan untuk pengembangan Zawiyah di masa depan.
                                </p>
                                <div className="text-sm text-gray-600">
                                    <p className="mb-2"><strong>Lokasi:</strong> Kantor PWNU DKI Jakarta</p>
                                    <p><strong>Peserta:</strong> Pimpinan Zawiyah se-Indonesia & Pengurus PWNU</p>
                                </div>
                            </div>
                            <div className="md:w-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg h-48 flex-shrink-0"></div>
                        </div>
                    </article>

                    {/* <!-- Announcement 4 --> */}
                    <article className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-purple-700 hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <span className="text-sm text-purple-700 font-semibold bg-purple-100 px-3 py-1 rounded-full">15 Juli 2025</span>
                                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">Program Beasiswa untuk Santri Berprestasi Tahun 2025 Resmi Dimulai</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Dalam rangka mendukung pendidikan Al-Qur'an dan membuka kesempatan bagi santri kurang mampu, Rumah Qur'an Zawiyah Sakinah meluncurkan Program Beasiswa untuk Santri Berprestasi Tahun 2025. Program ini diperuntukkan bagi santri yang menunjukkan komitmen tinggi dalam pembelajaran Al-Qur'an.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Beasiswa penuh mencakup biaya pendaftaran, pelatihan, dan perlengkapan belajar. Seleksi dilakukan secara objektif berdasarkan nilai akademik, hafalan Al-Qur'an, dan kondisi ekonomi keluarga. Pendaftaran dibuka hingga akhir Agustus 2025.
                                </p>
                                <div className="text-sm text-gray-600">
                                    <p className="mb-2"><strong>Target:</strong> 50 Santri Berprestasi</p>
                                    <p><strong>Nilai Beasiswa:</strong> Penuh untuk Biaya Pendidikan</p>
                                </div>
                            </div>
                            <div className="md:w-48 bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg h-48 flex-shrink-0"></div>
                        </div>
                    </article>

                    {/* <!-- Announcement 5 --> */}
                    <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-700 hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <span className="text-sm text-purple-700 font-semibold bg-purple-100 px-3 py-1 rounded-full">20 Juni 2025</span>
                                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">Khataman Al-Qur'an Bersama: Penutupan Tahun Ajaran 2024-2025</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Alhamdulillah, tahun ajaran 2024-2025 ditutup dengan pelaksanaan Khataman Al-Qur'an Bersama yang penuh berkah. Acara ini dihadiri oleh seluruh santri, pengurus, wali santri, dan masyarakat umum yang ingin turut merasakan berkah khataman Al-Qur'an.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Dalam kesempatan ini, 15 santri kami berhasil menyelesaikan hafalan 30 juz Al-Qur'an dan menerima penghargaan dari pengasuh. Acara juga diisi dengan berbagai hiburan Islami dan doa bersama untuk keberhasilan tahun ajaran berikutnya.
                                </p>
                                <div className="text-sm text-gray-600">
                                    <p className="mb-2"><strong>Hasil:</strong> 15 Penghafal Al-Qur'an Lulus</p>
                                    <p><strong>Peserta:</strong> Ribuan Santri & Masyarakat</p>
                                </div>
                            </div>
                            <div className="md:w-48 bg-gradient-to-br from-purple-300 to-purple-600 rounded-lg h-48 flex-shrink-0"></div>
                        </div>
                    </article>
                </div>
            </section>

            {/* <!-- Newsletter Section --> */}
            <section className="py-16 bg-purple-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4">Dapatkan Update Pengumuman</h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                        Langgani newsletter kami untuk mendapatkan pemberitahuan langsung tentang pengumuman terbaru dan kegiatan spesial dari Rumah Qur'an.
                    </p>
                    <div className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
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

export default Announcement