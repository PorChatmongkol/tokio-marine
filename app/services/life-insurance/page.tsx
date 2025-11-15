"use client";

import { useEffect, useState } from "react";
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
    HeartHandshake, // กองทุนฌาปนกิจ
    BarChart3, // เบี้ยประกันไม่สูง
    Wallet, // เงินคืน
    CheckCircle,
    ClipboardX // ยกเว้นเบี้ย
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ----------------------------------------------------
// 1. CONSTANTS & HELPER DATA
// ----------------------------------------------------
const PRIMARY_COLOR = 'text-slate-100';
const SECONDARY_COLOR = 'text-slate-400';
const ACCENT_GOLD = '#D69E2E'; // Lighter Gold for text/highlight
const ACCENT_DARK_GOLD = '#A37500'; // Darker Gold for BG/Buttons
const DARK_BG = 'bg-slate-900';
const CARD_BG = 'bg-slate-800/70';
const BORDER_COLOR = 'border-slate-700';

// Data สำหรับ "ทำไมต้องซื้อ" (Why Buy)
const WHY_BUY_BENEFITS: { icon: React.ElementType, title: string, details: string }[] = [
    { 
        icon: BarChart3, 
        title: "เบี้ยไม่สูง คุ้มครองสูง", 
        details: "มีอัตราค่าเบี้ยประกันภัยไม่สูงมาก แต่ให้ความคุ้มครองชีวิตที่ยาวนานถึงอายุ 90 ปี" 
    },
    { 
        icon: Home, 
        title: "หลักประกันครอบครัว", 
        details: "มอบความมั่นคงให้คนที่อยู่ข้างหลัง ไม่ต้องกังวลจากภาระค่าใช้จ่ายที่อาจเกิดขึ้นในอนาคต" 
    },
    { 
        icon: Clock, 
        title: "ยืดหยุ่นการชำระเบี้ย", 
        details: "เลือกระยะเวลาชำระเบี้ยประกันภัยได้อย่างหลากหลาย ตามความต้องการ (เช่น 10 ปี, 15 ปี, 20 ปี)" 
    },
    { 
        icon: Wallet, 
        title: "มีเงินคืนเมื่อครบสัญญา", 
        details: "เป็นประกันชีวิตตลอดชีพแบบมีเงินคืน โดยเบิกเงินสดคืนได้แบบไม่ขาดทุน หลังจากส่งครบไม่เกิน 5 ปี" 
    },
    { 
        icon: HeartHandshake, 
        title: "เงินเลี้ยงดูรายเดือนพิเศษ", 
        details: "นอกจากเงินก้อนแล้ว ยังมีเงินเลี้ยงดูให้คนข้างหลังแบบรายเดือนอีก 24 เดือน (เอกสิทธิ์เฉพาะ)" 
    },
];

// Data สำหรับ "ผลประโยชน์ที่คุณจะได้รับ" (Detailed Benefits)
const DETAILED_BENEFITS: { icon: React.ElementType, title: string, details: string }[] = [
    { 
        icon: Shield, 
        title: "ผลประโยชน์ความคุ้มครอง (ครบสัญญา)", 
        details: "รับเงิน 100% ของจำนวนเงินเอาประกันภัย ณ สิ้นปีกรมธรรม์ที่ครบอายุ 90 ปี" 
    },
    { 
        icon: DollarSign, 
        title: "ผลประโยชน์การเสียชีวิต", 
        details: "รับจำนวนเงินที่มากกว่าระหว่าง 100% ของจำนวนเงินเอาประกันภัย, มูลค่าเวนคืน, หรือเบี้ยประกันภัยสะสม" 
    },
    { 
        icon: Clock, 
        title: "เลือกระยะเวลาชำระเบี้ยได้หลากหลาย", 
        details: "เลือกชำระได้ 10 ปี, 15 ปี, 20 ปี, ครบอายุ 60 ปี, ครบอายุ 70 ปี และครบอายุ 90 ปี" 
    },
    { 
        icon: Wallet, 
        title: "สิทธิลดหย่อนภาษี", 
        details: "สามารถนำเบี้ยประกันไปคำนวณลดหย่อนภาษีได้สูงสุด 100,000 บาท (ตามเงื่อนไขกรมสรรพากร)" 
    },
    { 
        icon: ClipboardX, 
        title: "ฟรี สัญญาเพิ่มเติมยกเว้นเบี้ยฯ (WP)", 
        details: "ฟรีความคุ้มครองพิเศษยกเว้นการชำระเบี้ยประกันภัย หากผู้เอาประกันตกเป็นบุคคลทุพพลภาพสิ้นเชิงถาวร" 
    },
    { 
        icon: HeartHandshake, 
        title: "ฟรี กองทุนฌาปนกิจ (FNB)", 
        details: "มอบค่าปลงศพเบื้องต้น กรณีเสียชีวิตหลังสัญญามีผลไม่น้อยกว่า 2 ปี รับเงินช่วยเหลือค่าปลงศพเบื้องต้นทันที (สูงสุด 300,000 บาท)" 
    },
];

// ----------------------------------------------------
// 2. MAIN COMPONENT
// ----------------------------------------------------

