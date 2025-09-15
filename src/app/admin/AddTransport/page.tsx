"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TambahKendaraanPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Judul */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Tambah Kendaraan
      </h1>

      {/* Card Form */}
      <Card className="w-full max-w-5xl">
        <CardContent className="p-8">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nomor Seri */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="nomorSeri">Nomor Seri</Label>
              <Input id="nomorSeri" placeholder="Masukkan nomor seri" />
            </div>

            {/* Tanggal Masuk */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="tanggalMasuk">Tanggal Masuk</Label>
              <Input id="tanggalMasuk" type="date" />
            </div>

            {/* (Kosong untuk spasi grid) */}
            <div />

            {/* Lokasi */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="lokasi">Lokasi</Label>
              <Input id="lokasi" placeholder="Masukkan lokasi" />
            </div>

            {/* Kategori */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="kategori">Kategori</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="truk">Truk</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="bus">Bus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div />

            {/* Deskripsi */}
            <div className="flex flex-col space-y-2 md:col-span-3">
              <Label htmlFor="deskripsi">Deskripsi</Label>
              <Input id="deskripsi" placeholder="Masukkan deskripsi" />
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Tombol Simpan */}
      <div className="mt-8">
        <Button className="px-12 py-6 text-lg rounded-lg shadow-md bg-blue-900 hover:bg-blue-800">
          Tambahkan
        </Button>
      </div>
    </div>
  );
}
