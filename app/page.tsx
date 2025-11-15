// "use client";
import { ShieldCheck, TrendingUp, Award, User } from "lucide-react";

import Image from "next/image";

// import components
import HeroSection from "./components/HeroSection";
import MainInsurance from "./components/tokio-beyond";
import OurServices from "./components/OurService";
import TrustedClients from "./components/TrustedClients";
import AwardsAndAchievements from "./components/AwardsAndAchievements";
import type { Metadata } from "next";
import About from "./components/Aboutme";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  // แทนที่ <title>
  title: "ประกันโตเกียวมารีน - ตัวแทนมืออาชีพ วรศักดิ์ ทับห่วง",
  // แทนที่ <meta name="description">
  description:
    "วางแผนการลงทุนและประกันสุขภาพครบวงจร ด้วยตัวแทนมืออาชีพ วรศักดิ์ ทับห่วง (หนุ่ม) - ได้รับใบอนุญาตจาก คปภ.",
  // Meta Tag อื่นๆ
  keywords: [
    "ประกันควบการลงทุน",
    "ประกันสุขภาพ",
    "ประกันชีวิต",
    "ตัวแทนประกัน",
    "วรศักดิ์ ทับห่วง",
    "โตเกียวมารีน",
  ],
  authors: [{ name: "วรศักดิ์ ทับห่วง" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Open Graph (OG) - สำหรับโซเชียล
  openGraph: {
    title: "ประกันโตเกียวมารีน - ตัวแทนมืออาชีพ",
    description:
      "วางแผนการลงทุนและประกันสุขภาพครบวงจร ด้วยตัวแทนมืออาชีพ วรศักดิ์ ทับห่วง",
    url: "https://tokio-marine.vercel.app/", // **สำคัญ: ต้องเปลี่ยนเป็น URL จริงของคุณ**
    siteName: "ประกันโตเกียวมารีน",
    images: [
      {
        url: "https://tokio-marine.vercel.app/profile-1.jpg", // **สำคัญ: ต้องเปลี่ยนเป็น URL ภาพจริงของคุณ**
        width: 800,
        height: 600,
        alt: "วรศักดิ์ ทับห่วง - ที่ปรึกษาประกันควบการลงทุน",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  // Twitter Card ก็สามารถกำหนดในนี้ได้
  // ...
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Tokio Beyond */}
      <MainInsurance />

      {/* About Me Section – Premium Minimal Apple-style */}
      <About />

      {/* บริการประกันอื่นๆ */}
      <OurServices />

      {/* ลูกค้าที่ไว้วางใจ */}
      <TrustedClients />

      {/* ผลงาน */}
      {/* <AwardsAndAchievements /> */}
      {/* CTA */}
      <CTA />
    </>
  );
}
