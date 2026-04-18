import type { Metadata } from "next";
import { Prompt } from "next/font/google"; // 👈 เปลี่ยนตรงนี้
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "aos/dist/aos.css";
import FloatingContactPremium from "./components/CTA";
import CookieBanner from "./components/CookieBanner";

const prompt = Prompt({
  subsets: ["latin", "thai"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Noum Tokio-Marine",
  description: "ตัวแทนขายประกันชั้นนำโตเกียวมารีน",
  icons: {
    icon: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
  },
  verification: {
    google: "NvmRC8mrLqVIPWOZXVWLoO6l0eB8vB-sBx9uaJkjt4E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} antialiased`}>
        <Navbar />
        {children}
        <CookieBanner />
        <FloatingContactPremium />
        <Footer />
      </body>
    </html>
  );
}
