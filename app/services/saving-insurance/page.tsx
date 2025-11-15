"use client";
import { useEffect } from "react";
import { Star, Clock, DollarSign, Shield, CheckCircle, TrendingUp, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

// ----------------------------------------------------
// 1. CONSTANTS & HELPER DATA
// ----------------------------------------------------
const ACCENT_GOLD = '#D69E2E';
const ACCENT_DARK_GOLD = '#A37500'; 
const DARK_BG = 'bg-slate-900';
const CARD_BG = 'bg-slate-800/70';
const BORDER_COLOR = 'border-slate-700';
const PRIMARY_COLOR = 'text-slate-100';
const SECONDARY_COLOR = 'text-slate-300'; // ปรับให้สว่างขึ้นเพื่อ Readability

// Data สำหรับ "จุดเด่นของผลิตภัณฑ์" (4 ข้อ)
const SUPER_SAVING_BENEFITS: { icon: React.ElementType, title: string, details: string, subDetail?: string }[] = [
    { 
        icon: TrendingUp, 
        title: "ผลตอบแทนสูง อยู่ครบสัญญา", 
        details: "รับผลตอบแทนที่คุ้มค่าเมื่ออยู่ครบสัญญาตามระยะเวลาที่ต้องการ",
        subDetail: "แผน 18/6: รับเงินคืน 140% ของจำนวนเงินเอาประกันภัยเริ่มต้น"
    },
    { 
        icon: Shield, 
        title: "คุ้มครองกรณีเสียชีวิต", 
        details: "รับความคุ้มครองที่สูงที่สุดระหว่าง 100% ของจำนวนเงินเอาประกันภัย, มูลค่าเวนคืน หรือเบี้ยประกันภัยสะสม",
    },
    { 
        icon: DollarSign, 
        title: "ลดหย่อนภาษีสูงสุด 100,000 บาท", 
        details: "เบี้ยประกันภัยสามารถนำไปใช้สิทธิลดหย่อนภาษีเงินได้บุคคลธรรมดาได้สูงสุด 100,000 บาทต่อปี", 
        subDetail: "(เป็นไปตามเงื่อนไขของกรมสรรพากร)"
    },
    { 
        icon: Clock, 
        title: "ระยะเวลาชำระเบี้ยยืดหยุ่น", 
        details: "เลือกแผนการชำระเบี้ยได้ตามต้องการ (6 ปี, 7 ปี, หรือ 10 ปี)", 
    },
];

// Mock images
const insuranceImages = ["/super-saving.webp"];
// ปรับให้เหลือ 2 รูปเพื่อใช้ Layout 2 คอลัมน์ขนาดใหญ่
const additionalImages = ["/saving-img-1.jpg", "/saving-img-2.jpg" ,"/saving-img-3.jpg"]; 

// ----------------------------------------------------
// 2. MAIN COMPONENT
// ----------------------------------------------------

const SavingInsurancePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);
    const galleryImages = [
        ...[
            "/saving-img-1.jpg", 
        ],
        ...[
            "/saving-img-2.jpg", "/saving-img-3.jpg", 
        ]
    ];

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

    return (
        <div className={`min-h-screen ${DARK_BG}`}>
            
            {/* Hero Section */}
            <section className="py-24 px-4 sm:py-32 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" >
                        {/* Left Content */}
                        <div className="space-y-8" data-aos="fade-right">
                            <div
                                className={`inline-flex items-center px-6 py-2 rounded-full border-2 font-bold text-sm tracking-wide`}
                                style={{ borderColor: ACCENT_GOLD, backgroundColor: ACCENT_GOLD, color: "black" }}
                            >
                                <Zap className="w-4 h-4 mr-2 text-black" />
                                แผนออมทรัพย์ผลตอบแทนสูง
                            </div>

                            <div>
                                <h1 className={`text-6xl lg:text-5xl font-extrabold leading-tight mb-4 ${PRIMARY_COLOR}`}>
                                    <span className={`text-[${ACCENT_GOLD}]`}>ประกัน</span>
                                    <span className="text-orange-400"> สะสมทรัพย์</span>
                                </h1>
                                {/* ปรับขนาดตัวอักษรเป็น XL และสีให้สว่างขึ้น */}
                                <p className={`text-xl ${SECONDARY_COLOR} leading-relaxed max-w-xl`}>
                                    **ประกันสะสมทรัพย์ ซูเปอร์ เซฟวิ่ง (Super Saving)** สร้างวินัยทางการเงินอย่างยั่งยืน พร้อมอิสระในการเลือกระยะเวลาการออมที่ตอบโจทย์ความต้องการ และรับผลตอบแทนที่คุ้มค่าเมื่อครบกำหนดสัญญา
                                </p>
                            </div>
                             <Link
                                href="/contact"
                                className={`inline-flex items-center px-8 py-4 bg-[${ACCENT_DARK_GOLD}] text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-[${ACCENT_GOLD}]`}
                            >
                                รับใบเสนอราคา
                            </Link>
                        </div>

                        {/* Right Image: ปรับความสูงของ Image Container ให้เด่นชัด */}
                        {/* <div className="relative shadow-2xl" data-aos="fade-left">
                            <Image
                                src={insuranceImages[0]}
                                alt="Super Saving Insurance"
                                width={800}
                                height={600}
                                className=" h-96 lg:h-[650px] object-cover rounded-3xl"
                            />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Section: Key Benefits (4 จุดเด่น) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-4xl font-bold text-center mb-4 ${PRIMARY_COLOR}`} data-aos="fade-up">
                        เหตุผลที่ควรเลือกประกันสะสมทรัพย์
                    </h2>
                    <p className={`text-xl font-medium text-center mb-16 text-[${ACCENT_GOLD}]`} data-aos="fade-up" data-aos-delay="100">
                        สร้างความมั่นคงทางการเงินในระยะยาวด้วย 4 จุดเด่นหลัก
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SUPER_SAVING_BENEFITS.map((item, index) => (
                            <BenefitCard key={index} {...item} delay={index * 150 + 200} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section: Additional Details/Gallery (Optimized Readability & Large Images) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-3xl lg:text-4xl font-bold mb-16 text-center text-[${ACCENT_GOLD}]`} data-aos="fade-up">
                        แผนออมทรัพย์ที่มาพร้อมความยืดหยุ่น
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         {/* Text Content: ใช้ Heading ใหญ่และ List ที่ชัดเจน */}
                        <div data-aos="fade-right">
                             <h3 className={`text-3xl font-extrabold mb-5 ${PRIMARY_COLOR} leading-tight`}>
                                อิสระในการเลือกแผนการออม และรับผลประโยชน์สูงสุด
                             </h3>
                            <p className={`text-lg ${SECONDARY_COLOR} leading-relaxed mb-6`}>
                                Super Saving มุ่งเน้นการสร้างวินัยทางการเงินอย่างยั่งยืน โดยคุณสามารถเลือกกำหนดระยะเวลาการออมและการชำระเบี้ยได้อย่างอิสระ ทำให้แผนนี้ตอบโจทย์เป้าหมายทางการเงินเฉพาะบุคคล
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className={`w-6 h-6 mr-3 mt-1 text-[${ACCENT_GOLD}] shrink-0`} />
                                    <span className={`text-lg ${PRIMARY_COLOR}`}>
                                        **เลือกระยะเวลาการชำระเบี้ย:** ได้แก่ 6 ปี, 7 ปี, หรือ 10 ปี เพื่อความราบรื่นทางการเงิน
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className={`w-6 h-6 mr-3 mt-1 text-[${ACCENT_GOLD}] shrink-0`} />
                                    <span className={`text-lg ${PRIMARY_COLOR}`}>
                                        **ผลประโยชน์อยู่ครบสัญญา 18/6:** รับเงินคืนรวม 140% ของจำนวนเงินเอาประกันภัยเริ่มต้น
                                    </span>
                                </li>
                                 <li className="flex items-start">
                                    <CheckCircle className={`w-6 h-6 mr-3 mt-1 text-[${ACCENT_GOLD}] shrink-0`} />
                                    <span className={`text-lg ${PRIMARY_COLOR}`}>
                                        **คุ้มครองชีวิต:** รับผลประโยชน์ที่สูงที่สุด 3 ทางเลือก เพื่อการดูแลคนที่คุณรักเป็นอย่างดี
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                         {/* Gallery: ใช้ 2 รูป 2 คอลัมน์ ขนาดใหญ่ */}
                        <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
                            <div className="col-span-1">
                                <Image 
                                    src={additionalImages[0]} 
                                    alt="Saving Image 1" 
                                    width={600} height={400} 
                                    className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="col-span-1">
                                <Image 
                                    src={additionalImages[1]} 
                                    alt="Saving Image 2" 
                                    width={600} height={400} 
                                    className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* เพิ่มรูปภาพที่ 3 ในแถวใหม่ เพื่อใช้พื้นที่ให้คุ้มค่า */}
                            <div className="col-span-2 mt-4">
                                <Image 
                                    src={"/saving-img-3.jpg"} 
                                    alt="Saving Image 3 Detail" 
                                    width={1200} height={500} 
                                    className="w-full rounded-2xl shadow-xl object-cover aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                    <h2 className={`text-4xl font-bold mb-12 text-[${ACCENT_GOLD}]`}>
                        ข้อมูลเพิ่มเติม (ภาพประกอบ)
                    </h2>
                    <GallerySection images={galleryImages} />
                </div>
            </section>
            
            {/* Footer CTA */}
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

