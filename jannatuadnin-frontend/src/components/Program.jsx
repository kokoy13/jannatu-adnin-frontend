import hijaiyah from "../assets/img/hijaiyah.png"
import quran from "../assets/img/quran.png"
import reading from "../assets/img/reading.png"
import voice from "../assets/img/voice.png"

const Program = () => {
    return (
        <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

            {/* Title */}
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Tahapan Belajar
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
                Proses pembelajaran Al-Qur'an yang dilakukan secara bertahap
                agar santri memahami bacaan dengan benar.
            </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-sm text-gray-500 mb-4">Tahap 1</p>

                <img
                src={hijaiyah}
                className="w-20 mx-auto mb-6"
                />

                <h3 className="font-semibold text-lg mb-2">
                Pengenalan Huruf Hijaiyah
                </h3>

                <p className="text-gray-600 text-sm">
                Mengenal huruf hijaiyah serta cara membaca dasar Al-Qur'an.
                </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-sm text-gray-500 mb-4">Tahap 2</p>

                <img
                src={quran}
                className="w-20 mx-auto mb-6"
                />

                <h3 className="font-semibold text-lg mb-2">
                Belajar Tajwid
                </h3>

                <p className="text-gray-600 text-sm">
                Memahami aturan tajwid agar bacaan Al-Qur'an lebih benar.
                </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-sm text-gray-500 mb-4">Tahap 3</p>

                <img
                src={reading}
                className="w-20 mx-auto mb-6"
                />

                <h3 className="font-semibold text-lg mb-2">
                Latihan Membaca
                </h3>

                <p className="text-gray-600 text-sm">
                Latihan membaca Al-Qur'an dengan bimbingan ustadz.
                </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-sm text-gray-500 mb-4">Tahap 4</p>

                <img
                src={voice}
                className="w-20 mx-auto mb-6"
                />

                <h3 className="font-semibold text-lg mb-2">
                Tilawah Al-Qur'an
                </h3>

                <p className="text-gray-600 text-sm">
                Membaca Al-Qur'an secara lancar dan benar.
                </p>
            </div>

            </div>
        </div>
        </section>
    )
}

export default Program