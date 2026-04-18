"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export default function FloatingContactPremium() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      icon: <Phone size={20} />,
      label: "โทรหาเรา",
      href: "tel:0955595439",
      bg: "bg-gray-800",
    },
    {
      icon: <FontAwesomeIcon icon={faLine} />,
      label: "แชท Line",
      href: "https://line.me/ti/p/@yourlineid",
      bg: "bg-green-500",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ปุ่มย่อย */}
      <AnimatePresence>
        {open && (
          <div className="flex flex-col items-end gap-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                className="flex items-center gap-2"
              >
                {/* Tooltip */}
                <div className="bg-black/80 text-white text-sm px-3 py-1 rounded-lg shadow backdrop-blur">
                  {item.label}
                </div>

                {/* Button */}
                <a
                  href={item.href}
                  target="_blank"
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-white shadow-lg ${item.bg} hover:scale-110 transition`}
                >
                  {item.icon}
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* ปุ่มหลัก */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-16 h-16 flex cursor-pointer items-center justify-center rounded-full bg-[#A37500] text-white shadow-2xl"
      >
        {open ? <X size={26} /> : <Phone size={26} />}
      </motion.button>
    </div>
  );
}
