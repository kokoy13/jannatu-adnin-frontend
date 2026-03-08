import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import visi from "../assets/img/visi.jpg"
import misi from "../assets/img/misi.jpg"

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
                        <div className="h-80 bg-gradient-to-tr from-emerald-200 to-emerald-600 rounded-3xl shadow-lg shadow-emerald-600/20 overflow-hidden">
                            <img src={visi} alt="visi kami" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Misi Kami */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="h-80 bg-gradient-to-tr from-emerald-200 to-emerald-600 rounded-3xl shadow-lg shadow-emerald-600/20 order-2 md:order-1 overflow-hidden">
                            <img src={misi} alt="misi kami" className="w-full h-full object-cover" />
                        </div>
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
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 text-center mb-16">
                        Nilai-Nilai <span className="text-emerald-600">Kami</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Tauhid */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="text-4xl mb-6">📖</div>
                            <h3 className="text-xl font-bold text-gray-950 mb-3">Tauhid</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">Memperkuat keyakinan kepada Allah dan memahami keesaan Tuhan melalui Al-Qur'an.</p>
                        </div>

                        {/* Kekeluargaan */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="text-4xl mb-6">🤝</div>
                            <h3 className="text-xl font-bold text-gray-950 mb-3">Kekeluargaan</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">Membangun hubungan yang erat dan saling mendukung antar santri, pengurus, dan komunitas.</p>
                        </div>

                        {/* Integritas */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="text-4xl mb-6">✨</div>
                            <h3 className="text-xl font-bold text-gray-950 mb-3">Integritas</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">Berkomitmen pada kejujuran, keterbukaan, dan konsistensi dalam setiap tindakan.</p>
                        </div>

                        {/* Pertumbuhan */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="text-4xl mb-6">🌱</div>
                            <h3 className="text-xl font-bold text-gray-950 mb-3">Pertumbuhan</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">Mendorong pengembangan diri santri secara berkelanjutan dan melampaui ekspektasi.</p>
                        </div>

                        {/* Keunggulan */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="text-4xl mb-6">🎯</div>
                            <h3 className="text-xl font-bold text-gray-950 mb-3">Keunggulan</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">Berusaha memberikan yang terbaik dalam setiap aspek pembelajaran dan pengajaran.</p>
                        </div>

                        {/* Keberkahan */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="text-4xl mb-6">🤲</div>
                            <h3 className="text-xl font-bold text-gray-950 mb-3">Keberkahan</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">Mengedepankan niat tulus untuk mendapatkan berkah dari setiap usaha dan kerja keras.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Team Section --> */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 text-center mb-16">
                        Tim <span className="text-emerald-600">Pengurus</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Contoh 1: Ketua */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full mb-6 flex items-center justify-center text-emerald-600 font-bold text-2xl">KH</div>
                            <h3 className="text-lg font-bold text-gray-950 mb-1">Ketua</h3>
                            <p className="text-emerald-600 font-medium mb-3">KH. Ahmad Hanafi</p>

                            {/* mt-auto akan mendorong elemen ini ke bawah */}
                            <p className="mt-auto text-sm text-gray-500 italic">Pengasuh Rumah Qur'an</p>
                        </div>

                        {/* Contoh 2: Wakil Ketua */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full mb-6 flex items-center justify-center text-emerald-600 font-bold text-2xl">UM</div>
                            <h3 className="text-lg font-bold text-gray-950 mb-1">Wakil Ketua</h3>
                            <p className="text-emerald-600 font-medium mb-3">Ustadz Mukhtar Bahri</p>

                            <p className="mt-auto text-sm text-gray-500 italic">Koordinator Program</p>
                        </div>

                        {/* Contoh 3: Sekretaris */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full mb-6 flex items-center justify-center text-emerald-600 font-bold text-2xl">SN</div>
                            <h3 className="text-lg font-bold text-gray-950 mb-1">Sekretaris</h3>
                            <p className="text-emerald-600 font-medium mb-3">Ustadzah Siti Nurhaliza</p>

                            <p className="mt-auto text-sm text-gray-500 italic">Administrasi & Dokumen</p>
                        </div>

                        {/* Contoh 4: Bendahara */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-2 hover:border-emerald-100">
                            <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full mb-6 flex items-center justify-center text-emerald-600 font-bold text-2xl">UB</div>
                            <h3 className="text-lg font-bold text-gray-950 mb-1">Bendahara</h3>
                            <p className="text-emerald-600 font-medium mb-3">Ustadz Bambang Sutrisno</p>

                            <p className="mt-auto text-sm text-gray-500 italic">Pengelola Keuangan</p>
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