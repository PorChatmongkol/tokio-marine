"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Award,
  Clock,
  Calendar,
  Shield,
  TrendingUp,
  Repeat2,
  Gift,
  DollarSign,
  CheckCircle,
  XCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ----------------------------------------------------
// 1. CONSTANTS & HELPER DATA
// ----------------------------------------------------
const ACCENT_COLOR = "#D69E2E"; // Gold/Amber
const ACCENT_BG = "bg-[#D69E2E]";

// กำหนด Type สำหรับ Icon (Lucide Icon)
type IconType = React.ElementType;

// Data สำหรับ Benefits
const CORE_BENEFITS: { icon: IconType; title: string; description: string }[] =
  [
    {
      icon: Shield,
      title: "ความคุ้มครอง + การลงทุน",
      description:
        "ผสานผลประโยชน์จากการลงทุนในกองทุนรวม เข้ากับความคุ้มครองชีวิตที่มั่นคง",
    },
    {
      icon: Repeat2,
      title: "ยืดหยุ่นสูง ปรับได้ตลอดชีวิต",
      description:
        "สามารถปรับเพิ่ม/ลดความคุ้มครอง และปรับพอร์ตการลงทุนได้ตามเป้าหมาย",
    },
    {
      icon: DollarSign,
      title: "ไม่มีค่าดำเนินการเบี้ยหลัก",
      description:
        "ไม่มีค่าใช้จ่ายในการดำเนินการประกันภัยสำหรับเบี้ยประกันภัยหลักเพื่อความคุ้มครอง",
    },
    {
      icon: TrendingUp,
      title: "โอกาสรับผลตอบแทนสูง",
      description:
        "เลือกจัดพอร์ตการลงทุนได้เอง ผ่านกองทุนรวมที่บริหารโดยผู้เชี่ยวชาญ",
    },
  ];

// Data สำหรับ Tokio Beyond
const TOKIO_BEYOND_BENEFITS: {
  icon: IconType;
  title: string;
  details: string;
}[] = [
  {
    icon: Calendar,
    title: "ผลประโยชน์กรณีครบสัญญา",
    details:
      "ได้รับมูลค่ารับซื้อคืนหน่วยลงทุน ณ วันที่ประเมินราคาวันแรก ถัดจากวันครบกำหนดสัญญา",
  },
  {
    icon: Users,
    title: "ผลประโยชน์กรณีเสียชีวิต",
    details:
      "ผู้รับผลประโยชน์จะได้รับจำนวนเงินเอาประกันภัย บวกด้วยมูลค่ารับซื้อคืนหน่วยลงทุน",
  },
  {
    icon: Repeat2,
    title: "ปรับเปลี่ยนได้ทุกช่วงชีวิต",
    details:
      "สามารถปรับเพิ่ม/ลดความคุ้มครอง (ภายใต้เงื่อนไข) และปรับการลงทุนให้เหมาะกับไลฟ์สไตล์",
  },
  {
    icon: TrendingUp,
    title: "เพิ่มโอกาสรับผลตอบแทนสูง",
    details:
      "เบี้ยประกันภัยหลักเพื่อความคุ้มครองจะถูกนำไปลงทุนผ่านกองทุนรวมที่คัดสรรแล้ว",
  },
  {
    icon: Gift,
    title: "โบนัสพิเศษ (Loyalty Bonus)",
    details:
      "ได้รับโบนัสพิเศษเมื่อชำระเบี้ยครบครั้งที่ 10 (ภายใต้เงื่อนไข: ไม่เคยลดเบี้ยหลักและไม่เคยถอนเงิน)",
  },
  {
    icon: DollarSign,
    title: "สิทธิลดหย่อนภาษี",
    details:
      "สามารถนำเบี้ยประกันภัยในส่วนของค่าการประกันภัย และค่าใช้จ่ายในการบริหารกรมธรรม์ หักลดหย่อนภาษีได้สูงสุดถึง 100,000 บาท/ปี",
  },
];

const ADDITIONAL_IMAGES: string[] = [
  "/tk-1.png",
  "/tk-2.png",
  "/tk-3.png",
  "/tk-4.png",
  "/tk-5.png",
  "/tk-6.png",
  "/tk-7.png",
  "/tk-8.png",
];

// ----------------------------------------------------
// 2. HELPER COMPONENTS & TYPES
// ----------------------------------------------------

const PRIMARY_COLOR_CLASS = "text-slate-100";
const SECONDARY_COLOR_CLASS = "text-slate-400";

