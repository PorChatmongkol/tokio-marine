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
    // { id: 9, image: "/customer-9.jpg" },
    // { id: 10, image: "/customer-10.jpg" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="col-span-1 sm:col-span-2 lg:col-span-3 text-left mb-8"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ขอบคุณลูกค้าที่เชื่อมั่นและไว้วางใจกับเรา
          </h2>
        </div>

        {/* Grid */}
        <div
          className="
      grid 
      grid-cols-2 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-8
    "
        >
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex justify-center"
              data-aos="fade-up"
            >
              <div
                className="
            group relative overflow-hidden
            w-full
            aspect-square
            bg-white/60 backdrop-blur-sm
            shadow-[0_8px_30px_rgba(0,0,0,0.05)]
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
            transition-all duration-700 hover:-translate-y-2
          "
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={customer.image}
                    alt={`ลูกค้ารายที่ ${customer.id}`}
                    fill
                    className="
                object-cover
                scale-105 group-hover:scale-110
                transition-transform duration-700
              "
                  />

                  {/* Overlay */}
                  <div
                    className="
                absolute inset-0 
                bg-gradient-to-t 
                from-black/40 via-black/10 to-transparent 
                opacity-60 group-hover:opacity-30 
                transition duration-700
              "
                  />
                </div>

                {/* Glow */}
                <div
                  className="
              absolute inset-x-0 bottom-0 h-[2px]
              bg-gradient-to-r 
              from-[#B89E63]/0 via-[#E6D6A5]/70 to-[#B89E63]/0 
              opacity-0 group-hover:opacity-100 
              transition duration-700
            "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCustomers;
