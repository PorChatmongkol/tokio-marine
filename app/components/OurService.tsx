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
      AOS.init({ duration: 1000, once: true, offset: 80 });
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
    <section
      className="relative bg-gradient-to-b from-white via-[#FAFAF8] to-[#F5F1E8] py-24 px-6 overflow-hidden"
      id="services"
    >
      {/* Subtle gradient and decorative circles */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#DCC49E]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C0A97A]/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#7A6230] mb-5 tracking-tight leading-tight">
            เลือกแผนประกันที่ใช่สำหรับคุณ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            เราเข้าใจว่าทุกคนมีความต้องการที่แตกต่าง  
            <br />
            <span className="text-[#A27F45] font-semibold">
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
              className="group relative bg-white/90 backdrop-blur-sm border border-[#EDE9DD] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-[#B38B2E] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide">
                  ยอดนิยม
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#7A6230] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#C6A96A] font-medium text-sm uppercase mb-4 tracking-wider">
                  {service.subtitle}
                </p>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-[#B38B2E] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleClick(`/${service.path}`)}
                  className="w-full bg-gradient-to-r from-[#B38B2E] to-[#D4B15A] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
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
