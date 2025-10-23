"use client";
import { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const SavingInsurancePage = () => {
  const insuranceImages = ["/577751.jpg"];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div
              className="inline-flex items-center px-6 py-3 rounded-full border-2 font-semibold"
              style={{
                borderColor: "#D69E2E",
                backgroundColor: "#D69E2E",
                color: "white",
              }}
            >
              <Star className="w-5 h-5 mr-2" />
              ประกันยอดนิยม
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-[#D69E2E]">ประกัน</span>
                <span className="text-orange-400">บำนาญ</span>
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                เหนือกว่าการออมที่ได้รับความคุ้มครอง​ คือ​
                ผลตอบแทนจากส่วนต่างเบี้ยที่ชำระเข้ามาสูงที่สุดในวงการประกัน IRR​
                3% แผนเดียวในประเทศไทย​และมีให้เลือกมากกว่า​ 30​
                แผนเพื่อให้เหมาะสมกับช่วงเวลาที่คุณต้องการ​
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="fade-left">
            <Image
              src={insuranceImages[0]}
              alt="Life Insurance"
              width={800}
              height={600}
              className="w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#17303B]">
            ประกันบำนาญ <br />
            <span className="text-[#A37500]">(Pension Annuity)</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            วางแผนอนาคตอย่างมั่นใจ ด้วยประกันบำนาญที่ให้ผลตอบแทนคงที่
            พร้อมความคุ้มครองชีวิต เพื่อความสบายใจในวัยเกษียณ
          </p>
        </div>
      </section>

      {/* Gallery - Centered & Large */}
      <section className="py-16 px-4 bg-gray-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          {/* ส่วนหัวหลักของ Gallery */}
          <h3 className="text-3xl font-bold text-[#17303B] mb-12 leading-relaxed">
            แบบประกันบำนาญที่ดีที่สุดแผนนึง​
            ที่วางแผนไว้เพื่อรองรับการเกษียณ​อย่างอุ่นใจ​ ไร้กังวล​
            เพราะว่าการันตีเงินบำนา​ญ​ให้เลยนับตั้งแต่วันที่ทำประกันตามข้อเสนอ​
          </h3>

          {/* ส่วนรูปภาพทั้งหมด */}
          <div className="flex flex-col items-center gap-16">
            {/* รูปแรก */}
            <div className="w-full" data-aos="zoom-in">
              <Image
                src="/pension-img-1.jpg"
                alt="Pension Plan"
                width={1200}
                height={700}
                className="rounded-3xl shadow-2xl object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
        {/* 2 */}
        <br />
        <div className="max-w-6xl mx-auto text-center">
          {/* ส่วนหัวหลักของ Gallery */}
          <h3 className="text-3xl font-bold text-[#17303B] mb-12 leading-relaxed">
            แบบประกันบำนา​ญ​พิเศษที่ทำได้ทุกคน​
            เหมาะสำหรับคนที่มีปัญหาสุขภาพที่ต้องการซื้อเพื่อใช้ลดหย่อนภาษีโดยเฉพาะ​เพราะไม่ต้องตอบคำถามสุขภาพ​
          </h3>

          {/* ส่วนรูปภาพทั้งหมด */}
          <div className="flex flex-col items-center gap-16">
            {/* รูปแรก */}
            <div className="w-full" data-aos="zoom-in">
              <Image
                src="/pension-annuity-1.jpg"
                alt="Pension Plan"
                width={1200}
                height={700}
                className="rounded-3xl shadow-2xl object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-orange-400">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อเลือกแผนประกันที่เหมาะกับคุณ
          </p>
          <button className="bg-[#A78B61] text-[#17303B] font-semibold py-4 px-10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:bg-[#bda272]">
            สนใจติดต่อ
          </button>
        </div>
      </section>
    </div>
  );
};

export default SavingInsurancePage;
