"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="w-24 h-8 bg-muted rounded" />
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground max-md:hidden">
            What's Inside?
          </a>
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <a href="/dashboard">Sign In</a>
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-4 text-sm bg-muted rounded-full">
          Internet Computer Protocol
        </div>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Lorem ipsum dolor sit kemet
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Explore our tech
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
          <Button variant="outline" size="lg">
            <Play className="w-4 h-4 mr-2" />
            Watch Video
          </Button>
        </div>
      </section>

      {/* Banner */}
      <section className="container px-4 mx-auto my-20">
        <div className="w-full h-[400px] border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          BANNER
        </div>
      </section>

      {/* Grid Section */}
      <section className="container px-4 mx-auto my-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded-lg" />
          ))}
        </div>
      </section>

      <div>
        {/* Section 1 */}
        <section className="container px-4 mx-auto my-10">
          <div className="flex flex-col-reverse gap-8 items-center md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">Keamanan & Transparansi</h2>
              <p className="text-muted-foreground">
                Sistem generator sertifikat online kami memastikan setiap
                sertifikat yang dihasilkan aman dan transparan. Dengan fitur
                verifikasi dan keamanan data yang canggih, Anda dapat
                mempercayakan validitas setiap sertifikat yang dihasilkan untuk
                kebutuhan akademik, pelatihan, atau penghargaan.
              </p>
            </div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full">
              <Image
                src="/images/Keamanan&Transparansi.png"
                alt="Deskripsi gambar"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="container px-4 mx-auto my-10">
          <div className="flex flex-col-reverse gap-8 items-center md:flex-row-reverse">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">
                Aksesibilitas & Bukti Abadi
              </h2>
              <p className="text-muted-foreground">
                Generator sertifikat online kami memudahkan Anda untuk membuat
                dan mengakses sertifikat kapan saja dan di mana saja. Sertifikat
                yang dihasilkan akan tersimpan secara permanen, memastikan bukti
                prestasi atau keahlian Anda tetap aman dan mudah diakses.
              </p>
            </div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full">
              <Image
                src="/images/Aksesibilitas&BuktiAbadi.png"
                alt="Deskripsi gambar"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="container px-4 mx-auto my-10">
          <div className="flex flex-col-reverse gap-8 items-center md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">Pengakuan</h2>
              <p className="text-muted-foreground">
                Setiap sertifikat yang Anda buat melalui platform kami adalah
                pengakuan resmi atas pencapaian Anda atau peserta Anda. Desain
                profesional dan opsi kustomisasi memungkinkan Anda membuat
                sertifikat yang unik dan kredibel, memberikan nilai lebih pada
                setiap penghargaan yang diberikan.
              </p>
            </div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full">
              <Image
                src="/images/Pengakuan.png"
                alt="Deskripsi gambar"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Final Section */}
      <section className="container px-4 mx-auto my-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
        <p className="mb-12 text-muted-foreground">
          Lorem ipsum dolor sit amet
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((card) => (
            <Card key={card} className="bg-muted/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-24 h-24 bg-muted rounded" />
                <h3 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#">Terms Of Services</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((social) => (
                <div key={social} className="w-8 h-8 bg-muted rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
