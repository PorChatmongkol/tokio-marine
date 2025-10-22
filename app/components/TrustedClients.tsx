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
    <div className="w-full mx-auto px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">


      {/* หัวข้อ Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold   text-[#FFD700]">
          ลูกค้าที่วางใจเรา
        </h2>
        <div className="w-28 h-[2px] bg-gradient-to-r from-[#B8860B] to-[#FFD700] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        speed={800}
        loop
        loopAdditionalSlides={customers.length}
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
            <div className=" rounded-2xl   transition-all duration-500 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.05]">
              {/* รูปภาพ (ห้ามเปลี่ยนขนาด) */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={customer.image}
                  alt={`ลูกค้ารายที่ ${customer.id}`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay ทองบาง ๆ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
   
      </Swiper>

      {/* Swiper Pagination Style */}
      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background: linear-gradient(45deg, #B8860B, #FFD700);
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default TrustedCustomers;
