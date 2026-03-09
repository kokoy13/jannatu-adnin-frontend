import { Link } from 'react-router-dom';

const LatestNews = () => {
    // Anda bisa mengganti ini dengan data dari file terpisah jika ingin lebih dinamis
    const pengumuman = [
        { id: 1, tgl: "28 Nov 2025", judul: "Kunjungan Tim Kemenag Kebumen", isi: "Verifikasi Legalitas TPQ Zawiyah Sakinah. Jumat, 28 November 2025 menjadi hari yang penuh keberkahan." },
        { id: 2, tgl: "25 Okt 2025", judul: "Muktamar I JAZIRA", isi: "Muktamar I Jam'iyah Zawiyah Nusantara (JAZIRA) telah terlaksana pada 25 Oktober 2025 bertempat di Gunung Kidul." },
        { id: 3, tgl: "9 Agt 2025", judul: "Silaturahmi ke PWNU DKI Jakarta", isi: "Pendiri Zawiyah Indonesia berkunjung ke kantor PWNU DKI Jakarta untuk memperkuat jaringan." }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-center text-gray-950 mb-4">Pengumuman</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-15">
                    Proses pembelajaran Al-Qur'an yang dilakukan secara bertahap
                    agar santri memahami bacaan dengan benar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {pengumuman.map((item) => (
                        <article key={item.id} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
                            {/* Header Tanggal */}
                            <div className="bg-green-600 p-6 text-white">
                                <span className="text-sm font-bold uppercase tracking-wider">{item.tgl}</span>
                            </div>

                            {/* Konten */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-950 mb-4 leading-snug">
                                    {item.judul}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {item.isi}
                                </p>
                                <Link to="/pengumuman" className="text-emerald-600 font-bold text-sm hover:gap-2 transition-all">
                                    Selengkapnya →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/pengumuman"
                        className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 inline-block hover:-translate-y-1"
                    >
                        Lihat Semua Pengumuman →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;