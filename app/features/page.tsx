"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Smartphone, Globe, Lock, Wallet, Zap, RefreshCw, BarChart3, Layers, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function FeaturesPage() {
  const [isColorTransitioned, setIsColorTransitioned] = useState(false)

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
              Powerful Features
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-bold-lavender/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover all the innovative features that make CryptoWallet the most elegant and powerful crypto
              management solution available today.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">
                      <Shield className="h-6 w-6 text-bold-lavender" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-bold-lavender">Secure Storage</h3>
                    <p className="text-bold-lavender/80">
                      Your private keys never leave your device. Advanced encryption keeps your assets safe with
                      military-grade protection.
                    </p>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?key=gut1l"
                      alt="Secure Storage"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bold-lavender/30 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">
                      <Globe className="h-6 w-6 text-bold-lavender" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-bold-lavender">Multi-Chain Support</h3>
                    <p className="text-bold-lavender/80">
                      Manage assets across multiple blockchains in a single, unified interface with seamless cross-chain
                      operations.
                    </p>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?key=2e3h4"
                      alt="Multi-Chain Support"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bold-lavender/30 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">
                      <Smartphone className="h-6 w-6 text-bold-lavender" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-bold-lavender">Mobile First</h3>
                    <p className="text-bold-lavender/80">
                      Take your crypto with you. Available on iOS and Android with seamless sync across all your
                      devices.
                    </p>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?key=ob2z9"
                      alt="Mobile First"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bold-lavender/30 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">
                      <Wallet className="h-6 w-6 text-bold-lavender" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-bold-lavender">Built-in Exchange</h3>
                    <p className="text-bold-lavender/80">
                      Swap tokens directly in the app with competitive rates and minimal fees. No need to use external
                      exchanges.
                    </p>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?key=szodm"
                      alt="Built-in Exchange"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bold-lavender/30 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Advanced Features</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Designed for both beginners and power users, our advanced features give you complete control over your
              crypto assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-bold-lavender" />,
                title: "Lightning Fast Transactions",
                description: "Experience near-instant transactions with optimized network fee suggestions.",
              },
              {
                icon: <RefreshCw className="h-6 w-6 text-bold-lavender" />,
                title: "Automatic Backups",
                description: "Your wallet is automatically backed up to your secure cloud storage.",
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-bold-lavender" />,
                title: "Advanced Analytics",
                description: "Track your portfolio performance with detailed charts and insights.",
              },
              {
                icon: <Layers className="h-6 w-6 text-bold-lavender" />,
                title: "Layer 2 Support",
                description: "Enjoy lower fees with integrated Layer 2 solutions for Ethereum and other chains.",
              },
              {
                icon: <Lock className="h-6 w-6 text-bold-lavender" />,
                title: "Hardware Wallet Integration",
                description: "Connect your hardware wallets for maximum security of your assets.",
              },
              {
                icon: <Users className="h-6 w-6 text-bold-lavender" />,
                title: "Multi-Signature Support",
                description: "Create multi-signature wallets requiring multiple approvals for transactions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-bold-lavender/20 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-bold-lavender/10 p-3 rounded-full w-fit">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-bold-lavender">{feature.title}</h3>
                    <p className="text-bold-lavender/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">How We Compare</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              See how CryptoWallet stacks up against other solutions in the market.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-bold-lavender">Feature</th>
                  <th className="p-4 text-center bg-bold-lavender/10 text-bold-lavender font-bold">CryptoWallet</th>
                  <th className="p-4 text-center text-gray-600">Binance</th>
                  <th className="p-4 text-center text-gray-600">Bitpay</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Multi-Chain Support", us: true, compA: true, compB: false },
                  { feature: "Built-in Exchange", us: true, compA: false, compB: true },
                  { feature: "Hardware Wallet Integration", us: true, compA: true, compB: true },
                  { feature: "Layer 2 Support", us: true, compA: false, compB: false },
                  { feature: "Multi-Signature Wallets", us: true, compA: false, compB: false },
                  { feature: "DApp Browser", us: true, compA: true, compB: false },
                  { feature: "NFT Support", us: true, compA: true, compB: true },
                  { feature: "Fiat On/Off Ramp", us: true, compA: false, compB: true },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="p-4 border-t border-gray-200 text-bold-lavender">{row.feature}</td>
                    <td className="p-4 border-t border-gray-200 text-center bg-bold-lavender/5">
                      {row.us ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-bold-lavender text-white rounded-full">
                          ✓
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="p-4 border-t border-gray-200 text-center">
                      {row.compA ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-700 rounded-full">
                          ✓
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="p-4 border-t border-gray-200 text-center">
                      {row.compB ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-700 rounded-full">
                          ✓
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Experience the Difference</h2>
                <p className="text-lg text-white/90 mb-8">
                  Our elegant interface combined with powerful features creates an unmatched crypto management
                  experience.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Intuitive design that makes crypto simple",
                    "Real-time price updates and notifications",
                    "Customizable dashboard to track what matters to you",
                    "Dark and light mode for comfortable viewing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-bold-lavender rounded-full mr-3 mt-1">
                        ✓
                      </span>
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-white hover:bg-white/90 text-bold-lavender px-8 py-6 transition-all duration-300"
                onClick={() => window.location.href = "/download"}
                >
                  Try It Now
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mx-auto w-full max-w-md">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/cr-features.jpg?key=ef315"
                      alt="CryptoWallet Interface"
                      width={400}
                      height={600}
                      className="w-full"
                    />

                    {/* Animated elements */}
                    <div className="absolute top-1/4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Zap className="h-6 w-6 text-bold-lavender" />
                    </div>
                    <div className="absolute bottom-1/4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Shield className="h-6 w-6 text-bold-lavender" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Experience CryptoWallet?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Download our app today and discover why thousands of users trust CryptoWallet for managing their crypto
            assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90 text-white px-8 py-6 transition-all duration-300"
            onClick={() => window.location.href = "/download"}>
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
