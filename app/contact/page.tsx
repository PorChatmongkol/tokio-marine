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
  const handleContactClick = (type: string, value: string) => {
    console.log(`${type} clicked: ${value}`);
  };

  const handleSocialClick = (name: string, url: string) => {
    console.log(`Social clicked: ${name}, URL: ${url}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-12 space-y-12 border border-gray-200">

        {/* Banner ภาพทีมงาน */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <img
            src="/good-2.jpg"
            alt="Insurance Team Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* หัวข้อ */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">ติดต่อเรา</h1>
          <div className="h-1 w-24 mx-auto bg-gray-400 rounded-full"></div>
          <p className="text-gray-600 text-lg mt-4">
            เราคือพันธมิตรด้านความคุ้มครองของคุณ พร้อมให้คำปรึกษาอย่างมืออาชีพ
          </p>
        </div>

        {/* ข้อมูลติดต่อ */}
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="group flex items-center gap-4 p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => handleContactClick('โทรศัพท์', '095-559-5439')}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-lg shadow group-hover:bg-gray-400 transition-colors duration-200">
              <FaPhoneAlt className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-1">โทรศัพท์</h3>
              <p className="text-gray-600 font-medium">095-559-5439</p>
              <p className="text-gray-600 font-medium">099-451-2142</p>
            </div>
          </div>

          <div
            className="group flex items-center gap-4 p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => handleContactClick('อีเมล', 'vorasak.tub1912@outlook.co.th')}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-lg shadow group-hover:bg-gray-400 transition-colors duration-200">
              <FaEnvelope className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-1">อีเมล</h3>
              <p className="text-gray-600 font-medium text-sm break-all">
                vorasak.tub1912@outlook.co.th
              </p>
            </div>
          </div>
        </div>

        {/* โซเชียลมีเดีย */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">ติดตามเรา</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <SocialIcon
              href="https://www.facebook.com/nmnmfrv1912"
              color="facebook"
              Icon={FaFacebookF}
              onClick={() => handleSocialClick('Facebook', 'https://www.facebook.com/nmnmfrv1912')}
            />
            <SocialIcon
              href="https://www.tiktok.com/@insurancepro"
              color="tiktok"
              Icon={FaTiktok}
              onClick={() => handleSocialClick('TikTok', 'https://www.tiktok.com/@insurancepro')}
            />
            <SocialIcon
              href="https://line.me/ti/p/yourlineid"
              color="line"
              Icon={FaLine}
              onClick={() => handleSocialClick('LINE', 'https://line.me/ti/p/yourlineid')}
            />
            <SocialIcon
              href="https://linkedin.com/in/yourprofile"
              color="linkedin"
              Icon={FaLinkedinIn}
              onClick={() => handleSocialClick('LinkedIn', 'https://linkedin.com/in/yourprofile')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 🔧 Component Social Icon สีเรียบหรู
function SocialIcon({
  href,
  Icon,
  color,
  onClick,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: 'facebook' | 'tiktok' | 'line' | 'linkedin';
  onClick?: () => void;
}) {
  const hoverStyles: Record<string, string> = {
    facebook: 'hover:bg-[#E4EAF3] hover:text-[#3b5998]',
    tiktok: 'hover:bg-[#EAEAEA] hover:text-[#111111]',
    line: 'hover:bg-[#E6F5E6] hover:text-[#00B900]',
    linkedin: 'hover:bg-[#E3F2FD] hover:text-[#0077B5]',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group p-4 bg-gray-100 rounded-lg shadow transition-all duration-200 hover:scale-105 ${hoverStyles[color]}`}
    >
      <Icon className="text-2xl transition-colors duration-200" />
    </a>
  );
}
