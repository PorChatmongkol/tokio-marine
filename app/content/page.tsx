"use client"

import { useState } from "react"

const faqs = [
  {
    q: "ประกันชีวิตคืออะไร?",
    a: "คือการคุ้มครองความเสี่ยงด้านชีวิต โดยบริษัทประกันจะจ่ายเงินให้เมื่อเกิดเหตุการณ์ตามเงื่อนไข เช่น เสียชีวิต หรือครบกำหนดสัญญา",
  },
  {
    q: "ควรเริ่มทำประกันตอนอายุเท่าไหร่?",
    a: "ยิ่งเริ่มเร็ว เบี้ยยิ่งถูก และมีโอกาสผ่านการพิจารณาสูง แนะนำเริ่มตั้งแต่วัยทำงาน",
  },
  {
    q: "เบี้ยประกันคำนวณจากอะไร?",
    a: "ขึ้นอยู่กับอายุ เพศ สุขภาพ อาชีพ และจำนวนเงินเอาประกัน",
  },
  {
    q: "ถ้ายกเลิกกรมธรรม์จะได้เงินคืนไหม?",
    a: "ขึ้นอยู่กับประเภทของประกัน บางแบบมีเงินคืน (เวนคืน) บางแบบไม่มี",
  },
  {
    q: "ประกันสุขภาพครอบคลุมอะไรบ้าง?",
    a: "ครอบคลุมค่ารักษาพยาบาล เช่น ค่าห้อง ค่ายา ค่าแพทย์ และการผ่าตัด",
  },
  {
    q: "มีระยะเวลารอคอย (Waiting Period) ไหม?",
    a: "มีในบางโรค เช่น โรคร้ายแรงหรือโรคที่เป็นมาก่อน โดยจะต้องรอระยะเวลาที่กำหนดก่อนเคลมได้",
  },
  {
    q: "ถ้ามีโรคประจำตัว ทำประกันได้ไหม?",
    a: "สามารถทำได้ แต่บริษัทอาจมีเงื่อนไขเพิ่มเติม เช่น เพิ่มเบี้ย หรือยกเว้นบางโรค",
  },
  {
    q: "เคลมประกันต้องทำอย่างไร?",
    a: "แจ้งบริษัทประกัน ส่งเอกสาร เช่น ใบเสร็จ ใบรับรองแพทย์ และรอการพิจารณา",
  },
  {
    q: "ประกันลดหย่อนภาษีได้ไหม?",
    a: "ได้ในบางประเภท เช่น ประกันชีวิตและประกันบำนาญ ตามเงื่อนไขของสรรพากร",
  },
  {
    q: "ควรเลือกแผนประกันแบบไหนดี?",
    a: "ควรเลือกตามความต้องการ งบประมาณ และความเสี่ยงของตัวเอง เช่น สุขภาพ ชีวิต หรือการออม",
  },
]

export default function ContentPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          สาระความรู้เกี่ยวกับประกัน
        </h1>
        <p className="mt-4 text-lg opacity-90">
          เข้าใจประกันให้มากขึ้น เลือกแผนที่เหมาะกับคุณ
        </p>
      </section>

      {/* KNOWLEDGE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-bold">
          📚 ความรู้พื้นฐานเกี่ยวกับประกัน
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold">ประกันชีวิต</h3>
            <p className="text-gray-600">
              คุ้มครองชีวิตและสร้างความมั่นคงให้ครอบครัว
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold">ประกันสุขภาพ</h3>
            <p className="text-gray-600">
              ช่วยลดภาระค่ารักษาพยาบาลในกรณีเจ็บป่วย
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold">ประกันอุบัติเหตุ</h3>
            <p className="text-gray-600">
              คุ้มครองกรณีเกิดอุบัติเหตุไม่คาดคิด
            </p>
          </div>
        </div>
      </section>

      {/* WARNING */}
      <section className="bg-red-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-red-600">
            ⚠️ ข้อควรระวัง
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>❗ อ่านรายละเอียดกรมธรรม์ให้ครบถ้วนก่อนตัดสินใจ</li>
            <li>❗ ตรวจสอบเงื่อนไขการเคลมและข้อยกเว้น</li>
            <li>❗ อย่าซื้อประกันเกินกำลังจ่าย</li>
            <li>❗ เปรียบเทียบหลายแผนก่อนเลือก</li>
            <li>❗ ระวังข้อมูลสุขภาพที่ต้องแจ้งให้ครบ</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-center">
          ❓ คำถามที่พบบ่อย (Q&A)
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow transition"
            >
              <button
                className="flex w-full items-center justify-between p-5 text-left font-medium"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {item.q}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}