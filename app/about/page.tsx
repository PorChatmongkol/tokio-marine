"use client";

import { useState, useEffect } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section - With Background Image */}
      <section className="relative py-32 px-6 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-800/90"></div>
        </div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-orange-400/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full">
            <span className="text-amber-300 text-sm font-medium tracking-wide">
              ABOUT US
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            เกี่ยวกับเรา
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            บริษัท โตเกียวมารีน เป็นผู้นำด้านประกันภัยในประเทศไทย
            <br className="hidden md:block" />
            มุ่งเน้นให้บริการลูกค้าด้วยคุณภาพและความเชื่อถือระดับโลก
          </p>
        </div>
      </section>

      {/* Vision Section - Premium Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full">
              <span className="text-blue-800 text-sm font-semibold">
                OUR VISION
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              โตเกียวมารีน
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                โตเกียวมารีน บริษัทประกันภัยแรกในประเทศญี่ปุ่น ก่อตั้งขึ้นในปี
                2422 มีการเติบโตตลอดหลายทศวรรษที่ผ่านมา
                เรานำเสนอผลิตภัณฑ์และการตอบสนองความต้องการที่หลากหลายของการประกันวินาศภัย
                และการประกันชีวิต โตเกียวมารีนมีการดำเนินธุรกิจใน 45 ประเทศ
                และเรายังคงขยายธุรกิจเพิ่มมากขึ้น
                ซึ่งทำให้เราจัดเป็นหนึ่งในกลุ่มบริษัทประกันภัยและประกันชีวิตที่มีความหลากหลายและมีความมั่นคงทางการเงินมากที่สุดในโลก
                วันนี้
                ในฐานะกลุ่มบริษัทประกันภัยที่ใหญ่ที่สุดของประเทศญี่ปุ่นที่มีสินทรัพย์มากกว่า
                2.10 แสนล้านดอลลาร์สหรัฐฯ (ณ ไตรมาส 2 ปี 2568) และมีพนักงานกว่า
                43,000 คน
                โตเกียวมารีนพร้อมที่จะร่วมเป็นพันธมิตรกับคุณเพื่อสร้างความสำเร็จอย่างต่อเนื่องไปด้วยกัน
              </p>
              <p>
                เป็นเวลายาวนานกว่า 146
                ปีที่เราได้ถูกก่อตั้งขึ้นในฐานะบริษัทประกันภัยแห่งแรกในประเทศญี่ปุ่น
                เราได้ขยายเครือข่ายครอบคลุมไปกว่า 45
                ประเทศและเรายังคงยึดมั่นการดำเนินธุรกิจด้วยความซื่อสัตย์สุจริต
                และคุณภาพระดับสากล
              </p>
            </div>

            <div className="mt-8 flex gap-12">
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">25+</div>
                <div className="text-slate-600 text-sm">ปีของความเชื่อถือ</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">
                  500K+
                </div>
                <div className="text-slate-600 text-sm">ลูกค้าทั่วประเทศ</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-900 mb-1">98%</div>
                <div className="text-slate-600 text-sm">ความพึงพอใจ</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-tk.webp"
                alt="สำนักงานโตเกียวมารีน"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Values Section - With Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Team Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-50/95"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-amber-50 rounded-full border border-amber-200">
              <span className="text-amber-800 text-sm font-semibold">
                OUR VALUES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ค่านิยมหลักของเรา
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              หลักการที่เราใช้ในการดำเนินธุรกิจและสร้างความไว้วางใจให้กับลูกค้า
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💎",
                title: "มองไกลกว่าผลกำไร",
                description: "เราทำงานที่ด้วยความซื่อสัตย์เพื่อประโยชน์ของลูกค้า คู่ค้าทางธุรกิจ และสังคม",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🛡️",
                title: "ให้ความสำคัญกับบุคลากร",
                description:
                  "เราสร้างแรงบันดาลใจและความรักความผูกพันให้พนักงานทั้งหมดของเรา",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                icon: "⚡",
                title: "ปฏิบัติตามคำมั่นสัญญา",
                description:
                  "เรามุ่งมั่นในผลลัพธ์ของความสำเร็จที่มีคุณภาพ เพื่อสร้างความไว้วางใจให้กับผู้มีส่วนได้ส่วนเสีย",
                gradient: "from-amber-500 to-orange-500",
              },
              
            ].map((value, index) => (
              <div
                key={index}
                className="group  relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - With Background Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            มาร่วมเป็นส่วนหนึ่งกับเรา
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            สร้างความมั่นใจให้กับชีวิตและธุรกิจของคุณ
            <br />
            ด้วยบริการประกันภัยระดับพรีเมียมจากโตเกียวมารีน
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                ติดต่อเรา
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              ดูบริการของเรา
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
