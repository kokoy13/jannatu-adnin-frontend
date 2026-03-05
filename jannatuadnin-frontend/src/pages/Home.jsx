import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () =>{
    return(
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-24 pb-20 bg-gradient-to-b from-[#0e867b]to-white islamic-pattern">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-[#0e867b] mb-6">RUMAH TAHFIDZ QURAN ZAWIYAH SAKINAH</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Mewujudkan Lingkungan Yang Membawa Keberkahan Bagi Santri Dan Masyrakat Dengan Menguatkan Karakter Dan Spiritualitas Melalui Nilai-Nilai Al-Qur'an
                    </p>
                    <button className="bg-[#0e867b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e867b] transition">
                        Daftar Sekarang
                    </button>
                </div>
            </section>

            {/* <!-- Program Section --> */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-[#0e867b] mb-12">Program Al Qur'an Journey</h2>
                    <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                        Secara harfiah, 'Al-Qur'an Journey' sebuah perjalanan spiritual dan intelektual yang dilalui oleh Santri dan Masyarakat dalam memahami, menghayati, dan mengamalkan ajaran-ajaran Al-Qur'an dan Hadits. Program ini bertujuan untuk membantu peserta merasakan kehadiran Al-Qur'an dalam kehidupan sehari-hari.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gradient-to-br from-[#0e867b]to-[#0e867b] p-6 rounded-lg border-l-4 border-[#0e867b]">
                            <h3 className="font-semibold text-[#0e867b] mb-3 text-lg">Majelis Khataman Al-Quran</h3>
                            <p className="text-gray-700">Program khataman Al-Qur'an bersama dengan komunitas dan santri.</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#0e867b]to-[#0e867b] p-6 rounded-lg border-l-4 border-[#0e867b]">
                            <h3 className="font-semibold text-[#0e867b] mb-3 text-lg">Kelas Tafsir Al-Qur'an</h3>
                            <p className="text-gray-700">Pembelajaran mendalam tentang tafsir dan makna Al-Qur'an.</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#0e867b]to-[#0e867b] p-6 rounded-lg border-l-4 border-[#0e867b]">
                            <h3 className="font-semibold text-[#0e867b] mb-3 text-lg">Kajian Tematik</h3>
                            <p className="text-gray-700">Kajian tematik sesuai dengan kebutuhan dan kondisi sosial.</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#0e867b]to-[#0e867b] p-6 rounded-lg border-l-4 border-[#0e867b]">
                            <h3 className="font-semibold text-[#0e867b] mb-3 text-lg">Majelis Zikir dan Doa Bersama</h3>
                            <p className="text-gray-700">Majlis doa dan zikir untuk memperkuat spiritualitas.</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#0e867b]to-[#0e867b] p-6 rounded-lg border-l-4 border-[#0e867b]">
                            <h3 className="font-semibold text-[#0e867b] mb-3 text-lg">Workshop Pengembangan Diri</h3>
                            <p className="text-gray-700">Workshop untuk mengembangkan potensi diri santri.</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#0e867b]to-[#0e867b] p-6 rounded-lg border-l-4 border-[#0e867b]">
                            <h3 className="font-semibold text-[#0e867b] mb-3 text-lg">Mentoring & Bimbingan</h3>
                            <p className="text-gray-700">Bimbingan personal untuk mencapai target pembelajaran.</p>
                        </div>
                    </div>

                    {/* <!-- Statistics --> */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-[#0e867b] text-white p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold mb-2">250+</div>
                            <div className="text-sm">Jumlah Santri</div>
                        </div>
                        <div className="bg-[#0e867b] text-white p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold mb-2">45</div>
                            <div className="text-sm">Jumlah Pengurus</div>
                        </div>
                        <div className="bg-[#0e867b] text-white p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold mb-2">15+</div>
                            <div className="text-sm">Program Aktif</div>
                        </div>
                        <div className="bg-[#0e867b] text-white p-8 rounded-lg text-center">
                            <div className="text-4xl font-bold mb-2">8</div>
                            <div className="text-sm">Tahun Berdiri</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Latest News Section --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-[#0e867b] mb-12">Sepekan Rumah Qur'an</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-[#0e867b] to-[#0e867b] p-4 text-white">
                                <span className="text-sm">28 November 2025</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#0e867b] mb-3">Kunjungan Tim Kemenag Kebumen</h3>
                                <p className="text-gray-700 mb-4">Verifikasi Legalitas TPQ Zawiyah Sakinah. Jumat, 28 November 2025 menjadi hari yang penuh keberkahan bagi Zawiyah Sakinah Kebumen.</p>
                                <a href="announcement.html" className="text-[#0e867b] font-semibold hover:text-[#0e867b]">Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-[#0e867b] to-[#0e867b] p-4 text-white">
                                <span className="text-sm">25 Oktober 2025</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#0e867b] mb-3">Muktamar I JAZIRA</h3>
                                <p className="text-gray-700 mb-4">Muktamar I Jam'iyah Zawiyah Nusantara (JAZIRA) telah terlaksana pada 25 Oktober 2025 bertempat di Gunung Kidul.</p>
                                <a href="announcement.html" className="text-[#0e867b] font-semibold hover:text-[#0e867b]">Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-[#0e867b] to-[#0e867b] p-4 text-white">
                                <span className="text-sm">9 Agustus 2025</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#0e867b] mb-3">Silaturahmi ke PWNU DKI Jakarta</h3>
                                <p className="text-gray-700 mb-4">Pendiri Zawiyah Indonesia berkunjung ke kantor PWNU DKI Jakarta untuk memperkuat jaringan.</p>
                                <a href="announcement.html" className="text-[#0e867b] font-semibold hover:text-[#0e867b]">Selengkapnya →</a>
                            </div>
                        </article>
                    </div>

                    <div className="text-center">
                        <a href="announcement.html" className="bg-[#0e867b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e867b] transition inline-block">
                            Lihat Semua Pengumuman →
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- Articles Preview --> */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-[#0e867b] mb-12">Artikel Terbaru</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-[#0e867b] to-[#0e867b] h-40"></div>
                            <div className="p-6">
                                <span className="text-sm text-[#0e867b] font-semibold">12 Desember 2025</span>
                                <h3 className="text-xl font-semibold text-[#0e867b] mb-3 mt-2">Sejarah Turunnya Al-Qur'an: Dari Gua Hira hingga Generasi Muslim Kini</h3>
                                <p className="text-gray-700 mb-4">Al-Qur'an adalah kitab suci umat Islam yang menjadi pedoman hidup dalam berbagai aspek kehidupan.</p>
                                <a href="articles.html" className="text-[#0e867b] font-semibold hover:text-[#0e867b]">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-[#0e867b] to-[#0e867b] h-40"></div>
                            <div className="p-6">
                                <span className="text-sm text-[#0e867b] font-semibold">12 Desember 2025</span>
                                <h3 className="text-xl font-semibold text-[#0e867b] mb-3 mt-2">Metode Menghafal Al-Qur'an yang Efektif untuk Santri Pemula</h3>
                                <p className="text-gray-700 mb-4">Menghafal Al-Qur'an adalah salah satu amalan paling mulia dalam Islam yang memerlukan metode tepat.</p>
                                <a href="articles.html" className="text-[#0e867b] font-semibold hover:text-[#0e867b]">Baca Selengkapnya →</a>
                            </div>
                        </article>

                        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="bg-gradient-to-r from-[#0e867b] to-[#0e867b] h-40"></div>
                            <div className="p-6">
                                <span className="text-sm text-[#0e867b] font-semibold">12 Desember 2025</span>
                                <h3 className="text-xl font-semibold text-[#0e867b] mb-3 mt-2">Mengapa Surat Yasin Disebut Qalb Qur'an? Ini Penjelasannya</h3>
                                <p className="text-gray-700 mb-4">Surat Yasin adalah salah satu surat yang paling dikenal dan memiliki keistimewaan tersendiri dalam Al-Qur'an.</p>
                                <a href="articles.html" className="text-[#0e867b] font-semibold hover:text-[#0e867b]">Baca Selengkapnya →</a>
                            </div>
                        </article>
                    </div>

                    <div className="text-center">
                        <a href="articles.html" className="bg-[#0e867b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e867b] transition inline-block">
                            Lihat Semua Artikel →
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default Home