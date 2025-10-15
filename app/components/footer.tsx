'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLine } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com/yourpage",
    label: "Facebook",
    bgColor: "bg-[#2C5F7A]",
    hoverColor: "hover:bg-[#1877F2]",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourpage",
    label: "Instagram",
    bgColor: "bg-[#2C5F7A]",
    hoverColor: "hover:bg-[#E1306C]",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    bgColor: "bg-[#2C5F7A]",
    hoverColor: "hover:bg-[#0077B5]",
  },
  {
    icon: FaLine,
    href: "https://line.me/ti/p/yourlineid",
    label: "Line",
    bgColor: "bg-[#2C5F7A]",
    hoverColor: "hover:bg-[#00C300]",
  },
];

const services = [
  { name: "ประกันชีวิต", href: "#" },
  { name: "ประกันออมทรัพย์", href: "#" },
  { name: "ประกันบำนาญ", href: "#" },
  { name: "ประกันธุรกิจ / Keyman", href: "#" },
  { name: "ประกันสุขภาพ", href: "#" },
  { name: "ประกันอุบัติเหตุ", href: "#" },
];

const importantLinks = [
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ข่าวสาร", href: "/news" },
  { name: "อาชีพ", href: "/career" },
  { name: "นักลงทุนสัมพันธ์", href: "/investors" },
  { name: "นโยบายความเป็นส่วนตัว", href: "/privacy-policy" },
];

const contacts = [
  {
    icon: MdLocationOn,
    text: "88/52 โครงการสำเพ็ง 2 ถนนกัลปพฤกษ์ แขวงบางแค เขตบางแค กรุงเทพมหานคร 10160",
    href: undefined,
  },
  {
    icon: MdPhone,
    text: "095-559-5439",
    href: "tel:0955595439",
  },
  {
    icon: MdPhone,
    text: "099-451-2142",
    href: "tel:0994512142",
  },
  {
    icon: MdEmail,
    text: "vorasak.tub1912@outlook.co.th",
    href: "mailto:vorasak.tub1912@outlook.co.th",
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-gray-100  text-sm pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#2C5F7A] pb-10">

        {/* เกี่ยวกับเรา */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#17303B]">เกี่ยวกับเรา</h3>
          <div className="w-10 h-1 bg-[#2C9AB7] mb-4"></div>
          <p className="mb-4 text-[#17303B]">
            เราคือทีมงานผู้เชี่ยวชาญด้านประกันภัย ที่มุ่งมั่นให้บริการด้วยความจริงใจและเป็นมืออาชีพ
          </p>
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, href, label, bgColor, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${bgColor} ${hoverColor} w-9 h-9 p-2 rounded-full transition flex items-center justify-center text-white`}
              >
                <Icon className="w-full h-full" />
              </a>
            ))}
          </div>
        </div>

        {/* บริการ */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#17303B]">บริการ</h3>
          <div className="w-10 h-1 bg-[#2C9AB7] mb-4"></div>
          <ul className="space-y-2 text-[#17303B]">
            {services.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="hover:text-[#A37500] transition-colors duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ลิงก์ที่สำคัญ */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#17303B]">ลิงก์ที่สำคัญ</h3>
          <div className="w-10 h-1 bg-[#2C9AB7] mb-4"></div>
          <ul className="space-y-2 text-[#17303B]">
            {importantLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="hover:text-[#A37500] transition-colors duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ติดต่อเรา */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#17303B]">ติดต่อเรา</h3>
          <div className="w-10 h-1 bg-[#2C9AB7] mb-4"></div>
          <ul className="space-y-3 text-[#17303B]" >
            {contacts.map(({ icon: Icon, text, href }, i) => (
              <li key={i} className={`flex items-start ${href ? "items-center" : ""}`}>
                <Icon className="mr-2 text-[#A37500] text-3xl" />
                {href ? (
                  <a href={href} className="hover:text-[#A37500] transition-colors duration-300 break-words ">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs  mt-6 text-[#17303B]">
        © 2025 ชื่อบริษัท/ตัวแทนประกันของคุณ. สงวนลิขสิทธิ์.
      </div>
    </footer>
  );
}
