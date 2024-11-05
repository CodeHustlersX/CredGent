"use client"

import { ArrowRight, Home, LayoutDashboard, LogOut, Plus, ScrollText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <LayoutDashboard className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="space-y-4 py-4">
            <div className="px-6 py-2">
              <h2 className="text-2xl font-bold tracking-tight">CredGent</h2>
            </div>
            <nav className="space-y-1 px-2">
              <NavigationItems />
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <div className="space-y-4 py-4">
          <div className="px-6 py-2">
            <h2 className="text-2xl font-bold tracking-tight">CredGent</h2>
          </div>
          <ScrollArea className="flex-1">
            <nav className="space-y-1 px-2">
              <NavigationItems />
            </nav>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:pl-64">
        <div className="flex h-16 items-center justify-between px-4 md:px-8 border-b">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50" asChild>
            <a href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </a>
          </Button>
        </div>
        <div className="p-4 md:p-8">
          {/* Add your dashboard content here */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard title="Total Certificates" value="128" />
            <DashboardCard title="Pending Approval" value="12" />
            <DashboardCard title="Issued Today" value="5" />
            <DashboardCard title="Active Users" value="256" />
          </div>
        </div>
      </main>
    </div>
  )
}

function NavigationItems() {
  return (
    <>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
      >
        <Plus className="h-4 w-4" />
        Create Sertifikat
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
      >
        <ScrollText className="h-4 w-4" />
        Lihat Sertifikat
      </Link>
      <Separator className="my-2" />
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
      >
        <ArrowRight className="h-4 w-4" />
        Dolor sit
      </Link>
    </>
  )
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}