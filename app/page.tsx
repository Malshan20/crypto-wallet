"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Shield, Smartphone, Globe, Lock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isColorTransitioned, setIsColorTransitioned] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)

      if (progress >= 0.75) {
        setIsColorTransitioned(true)
      } else {
        setIsColorTransitioned(false)
      }

      // We're removing the JavaScript-based parallax effect here
      // to let the CSS background-attachment: fixed handle it
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${
        isColorTransitioned ? "bg-bold-lavender text-white" : "bg-white text-bold-lavender"
      }`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500">
        <div
          className={`container mx-auto px-4 py-4 flex items-center justify-between transition-colors duration-500 ${isColorTransitioned ? "bg-gradient-to-r from-bold-lavender/90 to-white/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"}`}
        >
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bold-lavender to-white">
              CryptoWallet
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
            >
              Features
            </Link>
            <Link
              href="#security"
              className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
            >
              Security
            </Link>
            <Link
              href="#chains"
              className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
            >
              Chains
            </Link>
            <Link
              href="#faq"
              className={`${isColorTransitioned ? "text-white" : "text-bold-lavender"} hover:opacity-80 transition-colors`}
            >
              FAQ
            </Link>
            <Button
              className={`${
                isColorTransitioned
                  ? "bg-gradient-to-r from-white to-white hover:from-white hover:to-bold-lavender/40"
                  : "bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90"
              } text-${isColorTransitioned ? "bold-lavender" : "white"} transition-all duration-300`}
            >
              Download Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                href="#features"
                className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#security"
                className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link
                href="#chains"
                className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Chains
              </Link>
              <Link
                href="#faq"
                className="text-2xl font-medium text-white hover:text-white/80 transition-all transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button
                className="mt-8 w-full max-w-xs bg-gradient-to-r from-bold-lavender to-white hover:from-white hover:to-bold-lavender text-bold-lavender font-medium transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-bold-lavender">
                The Elegant Crypto Wallet for Everyone
              </h1>
              <p className="text-lg md:text-xl text-bold-lavender/80 mb-8">
                Secure, beautiful, and easy to use. Manage your crypto assets with style and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className={`${
                    isColorTransitioned
                      ? "bg-gradient-to-r from-white to-white hover:from-white hover:to-bold-lavender/40"
                      : "bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90"
                  } text-${isColorTransitioned ? "bold-lavender" : "white"} px-8 py-6 transition-all duration-300`}
                >
                  Download Now
                </Button>
                <Button
                  variant="outline"
                  className={`${
                    isColorTransitioned
                      ? "border-white text-white bg-transparent hover:bg-gradient-to-r hover:from-white/10 hover:to-bold-lavender/30"
                      : "border-bold-lavender text-bold-lavender bg-transparent hover:bg-gradient-to-r hover:from-bold-lavender/10 hover:to-white/30"
                  } px-8 py-6 transition-all duration-300`}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] md:w-80 md:h-[600px] rounded-[40px] bg-black p-3 shadow-2xl border-8 border-black overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>

                {/* Side buttons */}
                <div className="absolute top-28 -right-2 w-2 h-12 bg-gray-700 rounded-l-lg"></div>
                <div className="absolute top-44 -right-2 w-2 h-12 bg-gray-700 rounded-l-lg"></div>
                <div className="absolute top-28 -left-2 w-2 h-16 bg-gray-700 rounded-r-lg"></div>

                {/* Screen with wallet app */}
                <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-bold-lavender/90 to-bold-lavender">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-4 py-2 text-xs text-white bg-black/20">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-8 5h8" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Wallet content */}
                  <div className="p-4">
                    <div className="text-white text-lg font-bold mb-2">CryptoWallet</div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
                      <div className="text-xs text-white/70 mb-1">Total Balance</div>
                      <div className="text-2xl font-bold text-white mb-1">$24,518.29</div>
                      <div className="text-xs text-green-300">+5.23% today</div>
                    </div>

                    {/* Crypto assets */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mr-2">
                            ₿
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Bitcoin</div>
                            <div className="text-white/70 text-xs">BTC</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm">$16,382.12</div>
                          <div className="text-green-300 text-xs">+3.45%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                            Ξ
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Ethereum</div>
                            <div className="text-white/70 text-xs">ETH</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm">$5,928.41</div>
                          <div className="text-green-300 text-xs">+2.18%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-2">
                            S
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Solana</div>
                            <div className="text-white/70 text-xs">SOL</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm">$2,207.76</div>
                          <div className="text-red-300 text-xs">-1.23%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md p-2 flex justify-around">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div className="text-white text-[8px]">Home</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-bold-lavender"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-white text-[8px]">Wallet</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </div>
                      <div className="text-white text-[8px]">Trade</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-white text-[8px]">Settings</div>
                    </div>
                  </div>
                </div>

                {/* Phone speaker */}
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Parallax Background */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 -z-10 opacity-20 bg-fixed"
          style={{
            backgroundImage: "url('/bg-para.jpg?height=1000&width=1000')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed", 
            backgroundPosition: "center",
          }}
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Powerful Features</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Everything you need to manage your crypto assets in one elegant app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-bold-lavender/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-bold-lavender" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-bold-lavender">Secure Storage</h3>
                <p className="text-bold-lavender/80">
                  Your private keys never leave your device. Advanced encryption keeps your assets safe.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-bold-lavender/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-bold-lavender/20 p-3 rounded-full w-fit">
                  <Globe className="h-6 w-6 text-bold-lavender" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Chain Support</h3>
                <p className="text-gray-700">
                  Manage assets across multiple blockchains in a single, unified interface.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-bold-lavender/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">
                  <Smartphone className="h-6 w-6 text-bold-lavender" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile First</h3>
                <p className="text-gray-700">
                  Take your crypto with you. Available on iOS and Android with seamless sync.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 md:py-32 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Bank-Grade Security</h2>
              <p className="text-lg text-bold-lavender/80 mb-8">
                We take security seriously. Your assets are protected by multiple layers of security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Lock className={`h-6 w-6 ${isColorTransitioned ? "text-white" : "text-bold-lavender"} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-bold">Non-Custodial</h3>
                    <p className={isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}>
                      You control your private keys and assets at all times.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="h-6 w-6 text-bold-lavender mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold">Biometric Authentication</h3>
                    <p className="text-gray-700">Secure access with fingerprint or face recognition.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="h-6 w-6 text-bold-lavender mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold">Encrypted Backup</h3>
                    <p className="text-gray-700">Securely backup and restore your wallet when needed.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/security.jpg?height=400&width=500"
                alt="Security Features"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chains Section */}
      <section id="chains" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Supported Blockchains</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Manage all your assets across multiple chains in one elegant interface.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {["Bitcoin", "Ethereum", "Solana", "Ripple", "Cardano", "Polygon", "Avalanche", "BNB"].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Image src={`/${i.toLowerCase()}.png?height=50&width=50`} alt={`Chain ${i}`} width={50} height={50} />
                </div>
                <h3 className="font-bold text-center">{i}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Get Started Today</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Download our app and start managing your crypto assets with style and confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-gradient-to-r from-black to-black hover:from-black hover:to-bold-lavender/90 text-white px-8 py-6 flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
              <Download className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button className="bg-gradient-to-r from-black to-black hover:from-black hover:to-bold-lavender/90 text-white px-8 py-6 flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
              <Download className="h-5 w-5" />
              Download for Android
            </Button>
            <Button className="bg-gradient-to-r from-black to-black hover:from-black hover:to-bold-lavender/90 text-white px-8 py-6 flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
              <Download className="h-5 w-5" />
              Chrome Extension
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">Find answers to common questions about our wallet.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5 text-white">
                  Is my crypto safe in this wallet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  Yes, your crypto is safe. We use industry-leading security measures, and your private keys never leave
                  your device. We employ end-to-end encryption and support hardware wallet integration for maximum
                  security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5">
                  What blockchains do you support?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We support a wide range of blockchains including Ethereum, Solana, Bitcoin, Polygon, Avalanche, and
                  many more. We're constantly adding support for new chains.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5">
                  How do I backup my wallet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  You can backup your wallet by securely storing your recovery phrase. This is a 12 or 24-word phrase
                  that you should write down and keep in a safe place. Never share this phrase with anyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5">
                  Are there any fees for using the wallet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  The wallet itself is free to use. You only pay the standard network fees when making transactions on
                  the blockchain. We don't charge any additional fees for basic wallet functionality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5">
                  Can I connect to DApps?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, our wallet supports connections to decentralized applications (DApps) across multiple
                  blockchains. You can browse and interact with your favorite DApps directly from the wallet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bold-lavender text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CryptoWallet</h3>
              <p className="mb-4">The elegant crypto wallet for everyone.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="sr-only">Discord</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-bold-lavender/20 text-center">
            <p>&copy; {new Date().getFullYear()} CryptoWallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
