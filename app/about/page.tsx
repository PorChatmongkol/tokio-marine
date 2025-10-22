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

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // เล่นแอนิเมชันแค่ครั้งเดียว
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative py-32 px-6 overflow-hidden min-h-[85vh] flex items-center"
        data-aos="fade-up"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-800/90"></div>
        </div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-orange-400/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full">
            <span className="text-amber-300 text-sm font-medium tracking-wide">
              ABOUT US
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            เกี่ยวกับเรา
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            บริษัท โตเกียวมารีน เป็นผู้นำด้านประกันภัยในประเทศไทย
            <br className="hidden md:block" />
            มุ่งเน้นให้บริการลูกค้าด้วยคุณภาพและความเชื่อถือระดับโลก
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full">
              <span className="text-blue-800 text-sm font-semibold">
                OUR VISION
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              โตเกียวมารีน
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              {/* ใส่เนื้อหา */}
              <p>
                {" "}
                โตเกียวมารีน บริษัทประกันภัยแรกในประเทศญี่ปุ่น ก่อตั้งขึ้นในปี
                2422 มีการเติบโตตลอดหลายทศวรรษที่ผ่านมา
                เรานำเสนอผลิตภัณฑ์และการตอบสนองความต้องการที่หลากหลายของการประกันวินาศภัย
                และการประกันชีวิต โตเกียวมารีนมีการดำเนินธุรกิจใน 45 ประเทศ
                และเรายังคงขยายธุรกิจเพิ่มมากขึ้น
                ซึ่งทำให้เราจัดเป็นหนึ่งในกลุ่มบริษัทประกันภัยและประกันชีวิตที่มีความหลากหลายและมีความมั่นคงทางการเงินมากที่สุดในโลก
                วันนี้
                ในฐานะกลุ่มบริษัทประกันภัยที่ใหญ่ที่สุดของประเทศญี่ปุ่นที่มีสินทรัพย์มากกว่า
                2.10 แสนล้านดอลลาร์สหรัฐฯ (ณ ไตรมาส 2 ปี 2568) และมีพนักงานกว่า
                43,000 คน
                โตเกียวมารีนพร้อมที่จะร่วมเป็นพันธมิตรกับคุณเพื่อสร้างความสำเร็จอย่างต่อเนื่องไปด้วยกัน
              </p>
            </div>

            <div className="mt-8 flex gap-12">
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">25+</div>
                <div className="text-slate-600 text-sm">ปีของความเชื่อถือ</div>
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

          <div className="order-1 md:order-2 relative" data-aos="fade-left">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-tk.webp"
                alt="สำนักงานโตเกียวมารีน"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        data-aos="zoom-in"
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            มาร่วมเป็นส่วนหนึ่งกับเรา
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            สร้างความมั่นใจให้กับชีวิตและธุรกิจของคุณ
            <br />
            ด้วยบริการประกันภัยระดับพรีเมียมจากโตเกียวมารีน
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#A37500] text-white font-semibold rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                ติดต่อเรา
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#A37500] text-white font-semibold rounded-4xl  hover:bg-amber-600 hover:border-amber-700 transition-all duration-300"
            >
              ดูบริการของเรา
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
