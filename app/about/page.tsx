"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#A37500]/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight"
            data-aos="fade-up"
          >
            เกี่ยวกับเรา
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            โตเกียวมารีน บริษัทประกันภัยแรกในประเทศญี่ปุ่น ก่อตั้งขึ้นในปี
            2422 เรานำเสนอผลิตภัณฑ์ประกันภัยและประกันชีวิตที่หลากหลาย
            ครอบคลุมกว่า 45 ประเทศทั่วโลก พร้อมความมั่นคงทางการเงิน
            และความมุ่งมั่นที่จะเป็นพันธมิตรที่คุณไว้วางใจได้เสมอ
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="inline-block mb-6 px-4 py-1 bg-blue-50 rounded-full">
              <span className="text-blue-800 text-sm font-medium tracking-wide">
                OUR VISION
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-snug">
              ความมั่นคงที่ส่งต่อความสบายใจ
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              เรามุ่งมั่นที่จะสร้างสังคมที่ปลอดภัยและมั่นคง
              ผ่านผลิตภัณฑ์ประกันภัยที่เชื่อถือได้
              และบริการที่เข้าใจลูกค้าอย่างแท้จริง
            </p>

            <div className="mt-10 flex gap-12">
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">25+</div>
                <div className="text-slate-600 text-sm">ปีแห่งความเชื่อถือ</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">
                  500K+
                </div>
                <div className="text-slate-600 text-sm">ลูกค้าทั่วประเทศ</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">98%</div>
                <div className="text-slate-600 text-sm">ความพึงพอใจ</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-first md:order-last relative rounded-3xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
          >
            <img
              src="/about-tk.webp"
              alt="สำนักงานโตเกียวมารีน"
              className="w-full h-[420px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#A37500]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
            มาร่วมเป็นส่วนหนึ่งกับเรา
          </h2>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            สร้างความมั่นใจให้กับชีวิตและธุรกิจของคุณ
            ด้วยบริการประกันภัยระดับพรีเมียมจากโตเกียวมารีน
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#A37500] text-white font-medium rounded-full shadow-lg hover:shadow-[#A37500]/50 transition-all duration-300"
            >
              ติดต่อเรา
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#A37500] text-[#A37500] font-medium rounded-full hover:bg-[#A37500] hover:text-white transition-all duration-300"
            >
              ดูบริการของเรา
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
