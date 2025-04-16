"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isColorTransitioned: boolean
}

export default function Header({ isColorTransitioned }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500">
      <div
        className={`container mx-auto px-4 py-4 flex items-center justify-between transition-colors duration-500 ${isColorTransitioned ? "bg-gradient-to-r from-bold-lavender/90 to-white/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"}`}
      >
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bold-lavender to-white">
              CryptoWallet
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/features"
            className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
          >
            Features
          </Link>
          <Link
            href="/security"
            className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
          >
            Security
          </Link>
          <Link
            href="/chains"
            className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
          >
            Chains
          </Link>
          <Link
            href="/faq"
            className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
          >
            FAQ
          </Link>
          <Link href="/download">
            <Button
              className={`${
                isColorTransitioned
                  ? "bg-gradient-to-r from-white to-white hover:from-white hover:to-bold-lavender/40"
                  : "bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90"
              } text-${isColorTransitioned ? "bold-lavender" : "white"} transition-all duration-300`}
            >
              Download Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-bold-lavender z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-8 items-center">
            <Link
              href="/features"
              className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/security"
              className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/chains"
              className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Chains
            </Link>
            <Link
              href="/faq"
              className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link href="/download" className="mt-8 w-full max-w-xs" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-bold-lavender to-white hover:from-white hover:to-bold-lavender text-bold-lavender font-medium transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                Download Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