export default SavingInsurancePage;

/* ------------------------ Sub Component ------------------------ */

// Card สำหรับ "จุดเด่นของผลิตภัณฑ์" (4 ข้อ)
const BenefitCard = ({ icon: Icon, title, details, subDetail, delay }: { icon: React.ElementType, title: string, details: string, subDetail?: string, delay: number }) => (
    <div 
        className={`p-6 md:p-8 rounded-xl ${CARD_BG} ${BORDER_COLOR} border shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(214,158,46,0.3)] hover:scale-[1.02]`}
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <div className="flex items-center mb-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-[${ACCENT_DARK_GOLD}] text-white shadow-md flex-shrink-0`}>
                <Icon className="w-7 h-7" />
            </div>
            {/* ปรับขนาด title ให้ใหญ่ขึ้น */}
            <h3 className={`text-xl font-bold ${PRIMARY_COLOR} ml-4`}>{title}</h3>
        </div>
        
        {/* ปรับขนาด details ให้ใหญ่ขึ้น และสีให้สว่างขึ้น */}
        <p className={`text-base ${SECONDARY_COLOR} mb-3`}>{details}</p>
        
        {subDetail && (
            <p className={`text-sm text-orange-400 font-medium border-t border-slate-700 pt-2 mt-2`}>
                {subDetail}
            </p>
        )}
    </div>
);