// app/about/layout.tsx
import type { Metadata } from 'next';

// *** ส่วน Metadata ย้ายมาที่นี่ทั้งหมด ***
export const metadata: Metadata = {
  title: "เกี่ยวกับ วรศักดิ์ ทับห่วง - ตัวแทนมืออาชีพ โตเกียวมารีน",
  description:
    "ข้อมูลตัวแทน วรศักดิ์ ทับห่วง (หนุ่ม) ตัวแทนมืออาชีพโตเกียวมารีน วางแผนการลงทุนและประกันสุขภาพครบวงจร ได้รับใบอนุญาตจาก คปภ.",
  keywords: [
    "เกี่ยวกับตัวแทน",
    "วรศักดิ์ ทับห่วง",
    "โตเกียวมารีน ประวัติ",
    "ที่ปรึกษาการเงิน",
  ],
  authors: [{ name: "วรศักดิ์ ทับห่วง" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "เกี่ยวกับเรา - โตเกียวมารีน",
    description:
      "วางแผนการลงทุนและประกันสุขภาพครบวงจร ด้วยตัวแทนมืออาชีพ วรศักดิ์ ทับห่วง",
    url: "https://tokio-marine.vercel.app/about",
    siteName: "ประกันโตเกียวมารีน",
    images: [{ url: "https://tokio-marine.vercel.app/about-tk.webp", width: 800, height: 600, alt: "สำนักงานโตเกียวมารีน" }],
    locale: "th_TH",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Layout นี้จะห่อหุ้ม page.tsx ที่เป็น Client Component */}
      {children} 
    </>
  );
}