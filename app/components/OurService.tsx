"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OurServices() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("aos/dist/aos.css");
      AOS.init({ duration: 900, once: true, offset: 80 });
    }
  }, []);

  const insuranceServices = [
    {
      id: 1,
      title: "ประกันชีวิต",
      subtitle: "Life Insurance",
      description:
        "คุ้มครองตลอดชีวิต พร้อมผลตอบแทนระยะยาวที่มั่นคงและคุ้มค่า",
      features: ["คุ้มครองตลอดชีวิต", "ผลตอบแทนระยะยาว", "เลือกแผนได้ยืดหยุ่น"],
      image: "/saving-img.png",
      popular: false,
      path: "services/life-insurance",
    },
    {
      id: 2,
      title: "ประกันออมทรัพย์",
      subtitle: "Saving Insurance",
      description:
        "วางแผนการออมและรับผลตอบแทนพร้อมความคุ้มครองชีวิตในเวลาเดียวกัน",
      features: ["ผลตอบแทนสูง", "เบี้ยคงที่", "รับเงินคืนทุกปี"],
      image: "/saving-img.png",
      popular: true,
      path: "services/saving-insurance",
    },
    {
      id: 3,
      title: "ประกันบำนาญ",
      subtitle: "Pension Insurance",
      description:
        "เตรียมความพร้อมเพื่อวัยเกษียณ รับรายได้ประจำอย่างมั่นคงในอนาคต",
      features: [
        "รายได้ต่อเนื่องหลังเกษียณ",
        "ลดหย่อนภาษี",
        "ความคุ้มครองระยะยาว",
      ],
      image: "/pension-img.png",
      popular: false,
      path: "services/pension-insurance",
    },
    {
      id: 4,
      title: "ประกันธุรกิจ/Keyman",
      subtitle: "Keyman Insurance",
      description:
        "คุ้มครองธุรกิจเมื่อผู้บริหารหลักเกิดเหตุไม่คาดคิด เพื่อความมั่นคงขององค์กร",
      features: ["ลดผลกระทบทางการเงิน", "ปกป้องธุรกิจ", "คุ้มครองผู้บริหารหลัก"],
      image: "/health-img.png",
      popular: false,
      path: "services/keyman-insurance",
    },
    {
      id: 5,
      title: "ประกันสุขภาพ",
      subtitle: "Health Insurance",
      description:
        "คุ้มครองค่ารักษาพยาบาลทั้งในและต่างประเทศ พร้อมสิทธิพิเศษด้านสุขภาพ",
      features: ["ครอบคลุมทั่วโลก", "ตรวจสุขภาพฟรี", "จ่ายเคลมรวดเร็ว"],
      image: "/health-img.png",
      popular: false,
      path: "services/health-insurance",
    },
    {
      id: 6,
      title: "ประกันอุบัติเหตุ",
      subtitle: "Accident Insurance",
      description:
        "คุ้มครองอุบัติเหตุทุกกรณี พร้อมเงินชดเชยรายวันเมื่อเข้ารักษาในโรงพยาบาล",
      features: ["จ่ายทันทีเมื่อเกิดเหตุ", "ไม่ต้องตรวจสุขภาพ", "คุ้มครอง 24 ชั่วโมง"],
      image: "/accident-img.png",
      popular: false,
      path: "services/accident-insurance",
    },
  ];

  const handleClick = (path: string) => {
    setLoading(true);
    router.push(path);
  };

  return (
    <section className="relative bg-[#FAFAF8] py-20 px-6 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F3E9] to-[#F2E7D4] opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8A6A3C] mb-4 tracking-tight">
            เลือกแผนประกันที่ใช่สำหรับคุณ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            เราเข้าใจว่าทุกคนมีความต้องการที่แตกต่าง <br />
            <span className="text-[#B79B65] font-semibold">
              ค้นหาแผนที่ตรงกับเป้าหมายชีวิตของคุณ
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insuranceServices.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white/80 backdrop-blur-sm border border-[#EAE6DC] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              {/* Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C5A572] to-[#D6B55D] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  ยอดนิยม
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">
                  {service.title}
                </h3>
                <p className="text-[#A8894D] font-medium text-xs uppercase mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#B89A5A] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleClick(`/${service.path}`)}
                  className="w-full bg-gradient-to-r from-[#B89A5A] to-[#C7A24E] text-white font-semibold py-2.5 rounded-xl hover:shadow-md hover:from-[#C7A24E] hover:to-[#E2B85C] transition-all duration-300"
                >
                  อ่านเพิ่มเติม →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
