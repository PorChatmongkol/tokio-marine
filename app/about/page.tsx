"use client";

import { useState, useEffect } from "react";
import CTA from "../components/CTA";
import AOS from "aos";
import "aos/dist/aos.css";
// Icon ที่ใช้เพิ่ม (ต้องติดตั้ง lucide-react: npm install lucide-react)
import { Eye, Rocket, Zap, Users, CheckCircle, Clock } from "lucide-react";








// Constants เพื่อควบคุมสี
const PRIMARY_COLOR = "text-slate-900";
const ACCENT_COLOR = "text-[#A37500]";
const ACCENT_BG = "bg-[#A37500]";
const ACCENT_HOVER = "hover:bg-[#8f6800]";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      // ปรับ offset เล็กน้อย
      offset: 80,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#A37500]/20">
      {/* 1. Hero Section (ปรับปรุง Headline ให้ดูพรีเมียมยิ่งขึ้น) */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Parallax Effect */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} // เพิ่ม Parallax
        >
          <img
            src="/background.jpg"
            alt="Financial Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
          <h1
            className="text-5xl  font-extrabold text-[#A37500] leading-tight mb-8 tracking-tight drop-shadow-md"
            data-aos="fade-up"
          >
            เกี่ยวกับเราโตเกียวมารีนประกันชีวิต 
          </h1>
          <p
            className="text-white text-xl  leading-relaxed max-w-4xl font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            ประวัติศาสตร์ที่ยาวนานกว่า 145
            ปี ในการขยายธุรกิจไปทั่วโลกใน 45 ประเทศ
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission Section (แบ่งชัดเจน) */}
      <section className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* A. Vision Section (ปรับปรุงสถิติและดีไซน์) */}
          <div data-aos="fade-right">
            <div
              className={`inline-block mb-6 px-4 py-1 rounded-full border border-blue-100 bg-blue-50`}
            >
              <span className="text-blue-700 text-sm font-semibold tracking-wider">
                OUR CORE STRENGTH
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold ${PRIMARY_COLOR} mb-8 leading-snug`}
            >
              ประสบการณ์ที่สั่งสม{" "}
              <span className={ACCENT_COLOR}>เพื่ออนาคตของคุณ</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12 border-l-4 border-gray-200 pl-4 italic">
              "เรามุ่งมั่นที่จะสร้างสังคมที่ปลอดภัยและมั่นคง
              ผ่านผลิตภัณฑ์ประกันภัยที่เชื่อถือได้
              และบริการที่เข้าใจลูกค้าอย่างแท้จริง"
            </p>

            {/* Data Bar (ปรับปรุงให้ใช้ Icon) */}
            <div className="grid grid-cols-3 gap-8">
              <DataStat
                icon={<Clock className={`w-6 h-6 ${ACCENT_COLOR}`} />}
                value="25+"
                label="ปีแห่งความเชื่อถือ"
              />
              <DataStat
                icon={<Users className={`w-6 h-6 ${ACCENT_COLOR}`} />}
                value="500K+"
                label="ลูกค้าที่วางใจ"
              />
              <DataStat
                icon={<CheckCircle className={`w-6 h-6 ${ACCENT_COLOR}`} />}
                value="98%"
                label="ความพึงพอใจ"
              />
            </div>
          </div>

          {/* B. Image & Mission */}
          <div
            className="order-first md:order-last relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl"
            data-aos="fade-left"
          >
            {/* Image (ปรับให้ดูมีมิติ) */}
            <img
              src="/about-tk.webp"
              alt="สำนักงานโตเกียวมารีน"
              className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            {/* Overlay เข้มขึ้นเล็กน้อย */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>
        </div>
      </section>

     

      {/* 4. CTA Section (ใช้โทนสีเดิม แต่ปรับ Text ให้โดดเด่น) */}
      <CTA/>
    </main>
  );
}

// ----------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------

// Data Stat Component
const DataStat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="text-center md:text-left border-l-4 border-[#A37500] pl-4">
    <div className="flex items-center mb-1">
      {icon}
      <div className="text-4xl font-extrabold text-slate-900 ml-3">{value}</div>
    </div>
    <div className="text-slate-600 text-sm">{label}</div>
  </div>
);

// Value Card Component
const ValueCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) => (
  <div
    className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#A37500]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);
