"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AwardsAndAchievements = () => {
  const awards = [
    {
      id: 1,
      title: "รางวัลคุณภาพยอดเยี่ยมประจำปี 2023",
      description: "มาตรฐานระดับสากล",
      image: "/award-1.jpg",
      height: "h-[300px]",
    },
    {
      id: 2,
      title: "รางวัลนวัตกรรมโดดเด่น",
      description: "เทคโนโลยีล้ำสมัย",
      image: "/award-2.jpg",
      height: "h-[420px]",
    },
    {
      id: 3,
      title: "รางวัลผู้นำด้านบริการลูกค้า",
      description: "ความพึงพอใจสูงสุด",
      image: "/award-3.jpg",
      height: "h-[260px]",
    },
    {
      id: 4,
      title: "Top Partner Recognition",
      description: "พันธมิตรระดับโลก",
      image: "/award-4.jpg",
      height: "h-[380px]",
    },
  ];

  return (
    <section className="relative w-full px-6 py-32 bg-black overflow-hidden">
      {/* Background minimal luxury */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />

      {/* Title */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-white tracking-wide"
        >
          Awards & Achievements
        </motion.h2>
        <p className="text-gray-500 mt-4 text-sm tracking-wider">
          EXCELLENCE • TRUST • INNOVATION
        </p>
      </div>

      {/* Masonry Layout */}
      <div className="relative z-10 columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto space-y-6">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid group"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#A37500]/50 transition-all duration-500">
              
              {/* Image */}
              <div className={`relative w-full ${award.height}`}>
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white text-lg font-medium mb-1 group-hover:text-[#A37500] transition">
                  {award.title}
                </h3>
                <p className="text-gray-400 text-xs tracking-wide">
                  {award.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#A37500]/10 blur-3xl rounded-full" />
    </section>
  );
};

export default AwardsAndAchievements;