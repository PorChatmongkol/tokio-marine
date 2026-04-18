"use client";

import { useEffect } from "react";
import CTA from "../components/CTA";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, CheckCircle, Clock } from "lucide-react";

const ACCENT = "text-[#D69E2E]";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-[#D69E2E]/20">
      {/* SECTION: INTRO + IMAGE CENTER */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Title */}
          <div className="space-y-4" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              เกี่ยวกับเรา
              <span className={`block ${ACCENT}`}>
                ที่ปรึกษาด้านการเงินและประกันชีวิต
              </span>
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              เราให้บริการวางแผนทางการเงินแบบองค์รวม ครอบคลุมทั้งด้านประกันชีวิต
              การลงทุน และการเตรียมความพร้อมเพื่ออนาคต
              โดยมุ่งเน้นความเหมาะสมและความโปร่งใส
            </p>
          </div>

          {/* BIG IMAGE */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            data-aos="zoom-in"
          >
            <img
              src="/about-tk.webp"
              alt="Financial Advisor"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT DETAIL */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-slate-900">
              ความเชี่ยวชาญด้านการวางแผน
            </h2>

            <p className="text-slate-600 leading-relaxed">
              เรามีประสบการณ์ในการดูแลลูกค้าหลากหลายกลุ่ม
              ตั้งแต่บุคคลทั่วไปจนถึงเจ้าของธุรกิจ
              โดยเน้นการวิเคราะห์ความต้องการและออกแบบแผนที่เหมาะสมกับแต่ละบุคคล
            </p>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-slate-900">
              เป้าหมายของเรา
            </h2>

            <p className="text-slate-600 leading-relaxed">
              เรามุ่งมั่นที่จะช่วยให้ลูกค้าสามารถบริหารความเสี่ยง
              และสร้างความมั่นคงทางการเงินได้อย่างยั่งยืน
              ผ่านการวางแผนที่รอบคอบและเหมาะสมในระยะยาว
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Stat
            icon={<Clock className="w-6 h-6 text-[#D69E2E]" />}
            value="10+ ปี"
            label="ประสบการณ์ในสายงาน"
          />

          <Stat
            icon={<Users className="w-6 h-6 text-[#D69E2E]" />}
            value="500+ ราย"
            label="ลูกค้าที่ไว้วางใจ"
          />

          <Stat
            icon={<CheckCircle className="w-6 h-6 text-[#D69E2E]" />}
            value="95%"
            label="ความพึงพอใจของลูกค้า"
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}

// COMPONENT
const Stat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="space-y-3 ">
    <div className="flex justify-center">{icon}</div>
    <div className="text-3xl font-bold text-slate-900">{value}</div>
    <div className="text-slate-500 text-sm">{label}</div>
  </div>
);