const LifeInsurancePage = () => {
    const insuranceImages = ["/tokio-all-life.png"]; // Hero Image
    // รวมภาพทั้งหมดสำหรับ Gallery (ใช้เฉพาะส่วนที่จำเป็น)
    const galleryImages = [
        ...[
            "/life-insurance-men-01.png", "/life-insurance-men-02.png", "/life-insurance-men-03.png", 
            "/life-insurance-men-04.png", "/life-insurance-men-05.png",
        ],
        ...[
            "/all-life (11).png", "/all-life (12).png", "/all-life (13).png", 
            "/all-life (14).png", "/all-life (15).png", "/all-life (16).png", 
            "/all-life (17).png", "/all-life (18).png",
        ]
    ];


    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 100 });
    }, []);

    return (
        <div className={`min-h-screen ${DARK_BG}`}>
            
            {/* 1. Hero Section (ปรับปรุง Headline และ Style) */}
            <section className="py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div
                            className={`inline-flex items-center px-6 py-2 rounded-full border-2 font-bold text-sm`}
                            style={{ borderColor: ACCENT_GOLD, backgroundColor: ACCENT_GOLD, color: "black" }}
                        >
                            <Star className="w-4 h-4 mr-2 text-black" />
                            ประกันยอดนิยมอันดับ 1
                        </div>

                        <div>
                            <h1 className={`text-6xl lg:text-5xl font-extrabold leading-snug mb-4 ${PRIMARY_COLOR}`}>
                                ประกันชีวิตตลอดชีพ<br/>
                                <span className={`text-[${ACCENT_GOLD}]`}>โตเกียว ออล ไลฟ์</span>
                            </h1>
                            <p className={`text-xl ${SECONDARY_COLOR} leading-relaxed max-w-lg`}>
                                คุ้มครองคนที่คุณรักอย่างยาวนาน มีเงินคืน และเป็นหลักประกันที่มั่นคงทางการเงินในอนาคต
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
                            alt="Tokio All Life Insurance"
                            width={800}
                            height={600}
                            className="w-full h-96 lg:h-[500px] object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Section: What is Tokio All Life? (คำจำกัดความ) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${PRIMARY_COLOR}`}>
                        Tokio All Life คืออะไร?
                    </h2>
                    <p className={`text-2xl font-medium max-w-4xl mx-auto leading-relaxed text-[${ACCENT_GOLD}]`}>
                         "แบบประกันชีวิตตลอดชีพแบบมีเงินคืนที่มีที่เดียวในไทย"
                    </p>
                    <p className={`text-lg mt-4 ${SECONDARY_COLOR} max-w-3xl mx-auto`}>
                        เป็นแบบประกันที่มีอัตราเบี้ยประกันภัยไม่สูงมาก เหมาะสำหรับคนที่เริ่มต้นสร้างครอบครัว 
                        และต้องการวางแผนเพื่อสร้างความมั่นคงในอนาคต ให้ความคุ้มครองการเสียชีวิต และได้รับเงินคืนเมื่ออยู่ครบสัญญา 
                        พร้อมสิทธิลดหย่อนภาษี
                    </p>
                </div>
            </section>

            {/* 3. Section: Why Buy (เหตุผลที่ต้องซื้อ - 5 ข้อ) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-4xl font-bold text-center mb-12 text-[${ACCENT_GOLD}]`} data-aos="fade-up">
                        เหตุผลที่ต้องเลือก Tokio All Life
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_BUY_BENEFITS.map((item, index) => (
                            <WhyBuyCard key={index} {...item} delay={index * 150 + 100} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Section: Detailed Benefits (ผลประโยชน์ที่คุณจะได้รับ - 6 ข้อ) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-4xl font-bold text-center mb-12 ${PRIMARY_COLOR}`} data-aos="fade-up">
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
                        ข้อมูลเพิ่มเติม (ภาพประกอบ)
                    </h2>
                    <GallerySection images={galleryImages} />
                </div>
            </section>

            {/* 6. Footer CTA */}
             <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-slate-900/80">
                <div className="max-w-5xl mx-auto">
                    <h3 className={`text-3xl font-bold mb-4 ${PRIMARY_COLOR}`}>พร้อมสร้างหลักประกันที่มั่นคงแล้วหรือยัง?</h3>
                    <p className={`text-lg mb-6 ${SECONDARY_COLOR}`}>
                        การพิจารณารับประกันภัยให้เป็นไปตามเกณฑ์ที่บริษัทกำหนด
                    </p>
                    <Link
                        href="/contact"
                        className={`inline-flex items-center px-10 py-4 bg-[${ACCENT_DARK_GOLD}] text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-[${ACCENT_GOLD}]`}
                    >
                        ติดต่อผู้เชี่ยวชาญด้านประกันชีวิต &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LifeInsurancePage;

/* ------------------------ Sub Component ------------------------ */

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

// Card สำหรับ "Why Buy" (เหตุผลที่ต้องซื้อ)
const WhyBuyCard = ({ icon: Icon, title, details, delay }: { icon: React.ElementType, title: string, details: string, delay: number }) => (
    <div 
        className={`p-6 md:p-8 rounded-2xl ${CARD_BG} ${BORDER_COLOR} border shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(214,158,46,0.3)] hover:scale-[1.02]`}
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-[${ACCENT_DARK_GOLD}] text-white mb-4 shadow-md`}>
            <Icon className="w-7 h-7" />
        </div>
        <h3 className={`text-xl font-bold ${PRIMARY_COLOR} mb-3`}>{title}</h3>
        <p className={`text-sm ${SECONDARY_COLOR}`}>{details}</p>
    </div>
);

// Card สำหรับ "Detailed Benefits" (ผลประโยชน์ 6 ข้อ)
const DetailBenefitCard = ({ icon: Icon, title, details }: { icon: React.ElementType, title: string, details: string }) => (
    <div className={`flex items-start space-x-4 p-4 rounded-lg hover:${CARD_BG} transition duration-300`}>
        <div className={`mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[${ACCENT_GOLD}] text-[${ACCENT_GOLD}]`}>
            <Icon className="w-4 h-4" />
        </div>
        <div>
            <h4 className={`text-lg font-semibold ${PRIMARY_COLOR} mb-1`}>{title}</h4>
            <p className={`text-sm ${SECONDARY_COLOR}`}>{details}</p>
        </div>
    </div>
);