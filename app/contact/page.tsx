"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
  FaLine,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

// --------------------------------------------
// CONSTANTS
// --------------------------------------------
const COLORS = {
  primary: "#0e7490",
  accent: "#D69E2E",
  line: "#00C300",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl w-full bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 space-y-16 sm:space-y-20">
        
        {/* Banner */}
        <div className="w-full rounded-2xl overflow-hidden relative h-[600px]">
          <Image
            src="/PED_0471.jpg"
            alt="Insurance Banner"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30"></div>

          <div className="absolute bottom-6 left-6 sm:left-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              ปรึกษาเรื่องประกันฟรี!
            </h2>
            <p className="text-lg font-medium mt-1" style={{ color: COLORS.accent }}>
              พร้อมดูแลคุณในทุกสถานการณ์
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-3">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: COLORS.primary }}
          >
            ติดต่อเรา
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาอย่างละเอียด
            เพื่อวางแผนคุ้มครองที่มั่นคงและเหมาะสมกับคุณที่สุด
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10">
          <ContactCard
            icon={<FaPhoneAlt />}
            title="โทรศัพท์"
            details={["095-559-5439", "099-451-2142"]}
            isPhone
          />

          <ContactCard
            icon={<FaEnvelope />}
            title="อีเมล"
            details={["vorasak.tub1912@outlook.co.th"]}
          />
        </div>

        {/* CTA */}
        <div className="text-center pt-8 pb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            ต้องการความช่วยเหลือเร่งด่วน?
          </h2>

          <a
            href="https://line.me/ti/p/yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-12 py-4 text-white font-bold text-lg rounded-full shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] ring-4 ring-offset-4 ring-offset-white ring-gray-100"
            style={{ backgroundColor: COLORS.primary }}
          >
            <FaLine className="text-2xl" style={{ color: COLORS.line }} />
            <span className="text-black">แชทปรึกษาผ่าน LINE ทันที</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200"></div>

        {/* Social Media */}
        <div className="text-center space-y-4 sm:space-y-6 mt-6 sm:mt-10">
          <h2
            className="text-xl sm:text-2xl font-semibold"
            style={{ color: COLORS.primary }}
          >
            เชื่อมต่อกับเรา
          </h2>
          <p className="text-gray-500 text-sm">
            ติดตามข่าวสารและสิทธิพิเศษจากเราได้ทางช่องทางโซเชียลมีเดีย
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mt-4 sm:mt-6">
            <SocialIcon
              href="https://www.facebook.com/nmnmfrv1912"
              Icon={FaFacebookF}
              color="#1877F2"
            />
            <SocialIcon
              href="https://www.tiktok.com/@insurancepro"
              Icon={FaTiktok}
              color="#000000"
            />
            <SocialIcon
              href="https://line.me/ti/p/yourlineid"
              Icon={FaLine}
              color="#00C300"
            />
            <SocialIcon
              href="https://linkedin.com/in/yourprofile"
              Icon={FaLinkedinIn}
              color="#0077B5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------
// COMPONENT: ContactCard
// --------------------------------------------
function ContactCard({
  icon,
  title,
  details,
  isPhone = false,
}: {
  icon: React.ReactElement<any>;
  title: string;
  details: string[];
  isPhone?: boolean;
}) {
  return (
    <div className="group flex items-start gap-5 border border-gray-100 rounded-2xl p-8 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full transition-all duration-300 group-hover:ring-2 ring-[#0e7490]/50">
        {React.cloneElement(icon as React.ReactElement, {
          className: "text-2xl",
          style: { color: COLORS.primary },
        })}
      </div>

      <div>
        <h3 className="text-lg font-bold mb-1" style={{ color: COLORS.primary }}>
          {title}
        </h3>

        {details.map((line, index) => {
          const href = isPhone
            ? `tel:${line.replace(/-/g, "")}`
            : `mailto:${line}`;

          return (
            <a
              key={index}
              href={href}
              className="text-gray-700 block hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
            >
              {line}
            </a>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------
// COMPONENT: SocialIcon
// --------------------------------------------
function SocialIcon({
  href,
  Icon,
  color,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string; style?: any }>;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:shadow-lg transition-all"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: color }}
      />
      <Icon className="text-xl sm:text-2xl relative z-10" style={{ color }} />
    </a>
  );
}
