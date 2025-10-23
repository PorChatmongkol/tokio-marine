"use client";
import { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

const HealthInsurancePage = () => {
  // Mock images - using placeholder for demo
  const insuranceImages = [
    "/577751.jpg",
  ];

  const additionalImages = [
    "/577751.jpg",
    "/577752.jpg",
    "/577753.jpg",
    "/577754.jpg",
    "/577755.jpg",
    "/577756.jpg",
    "/577757.jpg",
    "/577758.jpg",
    "/577759.jpg",
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
                  <span className=" text-orange-400">สุขภาพ</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  แผนประกันอะไรที่ไม่ป่วยก็ได้ใช้​ การันตีว่ามีที่นี่ที่เดียว​
                  แถมฟรี​ OPD​ ไม่ต้องซื้อเพิ่ม
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
                ประกันสุขภาพเหมาจ่าย โตเกียว กู๊ด เฮลธ์ <br />
                <span style={{ color: "#A37500" }}>(Tokio Good Health)</span>
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
        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-red-500 text-center">
          !!! เลือกประกันสุขภาพเหมาจ่าย โตเกียวมารีนวันนี้
          เพื่ออิสระทางการเงินในยามเจ็บป่วย !!!
        </h2>
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
                alt={`Tokio Health Gallery ${index + 1}`}
                width={800}
                height={600}
                className=" object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* รายการโรคร้ายแรงที่คุ้มครอง */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "red" }}
          >
            18 โรคร้ายแรง ที่เราเพิ่มวงเงินรักษาให้ 2 เท่า ประกันสุขภาพเหมาจ่าย
            โตเกียวมารีน
          </h2>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
            <li>โรคมะเร็งระยะลุกลาม (Invasive Cancer)</li>
            <li>เนื้องอกในสมอง ชนิดที่ไม่ใช่มะเร็ง (Benign brain tumor)</li>
            <li>โรคไวรัสตับอักเสบ ขั้นรุนแรง (Fulminant Viral Hepatitis)</li>
            <li>
              การผ่าตัดเปลี่ยนตับ ตับอ่อน หรือการปลูกถ่ายไขกระดูก (Liver,
              Pancreas or Bone Marrow Transplantation)
            </li>
            <li>โรคโลหิตจาง จากไขกระดูกไม่สร้างเม็ดโลหิต (Aplastic Anemia)</li>
            <li>
              กล้ามเนื้อหัวใจตายเฉียบพลัน จากการขาดเลือด (Acute Heart Attack)
            </li>
            <li>
              การผ่าตัดเส้นเลือดเลี้ยงกล้ามเนื้อหัวใจ (Coronary Artery By-pass
              Surgery)
            </li>
            <li>
              โรคเส้นเลือดหัวใจตีบ (Other serious Coronary Artery Diseases)
            </li>
            <li>
              การผ่าตัดลิ้นหัวใจ โดยวิธีการเปิดหัวใจ (Open Heart Surgery for the
              Heart Valve)
            </li>
            <li>การผ่าตัดเส้นเลือดแดงใหญ่ เอออร์ต้า (Surgery to Aorta)</li>
            <li>
              ไตอักเสบลูปูส จากโรคซิสเต็มมิค ลูปูส อิริเธมาโตซูส (Lupus
              Nephritis from Systemic Lupus Erythematosus)
            </li>
            <li>ไตวายเรื้อรัง (Chronic Kidney Failure)</li>
            <li>
              โรคหลอดเลือดสมองโป่งพอง ที่ต้องรักษาโดยการผ่าตัด (Cerebral
              Aneurysm Requiring Brain Surgery)
            </li>
            <li>
              โรคแรงดันในหลอดเลือดแดงปอดสูง แบบปฐมภูมิ (Primary Pulmonary
              Arterial Hypertension)
            </li>
            <li>
              โรคหลอดลมปอดอุดกั้นเรื้อรัง ขั้นรุนแรง / โรคปอดระยะสุดท้าย (Severe
              Chronic Obstructive Pulmonary Disease / End-stage Lung disease)
            </li>
            <li>
              การผ่าตัดเปลี่ยนหัวใจ ปอด หรือไต (Heart, Lung or Kidney
              Transplantation)
            </li>
            <li>
              ภาวะกระดูกอักเสบเรื้อรังชนิดพะเจ็ท (Paget’s Disease of Bone)
            </li>
            <li>โรคหลอดเลือดสมองแตก หรืออุดตัน (Major Stroke)</li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4 text-orange-400 "
            
          >
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อเลือกแผนประกันที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <button
              className="bg-[#A78B61] text-[#17303B] border-2 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
              
            >
              สนใจติดต่อ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthInsurancePage;
