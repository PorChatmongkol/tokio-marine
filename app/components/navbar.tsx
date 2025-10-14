"use client"
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Users,
  Phone,
  Building2,
  Heart,
  PiggyBank,
  Briefcase,
  Shield,
  Zap,
  FileText,
} from "lucide-react";
import Image from "next/image";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
}

const menuItems: MenuItem[] = [
  { label: "หน้าหลัก", href: "/", icon: Home },
  { label: "เกี่ยวกับเรา", href: "/about", icon: Users },
  { label: "ติดต่อเรา", href: "/contact", icon: Phone },
  { label: "ค้นหาสถานพยาบาล", href: "/search-hospital", icon: Building2 },
];

const insuranceItems: MenuItem[] = [
  {
    label: "ประกันชีวิต",
    href: "/services/life-insurance",
    icon: Heart,
    desc: "คุ้มครองตลอดชีวิต",
  },
  {
    label: "ประกันออมทรัพย์",
    href: "/services/saving-insurance",
    icon: PiggyBank,
    desc: "ออมเงินมีประกัน",
  },
  {
    label: "ประกันบำนาญ",
    href: "/services/pension-insurance",
    icon: Shield,
    desc: "เกษียณสบายใจ",
  },
  {
    label: "ประกันธุรกิจ/Keyman",
    href: "/services/keyman-insurance",
    icon: Briefcase,
    desc: "ปกป้องธุรกิจ",
  },
  {
    label: "ประกันสุขภาพ",
    href: "/services/health-insurance",
    icon: Building2,
    desc: "ดูแลสุขภาพครบถ้วน",
  },
  {
    label: "ประกันอุบัติเหตุ",
    href: "/services/accident-insurance",
    icon: Zap,
    desc: "คุ้มครองอุบัติเหตุ",
  },
];

interface DropdownMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile?: boolean;
  onClose?: () => void;
  currentPath?: string;
}

const DropdownMenu = ({
  isOpen,
  onToggle,
  isMobile,
  onClose,
  currentPath,
}: DropdownMenuProps) => {
  const handleClickLink = () => {
    if (onClose) onClose();
  };

  return (
    <div className="relative ">
      <button
        onClick={onToggle}
        className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
          isOpen || currentPath?.startsWith("/services/")
            ? "text-white shadow-md bg-[#A37500]"
            : "text-gray-700 hover:text-white hover:shadow-md hover:bg-[#D69E2E]"
        }`}
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <FileText className="w-4 h-4 mr-2" />
          แผนประกัน
        </span>
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop Dropdown */}
      {isOpen && !isMobile && (
        <div className="absolute z-50 mt-2 w-80 bg-white rounded-2xl shadow-xl py-4 border border-gray-200">
          <div className="px-6 py-3 border-b border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#17303B]">
              เลือกแผนประกัน
            </h3>
          </div>

          <div className="p-4 space-y-1">
            {insuranceItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleClickLink}
                  className={`group flex items-start p-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-white shadow-md bg-[#D69E2E]"
                      : "text-gray-700 hover:text-white hover:shadow-md hover:bg-[#D69E2E]"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        isActive
                          ? "text-white/80"
                          : "text-gray-500 group-hover:text-white/80"
                      }`}
                    >
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="px-6 py-3 border-t border-gray-100">
            <Link
              href="/services"
              className="flex items-center justify-center w-full py-2 px-4 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 bg-[#17303B]"
            >
              ดูแผนทั้งหมด →
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Dropdown */}
      {isOpen && isMobile && (
        <div className="mt-2 space-y-2 bg-gray-50 rounded-xl p-4">
          {insuranceItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleClickLink}
                className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-white shadow-md bg-[#D69E2E]"
                    : "text-gray-700 hover:text-white hover:shadow-md hover:bg-[#D69E2E]"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-semibold">{item.label}</div>
                  <div
                    className={`text-sm ${
                      isActive ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ใช้ path ปัจจุบันจาก Next.js

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="relative dark:bg-gray-900 mx-auto" 
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="LifeInsure Logo"
                className=" object-contain"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center ${
                    isActive
                      ? "text-white shadow-md bg-[#A37500]"
                      : "text-gray-700 hover:text-white hover:shadow-md hover:bg-[#D69E2E]"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
            <DropdownMenu
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen((prev) => !prev)}
              onClose={() => setIsDropdownOpen(false)}
              currentPath={pathname}
            />
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-3 rounded-lg transition-all duration-200 hover:shadow-md hover:bg-[#A37500] hover:text-white text-[#D69E2E]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-left font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white shadow-md bg-[#A37500]"
                      : "text-gray-700 hover:text-white hover:shadow-md hover:bg-[#D69E2E]"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}

            <DropdownMenu
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen((prev) => !prev)}
              isMobile
              currentPath={pathname}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}


