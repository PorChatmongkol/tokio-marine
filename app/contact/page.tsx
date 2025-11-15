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

// ----------------------------------------------------
// 1. CONSTANTS
// ----------------------------------------------------
const PRIMARY_COLOR = "#0e7490"; // Deep Teal Blue
const ACCENT_COLOR = "#D69E2E"; // Gold/Amber
const LINE_COLOR = "#00C300"; // LINE Green

// ----------------------------------------------------
// 2. MAIN COMPONENT: ContactPage (ปรับปรุงแค่ส่วน CTA)
// ----------------------------------------------------

export default function ContactPage() {
  return (
    // เปลี่ยนพื้นหลังให้ดูสะอาดขึ้น
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl w-full bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 space-y-16 sm:space-y-20">
        {/* 1. Banner Section (ไม่ได้แก้ไข) */}
        <div className="w-full rounded-2xl overflow-hidden relative h-[600px] ">
          <Image
            src="/PED_0471.jpg"
            alt="Insurance Team Banner"
            fill
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay เข้มขึ้น + Gradient สองสีเพื่อมิติ */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30"></div>
          <div className="absolute bottom-6 left-6 sm:left-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              ปรึกษาเรื่องประกันฟรี!
            </h2>
            <p className={`text-lg font-medium mt-1 text-[${ACCENT_COLOR}]`}>
              พร้อมดูแลคุณในทุกสถานการณ์
            </p>
          </div>
        </div>

        {/* 2. Title Section (ไม่ได้แก้ไข) */}
        <div className="text-center space-y-3">
          <h1
            className={`text-4xl sm:text-5xl font-bold text-[${PRIMARY_COLOR}] tracking-tight`}
          >
            ติดต่อเรา
          </h1>
          <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
            ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาอย่างละเอียด
            เพื่อวางแผนคุ้มครองที่มั่นคงและเหมาะสมกับคุณที่สุด
          </p>
        </div>

        {/* 3. Contact Info (ใช้ ContactCard ที่ปรับปรุงแล้ว) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10">
          {/* Card 1: โทรศัพท์ (เน้นสี Primary) */}
          <ContactCard
            icon={<FaPhoneAlt />}
            title="โทรศัพท์"
            details={["095-559-5439", "099-451-2142"]}
            isPhone={true}
            className="shadow-xl"
          />

          {/* Card 2: อีเมล (เน้นสี Accent หรือเป็น Card ปกติ) */}
          <ContactCard
            icon={<FaEnvelope />}
            title="อีเมล"
            details={["vorasak.tub1912@outlook.co.th"]}
            isPhone={false}
            className="shadow-xl"
          />
        </div>

        {/* 4. New Section: Call to Action (ปรับปรุงสี CTA) */}
        <div className="text-center pt-8 pb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            ต้องการความช่วยเหลือเร่งด่วน?
          </h2>
          <a
            href="https://line.me/ti/p/yourlineid" // ควรเป็น Line ID จริง
            target="_blank"
            rel="noopener noreferrer"
            // 🚩 ปรับปรุง: เปลี่ยนสีพื้นหลังเป็นสี Primary (Deep Teal Blue)
            className={`inline-flex items-center space-x-3 px-12 py-4 bg-[${PRIMARY_COLOR}] text-white font-bold text-lg rounded-full shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] ring-4 ring-offset-4 ring-offset-white ring-gray-100`}
          >
            {/* 🚩 ปรับปรุง: ให้ไอคอน LINE ยังคงเป็นสีเขียว เพื่อให้โดดเด่นและเป็นไปตามแบรนด์ LINE */}
            <FaLine className="text-2xl" style={{ color: LINE_COLOR }} />
            <span className="text-black">แชทปรึกษาผ่าน LINE ทันที</span>
          </a>
        </div>

        {/* 5. Divider (ไม่ได้แก้ไข) */}
        <div className="w-full border-t border-gray-200 my-6 sm:my-10"></div>

        {/* 6. Social Media (ไม่ได้แก้ไข) */}
        <div className="text-center space-y-4 sm:space-y-6 mt-6 sm:mt-10">
          <h2
            className={`text-xl sm:text-2xl font-semibold text-[${PRIMARY_COLOR}]`}
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

// ----------------------------------------------------
// 3. HELPER COMPONENTS
// ----------------------------------------------------

/* 🧩 Contact Card (ปรับปรุง: เพิ่มพื้นหลังไอคอนสีอ่อน) */
function ContactCard({
  icon,
  title,
  details,
  isPhone,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
  isPhone: boolean;
  className?: string;
}) {
  const PRIMARY_COLOR = "#0e7490"; // Deep Teal Blue

  return (
    <div
      // 🚩 ปรับปรุง: เพิ่ม Shadow ให้ดูมีมิติ และปรับ Hover Effect
      className={`group flex items-start gap-5 border border-gray-100 rounded-2xl p-8 bg-white ${className} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
    >
      {/* Icon Area: ใช้ Ring และเปลี่ยนพื้นหลังให้มีสีสันอ่อนๆ */}
      <div
        // 🚩 ปรับปรุง: เปลี่ยน bg-white เป็น bg-opacity-10 หรือใช้สีอ่อนจาก Tailwind
        className={`w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full ring-2 ring-transparent shrink-0 transition-all duration-300 group-hover:ring-[${PRIMARY_COLOR}]/50`}
      >
        {/* ปรับสี Icon ให้เป็นสี Primary */}
        {React.cloneElement(icon as React.ReactElement, {
          className: `text-2xl text-[${PRIMARY_COLOR}]`,
        })}
      </div>

      {/* Details */}
      <div>
        <h3 className={`text-lg font-bold text-[${PRIMARY_COLOR}] mb-1`}>
          {title}
        </h3>
        {details.map((line, i) => (
          <a
            key={i}
            // เพิ่ม Link สำหรับโทรศัพท์/อีเมล
            href={isPhone ? `tel:${line.replace(/-/g, "")}` : `mailto:${line}`}
            // 🚩 ปรับปรุง: เพิ่ม Underline เมื่อ Hover เพื่อเน้นความเป็น Link
            className="text-gray-700 text-base hover:text-gray-900 transition-colors duration-300 block hover:underline underline-offset-4"
          >
            {line}
          </a>
        ))}
      </div>
    </div>
  );
}

/* 🧩 Social Icon (ไม่ได้แก้ไข) */
function SocialIcon({
  href,
  Icon,
  label,
  color,
}: {
  href: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
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
      // เพิ่ม Group และ Hover Effect
      className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-full bg-white hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Hover Background */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-10"
        style={{ backgroundColor: color }}
      />
      <Icon className="text-xl sm:text-2xl relative z-10" style={{ color }} />
    </a>
  );
}
