import { useParams, Link } from 'react-router-dom'; // 1. Pastikan Link diimpor
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import arti1 from "../assets/img/arti1.jpg"
import arti2 from "../assets/img/arti2.jpg"
import arti3 from "../assets/img/arti3.jpg"
import arti4 from "../assets/img/arti4.jpg"
import arti5 from "../assets/img/arti5.jpg"
import arti6 from "../assets/img/arti6.jpg"
import arti7 from "../assets/img/arti7.jpg"

const dataArtikel = {
  1: { 
    judul: "Sejarah Turunnya Al-Qur'an: Dari Gua Hira hingga Generasi Muslim Kini", 
    tanggal: "12 Desember 2025", 
    isi: "Al-Qur'an diturunkan sebagai petunjuk bagi umat manusia. Peristiwa pertama terjadi di Gua Hira saat Malaikat Jibril menyampaikan wahyu pertama, yaitu Surat Al-'Alaq ayat 1-5. Proses turunnya Al-Qur'an berlangsung secara berangsur-angsur selama kurang lebih 23 tahun. Wahyu ini kemudian dicatat oleh para sahabat di pelepah kurma, batu, dan tulang, sebelum akhirnya dibukukan pada masa Khalifah Abu Bakar Ash-Shiddiq. Hingga hari ini, Al-Qur'an tetap terjaga keasliannya dan menjadi pedoman utama umat Muslim dalam mengarungi kehidupan yang penuh tantangan ini.", 
    img: arti1 
  },
  2: { 
    judul: "Metode Menghafal Al-Qur'an yang Efektif untuk Santri Pemula", 
    tanggal: "12 Desember 2025", 
    isi: "Banyak santri pemula merasa kesulitan saat memulai hafalan. Kunci utamanya bukanlah seberapa cepat kita menghafal, melainkan seberapa konsisten kita mengulanginya (muraja'ah). Metode yang sangat efektif adalah dengan membagi satu halaman menjadi beberapa bagian kecil, misalnya per dua atau tiga ayat. Dengarkan pelafalan guru atau murottal secara berulang sebelum mencoba melafalkannya sendiri. Selain itu, niat yang tulus dan lingkungan yang mendukung sangat berpengaruh terhadap kelancaran hafalan seorang santri.", 
    img: arti2 
  },
  3: { 
    judul: "Mengapa Surat Yasin Disebut Qalb Qur'an? Ini Penjelasannya", 
    tanggal: "12 Desember 2025", 
    isi: "Surat Yasin sering dibaca dalam berbagai kesempatan oleh umat Muslim karena keutamaan yang terkandung di dalamnya. Rasulullah SAW menyebutnya sebagai 'Qalb Qur'an' atau jantung dari Al-Qur'an. Hal ini dikarenakan surat ini mengandung pokok-pokok ajaran Islam, mulai dari akidah, kebangkitan setelah mati, hingga kisah para nabi terdahulu. Mempelajari dan memahami isi Surat Yasin bukan sekadar membaca tekstualnya saja, melainkan meresapi pesan tauhid yang terkandung di setiap ayatnya agar tertanam kuat di dalam hati.", 
    img: arti3 
  },
  4: { 
    judul: "Etika Bertanya Dalam Pembelajaran Al-Qur'an", 
    tanggal: "11 Desember 2025", 
    isi: "Dalam menuntut ilmu, terutama ilmu agama, etika adalah hal yang paling utama. Bertanya merupakan cara untuk memecahkan kebuntuan pemahaman, namun harus dilakukan dengan adab yang baik. Seorang santri hendaknya menunggu waktu yang tepat, menggunakan bahasa yang sopan, dan menunjukkan rasa hormat kepada pengajar. Bertanya bukan untuk mendebat atau menunjukkan keunggulan diri, melainkan murni untuk mencari kebenaran dan memperbaiki kualitas bacaan maupun pemahaman ayat-ayat suci Al-Qur'an.", 
    img: arti4 
  },
  5: { 
    judul: "Fadail Al-Qur'an: Keutamaan Mempelajari Kitab Suci", 
    tanggal: "10 Desember 2025", 
    isi: "Mempelajari Al-Qur'an adalah investasi terbaik seorang mukmin. Fadail atau keutamaan Al-Qur'an sangatlah luas; ia memberikan syafaat bagi pembacanya di hari kiamat, menenangkan hati yang gundah, serta meningkatkan derajat seseorang di sisi Allah SWT. Setiap huruf yang dibaca memiliki nilai pahala yang berlipat ganda. Mengkaji tafsirnya akan membuka cakrawala berpikir yang jauh lebih luas tentang penciptaan alam semesta dan tujuan hidup manusia sebagai hamba Allah.", 
    img: arti5 
  },
  6: { 
    judul: "Tartil: Cara Membaca Al-Qur'an dengan Indah dan Benar", 
    tanggal: "9 Desember 2025", 
    isi: "Membaca Al-Qur'an dengan tartil berarti membacanya secara perlahan sesuai dengan kaidah tajwid yang benar. Tartil bukan hanya soal kecepatan, melainkan tentang bagaimana setiap makhraj huruf keluar dengan tepat. Saat membaca dengan tartil, seseorang akan lebih mudah merenungi makna di balik ayat-ayat Allah. Kekhusyukan akan muncul ketika kita memberikan hak setiap huruf, sehingga keindahan bacaan tersebut tidak hanya dirasakan oleh pembaca, tetapi juga oleh orang yang mendengarkannya.", 
    img: arti6 
  },
  7: { 
    judul: "Interaksi Orang Tua dalam Mendampingi Tahfidz Anak", 
    tanggal: "8 Desember 2025", 
    isi: "Peran orang tua di rumah merupakan penentu utama kesuksesan hafalan anak. Saat santri berada di pondok, mereka dibimbing oleh ustadz, namun saat di rumah, orang tua lah yang harus menjaga semangat tersebut. Komunikasi yang baik antara pihak pondok dan orang tua sangat krusial. Orang tua diharapkan menciptakan suasana rumah yang kondusif bagi anak untuk muraja'ah, memberikan motivasi yang positif, dan tidak memberikan tekanan berlebih yang justru bisa membuat anak trauma terhadap hafalan.", 
    img: arti7 
  }
};

export default function ArticleDetail() {
    const { id } = useParams();
    const artikel = dataArtikel[id];

    if (!artikel) {
        return <div className="text-center py-20">Artikel tidak ditemukan.</div>;
    }

    return (
        <div className="bg-white">
            <Navbar />

            <div className="bg-white min-h-screen py-20">
                <div className="pt-20 pb-10 max-w-6xl mx-auto px-6">
                    <article className="bg-white rounded-3xl border border-gray-300 shadow-2xl overflow-hidden">

                        {/* Header Gambar */}
                        <div className="h-72 bg-gradient-to-tr from-emerald-200 to-emerald-500 relative overflow-hidden">
                            <img
                                src={artikel.img}
                                alt={artikel.judul}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Konten Utama */}
                        <div className="p-8 md:p-12">
                            <span className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                                {artikel.tanggal}
                            </span>

                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-8 leading-tight">
                                {artikel.judul}
                            </h1>

                            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                {artikel.isi}
                            </div>

                            {/* Tombol Kembali */}
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <Link
                                    to="/artikel"
                                    className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                                >
                                    ← Kembali ke Daftar Artikel
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
}