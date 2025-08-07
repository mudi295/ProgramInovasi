"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Heart, Target, Users, Info } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Beranda", icon: <Home className="h-4 w-4" /> },
    { href: "/berani", label: "Berani", icon: <Heart className="h-4 w-4" /> },
    { href: "/beraksi", label: "Beraksi", icon: <Target className="h-4 w-4" /> },
    { href: "/berkolaborasi", label: "Berkolaborasi", icon: <Users className="h-4 w-4" /> },
    { href: "/tentang", label: "Tentang", icon: <Info className="h-4 w-4" /> },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <img
      src="/logo.png" // <- ganti sesuai path logo kamu
      alt="Logo Kecil"
      className="w-6 h-6 object-contain"
    />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SIGMA SI KENCANA
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-gray-700 dark:text-gray-300">
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white dark:bg-gray-900">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      SIGMA SI KENCANA
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Platform Edukasi Digital</p>
                  </div>
                  
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 text-gray-700 dark:text-gray-300">
                        {item.icon}
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
