import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () =>{
    return(
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white islamic-pattern">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-purple-900 mb-6">Tentang Kami</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Mengenal lebih jauh tentang Rumah Qur'an - Zawiyah Sakinah dan misi kami
                    </p>
                </div>
            </section>

            {/* <!-- About Content --> */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-4xl font-bold text-purple-900 mb-6">Visi Kami</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Mewujudkan lingkungan yang membawa keberkahan bagi santri dan masyarakat dengan menguatkan karakter dan spiritualitas melalui nilai-nilai Al-Qur'an yang mendalam dan berkelanjutan.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Kami percaya bahwa pendidikan Al-Qur'an adalah fondasi utama dalam membangun generasi yang saleh, berakhlak mulia, dan bermanfaat bagi umat.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg h-80"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg h-80"></div>
                        <div>
                            <h2 className="text-4xl font-bold text-purple-900 mb-6">Misi Kami</h2>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex gap-4">
                                    <span className="text-purple-700 font-bold text-2xl">✓</span>
                                    <span>Memberikan pendidikan Al-Qur'an yang berkualitas dan komprehensif kepada santri dari berbagai latar belakang</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-purple-700 font-bold text-2xl">✓</span>
                                    <span>Membina karakter dan akhlak mulia melalui nilai-nilai Islami yang kuat</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-purple-700 font-bold text-2xl">✓</span>
                                    <span>Menciptakan komunitas pembelajaran yang suportif dan berkelanjutan</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-purple-700 font-bold text-2xl">✓</span>
                                    <span>Mengembangkan potensi diri santri melalui berbagai program pembinaan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- History Section --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Sejarah Kami</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Rumah Qur'an - Zawiyah Sakinah didirikan dengan visi untuk membangun pusat pembelajaran Al-Qur'an yang modern namun tetap memegang teguh nilai-nilai tradisional Islam. Perjalanan kami dimulai dari mimpi sederhana untuk memberikan akses pendidikan Al-Qur'an yang berkualitas kepada masyarakat luas.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Sejak didirikan, kami telah berkembang menjadi lembaga pendidikan Islam yang dipercaya oleh ribuan santri dan keluarganya. Komitmen kami adalah terus berinovasi dalam metode pembelajaran sambil mempertahankan keaslian ajaran Al-Qur'an dan Hadits.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Hingga saat ini, kami terus memperluas jaringan dan kemitraan dengan institusi pendidikan Islam lainnya untuk memperkuat gerakan pendidikan Al-Qur'an di nusantara.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- Values Section --> */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Nilai-Nilai Kami</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-purple-200">
                            <div className="text-4xl mb-4">📖</div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Tauhid</h3>
                            <p className="text-gray-700">Memperkuat keyakinan kepada Allah dan memahami keesaan Tuhan melalui Al-Qur'an.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-purple-200">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Kekeluargaan</h3>
                            <p className="text-gray-700">Membangun hubungan yang erat dan saling mendukung antar santri, pengurus, dan komunitas.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-purple-200">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Integritas</h3>
                            <p className="text-gray-700">Berkomitmen pada kejujuran, keterbukaan, dan konsistensi dalam setiap tindakan.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-purple-200">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Pertumbuhan</h3>
                            <p className="text-gray-700">Mendorong pengembangan diri santri secara berkelanjutan dan melampaui ekspektasi.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-purple-200">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Keunggulan</h3>
                            <p className="text-gray-700">Berusaha memberikan yang terbaik dalam setiap aspek pembelajaran dan pengajaran.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-purple-200">
                            <div className="text-4xl mb-4">🤲</div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Keberkahan</h3>
                            <p className="text-gray-700">Mengedepankan niat tulus untuk mendapatkan berkah dari setiap usaha dan kerja keras.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Team Section --> */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Tim Pengurus</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-24 h-24 mx-auto rounded-full mb-4"></div>
                            <h3 className="text-xl font-bold text-purple-900 mb-2">Ketua</h3>
                            <p className="text-gray-700 mb-2">KH. Ahmad Hanafi</p>
                            <p className="text-sm text-gray-600">Pengasuh Rumah Qur'an</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-24 h-24 mx-auto rounded-full mb-4"></div>
                            <h3 className="text-xl font-bold text-purple-900 mb-2">Wakil Ketua</h3>
                            <p className="text-gray-700 mb-2">Ustadz Mukhtar Bahri</p>
                            <p className="text-sm text-gray-600">Koordinator Program</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-24 h-24 mx-auto rounded-full mb-4"></div>
                            <h3 className="text-xl font-bold text-purple-900 mb-2">Sekretaris</h3>
                            <p className="text-gray-700 mb-2">Ustadzah Siti Nurhaliza</p>
                            <p className="text-sm text-gray-600">Administrasi & Dokumen</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-24 h-24 mx-auto rounded-full mb-4"></div>
                            <h3 className="text-xl font-bold text-purple-900 mb-2">Bendahara</h3>
                            <p className="text-gray-700 mb-2">Ustadz Bambang Sutrisno</p>
                            <p className="text-sm text-gray-600">Pengelola Keuangan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default About