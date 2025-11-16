"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Icon ที่ใช้เพิ่ม
import {
  Star,
  Shield,
  Home,
  Calendar,
  Users,
  Clock,
  DollarSign,
  HeartHandshake, // กองทุนฌาปนกิจ -> ใช้เป็นไอคอนอื่น (อาจใช้ DollarSign/Wallet แทน)
  BarChart3, // เบี้ยประกันไม่สูง
  Wallet, // เงินคืน / เบี้ยถูก
  CheckCircle,
  ClipboardX, // ยกเว้นเบี้ย / ทุพพลภาพ
  Hospital, // เพิ่มสำหรับค่ารักษาพยาบาล
  FileText, // เพิ่มสำหรับแผนความคุ้มครอง
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ----------------------------------------------------
// 1. CONSTANTS & HELPER DATA
// ----------------------------------------------------

// Type สำหรับ Icon (Lucide Icon)
type IconType = React.ElementType;

const PRIMARY_COLOR = "text-slate-100";
const SECONDARY_COLOR = "text-slate-400";
const ACCENT_GOLD = "#D69E2E"; // Lighter Gold for text/highlight
const ACCENT_DARK_GOLD = "#A37500"; // Darker Gold for BG/Buttons
const DARK_BG = "bg-slate-900";
const CARD_BG = "bg-slate-800/70";
const BORDER_COLOR = "border-slate-700";

// Data สำหรับ "ทำไมต้องซื้อประกันอุบัติเหตุ PA?" (4 ข้อหลัก)
const WHY_BUY_BENEFITS: { icon: IconType; title: string; details: string }[] = [
  {
    icon: Shield, // เปลี่ยน icon จาก BarChart3 เป็น Shield
    title: "ตัวช่วยในการช่วยลดภาระของคุณ",
    details:
      "ช่วยคุณลดภาระทางการเงินกรณีที่คุณบาดเจ็บหรือทุพพลภาพจากการเกิดอุบัติเหตุเบี้ยประกันภัยต่ำ ความคุ้มครองสูง",
  },
  {
    icon: Wallet, // เปลี่ยน icon จาก Home เป็น Wallet
    title: "ไม่ต้องสำรองจ่าย",
    details:
      "ประกันอุบัติเหตุแบบไม่ต้องสำรองจ่ายล่วงหน้า เมื่อเข้ารับการรักษาพยาบาลกรณีเจ็บป่วยด้วยอุบัติเหตุในโรงพยาบาลคู่สัญญาทั่วประเทศ",
  },
  {
    icon: DollarSign, // เปลี่ยน icon จาก Clock เป็น DollarSign
    title: "คุ้มครองกรณีเสียชีวิตจากอุบัติเหตุ",
    details:
      "กรณีเสียชีวิตอันเกิดจากการเจ็บป่วยที่มีสาเหตุโดยตรงจากการเกิดอุบัติเหตุ ผู้รับผลประโยชน์จะได้รับจำนวนเงินเอาประกันภัย 100%",
  },
  {
    icon: BarChart3, // เปลี่ยน icon จาก Wallet เป็น BarChart3
    title: "เบี้ยประกันภัยต่ำ ความคุ้มครองสูง",
    details:
      "เบี้ยประกันภัยต่ำ และให้ความคุ้มครองที่สูง ครอบคลุมตั้งแต่อุบัติเหตุขนาดเล็กไปจนถึงขนาดใหญ่",
  },
];

// Data สำหรับ "ผลประโยชน์ที่คุณจะได้รับ" (Detailed Benefits)
const DETAILED_BENEFITS: { icon: IconType; title: string; details: string }[] =
  [
    {
      icon: ClipboardX, // ใช้ ClipboardX แทน Shield
      title: "คุ้มครองการสูญเสียอวัยวะ หรือสายตา หรือทุพพลภาพถาวรสิ้นเชิง",
      details:
        "ให้ความคุ้มครองกรณีการทุพพลภาพถาวรสิ้นเชิง การสูญเสียอวัยวะหรือสายตาจากอุบัติเหตุ ผู้เอาประกันภัยจะได้รับจำนวนเงินเอาประกันภัย 100%",
    },
    {
      icon: Hospital, // ใช้ Hospital แทน DollarSign
      title: "ผลประโยชน์เพิ่มเติม",
      details:
        "เพิ่มความคุ้มครองสำหรับกระดูกหัก แผลไฟไหม้ และผลประโยชน์การบาดเจ็บภายใน หรือผลประโยชน์การชดเชยค่ารักษาพยาบาล",
    },
    {
      icon: Wallet, // ใช้ Wallet แทน Clock
      title: "เบี้ยประกันภัยที่ไม่แพง",
      details:
        "ทำประกันอุบัติเหตุ ค่าเบี้ยรายปีเริ่มต้นเพียง 6,000 บาท* หรือเฉลี่ยไม่ถึง 16 บาทต่อวัน*",
    },
    {
      icon: FileText, // ใช้ FileText แทน Wallet
      title: "แผนความคุ้มครองที่หลากหลาย",
      details: "สามารถเลือกแผนความคุ้มครองที่เหมาะสมกับคุณ",
    },
    {
      icon: Shield, // เพิ่ม - ผลประโยชน์กรณีเสียชีวิต
      title: "ผลประโยชน์กรณีเสียชีวิต",
      details:
        "ความคุ้มครองเสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิงจากอุบัติเหตุ",
    },
    {
      icon: Home, // เพิ่ม - ความคุ้มครองจากภัยร้ายแรง
      title: "ความคุ้มครองจากภัยร้ายแรง",
      details:
        "เสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิงจากการถูกฆาตกรรมหรือถูกทำร้ายร่างกาย การขับขี่หรือโดยสารรถจักรยานยนต์ การจลาจลและการก่อการร้าย",
    },
    {
      icon: Users, // เพิ่ม - ผลประโยชน์การรักษาพยาบาล
      title: "ผลประโยชน์การรักษาพยาบาล",
      details:
        "ครอบคลุมค่ารักษาพยาบาลสำหรับผู้บาดเจ็บจากอุบัติเหตุ เริ่มต้น 100,000-250,000 บาทต่ออุบัติเหตุแต่ละครั้ง",
    },
  ];

// ----------------------------------------------------
// 2. HELPER COMPONENTS & TYPES
// ----------------------------------------------------

// Type สำหรับ BenefitCard
interface WhyBuyCardProps {
  icon: IconType;
  title: string;
  details: string;
  delay: number;
}

// Card สำหรับ "Why Buy" (เหตุผลที่ต้องซื้อ)
const WhyBuyCard: React.FC<WhyBuyCardProps> = ({
  icon: Icon,
  title,
  details,
  delay,
}) => (
  <div
    className={`p-6 md:p-8 rounded-2xl ${CARD_BG} ${BORDER_COLOR} border shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(214,158,46,0.3)] hover:scale-[1.02]`}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-[${ACCENT_DARK_GOLD}] text-white mb-4 shadow-md`}
    >
      <Icon className="w-7 h-7" />
    </div>
    <h3 className={`text-xl font-bold ${PRIMARY_COLOR} mb-3`}>{title}</h3>
    <p className={`text-sm ${SECONDARY_COLOR}`}>{details}</p>
  </div>
);

// Type สำหรับ DetailBenefitCard
interface DetailBenefitCardProps {
  icon: IconType;
  title: string;
  details: string;
}

// Card สำหรับ "Detailed Benefits" (ผลประโยชน์ 6 ข้อ)
const DetailBenefitCard: React.FC<DetailBenefitCardProps> = ({
  icon: Icon,
  title,
  details,
}) => (
  <div
    className={`flex items-start space-x-4 p-4 rounded-lg hover:${CARD_BG} transition duration-300`}
  >
    <div
      className={`mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[${ACCENT_GOLD}] text-[${ACCENT_GOLD}]`}
    >
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <h4 className={`text-lg font-semibold ${PRIMARY_COLOR} mb-1`}>{title}</h4>
      <p className={`text-sm ${SECONDARY_COLOR}`}>{details}</p>
    </div>
  </div>
);

// Gallery Section (ปรับปรุง Style ให้เข้า Dark Mode)
const GallerySection = ({ images }: { images: string[] }) => (
  <div className="mt-8 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {images.map((img, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-lg overflow-hidden border ${BORDER_COLOR} transition-all duration-500 hover:scale-[1.03]`}
          data-aos="zoom-in"
          data-aos-delay={index * 50}
        >
          <Image
            src={img}
            alt={`Gallery ${index + 1}`}
            width={1000}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
);

