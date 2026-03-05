import { useState } from "react"
import bg from "../assets/img/hero.jpg"
import bg2 from "../assets/img/hero2.jpg"
import bg3 from "../assets/img/hero3.jpg"
import bg4 from "../assets/img/hero4.jpg"
import { useEffect } from "react"

const images = [bg, bg2, bg3, bg4]

const Hero = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 py-50 grid md:grid-cols-2 items-center gap-10">

            {/* Left Content */}
            <div>
            <p className="text-green-700 font-medium mb-4">
                Belajar Al-Qur'an lebih mudah
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Mudah dan Benar <br /> Belajar Al-Qur'an
            </h1>

            <p className="text-gray-600 mb-8 max-w-lg">
                Program pembelajaran Al-Qur'an dari dasar hingga mahir
                dengan metode yang mudah dipahami oleh santri dan masyarakat.
            </p>

            <div className="flex gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Daftar Sekarang
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Lihat Program
                </button>
            </div>

            <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full border-2 border-white"/>
                </div>

                <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">350+</span> Santri bergabung
                </p>
            </div>
            </div>


            {/* RIGHT IMAGE CAROUSEL */}
        <div className="relative flex justify-center">
            <img
                src={images[index]}
                className="relative w-[640px] h-[397px] object-cover rounded-xl shadow-xl transition-all duration-700"
            />

            {/* dots indicator */}
            <div className="absolute -bottom-10 flex gap-2">
                {images.map((_, i) => (
                <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition
                    ${i === index ? "bg-[#0e867b]" : "bg-gray-300"}`}
                ></div>
                ))}
            </div>

        </div>

        </div>

        {/* Wave Bottom */}
            <div className="absolute rotate bottom-0 left-0 w-full leading-none">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full scale-x-[-1]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#dbfce7"
                        d="M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,165.3C1120,171,1280,213,1360,234.7L1440,256L1440,320L0,320Z"
                    ></path>
                </svg>
            </div>

        </section>
    )
}

export default Hero