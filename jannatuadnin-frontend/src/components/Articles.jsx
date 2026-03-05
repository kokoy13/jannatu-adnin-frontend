const Articles = () =>{
    return(
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
    )
}

export default Articles