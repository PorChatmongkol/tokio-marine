'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const TrustedCustomers = () => {
  const customers = [
    { id: 1, image: '/customer-1.jpg' },
    { id: 2, image: '/customer-2.jpg' },
    { id: 3, image: '/customer-3.jpg' },
    { id: 4, image: '/customer-4.jpg' },
    { id: 5, image: '/customer-5.jpg' },
    { id: 6, image: '/customer-6.jpg' },
    { id: 7, image: '/customer-7.jpg' },
    { id: 8, image: '/customer-8.jpg' },
    { id: 9, image: '/customer-9.jpg' },
    { id: 10, image: '/customer-10.jpg' },
  ];

  return (
    <div className="relative w-full mx-auto px-6 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* พื้นหลังเอฟเฟกต์แสงทอง */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_70%)]" />

      {/* หัวข้อ Section */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B] drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
          ลูกค้าที่วางใจเรา
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          พันธมิตรและลูกค้าชั้นนำที่มอบความไว้วางใจในคุณภาพและบริการของเรา
        </p>
        <div className="w-32 h-[2px] mx-auto mt-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.3)]" />
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        speed={800}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="custom-swiper relative z-10"
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id}>
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-[#FFD700]/20 rounded-2xl shadow-[0_4px_20px_rgba(255,215,0,0.05)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.15)] transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:scale-[1.03]">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={customer.image}
                  alt={`ลูกค้ารายที่ ${customer.id}`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Pagination */}
      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background: linear-gradient(45deg, #b8860b, #ffd700);
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default TrustedCustomers;
