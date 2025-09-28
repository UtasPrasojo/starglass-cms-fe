"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import PencarianTanggal from "./DateSearch";

const data = [
  { no: 1, nomorSeri: "5641651561616", kategori: "Bus", lokasi: "Mariperez", tanggalMasuk: "19/07/24" },
  { no: 2, nomorSeri: "45874451240", kategori: "Bus", lokasi: "Libertado", tanggalMasuk: "02/07/24" },
  { no: 3, nomorSeri: "20147844875", kategori: "Bus", lokasi: "Bellas Artes", tanggalMasuk: "02/07/24" },
  { no: 4, nomorSeri: "35478841222", kategori: "Bus", lokasi: "San Martin", tanggalMasuk: "02/07/24" },
];

export default function TabelLaporan() {
  return (
    <div>
      <PencarianTanggal />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Nomor Seri</th>
              <th className="border p-2">Kategori</th>
              <th className="border p-2">Lokasi</th>
              <th className="border p-2">Tanggal Masuk</th>
              <th className="border p-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no} className="text-center">
                <td className="border p-2">{item.no}</td>
                <td className="border p-2">{item.nomorSeri}</td>
                <td className="border p-2">{item.kategori}</td>
                <td className="border p-2">{item.lokasi}</td>
                <td className="border p-2">{item.tanggalMasuk}</td>
                <td className="border p-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <span>Baris per halaman: 10</span>
        <span>1-10 dari 276</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">{"<"}</Button>
          <Button variant="outline" size="sm">{">"}</Button>
        </div>
      </div>

      <div className="mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Unduh Laporan
        </Button>
      </div>
    </div>
  );
}
