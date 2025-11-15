"use client";

import React from "react";
import Image from "next/image";

const TrustedCustomers = () => {
  const customers = [
    { id: 1, image: "/customer-1.jpg" },
    { id: 2, image: "/customer-2.jpg" },
    { id: 3, image: "/customer-3.jpg" },
    { id: 4, image: "/customer-4.jpg" },
    { id: 5, image: "/customer-5.jpg" },
    { id: 6, image: "/customer-6.jpg" },
    { id: 7, image: "/customer-7.jpg" },
    { id: 8, image: "/customer-8.jpg" },
    { id: 9, image: "/customer-9.jpg" },
    { id: 10, image: "/customer-10.jpg" },
    // สามารถเพิ่มรูปภาพอื่นๆ ได้
  ];

  // กำหนดขนาดตามที่คุณต้องการ (346x273)
  const IMAGE_WIDTH = 800;
  const IMAGE_HEIGHT = 400;

  return (
    <section className="relative w-full mx-auto py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* พื้นหลังแสงทองและเงาแบบ Apple */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,180,120,0.08),transparent_70%)]" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F1EEE9]/40 via-transparent to-transparent" /> */}

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl  font-bold text-[#A37500] mb-5 tracking-tight leading-tight">
          ขอบคุณลูกค้าที่เชื่อมั่นและไว้วางใจกับเรา
        </h2>
        <p className="mt-5 text-white text-lg max-w-2xl mx-auto leading-relaxed">
          พันธมิตรและลูกค้าผู้ทรงเกียรติที่มอบความไว้วางใจให้เรา
          ดูแลความมั่นคงในทุกช่วงชีวิตอย่างมืออาชีพ
        </p>
        <div className="w-24 h-[2px] mx-auto mt-8 rounded-full bg-gradient-to-r from-[#CBB57E] to-[#E6D6A5]" />
      </div>

      {/* Static Grid Gallery */}
      <div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4" // **Grid Layout**
      >
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="flex justify-center"
            data-aos="fade-up"
          >
            <div
              // กำหนดขนาดของคอนเทนเนอร์เพื่อให้ Image มีขนาดคงที่ 346x273
              style={{ width: `${IMAGE_WIDTH}px`, height: `${IMAGE_HEIGHT}px` }}
              className="group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-[#E8E6E0]/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={customer.image}
                  alt={`ลูกค้ารายที่ ${customer.id}`}
                  width={IMAGE_WIDTH} // กำหนด Width
                  height={IMAGE_HEIGHT} // กำหนด Height
                  className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition duration-700" />
              </div>

              {/* Glow highlight */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#B89E63]/0 via-[#E6D6A5]/70 to-[#B89E63]/0 opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCustomers;
