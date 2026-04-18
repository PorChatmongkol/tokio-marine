"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Calendar,
  TrendingUp,
  Repeat2,
  Gift,
  DollarSign,
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
  LucideIcon,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Types & Data ---
interface Benefit {
  icon: LucideIcon;
  title: string;
  details: string;
}

const UI_CONFIG = {
  ACCENT: "text-[#D69E2E]",
  BG_ACCENT: "bg-[#D69E2E]",
  CARD_BG: "bg-slate-800/40 border-slate-700/50 hover:border-[#D69E2E]/50",
};

const BENEFITS: Benefit[] = [
  {
    icon: Calendar,
    title: "อิสระที่เลือกได้เอง",
    details: "ปรับเพิ่ม/ลดความคุ้มครอง หรือหยุดพักชำระเบี้ยได้ตามจังหวะชีวิต",
  },
  {
    icon: TrendingUp,
    title: "ปั้นเงินให้งอกเงย",
    details: "เพิ่มโอกาสรับผลตอบแทนที่สูงกว่าผ่านกองทุนรวมชั้นนำ",
  },
  {
    icon: Users,
    title: "ส่งต่อความมั่งคั่ง",
    details: "ส่งต่อความมั่นคงเป็นมรดกให้คนที่คุณรัก",
  },
  {
    icon: Gift,
    title: "โบนัสแห่งวินัย",
    details: "รับ Loyalty Bonus เมื่อชำระเบี้ยต่อเนื่องตามเงื่อนไข",
  },
  {
    icon: DollarSign,
    title: "สิทธิประโยชน์ภาษี",
    details: "ลดหย่อนภาษีได้สูงสุด 100,000 บาท/ปี",
  },
  {
    icon: Repeat2,
    title: "ความโปร่งใสสูงสุด",
    details: "ตรวจสอบพอร์ตลงทุนและมูลค่าได้ตลอดเวลา",
  },
];

const PLAN_IMAGES = [
  // "/tk-1.png",
  "/tk-2.png",
  "/tk-3.png",
  "/tk-4.png",
  "/tk-5.png",
  "/tk-6.png",
  "/tk-7.png",
  "/tk-8.png",
];

// --- Sub Components ---
const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-lg max-w-2xl mx-auto px-4">
        {subtitle}
      </p>
    )}
    <div className="w-20 h-1.5 bg-[#D69E2E] mx-auto mt-6 rounded-full" />
  </div>
);

const BenefitItem = ({ icon: Icon, title, details }: Benefit) => (
  <div
    className={`flex gap-5 p-6 rounded-2xl border transition-all duration-300 group ${UI_CONFIG.CARD_BG}`}
  >
    <div
      className={`${UI_CONFIG.BG_ACCENT} w-12 h-12 shrink-0 flex items-center justify-center rounded-xl text-slate-900 group-hover:scale-110 transition-transform`}
    >
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#D69E2E] transition-colors">
        {title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{details}</p>
    </div>
  </div>
);

export default function MainInsurance() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"funds" | "risk">("funds");
  const [showPlans, setShowPlans] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="animate-spin w-12 h-12 border-4 border-t-transparent border-[#D69E2E] rounded-full" />
      </div>
    );
  }

  return (
    <section className="text-gray-300 selection:bg-[#D69E2E]/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div
          className="max-w-5xl mx-auto text-center space-y-8"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#17303B] leading-tight">
            ประกันควบการลงทุน
            <span className="text-[#D69E2E]"> Tokio Beyond</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            วางแผนอนาคตที่มั่นคงด้วยความคุ้มครองเหนือระดับ <br />
            ดูแลโดยผู้เชี่ยวชาญ{" "}
            <span className="text-[#17303B] font-semibold">
              คุณวรศักดิ์ ทับห่วง
            </span>
          </p>

          <Image
            src="/banner.png"
            alt="Tokio Beyond Insurance"
            width={1200}
            height={800}
            className="rounded-2xl shadow-2xl w-full h-auto object-cover object-top"
          />
        </div>
      </section>

      {/* Plans Section */}
      <section className="relative pt-18 pb-6 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
         
          {/* TOP GRID (2 COL) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: TEXT */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                แผนประกัน <span className="text-[#D69E2E]">ระดับพรีเมียม</span>
              </h2>

              <p className="text-blue-400 text-lg">
                สำรวจแผนประกันที่คัดสรรมาเพื่อคุณ ครอบคลุมทุกเป้าหมายชีวิต
                ทั้งความมั่นคง การออม สุขภาพ และอนาคต
              </p>

              {/* BUTTON */}
              <button
                onClick={() => setShowPlans(!showPlans)}
                className="inline-flex items-center gap-3 bg-[#A37500] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
              >
                {showPlans ? "ปิดรายละเอียด" : "อ่านเพิ่มเติม"}
                <ChevronDown
                  className={`transition-transform duration-500 ${
                    showPlans ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative group">
              <div className="absolute inset-0  rounded-2xl blur-2xl"></div>

              <Image
                src="/tk-1.png"
                alt="Insurance Premium"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* PLANS GRID (SLIDE DOWN) */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
              showPlans
                ? "max-h-[5000px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {PLAN_IMAGES.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  src={src}
                  alt={`Insurance Plan ${i + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full"
                />

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
