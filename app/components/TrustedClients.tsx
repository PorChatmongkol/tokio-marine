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
    <section className="relative w-full mx-auto py-28 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#F7F6F3] to-[#F1EEEA] overflow-hidden">
      {/* พื้นหลังแสงทองและเงาแบบ Apple */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,180,120,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F1EEE9]/40 via-transparent to-transparent" />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-20" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B89E63] to-[#E6D6A5] tracking-tight">
          ลูกค้าที่วางใจเรา
        </h2>
        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          พันธมิตรและลูกค้าผู้ทรงเกียรติที่มอบความไว้วางใจให้เรา
          ดูแลความมั่นคงในทุกช่วงชีวิตอย่างมืออาชีพ
        </p>
        <div className="w-24 h-[2px] mx-auto mt-8 rounded-full bg-gradient-to-r from-[#CBB57E] to-[#E6D6A5]" />
      </div>

      {/* Swiper Gallery */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        speed={1000}
        loop
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="custom-swiper relative z-10"
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id}>
            <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-[#E8E6E0]/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2">
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <Image
                  src={customer.image}
                  alt={`ลูกค้ารายที่ ${customer.id}`}
                  fill
                  className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition duration-700" />
              </div>

              {/* Glow highlight */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#B89E63]/0 via-[#E6D6A5]/70 to-[#B89E63]/0 opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background: linear-gradient(90deg, #b89e63, #e6d6a5);
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 0 8px rgba(232, 210, 150, 0.8);
        }
      `}</style>
    </section>
  );
};

export default TrustedCustomers;
