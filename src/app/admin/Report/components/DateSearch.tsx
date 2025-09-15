import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";

export default function PencarianTanggal() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      {/* Pencarian */}
      <div className="relative w-full md:w-1/2">
        <Input
          placeholder="Cari..."
          className="pl-10"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
      </div>

      {/* Rentang tanggal */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Pilih rentang tanggal:</label>
        <div className="relative">
          <Input
            type="text"
            value="01/07/2024 - 19/07/2024"
            readOnly
            className="pl-10"
          />
          <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
