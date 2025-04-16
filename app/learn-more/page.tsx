"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Shield,
  Lock,
  Key,
  Smartphone,
  Globe,
  RefreshCw,
  Users,
  Layers,
  ArrowRight,
  Check,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

export default function LearnMore() {
  const [isColorTransitioned, setIsColorTransitioned] = useState(false)
  const [activeTab, setActiveTab] = useState("what-is")
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight

      if (progress >= 0.3) {
        setIsColorTransitioned(true)
      } else {
        setIsColorTransitioned(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay was prevented:", error)
      })
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${
        isColorTransitioned ? "bg-bold-lavender text-white" : "bg-white text-bold-lavender"
      }`}
    >
      <Header isColorTransitioned={isColorTransitioned} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-bold-lavender">Understanding CryptoWallet</h1>
            <p className="text-lg md:text-xl text-bold-lavender/80 mb-12 max-w-3xl mx-auto">
              Discover how our elegant crypto wallet is revolutionizing the way people manage, secure, and grow their
              digital assets.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-bold-lavender/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-bold-lavender" />
                  </div>
                  <CardTitle>Secure by Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Built with security as the foundation, not an afterthought. Your assets are protected by multiple
                    layers of cutting-edge encryption.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-bold-lavender/10 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-bold-lavender" />
                  </div>
                  <CardTitle>Elegant Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Designed for both crypto novices and experts, our intuitive interface makes managing digital assets
                    simple and beautiful.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-bold-lavender/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-bold-lavender" />
                  </div>
                  <CardTitle>Multi-Chain Freedom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Manage assets across multiple blockchains in one unified interface, with seamless cross-chain
                    operations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl mb-16"
          >
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                poster="/interconnected-finance.png"
              >
                <source src="/placeholder-video" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">See CryptoWallet in Action</h3>
                  <p className="text-white/80">Experience the elegance and simplicity of our wallet interface</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-bold-lavender blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500 blur-3xl"></div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className={`py-20 ${isColorTransitioned ? "bg-bold-lavender/90" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
            >
              Everything You Need to Know
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}`}
            >
              Explore the details of how CryptoWallet works and why it's the perfect solution for your crypto needs.
            </p>
          </motion.div>

          <Tabs defaultValue="what-is" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
              <TabsTrigger
                value="what-is"
                className={`rounded-lg py-3 ${
                  activeTab === "what-is"
                    ? isColorTransitioned
                      ? "bg-white text-bold-lavender"
                      : "bg-bold-lavender text-white"
                    : isColorTransitioned
                      ? "bg-bold-lavender/20 text-white"
                      : "bg-white text-bold-lavender border border-bold-lavender/20"
                }`}
              >
                What is CryptoWallet?
              </TabsTrigger>
              <TabsTrigger
                value="how-it-works"
                className={`rounded-lg py-3 ${
                  activeTab === "how-it-works"
                    ? isColorTransitioned
                      ? "bg-white text-bold-lavender"
                      : "bg-bold-lavender text-white"
                    : isColorTransitioned
                      ? "bg-bold-lavender/20 text-white"
                      : "bg-white text-bold-lavender border border-bold-lavender/20"
                }`}
              >
                How It Works
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className={`rounded-lg py-3 ${
                  activeTab === "security"
                    ? isColorTransitioned
                      ? "bg-white text-bold-lavender"
                      : "bg-bold-lavender text-white"
                    : isColorTransitioned
                      ? "bg-bold-lavender/20 text-white"
                      : "bg-white text-bold-lavender border border-bold-lavender/20"
                }`}
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="use-cases"
                className={`rounded-lg py-3 ${
                  activeTab === "use-cases"
                    ? isColorTransitioned
                      ? "bg-white text-bold-lavender"
                      : "bg-bold-lavender text-white"
                    : isColorTransitioned
                      ? "bg-bold-lavender/20 text-white"
                      : "bg-white text-bold-lavender border border-bold-lavender/20"
                }`}
              >
                Use Cases
              </TabsTrigger>
            </TabsList>

            <TabsContent value="what-is" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl ${isColorTransitioned ? "bg-white/10 backdrop-blur-md" : "bg-bold-lavender/5"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-4 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                    >
                      The Next Generation Crypto Wallet
                    </h3>
                    <p className={`mb-4 ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                      CryptoWallet is a secure, elegant, and user-friendly digital wallet designed to help you manage
                      your cryptocurrency assets with confidence. Unlike traditional wallets, CryptoWallet combines
                      cutting-edge security with an intuitive interface that makes crypto accessible to everyone.
                    </p>
                    <p className={`mb-6 ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                      Whether you're a seasoned crypto investor or just getting started, our wallet provides the tools
                      and features you need to securely store, send, receive, and manage your digital assets across
                      multiple blockchains.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Non-custodial - you always control your private keys",
                        "Multi-chain support for all major blockchains",
                        "Built-in exchange for seamless trading",
                        "DApp browser for Web3 exploration",
                        "Real-time market data and portfolio tracking",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <Check
                            className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                          />
                          <p className={isColorTransitioned ? "text-white/90" : "text-gray-700"}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/sleek-crypto-portfolio.png"
                        alt="CryptoWallet Interface"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bold-lavender rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold">4.9</div>
                        <div className="text-xs">User Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="how-it-works" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl ${isColorTransitioned ? "bg-white/10 backdrop-blur-md" : "bg-bold-lavender/5"}`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                  How CryptoWallet Works
                </h3>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-bold-lavender/20 to-bold-lavender/40 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-bold-lavender/30 animate-[spin_20s_linear_infinite]"></div>
                        <div className="text-6xl font-bold text-bold-lavender">1</div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4
                        className={`text-xl font-bold mb-3 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                      >
                        Create Your Wallet
                      </h4>
                      <p className={`mb-4 ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                        Download the CryptoWallet app and create a new wallet in seconds. During setup, we'll generate a
                        unique 12 or 24-word recovery phrase that serves as the master key to your wallet. This phrase
                        is never stored on our servers and should be written down and kept in a secure location.
                      </p>
                      <div className={`p-4 rounded-lg ${isColorTransitioned ? "bg-white/10" : "bg-bold-lavender/10"}`}>
                        <h5 className={`font-bold mb-2 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                          Security Note:
                        </h5>
                        <p className={`text-sm ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                          Your recovery phrase is the only way to restore your wallet if your device is lost or damaged.
                          Never share it with anyone, and never enter it on any website or app other than the official
                          CryptoWallet app.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center md:order-last">
                      <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-bold-lavender/20 to-bold-lavender/40 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-bold-lavender/30 animate-[spin_20s_linear_infinite_reverse]"></div>
                        <div className="text-6xl font-bold text-bold-lavender">2</div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4
                        className={`text-xl font-bold mb-3 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                      >
                        Add Your Assets
                      </h4>
                      <p className={`mb-4 ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                        Once your wallet is set up, you can add assets by receiving them from another wallet or
                        exchange. Simply select the asset you want to receive, copy your unique address, and share it
                        with the sender. You can also purchase crypto directly within the app using our integrated fiat
                        on-ramp partners.
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {["Bitcoin", "Ethereum", "Solana"].map((coin, index) => (
                          <div
                            key={index}
                            className={`p-3 rounded-lg text-center ${isColorTransitioned ? "bg-white/10" : "bg-bold-lavender/10"}`}
                          >
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                              {index === 0 && <span className="text-yellow-500 font-bold">₿</span>}
                              {index === 1 && <span className="text-blue-500 font-bold">Ξ</span>}
                              {index === 2 && <span className="text-purple-500 font-bold">S</span>}
                            </div>
                            <p
                              className={`text-sm font-medium ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                            >
                              {coin}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-bold-lavender/20 to-bold-lavender/40 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-bold-lavender/30 animate-[spin_20s_linear_infinite]"></div>
                        <div className="text-6xl font-bold text-bold-lavender">3</div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4
                        className={`text-xl font-bold mb-3 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                      >
                        Manage & Grow
                      </h4>
                      <p className={`mb-4 ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                        With your assets in your wallet, you can now send, receive, swap between different
                        cryptocurrencies, and track your portfolio's performance. Our built-in DApp browser allows you
                        to connect to decentralized applications for staking, lending, and other DeFi activities to grow
                        your assets.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Send", "Receive", "Swap", "Stake", "Earn", "Connect"].map((action, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isColorTransitioned ? "bg-white/20 text-white" : "bg-bold-lavender/20 text-bold-lavender"
                            }`}
                          >
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl ${isColorTransitioned ? "bg-white/10 backdrop-blur-md" : "bg-bold-lavender/5"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-4 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                    >
                      Bank-Grade Security Architecture
                    </h3>
                    <p className={`mb-6 ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                      Security is at the core of everything we do. CryptoWallet employs multiple layers of protection to
                      ensure your assets remain safe at all times, while still providing a seamless user experience.
                    </p>

                    <div className="space-y-6">
                      <div className={`p-4 rounded-lg ${isColorTransitioned ? "bg-white/10" : "bg-bold-lavender/10"}`}>
                        <div className="flex items-start">
                          <Lock
                            className={`h-6 w-6 mr-3 mt-1 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                          />
                          <div>
                            <h4
                              className={`font-bold mb-1 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                            >
                              Non-Custodial Architecture
                            </h4>
                            <p className={`text-sm ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                              Your private keys never leave your device. We use a fully non-custodial architecture,
                              meaning you have complete control over your assets at all times.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg ${isColorTransitioned ? "bg-white/10" : "bg-bold-lavender/10"}`}>
                        <div className="flex items-start">
                          <Shield
                            className={`h-6 w-6 mr-3 mt-1 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                          />
                          <div>
                            <h4
                              className={`font-bold mb-1 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                            >
                              End-to-End Encryption
                            </h4>
                            <p className={`text-sm ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                              All data is encrypted using AES-256 encryption, the same standard used by financial
                              institutions and military organizations worldwide.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg ${isColorTransitioned ? "bg-white/10" : "bg-bold-lavender/10"}`}>
                        <div className="flex items-start">
                          <Key
                            className={`h-6 w-6 mr-3 mt-1 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                          />
                          <div>
                            <h4
                              className={`font-bold mb-1 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                            >
                              Biometric Authentication
                            </h4>
                            <p className={`text-sm ${isColorTransitioned ? "text-white/90" : "text-gray-700"}`}>
                              Secure access to your wallet using fingerprint or face recognition, with additional PIN
                              protection as a backup.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-8 shadow-2xl overflow-hidden">
                      {/* Vault door */}
                      <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg p-6 border-8 border-gray-700 shadow-inner">
                        {/* Vault wheel */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border-4 border-gray-600 flex items-center justify-center shadow-lg animate-[spin_10s_linear_infinite_reverse]">
                            <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                            </div>
                          </div>
                        </div>

                        {/* Vault interior */}
                        <div className="bg-gradient-to-br from-bold-lavender/20 to-bold-lavender/40 rounded-md p-5 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm">
                          {/* Digital security elements */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
                              {Array.from({ length: 100 }).map((_, i) => (
                                <div key={i} className="text-xs text-white/50 font-mono">
                                  {Math.random() > 0.5 ? "0" : "1"}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Security scan effect */}
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-2 bg-bold-lavender/30 animate-[scan_3s_ease-in-out_infinite]"></div>
                          </div>

                          {/* Security icons */}
                          <div className="flex space-x-4 z-10">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                              <Shield className="h-6 w-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                              <Lock className="h-6 w-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                              <Key className="h-6 w-6 text-white" />
                            </div>
                          </div>

                          {/* Digital lock display */}
                          <div className="absolute bottom-4 right-4 bg-black/40 rounded-md px-3 py-1 backdrop-blur-md">
                            <span className="text-green-400 font-mono text-xs">SECURED</span>
                          </div>
                        </div>
                      </div>

                      {/* Vault bolts/rivets */}
                      <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-500"></div>
                      <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-500"></div>
                      <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-500"></div>
                      <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-500"></div>

                      {/* Glowing security effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-bold-lavender/0 to-bold-lavender/20 opacity-50 mix-blend-overlay"></div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-bold-lavender rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-white text-center">
                        <div className="text-xl font-bold">SOC 2</div>
                        <div className="text-xs">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="use-cases" className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl ${isColorTransitioned ? "bg-white/10 backdrop-blur-md" : "bg-bold-lavender/5"}`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                  CryptoWallet Use Cases
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card
                    className={`border-0 ${isColorTransitioned ? "bg-white/20" : "bg-white"} hover:shadow-lg transition-all`}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-bold-lavender/10 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-bold-lavender" />
                      </div>
                      <CardTitle className={isColorTransitioned ? "text-white" : ""}>
                        For Individual Investors
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Securely store and manage multiple cryptocurrencies",
                          "Track portfolio performance with real-time data",
                          "Easily send and receive crypto to friends and family",
                          "Swap between different assets with built-in exchange",
                          "Connect to DeFi protocols for staking and earning",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check
                              className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                            />
                            <p className={isColorTransitioned ? "text-white/90" : "text-gray-700"}>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/download">
                        <Button
                          className={`w-full ${
                            isColorTransitioned
                              ? "bg-white text-bold-lavender hover:bg-white/90"
                              : "bg-bold-lavender text-white hover:bg-bold-lavender/90"
                          }`}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card
                    className={`border-0 ${isColorTransitioned ? "bg-white/20" : "bg-white"} hover:shadow-lg transition-all`}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-bold-lavender/10 flex items-center justify-center mb-2">
                        <Layers className="h-6 w-6 text-bold-lavender" />
                      </div>
                      <CardTitle className={isColorTransitioned ? "text-white" : ""}>
                        For Businesses & Developers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Accept cryptocurrency payments from customers",
                          "Manage company treasury with multi-signature security",
                          "Integrate with our API for custom applications",
                          "Streamline payroll with batch transactions",
                          "Access detailed transaction history for accounting",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check
                              className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}
                            />
                            <p className={isColorTransitioned ? "text-white/90" : "text-gray-700"}>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/download">
                        <Button
                          className={`w-full ${
                            isColorTransitioned
                              ? "bg-white text-bold-lavender hover:bg-white/90"
                              : "bg-bold-lavender text-white hover:bg-bold-lavender/90"
                          }`}
                        >
                          Business Solutions
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-12">
                  <h4 className={`text-xl font-bold mb-4 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                    Real-World Applications
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "DeFi Integration",
                        description:
                          "Connect to decentralized finance protocols to earn interest, provide liquidity, or take loans using your crypto assets as collateral.",
                        icon: <RefreshCw />,
                      },
                      {
                        title: "NFT Collection",
                        description:
                          "Store, view, and manage your NFT collection directly in the wallet with support for multiple NFT standards across chains.",
                        icon: <Layers />,
                      },
                      {
                        title: "Web3 Gateway",
                        description:
                          "Use CryptoWallet as your gateway to Web3 applications, games, and metaverse platforms with our secure connection protocol.",
                        icon: <Globe />,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-xl ${isColorTransitioned ? "bg-white/10" : "bg-white border border-bold-lavender/10"}`}
                      >
                        <div
                          className={`w-12 h-12 rounded-full ${isColorTransitioned ? "bg-white/20" : "bg-bold-lavender/10"} flex items-center justify-center mb-4`}
                        >
                          <div className={isColorTransitioned ? "text-white" : "text-bold-lavender"}>{item.icon}</div>
                        </div>
                        <h5 className={`font-bold mb-2 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                          {item.title}
                        </h5>
                        <p className={`text-sm ${isColorTransitioned ? "text-white/80" : "text-gray-700"}`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Why Choose CryptoWallet?</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              See how CryptoWallet compares to traditional solutions and other crypto wallets.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-bold-lavender/5 border-b-2 border-bold-lavender/20 text-bold-lavender font-bold">
                    Features
                  </th>
                  <th className="p-4 text-center bg-bold-lavender text-white font-bold rounded-t-lg">CryptoWallet</th>
                  <th className="p-4 text-center bg-bold-lavender/5 border-b-2 border-bold-lavender/20 text-bold-lavender font-bold">
                    Traditional Banks
                  </th>
                  <th className="p-4 text-center bg-bold-lavender/5 border-b-2 border-bold-lavender/20 text-bold-lavender font-bold">
                    Other Crypto Wallets
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "User Control of Assets",
                    cryptoWallet: "Full control (non-custodial)",
                    traditionalBanks: "Bank controlled (custodial)",
                    otherWallets: "Varies by wallet",
                  },
                  {
                    feature: "Multi-Chain Support",
                    cryptoWallet: "30+ blockchains",
                    traditionalBanks: "None",
                    otherWallets: "Limited (5-10 typically)",
                  },
                  {
                    feature: "Transaction Fees",
                    cryptoWallet: "Minimal network fees",
                    traditionalBanks: "High fees, especially international",
                    otherWallets: "Varies, often with added fees",
                  },
                  {
                    feature: "Transaction Speed",
                    cryptoWallet: "Minutes or seconds",
                    traditionalBanks: "Days for international",
                    otherWallets: "Varies by blockchain",
                  },
                  {
                    feature: "DeFi Integration",
                    cryptoWallet: "Seamless built-in access",
                    traditionalBanks: "None",
                    otherWallets: "Limited or requires third-party",
                  },
                  {
                    feature: "User Interface",
                    cryptoWallet: "Elegant & intuitive",
                    traditionalBanks: "Often complex & outdated",
                    otherWallets: "Typically technical & complex",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-bold-lavender/5"}>
                    <td className="p-4 font-medium text-bold-lavender">{row.feature}</td>
                    <td className="p-4 text-center bg-bold-lavender/10 font-medium text-bold-lavender">
                      {row.cryptoWallet}
                    </td>
                    <td className="p-4 text-center text-gray-700">{row.traditionalBanks}</td>
                    <td className="p-4 text-center text-gray-700">{row.otherWallets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-bold-lavender to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              Ready to Experience the Future of Crypto Management?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-12"
            >
              Download CryptoWallet today and join thousands of users who are already enjoying a more elegant way to
              manage their digital assets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link href="/download">
                <Button className="bg-white text-bold-lavender hover:bg-white/90 px-8 py-6 flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
                  <Download className="h-5 w-5" />
                  Download Now
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 flex items-center gap-3 transition-all duration-300"
                >
                  Explore Features
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
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
                  <Link href="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:underline">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/chains" className="hover:underline">
                    Chains
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:underline">
                    Download
                  </Link>
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
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
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
