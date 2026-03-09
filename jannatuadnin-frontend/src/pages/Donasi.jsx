import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import donasi from "../assets/img/donasi.jpg";

export default function Donasi() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Container utama dengan padding atas yang cukup */}
            <main className="max-w-6xl mx-auto py-20 px-6">

                {/* Header Section */}
                <div className="pt-20 text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6">
                        Bantuan & <span className="text-emerald-600">Donasi</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Setiap donasi Anda adalah investasi jariyah yang akan membantu orang yang membutuhkan
                    </p>
                </div>

                {/* Layout Utama: Grid 2 Kolom */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* KOLOM KIRI: Kartu Bank (Menumpuk) */}
                    <div className="space-y-6">
                        {/* Kartu BSI */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-300 shadow-lg hover:shadow-md transition-all">
                            <div className="w-16 h-12 bg-emerald-50 rounded-lg mb-6 flex items-center justify-center font-bold text-emerald-700">
                                BSI
                            </div>
                            <h3 className="text-xl font-bold mb-2">Bank Syariah Indonesia</h3>
                            <p className="text-gray-500 mb-6">Atas nama: Yayasan Tahfidz [Nama Anda]</p>
                            <div className="bg-green-50 p-4 rounded-xl text-center border border-gray-100">
                                <span className="text-2xl font-mono font-bold text-green-800 tracking-wider">7788-9900-11</span>
                            </div>
                        </div>

                        {/* Kartu BCA */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-300 shadow-lg hover:shadow-md transition-all">
                            <div className="w-16 h-12 bg-emerald-50 rounded-lg mb-6 flex items-center justify-center font-bold text-emerald-700">
                                BCA
                            </div>
                            <h3 className="text-xl font-bold mb-2">Bank Central Asia</h3>
                            <p className="text-gray-500 mb-6">Atas nama: Yayasan Tahfidz [Nama Anda]</p>
                            <div className="bg-green-50 p-4 rounded-xl text-center border border-gray-100">
                                <span className="text-2xl font-mono font-bold text-green-800 tracking-wider">1234-5678-90</span>
                            </div>
                        </div>
                    </div>

                    {/* KOLOM KANAN: Gambar (Sticky) */}
                    <div className="sticky top-24">
                        <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-300">
                            <img
                                src={donasi}
                                alt="Visualisasi Donasi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}