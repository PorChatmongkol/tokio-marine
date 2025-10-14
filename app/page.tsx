"use client";
import { ShieldCheck, TrendingUp, Award } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import Image from "next/image";
import MainInsurance from "./components/tokio-beyond";

export default function Home() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden ">
        {/* Background decorative elements */}
        <div
          className="absolute inset-0 overflow-hidden"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-800/30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div
              className="space-y-8 lg:pr-8"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-medium text-sm">
                    ความปลอดภัยที่เชื่อถือได้
                  </span>
                </div>
                <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-orange-400 font-medium text-sm">
                    การเติบโตที่ยั่งยืน
                  </span>
                </div>
                <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 shadow-sm">
                  <Award className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-medium text-sm">
                    รางวัลความเป็นเลิศ
                  </span>
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-white font-sans">
                  วางแผนอนาคต
                  <span className="block text-blue-400">
                    ด้วยประกันควบการลงทุน
                  </span>
                </h1>

                <h2 className="text-xl md:text-5xl font-semibold text-orange-400">
                  วรศักดิ์ ทับห่วง (หนุ่ม)
                </h2>

                <div className="space-y-4">
                  <p className="text-base text-slate-300 leading-relaxed">
                    ใกล้เคียงคำว่ากองทุนสำหรับการเกษียณได้มากที่สุด
                    เพราะกองทุนที่โตเกียวมารีนเลือกมาเป็นกองทุนที่มีผลประกอบการยอดเยี่ยม
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <div className="relative z-10">
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-700/30">
                  <Image
                    src={"/profile-1.jpg"}
                    alt="วรศักดิ์ ทับห่วง - ที่ปรึกษาการเงินมืออาชีพ"
                    className=" object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-8 right-8 w-72 h-72 bg-gradient-to-br from-blue-600/30 to-orange-500/20 rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-orange-500/30 to-emerald-500/20 rounded-full opacity-40 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <MainInsurance/>
    </>
  );
}