// ----------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------

const KeymanInsurancePage = () => {
  const insuranceImages = ["/tokio-pa-hero.png"]; // เปลี่ยน Hero Image เป็น PA
  // รวมภาพทั้งหมดสำหรับ Gallery (ใช้เฉพาะส่วนที่จำเป็น)
  const galleryImages = [
    ...[
      "/pa-info-01.png",
      "/pa-info-02.png",
      "/pa-info-03.png",
      "/pa-info-04.png",
    ],
    // ลบภาพเดิมออกและใส่ภาพ PA ใหม่
    ...["/pa-plan-1.png", "/pa-plan-2.png", "/pa-plan-3.png", "/pa-plan-4.png"],
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className={`min-h-screen ${DARK_BG}`}>
      {/* 1. Hero Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div
              className={`inline-flex items-center px-6 py-2 rounded-full border-2 font-bold text-sm`}
              style={{
                borderColor: ACCENT_GOLD,
                backgroundColor: ACCENT_GOLD,
                color: "black",
              }}
            >
              <Star className="w-4 h-4 mr-2 text-black" />
              แผนประกันอุบัติเหตุส่วนบุคคล
            </div>

            <div>
              <h1
                className={`text-6xl lg:text-5xl font-extrabold leading-snug mb-4 ${PRIMARY_COLOR}`}
              >
                ประกันอุบัติเหตุ
                <br />
                <span className={`text-[${ACCENT_GOLD}]`}>
                  PA Prestige Care
                </span>
              </h1>
              <p
                className={`text-xl ${SECONDARY_COLOR} leading-relaxed max-w-lg`}
              >
                แผนประกันอุบัติเหตุสุดคุ้ม
                ช่วยลดภาระของคุณจากค่ารักษาพยาบาลในโรงพยาบาลหากบาดเจ็บจากอุบัติเหตุ
              </p>
            </div>
            <Link
              href="/contact"
              className={`inline-flex items-center px-8 py-4 bg-[${ACCENT_DARK_GOLD}] text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-[${ACCENT_GOLD}]`}
            >
              รับใบเสนอราคา
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative shadow-2xl" data-aos="fade-left">
            <Image
              src={insuranceImages[0]}
              alt="PA Prestige Care Insurance"
              width={800}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 2. Section: What is PA Prestige Care? (คำจำกัดความ) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-8 ${PRIMARY_COLOR}`}
          >
            แบบประกัน PA Prestige Care คืออะไร?
          </h2>
          <p
            className={`text-2xl font-medium max-w-4xl mx-auto leading-relaxed text-[${ACCENT_GOLD}]`}
          >
            "ประกันอุบัติเหตุที่ครอบคลุมได้มากกว่า"
          </p>
          <p className={`text-lg mt-4 ${SECONDARY_COLOR} max-w-3xl mx-auto`}>
            แบบประกัน PA หรือประกันอุบัติเหตุ PA คือ
            แผนความคุ้มครองอุบัติเหตุส่วนบุคคลที่ให้ความคุ้มครองหลากหลาย
            สมัครง่ายและสะดวกสบาย ไม่ต้องสำรองจ่ายเงินค่ารักษาพยาบาลล่วงหน้า
            พร้อมสามารถเลือกซื้อความคุ้มครองเพิ่มเติมกรณีกระดูกแตกหัก
            หรือรับการชดเชยรายได้ระหว่างเข้ารับการรักษาตัวในโรงพยาบาล
          </p>
        </div>
      </section>

      {/* 3. Section: Why Buy (เหตุผลที่ต้องซื้อ - 4 ข้อ) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 text-[${ACCENT_GOLD}]`}
            data-aos="fade-up"
          >
            ทำไมต้องเลือกประกันอุบัติเหตุ PA?
          </h2>

          {/* ปรับให้เป็น 2 คอลัมน์แทน 3 คอลัมน์ เพื่อรองรับ 4 ข้อ และคง Style เดิม */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WHY_BUY_BENEFITS.map((item, index) => (
              <WhyBuyCard key={index} {...item} delay={index * 150 + 100} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section: Detailed Benefits (ผลประโยชน์ที่คุณจะได้รับ - 7 ข้อ) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${PRIMARY_COLOR}`}
            data-aos="fade-up"
          >
            ผลประโยชน์หลักที่คุณจะได้รับ
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DETAILED_BENEFITS.map((item, index) => (
              <DetailBenefitCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: Visual Gallery (ภาพประกอบ) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className={`text-4xl font-bold mb-12 text-[${ACCENT_GOLD}]`}>
            ตารางสรุปแผนความคุ้มครอง
          </h2>
          <GallerySection images={galleryImages} />
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-slate-900/80">
        <div className="max-w-5xl mx-auto">
          <h3 className={`text-3xl font-bold mb-4 ${PRIMARY_COLOR}`}>
            พร้อมสร้างหลักประกันที่มั่นคงแล้วหรือยัง?
          </h3>
          <p className={`text-lg mb-6 ${SECONDARY_COLOR}`}>
            การพิจารณารับประกันภัยให้เป็นไปตามเกณฑ์ที่บริษัทกำหนด
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center px-10 py-4 bg-[${ACCENT_DARK_GOLD}] text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-[${ACCENT_GOLD}]`}
          >
            ติดต่อผู้เชี่ยวชาญด้านประกันอุบัติเหตุ &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KeymanInsurancePage;
