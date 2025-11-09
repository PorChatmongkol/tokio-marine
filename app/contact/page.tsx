'use client';

import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
  FaLine,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl w-full bg-white border border-gray-200 rounded-3xl shadow-lg p-6 sm:p-10 lg:p-14 space-y-16 sm:space-y-20">
        {/* Banner */}
        <div className="w-full rounded-2xl overflow-hidden relative h-[240px] sm:h-[300px] lg:h-[340px]">
          <img
            src="/good-2.jpg"
            alt="Insurance Team Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent"></div>
          <div className="absolute bottom-6 left-6 sm:left-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg">
              มั่นใจได้ในทุกการคุ้มครอง
            </h2>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e293b] tracking-tight">
            ติดต่อเรา
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            เราพร้อมให้คำปรึกษาเรื่องประกันภัยทุกประเภท  
            เพื่อปกป้องคุณและคนที่คุณรักอย่างมั่นใจในทุกสถานการณ์
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-10">
          <ContactCard
            icon={<FaPhoneAlt className="text-lg sm:text-xl text-[#2563eb]" />}
            title="โทรศัพท์"
            details={['095-559-5439', '099-451-2142']}
          />
          <ContactCard
            icon={<FaEnvelope className="text-lg sm:text-xl text-[#2563eb]" />}
            title="อีเมล"
            details={['vorasak.tub1912@outlook.co.th']}
          />
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 my-6 sm:my-10"></div>

        {/* Social Media */}
        <div className="text-center space-y-4 sm:space-y-6 mt-6 sm:mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1e293b]">
            เชื่อมต่อกับเรา
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            ติดตามข่าวสารและสิทธิพิเศษจากเราได้ทางช่องทางต่อไปนี้
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mt-4 sm:mt-6">
            <SocialIcon
              href="https://www.facebook.com/nmnmfrv1912"
              Icon={FaFacebookF}
              label="Facebook"
              color="#1877F2"
            />
            <SocialIcon
              href="https://www.tiktok.com/@insurancepro"
              Icon={FaTiktok}
              label="TikTok"
              color="#000000"
            />
            <SocialIcon
              href="https://line.me/ti/p/yourlineid"
              Icon={FaLine}
              label="LINE"
              color="#00C300"
            />
            <SocialIcon
              href="https://linkedin.com/in/yourprofile"
              Icon={FaLinkedinIn}
              label="LinkedIn"
              color="#0077B5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🧩 Contact Card - โทนประกันภัย สุภาพ อบอุ่น */
function ContactCard({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-5 border border-gray-200 rounded-2xl p-6 sm:p-8 bg-[#f9fafb] hover:bg-[#f1f5f9] transition-colors duration-300">
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#eff6ff] rounded-xl shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-[#1e293b] mb-1">
          {title}
        </h3>
        {details.map((line, i) => (
          <p key={i} className="text-gray-600 text-sm sm:text-base">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/* 🧩 Social Icon - มีสีประจำแบรนด์ แต่ยังคงความเรียบ */
function SocialIcon({
  href,
  Icon,
  label,
  color,
}: {
  href: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties; // ✅ เพิ่มบรรทัดนี้
  }>;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-full bg-white hover:shadow-md transition-all duration-300"
    >
      <Icon className="text-xl sm:text-2xl" style={{ color }} />
    </a>
  );
}
