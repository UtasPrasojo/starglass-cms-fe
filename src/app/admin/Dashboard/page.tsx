// src/app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
   const dataLatest = [
    {
      image: "/article1.jpg",
      title: "Starglas Netral Cup",
      desc: "Pelajari bagaimana cara memilih cup plastik yang aman, higienis, dan cocok untuk bisnis minuman Anda.",
    },
    {
      image: "/article2.jpg",
      title: "Starglas Oval (U) Cup",
      desc: "Cup PP premium lebih tahan panas, tidak mudah bocor, dan bebas dari bahan berbahaya.",
    },
    {
      image: "/article3.jpg",
      title: "Starglas Slim Cup",
      desc: "Cup ramah lingkungan membantu bisnis Anda lebih sustainable dan disukai konsumen modern.",
    },
  ];
  const dataAbout = [
      {
        image: "/about1.png",
        title: "Diproses menggunakan teknologi eropa",
        desc: "Diproses dengan teknologi Eropa, hasil lebih presisi dan berkualitas tinggi.",
      },
      {
        image: "/about2.jpeg",
        title: "Quality kontrol ketat",
        desc: "Melalui quality control ketat, setiap cup terjamin aman dan berkualitas premium.",
      },
      {
        image: "/about3.png",
        title: "Bahan murni tanpa daur ulang",
        desc: "Dibuat dari bahan murni tanpa daur ulang, aman dan higienis untuk setiap minuman.",
      },
    ];
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
    <section className="bg-white">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
    <div>
      {/* Logo di atas judul */}
      <div className="mb-4">
        <Image
          src="/pp-icon.webp" // ganti dengan file logo kamu
          alt="Logo Starglas"
          width={120}
          height={120}
          className="mx-auto md:mx-0"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Supplier Cup PP Berkualitas
      </h1>
      <p className="mb-6 text-gray-600">
        Kualitas Premium bebas dari bahan daur ulang
        <br />
        Cocok untuk segala Minuman
      </p>

      <a
        href="https://api.whatsapp.com/send/?phone=6282258883089&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-[#2D6B49] hover:bg-[#24553A] text-white border-none outline-none focus:outline-none focus:ring-0"
        >
          Consult today
        </Button>
      </a>
    </div>

    <div className="relative w-full h-120">
      <Image
        src="/hero.png" // ganti dengan image hero kamu
        alt="Hero Image"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  </div>
</section>


      {/* About Section */}
     <section className="relative bg-gray-50 py-16 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/backgroundAbout.jpeg"
      alt="Background About"
      fill
      className="object-cover grayscale opacity-80"
    />
  </div>

  {/* Overlay warna abu biar tetap ada nuansa bg-gray-50 */}
  <div className="absolute inset-0 bg-gray-50/50"></div>

  {/* Konten */}
  <div className="relative  container mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold">About Us</h2>
    <p className=" max-w-2xl mx-auto mt-4">
      Mengapa harus memilih Starglas.id sebagai supplier cup plastik
    </p>
  </div>

  <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {dataAbout.map((item, i) => (
      <Card
        key={i}
        className="p-6 border-none bg-white outline-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl"
      >
        <CardContent className="flex flex-col items-center text-center">
          <Image
            src={item.image}
            alt={item.title}
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  <div className="relative text-center mt-10">
    <Button variant="outline">Learn more</Button>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="bg-green-900 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            What our customer are saying
          </h2>
          <div className="max-w-3xl mx-auto bg-green-800 p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/avatar.png" alt="Customer" />
                <AvatarFallback>EN</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h3 className="text-lg font-semibold">Edward Newgate</h3>
                <p className="text-sm opacity-80">Founder Circle</p>
                <p className="mt-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Latest Article Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Check out our latest article</h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataLatest.map((item, i) => (
            <Card
              key={i}
              className="
                overflow-hidden 
                border-none 
                outline-none 
                focus:outline-none 
                focus:ring-0 
                shadow-lg 
                hover:shadow-xl 
                rounded-xl
                transition-shadow duration-300
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="object-cover h-48 w-full"
              />
              <CardContent className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <Button variant="link" className="p-0 mt-2">
                  Read more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline">View all</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Starglas.id</h3>
            <p className="text-sm opacity-80">
              Jl. Raya Bulakrejo-Gentan, RT.02/RW.03, Sidorejo, Kec. Bendosari, Kabupaten Sukoharjo, Jawa Tengah
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact support</li>
              <li>Instructions</li>
            </ul>
          </div>
          <div className="flex items-end">
            <p className="text-xs opacity-70">
              ©Starglas 2025. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
