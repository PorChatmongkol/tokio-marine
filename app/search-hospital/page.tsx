"use client";
import { useState, useMemo } from "react";
import { Search, MapPin, Building2, X } from "lucide-react";
import hospitalsByRegion from "./mockdata";

const regions = [
  { id: "all", name: "ทั้งหมด" },
  { id: "bangkok", name: "กรุงเทพและปริมณฑ์" },
  { id: "central", name: "ภาคกลาง" },
  { id: "northeast", name: "ภาคอีสาน" },
  { id: "south", name: "ภาคใต้" },
  { id: "east", name: "ภาคตะวันออก" },
  { id: "north", name: "ภาคเหนือ" },
] as const;

type RegionKey = (typeof regions)[number]["id"];

interface Hospital {
  id: number;
  name: string;
  province: string;
  public?: boolean;
}

type HospitalsByRegion = {
  [key in Exclude<RegionKey, "all">]: Hospital[];
};

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-[#FFF8E1] text-[#A78B61] font-medium px-1 rounded">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const SearchHospitals = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  useMemo(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredHospitals = useMemo(() => {
    let hospitals: Hospital[] = [];
    if (selectedRegion === "all") hospitals = Object.values(hospitalsByRegion).flat();
    else hospitals = hospitalsByRegion[selectedRegion as keyof HospitalsByRegion] ?? [];

    if (debouncedSearch.trim() !== "") {
      const lowerSearch = debouncedSearch.toLowerCase();
      hospitals = hospitals.filter(
        (h) =>
          h.name.toLowerCase().includes(lowerSearch) ||
          h.province.toLowerCase().includes(lowerSearch)
      );
    }
    return hospitals;
  }, [selectedRegion, debouncedSearch]);

  const selectedRegionData = regions.find((r) => r.id === selectedRegion);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-[#2E2E2E]">
      {/* Header */}
      <header >
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2 justify-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#A78B61]/90 text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-semibold text-[#A37500]">
              ค้นหาโรงพยาบาลคู่สัญญา
            </h1>
          </div>
          <p className="text-gray-500 text-sm">
            ค้นหาและเปรียบเทียบโรงพยาบาลทั่วประเทศไทย
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Search Box */}
        <div className="bg-white rounded-xl border border-[#EAE7E1] p-6">
          <label className="block text-sm font-medium mb-2 text-[#A78B61]">
            ค้นหาโรงพยาบาล
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="พิมพ์ชื่อโรงพยาบาลหรือจังหวัด..."
              className="w-full pl-12 pr-10 py-2.5 rounded-4xl border border-[#EAE7E1] focus:border-[#A78B61] focus:ring-0 outline-none transition text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm("")}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Region Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-5">
            {regions.map(({ id, name }) => (
              <button
                key={id}
                onClick={() => setSelectedRegion(id)}
                className={`px-3 py-2 text-sm rounded-4xl border transition-all ${
                  selectedRegion === id
                    ? "bg-[#A37500] text-white border-[#A78B61]"
                    : "border-[#EAE7E1] text-[#A78B61] hover:bg-[#F3EFE7]"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl border border-[#EAE7E1]">
          <div className="px-6 py-4 border-b border-[#EAE7E1] flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-[#A78B61]">
                ผลการค้นหาโรงพยาบาล
              </h2>
              <p className="text-gray-500 text-sm">
                {selectedRegionData?.name} • {filteredHospitals.length} โรงพยาบาล
              </p>
            </div>
            <div className="text-xs text-gray-400">อัปเดท: วันนี้</div>
          </div>

          <div className="p-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredHospitals.length === 0 ? (
              <div className="text-center py-12 col-span-full text-gray-500">
                <Search className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                <p>ไม่พบผลการค้นหา</p>
              </div>
            ) : (
              filteredHospitals.map(({ id, name, province }) => (
                <div
                  key={id}
                  className="border border-[#EAE7E1] rounded-xl p-4 hover:bg-[#FAF9F6] transition"
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#A37500]/90 text-white">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2E2E2E] text-sm">
                        {highlightText(name, debouncedSearch)}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        จังหวัด {highlightText(province, debouncedSearch)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 mt-8">
          © 2025 ระบบค้นหาโรงพยาบาล • ข้อมูลอาจมีการเปลี่ยนแปลง โปรดตรวจสอบก่อนใช้งาน
        </footer>
      </section>
    </main>
  );
};

export default SearchHospitals;
