"use client";
import { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

const SavingInsurancePage = () => {
  // Mock images - using placeholder for demo
  const insuranceImages = ["/577751.jpg"];

  const additionalImages = [
    "/pension-img-1.jpg",
    "/pension-annuity-1.jpg",
   

   
   
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // ความเร็ว animation (ms)
      easing: "ease-in-out", // รูปแบบ easing
      once: true, // เล่น animation ครั้งเดียว
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        // style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div
                className="inline-flex items-center px-6 py-3 rounded-full border-2"
                style={{
                  borderColor: "#D69E2E",
                  backgroundColor: "#D69E2E",
                  color: "white",
                }}
              >
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">ประกันยอดนิยม</span>
              </div>

              <div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
                  <span style={{ color: "#D69E2E" }}>ประกัน</span>
                  <span className=" text-orange-400">บำนาญ</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg text-white">
                   เหนือกว่าการออมที่ได้รับความคุ้มครอง​ คือ​
                  ผลตอบแทนจากส่วนต่างเบี้ยที่ชำระเข้ามาสูงที่สุดในวงการประกัน
                  IRR​ 3% แผนเดียวในประเทศไทย​และมีให้เลือกมากกว่า​ 30​
                  แผนเพื่อให้เหมาะสมกับช่วงเวลาที่คุณต้องการ​
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative" data-aos="fade-left">
              <div className="relative">
                <Image
                  src={insuranceImages[0]}
                  alt="Life Insurance"
                  width={800}
                  height={600}
                  className=" lg:h-[600px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="text-center">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#17303B" }}
              >
                ประกันบำนาญ <br />
                <span style={{ color: "#A37500" }}>(Pension annuity)</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                เบื่อไหมกับการที่ต้องคอยกังวลเรื่องค่ารักษาพยาบาลที่พุ่งสูงขึ้นทุกวัน?
                ประกันสุขภาพเหมาจ่ายจากโตเกียวมารีน คือทางออกที่คุณกำลังมองหา
                ด้วยแผนความคุ้มครองที่ครอบคลุมค่าใช้จ่ายทางการแพทย์ได้อย่างครบวงจร
                ทำให้คุณหมดห่วงเรื่องค่ารักษา ไม่ว่าจะเจ็บป่วยเล็กน้อย
                หรือเป็นโรคร้ายแรง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="mt-8 p-4" data-aos="fade-up">
        {/* <h2 className="text-xl lg:text-3xl font-bold mb-6 text-red-500 text-center">
          !!! เลือกประกันสุขภาพเหมาจ่าย โตเกียวมารีนวันนี้
          เพื่ออิสระทางการเงินในยามเจ็บป่วย !!!
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2  max-w-6xl mx-auto">
          {additionalImages.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image
                src={img}
                alt={`Tokio Health Gallery ${index + 1}`}
                width={900}
                height={600}
                className=" object-cover"
              />
            </div>
          ))}
        </div>
      </div>

     

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-orange-400 ">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อเลือกแผนประกันที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#A78B61] text-[#17303B] border-2 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
              สนใจติดต่อ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavingInsurancePage;