// Type สำหรับ BenefitCard
interface BenefitCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

// Card สำหรับ 4 Benefits หลัก
const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => (
  <div
    className="p-6 md:p-8 rounded-2xl bg-slate-800/70 border border-slate-700 shadow-xl transition-all duration-500 hover:shadow-[0_0_20px_rgba(214,158,46,0.3)] hover:scale-[1.02]"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-xl ${ACCENT_BG} text-slate-900 mb-4`}
    >
      <Icon className="w-7 h-7" />
    </div>
    <h3 className={`text-xl font-bold ${PRIMARY_COLOR_CLASS} mb-3`}>{title}</h3>
    <p className={`text-sm ${SECONDARY_COLOR_CLASS}`}>{description}</p>
  </div>
);

// Type สำหรับ SuitabilityCard
interface SuitabilityCardProps {
  icon: IconType;
  title: string;
  details: string[];
  isSuitable: boolean;
}

// Card สำหรับ Suitability (เหมาะสม/ไม่เหมาะสม)
const SuitabilityCard: React.FC<SuitabilityCardProps> = ({
  icon: Icon,
  title,
  details,
  isSuitable,
}) => (
  <div
    className={`p-6 rounded-xl border-l-4 ${
      isSuitable
        ? "border-green-500 bg-slate-800"
        : "border-red-500 bg-slate-800/50"
    }`}
  >
    <div className="flex items-center space-x-3 mb-3">
      <Icon
        className={`w-6 h-6 ${isSuitable ? "text-green-400" : "text-red-400"}`}
      />
      <h4
        className={`text-lg font-semibold ${
          isSuitable ? PRIMARY_COLOR_CLASS : SECONDARY_COLOR_CLASS
        }`}
      >
        {title}
      </h4>
    </div>
    <ul className="pl-0 space-y-1">
      {details.map((detail, i) => (
        <li key={i} className={`text-sm ${SECONDARY_COLOR_CLASS}`}>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

// Type สำหรับ DetailCard
interface DetailCardProps {
  icon: IconType;
  title: string;
  details: string;
}

// Card สำหรับ Key Features (รายละเอียด 6 ข้อ)
const DetailCard: React.FC<DetailCardProps> = ({
  icon: Icon,
  title,
  details,
}) => (
  <div className="flex items-start space-x-4 p-4 border-b border-slate-700 hover:bg-slate-800/50 transition duration-300 rounded-lg">
    <div
      className={`mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[${ACCENT_COLOR}] text-[${ACCENT_COLOR}]`}
    >
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <h4 className={`text-lg font-semibold ${PRIMARY_COLOR_CLASS}`}>
        {title}
      </h4>
      <p className={`text-sm ${SECONDARY_COLOR_CLASS}`}>{details}</p>
    </div>
  </div>
);

// ----------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------

export default function MainInsurance() {
  // ใช้ useState สำหรับ state ที่เปลี่ยนไปมาระหว่าง Loading/Loaded เท่านั้น
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Init AOS
    AOS.init({ duration: 1000, once: true, offset: 100 });

    // Hide loading spinner after a delay
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#D69E2E]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 1. Header & Headline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-6xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            <span className={`text-[${ACCENT_COLOR}] drop-shadow-lg`}>
              Tokio Beyond
            </span>
            <br /> อนาคตที่มั่นคง ด้วยประกันควบการลงทุน
          </h1>
          <p className={`text-lg ${SECONDARY_COLOR_CLASS} max-w-4xl mx-auto`}>
            ผสมผสานพลังแห่งความคุ้มครองชีวิตและการลงทุนในกองทุนรวม
            เพื่อตอบโจทย์เป้าหมายทางการเงินของคุณและเพิ่มโอกาสได้รับผลตอบแทนสูง
          </p>
          <Link
            href="/contact"
            className={`mt-10 inline-flex items-center px-8 py-4 ${ACCENT_BG} text-slate-900 font-bold text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[${ACCENT_COLOR}]/50`}
          >
            เริ่มต้นปรึกษาฟรี!
          </Link>
        </div>
      </section>

      {/* 2. Section: Why Unit-Linked - เน้น 4 ประโยชน์หลัก */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 text-[${ACCENT_COLOR}]`}
            data-aos="fade-up"
          >
            ทำไมต้องเลือก Unit-Linked?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 150 + 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section: Tokio Beyond Detail & Suitability */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* 3A: Suitability (ความเหมาะสม) */}
            <div
              className="lg:col-span-1 border-r border-slate-700 pr-8"
              data-aos="fade-right"
            >
              <h3 className={`text-3xl font-bold mb-6 text-[${ACCENT_COLOR}]`}>
                แบบประกันนี้เหมาะสมกับคุณหรือไม่?
              </h3>
              <div className="space-y-6">
                <SuitabilityCard
                  icon={CheckCircle}
                  title="เหมาะสมสำหรับ"
                  details={["ผู้ต้องการความคุ้มครอง และผลตอบแทนจากการลงทุน"]}
                  isSuitable={true}
                />
                <SuitabilityCard
                  icon={XCircle}
                  title="ไม่เหมาะสำหรับ"
                  details={[
                    "ผู้ต้องการผลตอบแทนการลงทุนแบบการันตี (Fixed Return)",
                  ]}
                  isSuitable={false}
                />
              </div>
            </div>

            {/* 3B: Key Features (คุณสมบัติเด่น 6 ข้อ) */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <h3 className={`text-3xl font-bold mb-8 text-[${ACCENT_COLOR}]`}>
                รายละเอียดแบบประกัน โตเกียว บียอนด์
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {TOKIO_BEYOND_BENEFITS.map((item, index) => (
                  <DetailCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Fund Option & Risk - (ใช้รูปภาพเป็นหลัก) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 text-[${ACCENT_COLOR}]`}
            data-aos="fade-up"
          >
            แผนประกันชีวิตควบการลุงทุน
          </h2>

          {/* Image Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {ADDITIONAL_IMAGES.map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-xl"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <Image
                  src={img}
                  alt={`Fund Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Fund Detail Images (ภาพรายละเอียด 17 กองทุน, ความเสี่ยง) */}
          <div className="space-y-16">
            {/* ภาพ 1: 17 กองทุน */}
            <div className="text-center" data-aos="fade-up">
              <Image
                src={"/tokio-beyond-1.jpg"}
                alt="17 กองทุนให้เลือกลงทุน"
                width={1000}
                height={600}
                className="object-cover rounded-xl shadow-2xl border border-slate-700 mx-auto"
              />
              <p className={`mt-4 text-lg font-medium text-[${ACCENT_COLOR}]`}>
                ตารางแสดงรายละเอียดกองทุนรวมที่คัดสรร
              </p>
            </div>

            {/* ภาพ 2: ความเสี่ยง */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className={`text-3xl font-bold mb-6 ${PRIMARY_COLOR_CLASS}`}>
                ระดับความเสี่ยงที่ยอมรับได้
              </h3>
              <Image
                src={"/tokio-beyond-3.jpg"}
                alt="ระดับความเสี่ยง"
                width={1000}
                height={600}
                className="object-cover rounded-xl shadow-2xl border border-slate-700 mx-auto"
              />
              <p
                className={`mt-4 text-lg font-medium ${SECONDARY_COLOR_CLASS}`}
              >
                คุณสามารถจัดพอร์ตตามระดับความเสี่ยงที่ยอมรับได้
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer CTA / Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-slate-900/80">
        <div className="max-w-5xl mx-auto">
          <p
            className={`text-sm italic ${SECONDARY_COLOR_CLASS} leading-relaxed`}
          >
            ข้อมูลนี้เป็นข้อมูลเบื้องต้นเพื่อประกอบการนำเสนอเท่านั้น
            ผู้ขอเอาประกันภัยควรศึกษาทำความเข้าใจในเอกสารเสนอขายก่อนการตัดสินใจทำประกัน
            เมื่อได้รับกรมธรรม์แล้วโปรดศึกษารายละเอียดข้อกำหนดและเงื่อนไขความคุ้มครองรวมทั้งข้อยกเว้น
            ในกรมธรรม์ประกันภัยที่ออกให้กับผู้ถือกรมธรรม์
            การพิจารณารับประกันภัยให้เป็นไปตามเกณฑ์ที่บริษัทกำหนด
          </p>
          <Link
            href="/contact"
            className={`mt-6 inline-flex items-center px-6 py-3 border border-[${ACCENT_COLOR}] text-[${ACCENT_COLOR}] font-bold rounded-full transition-all duration-300 hover:bg-[${ACCENT_COLOR}]/10`}
          >
            สอบถามข้อมูลเพิ่มเติม (ไม่มีภาระผูกพัน)
          </Link>
        </div>
      </section>
    </div>
  );
}
