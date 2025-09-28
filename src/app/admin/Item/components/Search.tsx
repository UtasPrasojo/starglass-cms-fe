import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Pencarian() {
  return (
    <div className="relative mb-4">
      <Input
        placeholder="Cari..."
        className="pl-10"
      />
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
    </div>
  );
}
