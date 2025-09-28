// src/app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Supplier Cup PP Berkualitas
            </h1>
            <p className="mb-6 text-gray-600">
              Kualitas Premium bebas dari bahan daur ulang
              <br />
              Cocok untuk segala Minuman
            </p>
            <Button
  size="lg"
  className="bg-[#2D6B49] hover:bg-[#24553A] text-white border-none outline-none focus:outline-none focus:ring-0"
>
  Consult today
</Button>

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

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {[...Array(3)].map((_, i) => (
    <Card
      key={i}
      className="p-6 border-none outline-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl"
    >
      <CardContent className="flex flex-col items-center text-center">
        <Image
          src="/pp-icon.webp"
          alt="Service Icon"
          width={64}
          height={64}
          className="mb-4"
        />
        <h3 className="text-lg font-semibold">Lorem Ipsum</h3>
        <p className="text-gray-600 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </CardContent>
    </Card>
  ))}
</div>

        <div className="text-center mt-10">
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
  {[...Array(3)].map((_, i) => (
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
        src="/article.png"
        alt="Article"
        width={600}
        height={300}
        className="object-cover h-48 w-full"
      />
      <CardContent className="p-6 text-left">
        <h3 className="text-lg font-semibold mb-2">Lorem Ipsum</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
