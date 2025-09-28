// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  // redirect ke halaman dashboard admin
  redirect('/admin/Dashboard');
}
