const LatestNews = () =>{
    return(
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
    )
}

export default LatestNews