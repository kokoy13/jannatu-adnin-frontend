import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <section className="pt-35  bg-white relative overflow-hidden">
                {/* Elemen Dekoratif Background */}
                <div className="absolute top-0 right-0 w-96 h-96  rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>

                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6 leading-tight">
                        Tentang <span className="text-emerald-600">Kami</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Mengenal lebih jauh tentang perjalanan, visi, dan misi mulia Rumah Qur'an Jannatu Adnin dalam mencetak generasi penghafal Al-Qur'an.
                    </p>
                </div>
            </section>

            {/* <!-- About Content --> */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Visi Kami */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-extrabold text-gray-950">Visi Kami</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Mewujudkan lingkungan yang membawa keberkahan bagi santri dan masyarakat dengan menguatkan karakter dan spiritualitas melalui nilai-nilai Al-Qur'an yang mendalam dan berkelanjutan.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Kami percaya bahwa pendidikan Al-Qur'an adalah fondasi utama dalam membangun generasi yang saleh, berakhlak mulia, dan bermanfaat bagi umat.
                            </p>
                        </div>
                        <div className="h-80 bg-gradient-to-tr from-emerald-200 to-emerald-600 rounded-3xl shadow-lg shadow-emerald-600/20"></div>
                    </div>

                    {/* Misi Kami */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="h-80 bg-gradient-to-tr from-emerald-200 to-emerald-600 rounded-3xl shadow-lg shadow-emerald-600/20 order-2 md:order-1"></div>
                        <div className="space-y-8 order-1 md:order-2">
                            <h2 className="text-4xl font-extrabold text-gray-950">Misi Kami</h2>
                            <ul className="space-y-6 text-lg text-gray-700">

                                {/* Poin Misi 1 */}
                                <li className="flex gap-4 items-start">
                                    <span className="text-emerald-600 font-bold text-xl mt-1">✦</span>
                                    <span className="leading-relaxed">Memberikan pendidikan Al-Qur'an yang berkualitas dan komprehensif kepada santri dari berbagai latar belakang.</span>
                                </li>

                                {/* Poin Misi 2 */}
                                <li className="flex gap-4 items-start">
                                    <span className="text-emerald-600 font-bold text-xl mt-1">✦</span>
                                    <span className="leading-relaxed">Membina karakter dan akhlak mulia melalui nilai-nilai Islami yang kuat.</span>
                                </li>

                                {/* Poin Misi 3 */}
                                <li className="flex gap-4 items-start">
                                    <span className="text-emerald-600 font-bold text-xl mt-1">✦</span>
                                    <span className="leading-relaxed">Menciptakan komunitas pembelajaran yang suportif dan berkelanjutan.</span>
                                </li>

                                {/* Poin Misi 4 */}
                                <li className="flex gap-4 items-start">
                                    <span className="text-emerald-600 font-bold text-xl mt-1">✦</span>
                                    <span className="leading-relaxed">Mengembangkan potensi diri santri melalui berbagai program pembinaan.</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- History Section --> */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl font-extrabold text-gray-950 text-center mb-16">
                        Sejarah <span className="text-emerald-600">Kami</span>
                    </h2>

                    <div className="space-y-8">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Rumah Qur'an Jannatu Adnin didirikan dengan visi untuk membangun pusat pembelajaran Al-Qur'an yang modern namun tetap memegang teguh nilai-nilai tradisional Islam. Perjalanan kami dimulai dari mimpi sederhana untuk memberikan akses pendidikan Al-Qur'an yang berkualitas kepada masyarakat luas.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Sejak didirikan, kami telah berkembang menjadi lembaga pendidikan Islam yang dipercaya oleh ribuan santri dan keluarganya. Komitmen kami adalah terus berinovasi dalam metode pembelajaran sambil mempertahankan keaslian ajaran Al-Qur'an dan Hadits.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
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