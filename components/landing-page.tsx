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
        <div className="pt-2">
          <div className="inline-flex items-center px-2 text-sm rounded-lg">
            <Image
              src="/images/icon.png"
              alt="Internet Computer Protocol"
              width={25}
              height={25}
              className="bg-white rounded-md"
            />
            <span className="pr-2 text-black font-bold hidden sm:inline dark:text-white pl-2">
              {" "}
              CredGenT
            </span>
          </div>
        </div>
        <div className="pl-20">
          <a href="#" className="text-sm text-muted-foreground max-md:hidden">
            What's Inside?
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <a href="/dashboard">Sign In</a>
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="inline-flex items-center px-2 py-1.5 mb-4 text-sm bg-muted rounded-full">
          <Image
            src="/images/icp.png"
            alt="Internet Computer Protocol"
            width={30}
            height={30}
            className="mr-0"
          />
          <span className="pr-2">Internet Computer Protocol</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">CredGenT</h1>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          Solusi modern untuk membuat, mengelola, dan memverifikasi sertifikat
          secara online. Tingkatkan efisiensi dan kepercayaan dengan teknologi
          otomatis yang andal dan mudah digunakan.
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
          <h2 className="mb-8 text-2xl text-center font-bold underline">
            Keuntungan Yang Didapatkan
          </h2>
          <div className="flex flex-col-reverse gap-8 items-center md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-center md:text-start">
                Keamanan & Transparansi
              </h2>
              <p className="text-muted-foreground">
                Sistem generator sertifikat online kami memastikan setiap
                sertifikat yang dihasilkan aman dan transparan. Dengan fitur
                verifikasi dan keamanan data yang canggih, Anda dapat
                mempercayakan validitas setiap sertifikat yang dihasilkan untuk
                kebutuhan akademik, pelatihan, atau penghargaan.
              </p>
            </div>
            <div className="w-36 h-36 rounded-full">
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
              <h2 className="text-2xl font-bold text-center md:text-start">
                Aksesibilitas & Bukti Abadi
              </h2>
              <p className="text-muted-foreground">
                Generator sertifikat online kami memudahkan Anda untuk membuat
                dan mengakses sertifikat kapan saja dan di mana saja. Sertifikat
                yang dihasilkan akan tersimpan secara permanen, memastikan bukti
                prestasi atau keahlian Anda tetap aman dan mudah diakses.
              </p>
            </div>
            <div className="w-36 h-36 rounded-full">
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
              <h2 className="text-2xl font-bold text-center md:text-start">
                Pengakuan
              </h2>
              <p className="text-muted-foreground">
                Setiap sertifikat yang Anda buat melalui platform kami adalah
                pengakuan resmi atas pencapaian Anda atau peserta Anda. Desain
                profesional dan opsi kustomisasi memungkinkan Anda membuat
                sertifikat yang unik dan kredibel, memberikan nilai lebih pada
                setiap penghargaan yang diberikan.
              </p>
            </div>
            <div className="w-36 h-36 rounded-full">
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
        <h2 className="mb-8 text-2xl font-bold underline">
          Fitur Yang Ditawarkan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="bg-muted/50">
            <CardContent className="p-6 space-y-4">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-full">
                <Image
                  src="/images/PembuatanSertifikatOtomatis.png"
                  alt="Deskripsi gambar"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg font-semibold">
                Pembuatan Sertifikat Otomatis
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 space-y-4">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-full">
                <Image
                  src="/images/PengelolaanDaftarPeserta.png"
                  alt="Deskripsi gambar"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg font-semibold">
                Pengelolaan Daftar Peserta
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 space-y-4">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-full">
                <Image
                  src="/images/TransferSertifikat.png"
                  alt="Deskripsi gambar"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg font-semibold">Transfer Sertifikat</h3>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 space-y-4">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-full">
                <Image
                  src="/images/VerifikasiOtentikasiPublik.png"
                  alt="Deskripsi gambar"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg font-semibold">Verifikasi Otentikasi</h3>
            </CardContent>
          </Card>
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
              <div className="flex w-8 h-8 bg-slate-200 items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex w-8 h-8 bg-slate-200 items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.5078 6.5L17.4988 6.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex w-8 h-8 bg-slate-200 items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
