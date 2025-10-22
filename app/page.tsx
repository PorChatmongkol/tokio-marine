"use client";
import { ShieldCheck, TrendingUp, Award, User } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Head from "next/head";
import MainInsurance from "./components/tokio-beyond";
import OurServices from "./components/OurService";
import TrustedClients from "./components/TrustedClients";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>ประกันโตเกียวมารีน - ตัวแทนมืออาชีพ</title>
        <meta
          name="description"
          content="ประกันชั้นนำโดยตัวแทนมืออาชีพ วางแผนการลงทุนและประกันสุขภาพครบวงจร"
        />
        <meta
          name="keywords"
          content="ประกันควบการลงทุน, ประกันสุขภาพ, ประกันชีวิต, ตัวแทนประกัน, วรศักดิ์ ทับห่วง"
        />
        <meta name="author" content="วรศักดิ์ ทับห่วง" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="NvmRC8mrLqVIPWOZXVWLoO6l0eB8vB-sBx9uaJkjt4E" />
       

        {/* Open Graph */}
        <meta property="og:title" content="ประกันโตเกียวมารีน - ตัวแทนมืออาชีพ" />
        <meta
          property="og:description"
          content="วางแผนการลงทุนและประกันสุขภาพครบวงจร ด้วยตัวแทนมืออาชีพ วรศักดิ์ ทับห่วง"
        />
        <meta property="og:image" content="https://example.com/images/profile-1.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ประกันโตเกียวมารีน" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ประกันโตเกียวมารีน - ตัวแทนมืออาชีพ" />
        <meta
          name="twitter:description"
          content="วางแผนการลงทุนและประกันสุขภาพครบวงจร ด้วยตัวแทนมืออาชีพ วรศักดิ์ ทับห่วง"
        />
        <meta name="twitter:image" content="https://example.com/images/profile-1.jpg" />
        <meta name="twitter:site" content="@your_twitter_handle" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "วรศักดิ์ ทับห่วง - ตัวแทนประกัน",
              image: "https://example.com/images/profile-1.jpg",
              url: "https://yourwebsite.com",
              telephone: "+66-1234-5678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 ถนนสุขุมวิท",
                addressLocality: "กรุงเทพฯ",
                postalCode: "10110",
                addressCountry: "TH",
              },
              description:
                "ตัวแทนประกันมืออาชีพ ให้คำปรึกษาด้านประกันชีวิตและประกันสุขภาพ วางแผนการลงทุนครบวงจร",
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden" data-aos="fade" data-aos-delay="200">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-800/30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8 lg:pr-8" data-aos="fade-right" data-aos-delay="400">
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-medium text-sm">ความปลอดภัยที่เชื่อถือได้</span>
                </div>
                <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-orange-400 font-medium text-sm">การเติบโตที่ยั่งยืน</span>
                </div>
                <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 shadow-sm">
                  <Award className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-medium text-sm">รางวัลความเป็นเลิศ</span>
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-white font-sans">
                  วางแผนอนาคต
                  <span className="block text-blue-400">ด้วยประกันควบการลงทุน</span>
                </h1>
                <h2 className="text-xl md:text-5xl font-semibold text-orange-400">วรศักดิ์ ทับห่วง (หนุ่ม)</h2>
                <div className="space-y-4">
                  <p className="text-base text-slate-300 leading-relaxed">
                    ใกล้เคียงคำว่ากองทุนสำหรับการเกษียณได้มากที่สุด เพราะไม่มีการเก็บค่าธรรมเนียมแรกเข้า​ 5​ ปีแรก​ ทำให้เงินคงเหลือในพอร์ตการลงทุนมาถึง​ 90% และ​ กองทุน.....
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-700/30">
                  <Image
                    src={"/profile-1.jpg"}
                    alt="วรศักดิ์ ทับห่วง - ที่ปรึกษาการเงินมืออาชีพ"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-8 right-8 w-72 h-72 bg-gradient-to-br from-blue-600/30 to-orange-500/20 rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-orange-500/30 to-emerald-500/20 rounded-full opacity-40 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokio Beyond */}
      <MainInsurance />

      {/* About Me Section */}
      <section className="bg-[#FAFAF8] py-16" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#A78B61] mb-3">เกี่ยวกับตัวแทนประกัน</h2>
            <p className="text-gray-600 text-sm md:text-base">เพราะความมั่นคงของคุณคือภารกิจของเรา</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/about-img.jpg"
                  alt="Insurance Agent"
                  width={300}
                  height={400}
                  className="object-cover rounded-2xl shadow-md border border-[#EAE7E1]"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#A78B61] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  ตัวแทนมืออาชีพ
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#17303B]">นายวรศักดิ์ ทับห่วง</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam at ab recusandae libero deserunt vel, aliquid, ipsum, quo consequuntur sunt! Excepturi inventore explicabo voluptas, ab molestias repellat eius sit!
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#A78B61] mt-0.5" />
                  <span className="text-gray-700 text-sm">ได้รับใบอนุญาตตัวแทนประกันชีวิตและประกันสุขภาพจาก คปภ.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#A78B61] mt-0.5" />
                  <span className="text-gray-700 text-sm">รางวัลตัวแทนยอดเยี่ยม 3 ปีซ้อน (2022–2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <User className="w-5 h-5 text-[#A78B61] mt-0.5" />
                  <span className="text-gray-700 text-sm">ให้คำปรึกษาอย่างตรงไปตรงมา ดูแลตลอดอายุกรมธรรม์</span>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block bg-[#A78B61] text-white px-6 py-3 rounded-xl hover:bg-[#92754D] transition text-sm font-medium shadow-sm"
                >
                  ติดต่อขอคำปรึกษา
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* บริการประกันอื่นๆ */}
      <OurServices />

      {/* ลูกค้าที่ไว้วางใจ */}
      <TrustedClients />
    </>
  );
}
