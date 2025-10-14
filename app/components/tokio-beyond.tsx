"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Award, Clock, Calendar } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🟩 ประเภทข้อมูล (Type Definitions)
interface Benefit {
  icon: string;
  title: string;
  description: string;
}



// 🟩 Component หลัก
export default function MainInsurance() {
  const [isLoading, setIsLoading] = useState(true);

  
  // 🔹 แกลเลอรีรูปภาพ
  const additionalImages: string[] = [
    "/tk-1.png",
    "/tk-2.png",
    "/tk-3.png",
    "/tk-4.png",
    "/tk-5.png",
    "/tk-6.png",
    "/tk-7.png",
    "/tk-8.png",
  ];

  // 🔹 ใช้ AOS + โหลดหน้า
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 🟧 Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  // 🟩 เนื้อหาหลัก
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 🟧 Section: หัวข้อหลัก */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-[#D69E2E] mb-4">
            ทำไมต้องเลือกประกันควบการลงทุน
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ผสมผสานความคุ้มครองและการลงทุนในผลิตภัณฑ์เดียว เพื่ออนาคตที่มั่นคง
          </p>
        </div>
      </section>

      {/* 🟧 Section: แกลเลอรี */}
      <section className="mt-8 p-4" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {additionalImages.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image
                src={img}
                alt={`Tokio Beyond Gallery ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
