"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Award } from "lucide-react";

type HeroVariant =
  | "life-insurance"
  | "saving-insurance"
  | "pension-insurance"
  | "keyman-insurance"
  | "health-insurance"
  | "accident-insurance";

interface HeroProps {
  variant: HeroVariant;
}

export default function HeroSection({ variant }: HeroProps) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  // ✅ ใช้ variant จริง
  const heroContent = {
    "life-insurance": {
      title: "วางแผนอนาคต",
      highlight: "ด้วยประกันชีวิต",
      subtitle: "Life Insurance",
      desc: "สร้างหลักประกันให้คนที่คุณรัก พร้อมความคุ้มครองระยะยาว",
      image: "/life.jpg",
    },
    "saving-insurance": {
      title: "ประกันสะสมทรัพย์",
      highlight: "พร้อมผลตอบแทน",
      subtitle: "Saving Insurance",
      desc: "หนือกว่าการออมที่ได้รับความคุ้มครอง​ คือ​ ผลตอบแทนจากส่วนต่างเบี้ยที่ชำระเข้ามาสูงที่สุดในวงการประกัน IRR​ 3% แผนเดียวในประเทศไทย​และมีให้เลือกมากกว่า​ 30​ แผนเพื่อให้เหมาะสมกับช่วงเวลาที่คุณต้องการ​",
      image: "/saving.jpg",
    },
    "pension-insurance": {
      title: "เกษียณอย่างมั่นใจ",
      highlight: "มีเงินใช้ทุกเดือน",
      subtitle: "Pension Insurance",
      desc: "เตรียมความพร้อมสำหรับชีวิตหลังเกษียณอย่างมั่นคง",
      image: "/pension.jpg",
    },
    "keyman-insurance": {
      title: "ปกป้องธุรกิจของคุณ",
      highlight: "จากความเสี่ยงสำคัญ",
      subtitle: "Keyman Insurance",
      desc: "ดูแลบุคลากรสำคัญขององค์กรให้ธุรกิจดำเนินต่อได้",
      image: "/keyman.jpg",
    },
    "health-insurance": {
      title: "สุขภาพที่ดี",
      highlight: "คือสิ่งสำคัญ",
      subtitle: "Health Insurance",
      desc: "คุ้มครองค่ารักษาพยาบาล ครอบคลุมทุกสถานการณ์",
      image: "/health.jpg",
    },
    "accident-insurance": {
      title: "อุบัติเหตุไม่คาดคิด",
      highlight: "ป้องกันได้",
      subtitle: "Accident Insurance",
      desc: "คุ้มครองทันทีเมื่อเกิดเหตุไม่คาดฝัน",
      image: "/accident.jpg",
    },
  };

  const data = heroContent[variant];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        data-aos="fade"
        data-aos-delay="200"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-800/30"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="400">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
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

            {/* Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-black leading-tight text-white">
                {data.title}
                <span className="block text-blue-400">
                  {data.highlight}
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold text-orange-400">
                {data.subtitle}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {data.desc}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-700/30">
                <Image
                  src={data.image}
                  alt={data.subtitle}
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-72 h-72 bg-gradient-to-br from-blue-600/30 to-orange-500/20 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-orange-500/30 to-emerald-500/20 rounded-full opacity-40 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}