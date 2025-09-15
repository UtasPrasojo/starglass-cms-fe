import { Card, CardContent } from "@/components/ui/card";
import TabelBarang from "./components/TableItem";

export default function BarangPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Hapus Data</h1>
      <Card>
        <CardContent>
          <TabelBarang />
        </CardContent>
      </Card>
    </div>
  );
}
