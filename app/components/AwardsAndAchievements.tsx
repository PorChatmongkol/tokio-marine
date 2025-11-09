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
        'ยกระดับเทคโนโลยีเพื่อประสบการณ์ลูกค้าในยุคใหม่อย่างต่อเนื่อง',
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
        'ได้รับการยอมรับจากพันธมิตรระดับโลกในฐานะผู้นำที่น่าเชื่อถือ',
      image: '/award-4.jpg',
    },
  ];

  return (
    <section className="relative w-full mx-auto px-6 py-32 bg-black overflow-hidden">
      {/* แสงพื้นหลัง Apple-style */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      {/* หัวข้อแบบ Keynote */}
      <div className="relative z-10 text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-100 via-white to-gray-400 bg-clip-text text-transparent"
        >
          Our Awards & Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          ความสำเร็จที่สะท้อนถึงความทุ่มเท นวัตกรรม และคุณภาพระดับโลกของเรา
        </motion.p>
      </div>

      {/* การ์ดรางวัล Apple-style */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-b from-gray-900/80 to-black rounded-3xl overflow-hidden  transition-all duration-700"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A37500] transition-colors duration-300">
                {award.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* เอฟเฟกต์แสง Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>
    </section>
  );
};

export default AwardsAndAchievements;
