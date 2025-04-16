"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"

export default function FAQPage() {
  const [isColorTransitioned, setIsColorTransitioned] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

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

  const faqCategories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "security", name: "Security" },
    { id: "features", name: "Features" },
    { id: "technical", name: "Technical" },
    { id: "troubleshooting", name: "Troubleshooting" },
  ]

  const faqItems = [
    {
      id: "faq-1",
      category: "general",
      question: "What is CryptoWallet?",
      answer:
        "CryptoWallet is a secure, multi-chain cryptocurrency wallet that allows you to store, send, receive, and manage your crypto assets across multiple blockchains. It features an elegant, user-friendly interface with advanced security features to keep your assets safe.",
    },
    {
      id: "faq-2",
      category: "general",
      question: "Is CryptoWallet free to use?",
      answer:
        "Yes, CryptoWallet is free to download and use. There are no subscription fees or hidden charges. You only pay the standard network fees when making transactions on the blockchain, which go to the network miners/validators, not to us.",
    },
    {
      id: "faq-3",
      category: "security",
      question: "How secure is CryptoWallet?",
      answer:
        "CryptoWallet implements bank-grade security measures to protect your assets. Your private keys are encrypted and never leave your device. We use biometric authentication, secure enclave technology, and regular security audits to ensure the highest level of security.",
    },
    {
      id: "faq-4",
      category: "security",
      question: "What happens if I lose my device?",
      answer:
        "If you lose your device, you can recover your wallet using your recovery phrase (also known as a seed phrase). This is a 12 or 24-word phrase that you should write down and keep in a safe place. With this phrase, you can restore your wallet on any device.",
    },
    {
      id: "faq-5",
      category: "features",
      question: "Which blockchains does CryptoWallet support?",
      answer:
        "CryptoWallet supports a wide range of blockchains including Bitcoin, Ethereum, Solana, Polygon, Avalanche, Cardano, Polkadot, and Cosmos. We're constantly adding support for new chains to provide you with the most comprehensive crypto management experience.",
    },
    {
      id: "faq-6",
      category: "features",
      question: "Can I swap tokens directly in the app?",
      answer:
        "Yes, CryptoWallet features a built-in exchange that allows you to swap tokens directly in the app. We offer competitive rates and minimal fees, making it convenient to manage your portfolio without using external exchanges.",
    },
    {
      id: "faq-7",
      category: "technical",
      question: "Does CryptoWallet support hardware wallets?",
      answer:
        "Yes, CryptoWallet supports integration with popular hardware wallets like Ledger and Trezor. This allows you to combine the security of hardware wallets with the convenience and features of CryptoWallet.",
    },
    {
      id: "faq-8",
      category: "technical",
      question: "Can I connect to DApps with CryptoWallet?",
      answer:
        "Yes, CryptoWallet includes a built-in DApp browser that allows you to connect to decentralized applications across multiple blockchains. You can explore and interact with your favorite DApps directly from the wallet.",
    },
    {
      id: "faq-9",
      category: "troubleshooting",
      question: "My transaction is pending for a long time. What should I do?",
      answer:
        "Transaction times can vary depending on network congestion and the fee you've set. If your transaction is pending for an unusually long time, you can try to speed it up by using the 'accelerate transaction' feature in the app, which allows you to increase the fee for faster confirmation.",
    },
    {
      id: "faq-10",
      category: "troubleshooting",
      question: "I forgot my password. How can I reset it?",
      answer:
        "If you've forgotten your password, you can reset it using your recovery phrase. Go to the login screen, tap on 'Forgot Password', and follow the instructions to reset your password using your recovery phrase.",
    },
    {
      id: "faq-11",
      category: "general",
      question: "Is CryptoWallet available on all platforms?",
      answer:
        "CryptoWallet is available on iOS, Android, and as a browser extension for Chrome, Firefox, and Edge. This allows you to access your wallet from any device while maintaining the same secure and elegant experience.",
    },
    {
      id: "faq-12",
      category: "features",
      question: "Does CryptoWallet support NFTs?",
      answer:
        "Yes, CryptoWallet supports viewing and managing NFTs across multiple blockchains. You can view your NFT collection, send and receive NFTs, and even view detailed information about each NFT directly in the app.",
    },
  ]

  const filteredFAQs = faqItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-bold-lavender/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find answers to common questions about CryptoWallet. If you can't find what you're looking for, feel free
              to contact our support team.
            </motion.p>

            <motion.div
              className="max-w-xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Input
                type="text"
                placeholder="Search for questions..."
                className="pl-10 py-6 bg-white/90 border-bold-lavender/30 focus:border-bold-lavender focus:ring-bold-lavender"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bold-lavender/60" size={20} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-bold-lavender data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AccordionItem value={faq.id} className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5 text-bold-lavender">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-bold-lavender/80">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <p className="text-bold-lavender/80 mb-4">No results found for "{searchQuery}"</p>
                <Button
                  variant="outline"
                  className="border-bold-lavender text-bold-lavender hover:bg-bold-lavender/10"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Still Have Questions?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Our support team is here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              className="bg-white hover:bg-white/90 text-bold-lavender px-8 py-6 transition-all duration-300"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Community Questions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Community Questions</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Questions and answers from our community. Join the discussion and get help from other users.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How do I transfer tokens between different blockchains?",
                answer:
                  "To transfer tokens between different blockchains, you can use our built-in cross-chain swap feature. Go to the Swap tab, select the source token and destination token on different chains, and follow the instructions. The app will handle all the complex cross-chain operations for you.",
                user: "CryptoEnthusiast",
                date: "2 days ago",
                likes: 24,
              },
              {
                question: "What's the difference between a seed phrase and a private key?",
                answer:
                  "A seed phrase (or recovery phrase) is a human-readable representation of your wallet's master key, usually in the form of 12 or 24 words. From this seed phrase, all your private keys for different blockchains and accounts are derived. A private key is specific to a single account on a blockchain. Think of the seed phrase as a master key that can open all doors, while private keys open specific doors.",
                user: "BlockchainNewbie",
                date: "1 week ago",
                likes: 42,
              },
              {
                question: "Can I stake my crypto directly in CryptoWallet?",
                answer:
                  "Yes, CryptoWallet supports staking for various proof-of-stake blockchains directly in the app. Go to the Earn tab, select the token you want to stake, choose a validator, and follow the instructions. You can view your staking rewards and manage your delegations all within the app.",
                user: "StakingMaster",
                date: "3 days ago",
                likes: 18,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 bg-white/90 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-bold-lavender">{item.question}</h3>
                    <div className="flex items-center text-bold-lavender/60 text-sm">
                      <span>{item.date}</span>
                      <div className="ml-4 flex items-center">
                        <ChevronUp className="h-4 w-4 mr-1" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-bold-lavender/80 mb-4">{item.answer}</p>
                  <div className="flex items-center text-bold-lavender/60 text-sm">
                    <span>Posted by {item.user}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90 text-white px-8 py-6 transition-all duration-300">
                View More Community Questions
              </Button>
            </div>
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
