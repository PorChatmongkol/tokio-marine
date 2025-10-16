"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const OurServices = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("aos/dist/aos.css");
      AOS.init({ duration: 800, once: true, offset: 80 });
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
      features: ["รายได้ต่อเนื่องหลังเกษียณ", "ลดหย่อนภาษี", "ความคุ้มครองระยะยาว"],
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

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (path: string) => {
    setLoading(true);
    router.push(path);
  };

  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
            บริการประกันของเรา
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            แผนประกันที่ครอบคลุมทุกช่วงชีวิตของคุณ <br />
            <span className="text-[#C5A572] font-semibold">
              ปกป้องอนาคตด้วยแผนที่คุณเลือกเองได้
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-[#C5A572] text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-[#8C7A4E] font-medium text-xs uppercase tracking-wide mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="mb-4 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-[#C5A572] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleClick(`/${service.path}`)}
                  className="w-full bg-gradient-to-r from-[#C5A572] to-[#D6B55D] text-white font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300"
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
};

export default OurServices;
