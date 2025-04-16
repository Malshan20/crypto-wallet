"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Coins, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"

export default function ChainsPage() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const blockchains = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      color: "bg-yellow-500",
      description:
        "The original cryptocurrency that started it all. Bitcoin is a decentralized digital currency without a central bank or administrator.",
      features: ["Secure", "Decentralized", "Limited Supply", "Store of Value"],
      image: "/bitcoin.png",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      color: "bg-blue-500",
      description:
        "A decentralized, open-source blockchain with smart contract functionality. Ethereum enables developers to build and deploy decentralized applications.",
      features: ["Smart Contracts", "DeFi", "NFTs", "Decentralized Apps"],
      image: "/ethereum.png",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      color: "bg-purple-500",
      description:
        "A high-performance blockchain supporting builders around the world creating crypto apps that scale.",
      features: ["High Speed", "Low Fees", "Scalable", "Energy Efficient"],
      image: "/solana.png",
    },
    {
      id: "ripple",
      name: "Ripple",
      symbol: "XRP",
      color: "bg-blue-300",
      description:
        "A digital payment protocol and cryptocurrency that enables fast, low-cost international money transfers.",
      features: ["Fast Transactions", "Low Fees", "Scalable", "Enterprise Ready"],
      image: "/ripple.png",
    },
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      color: "bg-blue-700",
      description:
        "A proof-of-stake blockchain platform that aims to enable 'changemakers, innovators and visionaries' to bring about positive global change.",
      features: ["Peer-Reviewed", "Sustainable", "Secure", "Scalable"],
      image: "/cardano.png",
    },
    {
      id: "polygon",
      name: "Polygon",
      symbol: "MATIC",
      color: "bg-indigo-500",
      description: "A protocol and a framework for building and connecting Ethereum-compatible blockchain networks.",
      features: ["Ethereum Scaling", "Low Gas Fees", "Fast Transactions", "Developer Friendly"],
      image: "/polygon.png",
    },
    {
      id: "avalanche",
      name: "Avalanche",
      symbol: "AVAX",
      color: "bg-red-500",
      description: "An open, programmable smart contracts platform for decentralized applications.",
      features: ["High Throughput", "Instant Finality", "Subnet Architecture", "EVM Compatible"],
      image: "/avalanche.png",
    },
    {
      id: "bnb",
      name: "BNB",
      symbol: "BNB",
      color: "bg-yellow-300",
      description:
        "The native cryptocurrency of Binance Chain and Binance Smart Chain, used for transaction fees and more.",
      features: ["Low Fees", "Fast Transactions", "Ecosystem Growth", "Utility Token"],
      image: "/bnb.png",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${isColorTransitioned ? "bg-bold-lavender text-white" : "bg-white text-bold-lavender"
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
              Supported Blockchains
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-bold-lavender/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              CryptoWallet supports a wide range of blockchains, allowing you to manage all your assets in one secure
              place. Explore the blockchains we support and their unique features.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {blockchains.map((blockchain, index) => (
              <motion.div
                key={blockchain.id}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mb-4 rounded-full ${blockchain.color} flex items-center justify-center text-white text-2xl font-bold`}
                >
                  <Image
                    src={`/${blockchain.name.toLowerCase()}.png`}
                    alt={blockchain.name}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="font-bold text-center text-bold-lavender">{blockchain.name}</h3>
                <p className="text-xs text-center text-bold-lavender/60 mt-1">{blockchain.symbol}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blockchain Details Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Explore Blockchains</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Learn more about each blockchain we support and their unique features.
            </p>
          </div>

          <Tabs defaultValue="bitcoin" className="w-full">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
              {blockchains.map((blockchain) => (
                <TabsTrigger
                  key={blockchain.id}
                  value={blockchain.id}
                  className="data-[state=active]:bg-bold-lavender data-[state=active]:text-white"
                >
                  {blockchain.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {blockchains.map((blockchain) => (
              <TabsContent key={blockchain.id} value={blockchain.id}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div
                        className={`relative rounded-full ${blockchain.color} p-8 w-48 h-48 mx-auto flex items-center justify-center`}
                      >
                        <Image
                          src={blockchain.image || "/placeholder.svg"}
                          alt={blockchain.name}
                          width={120}
                          height={120}
                          className="object-contain"
                        />

                        {/* Animated orbit effect */}
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 animate-[spin_20s_linear_infinite]"></div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-bold-lavender">
                      {blockchain.name} <span className="text-bold-lavender/60">({blockchain.symbol})</span>
                    </h3>
                    <p className="text-lg text-bold-lavender/80 mb-6">{blockchain.description}</p>

                    <h4 className="font-bold mb-3 text-bold-lavender">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {blockchain.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-bold-lavender text-white rounded-full mr-2 text-xs">
                            ✓
                          </span>
                          <span className="text-bold-lavender/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Cross-Chain Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Cross-Chain Features</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              CryptoWallet makes it easy to manage assets across multiple blockchains with our innovative cross-chain
              features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-bold-lavender" />,
                title: "Cross-Chain Swaps",
                description: "Swap tokens between different blockchains directly in the app with competitive rates.",
              },
              {
                icon: <Coins className="h-6 w-6 text-bold-lavender" />,
                title: "Unified Portfolio",
                description: "View and manage all your assets across different blockchains in one unified interface.",
              },
              {
                icon: <Wallet className="h-6 w-6 text-bold-lavender" />,
                title: "Multi-Chain Wallet",
                description: "One wallet for all your crypto assets, no need to switch between different wallets.",
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

      {/* Blockchain Network Visualization */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-bold-lavender overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Connected Blockchain Network</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Our wallet connects multiple blockchains into one seamless network, allowing for easy asset management.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* This would be a complex blockchain network visualization */}
              {/* For now, we'll use a placeholder image */}
              <div className="relative w-full h-full">
                <Image src="/blockchain-bg.png" alt="Blockchain Network" fill className="object-contain" />

                {/* Animated nodes */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-12 h-12 rounded-full ${blockchains[i].color} flex items-center justify-center text-white font-bold shadow-lg`}
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  >
                    <Image
                      src={`/${blockchains[i].name.toLowerCase()}.png`}
                      alt={blockchains[i].name}
                      width={32}
                      height={32}
                    />
                  </motion.div>
                ))}

                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const startX = 10 + Math.random() * 80
                    const startY = 20 + Math.random() * 60
                    const endX = 10 + Math.random() * 80
                    const endY = 20 + Math.random() * 60

                    return (
                      <motion.path
                        key={i}
                        d={`M ${startX}% ${startY}% Q ${(startX + endX) / 2 + (Math.random() * 20 - 10)}% ${(startY + endY) / 2 + (Math.random() * 20 - 10)}% ${endX}% ${endY}%`}
                        stroke="rgba(106, 90, 205, 0.3)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: i * 0.1 }}
                      />
                    )
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Chains */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Coming Soon</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We're constantly expanding our blockchain support. Here are some chains we're working on adding next.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Arbitrum", symbol: "ARB", color: "bg-blue-400" },
              { name: "Optimism", symbol: "OP", color: "bg-red-400" },
              { name: "Near", symbol: "NEAR", color: "bg-gray-700" },
              { name: "Fantom", symbol: "FTM", color: "bg-blue-600" },
            ].map((chain, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center border border-dashed border-bold-lavender/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-16 h-16 mb-4 rounded-full ${chain.color} flex items-center justify-center text-white text-2xl font-bold opacity-70`}
                >
                  <Image
                    src={`/${chain.name.toLowerCase()}.svg`}
                    alt={chain.name}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="font-bold text-center text-bold-lavender">{chain.name}</h3>
                <p className="text-xs text-center text-bold-lavender/60 mt-1">{chain.symbol}</p>
                <span className="mt-3 px-3 py-1 bg-bold-lavender/20 text-bold-lavender text-xs rounded-full">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Manage All Your Crypto in One Place</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Download CryptoWallet today and experience the convenience of managing all your crypto assets across
            multiple blockchains in one secure app.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white hover:bg-white/90 text-bold-lavender px-8 py-6 transition-all duration-300">
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