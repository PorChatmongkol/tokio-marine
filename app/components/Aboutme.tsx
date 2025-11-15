"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ShieldCheck, Award, User } from "lucide-react";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-28 overflow-hidden"
      id="about"
    >
      {/* Golden glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(180,155,90,0.07),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(180,155,90,0.06),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A78B61] to-[#C7B08A] tracking-tight">
            เกี่ยวกับตัวแทนประกัน
          </h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            ความมั่นคงของคุณ คือพันธกิจของเรา
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#A78B61] to-[#C7B08A] mx-auto mt-6 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image – minimal, cinematic */}
          <div
            className="relative flex justify-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#B89F6A] to-[#E0CFA4] rounded-3xl blur-lg opacity-10 group-hover:opacity-30 transition duration-700" />
              <Image
                src="/about-img.jpg"
                alt="Insurance Agent"
                width={400}
                height={500}
                className="relative object-cover rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#EDEAE4]/80"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#A78B61] text-white text-xs md:text-sm font-medium px-6 py-2 rounded-full shadow-lg tracking-wide">
                ตัวแทนมืออาชีพ
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A2E35] leading-tight">
              นายวรศักดิ์ ทับห่วง
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              ตัวแทนประกันชีวิตและสุขภาพที่ให้คำปรึกษาด้วยความใส่ใจและมืออาชีพ
              พร้อมช่วยคุณวางแผนทางการเงินอย่างมั่นคง
              เพื่ออนาคตที่มั่นใจในทุกย่างก้าว
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#A78B61] mt-0.5" />
                <span className="text-gray-700 text-base">
                  ได้รับใบอนุญาตจาก คปภ. อย่างเป็นทางการ
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#A78B61] mt-0.5" />
                <span className="text-gray-700 text-base">
                  รางวัลตัวแทนยอดเยี่ยมต่อเนื่อง 3 ปี (2022–2024)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-6 h-6 text-[#A78B61] mt-0.5" />
                <span className="text-gray-700 text-base">
                  ให้คำปรึกษาอย่างตรงไปตรงมา ดูแลตลอดอายุกรมธรรม์
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#A78B61] text-white text-base font-medium px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
              >
                ติดต่อขอคำปรึกษา
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
