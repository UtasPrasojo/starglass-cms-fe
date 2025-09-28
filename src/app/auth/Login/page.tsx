// app/login/page.tsx (atau sesuai struktur project kamu)
"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Kiri: Form Login */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              INICIAR SESION
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Username */}
              <div className="space-y-2">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Tombol */}
              <Button type="submit" className="w-full">
                Ingresar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Kanan: Gambar */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-700 to-blue-800 justify-center items-center relative">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white max-w-sm text-center">
          <h2 className="text-xl font-semibold mb-4">Sistema de Inventario</h2>
          <Image
            src="/woman-tablet.png" // path gambar kamu
            alt="Ilustrasi"
            width={400}
            height={400}
            className="rounded-md object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
