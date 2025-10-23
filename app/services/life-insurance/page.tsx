"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const LifeInsurancePage = () => {
  const insuranceImages = ["/tokio-all-life.png"];

  const additionalImages = [
    "/life-insurance-men-01.png",
    "/life-insurance-men-02.png",
    "/life-insurance-men-03.png",
    "/life-insurance-men-04.png",
    "/life-insurance-men-05.png",
  ];

  const lifeImages = [
    "/all-life (11).png",
    "/all-life (12).png",
    "/all-life (13).png",
    "/all-life (14).png",
    "/all-life (15).png",
    "/all-life (16).png",
    "/all-life (17).png",
    "/all-life (18).png",
  ];

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
          {/* Left */}
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
                <span className="text-orange-400">ชีวิต</span>
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                คุ้มครองคนที่เรารักจากหนี้สิน​ด้วยประกัน​ชีวิต​ ในช่วงเวลานึง
                หลังจากส่งครบไม่เกิน​ 5​ ปี​ เบิกเงินสดคืนได้แบบไม่ขาดทุน​
              </p>
            </div>
          </div>

          {/* Right */}
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
            ประกันชีวิตแบบตลอดชีพ โตเกียว ออล ไลฟ์ <br />
            <span className="text-[#A37500]">(Tokio All Life)</span>
          </h2>
        </div>
      </section>

      {/* Gallery Sections */}
      <GallerySection images={additionalImages} />

      {/* Title Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-2xl lg:text-3xl font-bold mb-2 text-[#17303B]">
            ประกันชีวิตตลอดชีพแบบมีเงินคืนที่มีที่เดียวในไทย​
            นอกจากมรดกที่เป็นเงินก้อนแล้ว​
            ยังมีเงินเลี้ยงดูให้คนข้างหลังแบบรายเดือนอีก​ 24​ เดือน​
            
          </p>
        </div>
      </section>
      <GallerySection images={lifeImages} />
    </div>
  );
};

export default LifeInsurancePage;

/* ------------------------ Sub Component ------------------------ */
const GallerySection = ({ images }: { images: string[] }) => (
  <div className="mt-8 p-4" data-aos="fade-up">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <Image
            src={img}
            alt={`Gallery ${index + 1}`}
            width={800}
            height={600}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);
