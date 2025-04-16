"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, Apple, Monitor, Chrome, CheckCircle2, Star, Wallet, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function DownloadPage() {
  const [isColorTransitioned, setIsColorTransitioned] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState("ios")

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight

      if (progress >= 0.75) {
        setIsColorTransitioned(true)
      } else {
        setIsColorTransitioned(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const platforms = [
    {
      id: "ios",
      name: "iOS",
      icon: <Apple className="h-6 w-6" />,
      image: "/crypto-wallet-on-iphone.png",
      features: [
        "Optimized for iPhone and iPad",
        "Face ID and Touch ID support",
        "iCloud backup integration",
        "Apple Watch companion app",
      ],
      downloadText: "Download on the App Store",
      downloadLink: "#",
    },
    {
      id: "android",
      name: "Android",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.0775-9.4396" />
        </svg>
      ),
      image: "/crypto-wallet-on-phone.png",
      features: [
        "Works on all Android devices",
        "Fingerprint authentication",
        "Google Drive backup",
        "Home screen widgets",
      ],
      downloadText: "Get it on Google Play",
      downloadLink: "#",
    },
    {
      id: "desktop",
      name: "Desktop",
      icon: <Monitor className="h-6 w-6" />,
      image: "/desktop-crypto-wallet.png",
      features: [
        "Available for Windows, Mac, and Linux",
        "Hardware wallet integration",
        "Advanced trading features",
        "Multi-monitor support",
      ],
      downloadText: "Download for Desktop",
      downloadLink: "#",
    },
    {
      id: "extension",
      name: "Browser Extension",
      icon: <Chrome className="h-6 w-6" />,
      image: "/crypto-wallet-extension-interface.png",
      features: [
        "Works with Chrome, Firefox, and Edge",
        "Connect to DApps with one click",
        "Automatic website integration",
        "Secure password manager",
      ],
      downloadText: "Add to Browser",
      downloadLink: "#",
    },
  ]

  const selectedPlatformData = platforms.find((p) => p.id === selectedPlatform)

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${
        isColorTransitioned ? "bg-bold-lavender text-white" : "bg-white text-bold-lavender"
      }`}
    >
      <Header isColorTransitioned={isColorTransitioned} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-bold-lavender"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Download CryptoWallet
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-bold-lavender/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get started with CryptoWallet today. Available on all major platforms so you can manage your crypto assets
              wherever you are.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {platforms.map((platform) => (
                <Button
                  key={platform.id}
                  variant={selectedPlatform === platform.id ? "default" : "outline"}
                  className={`px-6 py-8 flex items-center gap-2 ${
                    selectedPlatform === platform.id
                      ? "bg-bold-lavender text-white"
                      : "border-bold-lavender text-bold-lavender hover:bg-bold-lavender/10"
                  }`}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  {platform.icon}
                  <span>{platform.name}</span>
                </Button>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
                key={selectedPlatform}
              >
                {selectedPlatformData && (
                  <div className="relative mx-auto max-w-xs">
                    {selectedPlatform === "ios" || selectedPlatform === "android" ? (
                      <div className="relative w-64 h-[500px] md:w-72 md:h-[550px] rounded-[40px] bg-black p-3 shadow-2xl border-8 border-black overflow-hidden mx-auto">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>

                        {/* Side buttons */}
                        <div className="absolute top-28 -right-2 w-2 h-12 bg-gray-700 rounded-l-lg"></div>
                        <div className="absolute top-44 -right-2 w-2 h-12 bg-gray-700 rounded-l-lg"></div>
                        <div className="absolute top-28 -left-2 w-2 h-16 bg-gray-700 rounded-r-lg"></div>

                        {/* Screen with wallet app */}
                        <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-bold-lavender/90 to-bold-lavender">
                          <Image
                            src={selectedPlatformData.image || "/placeholder.svg"}
                            alt={`${selectedPlatformData.name} App`}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Phone speaker */}
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-full"></div>
                      </div>
                    ) : selectedPlatform === "desktop" ? (
                      <div className="relative w-full max-w-md mx-auto">
                        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center">
                          <div className="flex space-x-2 ml-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="mx-auto text-white text-sm">CryptoWallet</div>
                        </div>
                        <div className="bg-gray-100 border-4 border-gray-800 border-t-0 rounded-b-lg p-4 h-[400px] relative">
                          <Image
                            src={selectedPlatformData.image || "/placeholder.svg"}
                            alt={`${selectedPlatformData.name} App`}
                            fill
                            className="object-cover rounded-b-lg"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-md mx-auto">
                        <div className="bg-gray-200 rounded-t-lg p-2 flex items-center">
                          <div className="flex space-x-2 ml-2">
                            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                          </div>
                          <div className="mx-auto text-gray-700 text-sm">Browser Extension</div>
                        </div>
                        <div className="bg-white border border-gray-300 rounded-b-lg p-4 h-[400px] relative">
                          <Image
                            src={selectedPlatformData.image || "/placeholder.svg"}
                            alt={`${selectedPlatformData.name} App`}
                            fill
                            className="object-cover rounded-b-lg"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>

            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={selectedPlatform}
              >
                {selectedPlatformData && (
                  <>
                    <h2 className="text-3xl font-bold mb-6 text-bold-lavender">{selectedPlatformData.name} Features</h2>
                    <ul className="space-y-4 mb-8">
                      {selectedPlatformData.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <CheckCircle2 className="h-6 w-6 text-bold-lavender mr-3 mt-1 flex-shrink-0" />
                          <span className="text-bold-lavender/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button className="bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90 text-white px-8 py-6 transition-all duration-300 flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      {selectedPlatformData.downloadText}
                    </Button>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">What Users Say</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust CryptoWallet for managing their crypto assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Crypto Investor",
                review:
                  "CryptoWallet has completely transformed how I manage my crypto portfolio. The interface is beautiful and intuitive, and the security features give me peace of mind.",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "DeFi Enthusiast",
                review:
                  "The multi-chain support is a game-changer. I can manage all my assets across different blockchains in one place. The built-in swap feature saves me so much time.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Blockchain Developer",
                review:
                  "As a developer, I appreciate the attention to detail in the security implementation. The DApp browser is also excellent for testing and using my applications.",
                rating: 4,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-bold-lavender/80 mb-6 italic">"{review.review}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-bold-lavender/20 flex items-center justify-center mr-4">
                        <span className="text-bold-lavender font-bold">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-bold-lavender">{review.name}</h3>
                        <p className="text-bold-lavender/60 text-sm">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "1M+", label: "Downloads" },
              { number: "4.8", label: "Average Rating" },
              { number: "150+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-bold-lavender mb-2">{stat.number}</div>
                <div className="text-xl text-bold-lavender/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Easy Installation</h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Getting started with CryptoWallet is quick and easy. Follow these simple steps to set up your wallet.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform md:translate-x-[-0.5px]"></div>

              {/* Timeline items */}
              {[
                {
                  title: "Download the App",
                  description: "Choose your platform and download CryptoWallet from the official store.",
                  icon: <Download className="h-6 w-6 text-white" />,
                },
                {
                  title: "Create or Import a Wallet",
                  description: "Create a new wallet or import an existing one using your recovery phrase.",
                  icon: <Wallet className="h-6 w-6 text-white" />,
                },
                {
                  title: "Secure Your Wallet",
                  description: "Set up biometric authentication and securely store your recovery phrase.",
                  icon: <Lock className="h-6 w-6 text-white" />,
                },
                {
                  title: "Start Using CryptoWallet",
                  description: "Add funds, manage your assets, and explore the features of CryptoWallet.",
                  icon: <Zap className="h-6 w-6 text-white" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                    index % 2 === 0 ? "md:justify-start" : "md:flex-row-reverse md:justify-start"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                    <p className="text-black/80">{item.description}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 transform md:translate-x-[-50%] w-10 h-10 bg-bold-lavender rounded-full flex items-center justify-center z-10">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Download CryptoWallet today and experience the most elegant way to manage your crypto assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white hover:bg-white/90 text-bold-lavender px-8 py-6 transition-all duration-300 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bold-lavender text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} CryptoWallet. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/features" className="hover:underline">
                Features
              </Link>
              <Link href="/security" className="hover:underline">
                Security
              </Link>
              <Link href="/chains" className="hover:underline">
                Chains
              </Link>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
              <Link href="/download" className="hover:underline">
                Download
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
