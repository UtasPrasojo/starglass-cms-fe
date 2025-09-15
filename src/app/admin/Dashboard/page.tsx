"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Info } from "lucide-react";

export default function DashboardPage() {
  // Data untuk Pie Chart
  const pieData = [
    { name: "Tractores", value: 3000, color: "#00BCD4" },
    { name: "Sedan", value: 1500, color: "#E91E63" },
    { name: "Autobus", value: 800, color: "#9C27B0" },
  ];

  // Data untuk Bar Chart
  const barData = [
    { name: "Mayo", Entrada: 12000, Salida: 15000 },
    { name: "Junio", Entrada: 18000, Salida: 10000 },
    { name: "Julio", Entrada: 5000, Salida: 22000 },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Tombol Aksi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Agregar</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              Ir
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Actualizar</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              Ir
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Eliminar</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              Ir
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bagian Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Vehiculos */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Vehiculos año 2024</CardTitle>
            <Info className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">5.987,34</p>
            <p className="text-sm text-muted-foreground mb-4">Secondary text</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Reportes Trimestral */}
        <Card>
          <CardHeader>
            <CardTitle>Reportes Trimestral</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Entrada" fill="#2196F3" />
                <Bar dataKey="Salida" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
