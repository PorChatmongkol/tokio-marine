'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AwardsAndAchievements = () => {
  const awards = [
    {
      id: 1,
      title: 'รางวัลคุณภาพยอดเยี่ยมประจำปี 2023',
      description:
        'ได้รับรางวัลจากสมาคมธุรกิจแห่งประเทศไทย ในฐานะองค์กรที่ให้บริการด้วยมาตรฐานระดับสากล',
      image: '/award-1.jpg',
    },
    {
      id: 2,
      title: 'รางวัลนวัตกรรมโดดเด่น',
      description:
        'ได้รับการยอมรับจากภาครัฐในการพัฒนาเทคโนโลยีใหม่ที่ช่วยยกระดับประสบการณ์ของลูกค้า',
      image: '/award-2.jpg',
    },
    {
      id: 3,
      title: 'รางวัลผู้นำด้านบริการลูกค้า',
      description:
        'องค์กรที่ได้รับความพึงพอใจสูงสุดจากการสำรวจความคิดเห็นลูกค้าในปี 2024',
      image: '/award-3.jpg',
    },
    {
      id: 4,
      title: 'Top Partner Recognition',
      description:
        'ได้รับการรับรองจากพันธมิตรชั้นนำระดับโลกในฐานะพันธมิตรทางธุรกิจที่มีความน่าเชื่อถือสูง',
      image: '/award-4.jpg',
    },
  ];

  return (
    <section className="relative w-full mx-auto px-6 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* พื้นหลังทองบาง ๆ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_70%)]"></div>

      {/* หัวข้อ */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B] drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
          ผลงานและรางวัลของเรา
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          ความภาคภูมิใจและความสำเร็จที่สะท้อนถึงคุณภาพและความทุ่มเทของเรา
        </p>
        <div className="w-32 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#B8860B] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.3)]"></div>
      </div>

      {/* แสดงรางวัล */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 relative z-10">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-slate-800 to-slate-900 border border-[#FFD700]/20 rounded-2xl shadow-[0_4px_20px_rgba(255,215,0,0.05)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.15)] transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:scale-[1.03]"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#FFD700] mb-3">
                {award.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAndAchievements;
