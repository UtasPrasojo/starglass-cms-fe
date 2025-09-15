import { Card, CardContent } from "@/components/ui/card";
import TabelLaporan from "./components/TableReport";

export default function LaporanPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Laporan dan Informasi</h1>
      <Card>
        <CardContent>
          <TabelLaporan />
        </CardContent>
      </Card>
    </div>
  );
}
