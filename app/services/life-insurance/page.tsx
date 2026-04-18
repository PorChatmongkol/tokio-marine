"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Shield,
  Home,
  Clock,
  DollarSign,
  HeartHandshake,
  BarChart3,
  Wallet,
  ClipboardX,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/Hero";

/* ---------------- CONFIG ---------------- */
const TEXT_MAIN = "text-slate-900";
const TEXT_SUB = "text-slate-500 text-base md:text-lg";

/* ---------------- DATA ---------------- */
const WHY_BUY = [
  {
    icon: BarChart3,
    title: "จ่ายน้อย แต่คุ้มครองระยะยาว",
    details: "เริ่มต้นด้วยเบี้ยที่เข้าถึงได้ แต่คุ้มครองถึงอายุ 90 ปี",
  },
  {
    icon: Home,
    title: "สร้างหลักประกันให้ครอบครัว",
    details: "ลดภาระให้คนที่คุณรักในทุกสถานการณ์",
  },
  {
    icon: Clock,
    title: "เลือกแผนได้ยืดหยุ่น",
    details: "กำหนดระยะเวลาชำระเบี้ยตามเป้าหมายชีวิต",
  },
  {
    icon: Wallet,
    title: "มีเงินคืน",
    details: "สร้างวินัยทางการเงินและมีเงินกลับคืน",
  },
  {
    icon: HeartHandshake,
    title: "ดูแลครอบครัวต่อเนื่อง",
    details: "มีเงินช่วยเหลือรายเดือนให้คนข้างหลัง",
  },
];

const BENEFITS = [
  { icon: Shield, title: "ครบสัญญา", details: "รับ 100% ของทุน" },
  { icon: DollarSign, title: "เสียชีวิต", details: "รับผลประโยชน์สูงสุด" },
  { icon: Clock, title: "ยืดหยุ่น", details: "เลือกแผนได้ตามช่วงชีวิต" },
  { icon: Wallet, title: "ลดหย่อนภาษี", details: "สูงสุด 100,000 บาท" },
  { icon: ClipboardX, title: "ยกเว้นเบี้ย", details: "กรณีทุพพลภาพ" },
  { icon: HeartHandshake, title: "ค่าปลงศพ", details: "สูงสุด 300,000 บาท" },
];

// ... (ส่วน Import และ Data เหมือนเดิม)

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
        <HeroSection  variant="life-insurance"/>

      {/* 2. TITLE INTERMEDIATE (หัวข้อคั่นกลาง) */}
      <div className="relative z-20 -mt-10 md:-mt-14 px-6">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              ประกันชีวิตตลอดชีพ{" "}
              <span className="text-[#A37500]">แบบมีเงินคืนที่มีที่เดียวในไทย​</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#D69E2E] mx-auto rounded-full mb-4" />
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
              

            </p>
          </div>
        </div>
      </div>

      {/* 3. WHY BUY SECTION (ต่อจากหัวข้อคั่นกลาง) */}
      {/* <section className="pt-16 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_BUY.map((item, i) => (
              <LuxuryCard key={i} {...item} delay={i * 100} />
            ))}
          </div>
        </div>
      </section> */}

      {/* 4. BENEFITS SECTION (หัวข้อคั่นกลางแบบ Dark Mode) */}
      <div className="relative z-20 mt-20 mb-10 md:mb-16 px-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-8 text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-widest">
            Core Benefits
          </span>
        </div>
      </div>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {BENEFITS.map((item, i) => (
            <BenefitItem key={i} {...item} />
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-500 rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D69E2E] opacity-10 blur-[100px]" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              พร้อมเริ่มต้นวางแผนหรือยัง?
            </h2>
            <p className="text-slate-400 text-lg">
              ให้เราช่วยดูแลคุณและครอบครัวตั้งแต่วันนี้
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-[#A37500] to-[#D69E2E] text-white rounded-2xl font-bold text-xl hover:shadow-[0_0_30px_rgba(214,158,46,0.4)] transition-all"
            >
              ติดต่อตัวแทนเลย
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const LuxuryCard = ({ icon: Icon, title, details, delay }: any) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500"
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm text-[#A37500] mb-6 group-hover:scale-110 group-hover:bg-[#A37500] group-hover:text-white transition-all">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{details}</p>
  </div>
);

const BenefitItem = ({ icon: Icon, title, details }: any) => (
  <div className="flex flex-col items-center text-center space-y-4 group">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-50 text-[#D69E2E] group-hover:bg-[#D69E2E]/10 transition-colors">
      <Icon className="w-8 h-8" />
    </div>
    <div className="space-y-1">
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-slate-500 text-sm">{details}</p>
    </div>
  </div>
);
