"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import path from "path";
import { sub } from "framer-motion/client";
const plans = [
  {
    id: 1,
    title: "ประกันชีวิต",

    desc: "เลือกคุ้มครองชีวิตได้ 5 ปี 10 ปี 15 ปี    ",
    image: "/plan-1.png",
    // image: "/p1.jpg",
    path: "life-insurance",
  },
  {
    id: 2,
    title: "ประกันสะสมทรัพย์",

    desc: "คุ้มครองการเสียชีวิตทุกกรณี",
    image: "/plan-2.png",

    path: "savings-insurance",
  },
  {
    id: 3,
    title: "ประกันบำนาญ",

    desc: "วางแผนเกษียณ รับเงินยาวถึงอายุ 85 ปี",
    image: "/plan-3.png",

    path: "pension-insurance",
  },
  {
    id: 4,
    title: "ประกันธุรกิจ/Keyman",

    desc: "คุ้มครอง 3 โรคร้ายแรงหลัก จ่ายเต็ม 100%",
    image: "/plan-4.png",

    path: "keyman-insurance",
  },
  {
    id: 5,
    title: "ประกันสุขภาพ",

    desc: "คุ้มครอง 3 โรคร้ายแรงหลัก จ่ายเต็ม 100%",
    image: "/plan-5.png",

    path: "health-insurance",
  },
  {
    id: 6,
    title: "ประกันอุบัติเหตุ",

    desc: "คุ้มครอง 3 โรคร้ายแรงหลัก จ่ายเต็ม 100%",
    image: "/plan-6.png",

    path: "accident-insurance",
  },
];

export default function InsuranceCards() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-left mb-8">
          {" "}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            เลือกประเภทประกันที่คุณสนใจ
          </h2>{" "}
          <p className="text-gray-600">
            {" "}
            เลือกประกันที่เหมาะสมกับความต้องการของคุณ{" "}
          </p>{" "}
        </div>

        {plans.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-[320px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Badge */}
            {/* <div className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full shadow">
              {item.badge}
            </div> */}

            {/* Content Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-5 shadow-lg h-[150px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="flex fixed-bottom justify-end">
                <Link href={`/services/${item.path}`} className="mt-4">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#A37500] text-white hover:scale-110 transition">
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
