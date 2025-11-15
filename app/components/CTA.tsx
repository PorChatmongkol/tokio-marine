"use client"
import Link from "next/link"
import { useEffect , useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const PRIMARY_COLOR = "text-slate-900";
const ACCENT_COLOR = "text-[#A37500]";
const ACCENT_BG = "bg-[#A37500]";
const ACCENT_HOVER = "hover:bg-[#8f6800]";
export default function CTA(){
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
    
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          // ปรับ offset เล็กน้อย
          offset: 80,
        });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <section
        className="relative py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0">
          <div
            className={`absolute top-0 left-0 w-96 h-96 bg-[#A37500]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2`}
          ></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-6 leading-snug">
            สร้างความมั่นใจ{" "}
            <span className={ACCENT_COLOR}>ในทุกก้าวของชีวิต</span>
          </h2>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            เริ่มต้นปรึกษาแผนประกันภัยที่เหมาะสมกับเป้าหมายทางการเงินของคุณวันนี้
            ไม่มีค่าใช้จ่าย
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`group inline-flex items-center justify-center px-10 py-4 ${ACCENT_BG} text-white font-bold rounded-full shadow-lg ${ACCENT_HOVER} transition-all duration-300 hover:scale-[1.05]`}
            >
              ติดต่อผู้เชี่ยวชาญ
              <span className="ml-3 group-hover:translate-x-1 transition-transform text-xl">
                &rarr;
              </span>
            </Link>

            <Link
              href="/#services"
              className={`inline-flex items-center justify-center px-10 py-4 border-2 border-[${ACCENT_COLOR}] text-[${ACCENT_COLOR}] font-bold rounded-full bg-[${ACCENT_COLOR}] text-white transition-all duration-300`}
            >
              ดูบริการทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    )
}