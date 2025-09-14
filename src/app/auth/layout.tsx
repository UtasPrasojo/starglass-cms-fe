// src/app/auth/layout.tsx
import DefaultLayout from "@/layouts/default.layout";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
