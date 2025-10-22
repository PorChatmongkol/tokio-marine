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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full backdrop-blur-md bg-white shadow-2xl rounded-2xl p-10 space-y-12 border border-white/20">

        {/* หัวข้อ */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#A37500] mb-2">ติดต่อเรา</h1>
          <p className="text-[#17303B] text-lg">
            เราพร้อมให้บริการและตอบทุกคำถามของคุณ
          </p>
        </div>

        {/* ข้อมูลติดต่อ */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4 p-6 bg-white/10 rounded-xl shadow-inner border border-white/20 hover:scale-105 transform transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-700  rounded-lg shadow-lg">
              <FaPhoneAlt className="w-6 h-6 text-[#A37500]" />
            </div>
            <div>
              <h3 className=" font-semibold text-lg">โทรศัพท์</h3>
              <p className="text-[#17303B]">095-559-5439</p>
              <p className="text-[#17303B]">099-451-2142 </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/10 rounded-xl shadow-inner border border-white/20 hover:scale-105 transform transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-700  rounded-lg shadow-lg">
              <FaEnvelope className="w-6 h-6 text-[#A37500]" />
            </div>
            <div>
              <h3 className=" font-semibold text-lg">อีเมล</h3>
              <p className="text-[#17303B]">vorasak.tub1912@outlook.co.th</p>
            </div>
          </div>
        </div>

        {/* โซเชียลมีเดีย */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold  mb-2">ติดตามเรา</h2>
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://facebook.com/insurancepro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 text-[#A37500] rounded-full border border-white/20 hover:bg-gradient-to-tr hover:from-blue-500 hover:to-blue-700 hover:text-white transition transform hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@insurancepro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 text-[#A37500] rounded-full border border-white/20 hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:text-white transition transform hover:-translate-y-1"
            >
              <FaTiktok />
            </a>
            <a
              href="https://line.me/R/ti/p/@insurancepro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 text-[#A37500] rounded-full border border-white/20 hover:bg-gradient-to-tr hover:from-green-500 hover:to-green-700 hover:text-white transition transform hover:-translate-y-1"
            >
              <FaLine />
            </a>
            <a
              href="https://linkedin.com/company/insurancepro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 text-[#A37500] rounded-full border border-white/20 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-blue-500 hover:text-white transition transform hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}
