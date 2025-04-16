"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Shield,
  Lock,
  Key,
  Eye,
  Fingerprint,
  Server,
  FileCheck,
  AlertTriangle,
  Code,
  Search,
  Activity,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SecurityPage() {
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

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${isColorTransitioned ? "bg-bold-lavender text-white" : "bg-white text-bold-lavender"
        }`}
    >
      <Header isColorTransitioned={isColorTransitioned} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-bold-lavender"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Bank-Grade Security
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-bold-lavender/80 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your assets deserve the highest level of protection. Discover how we implement military-grade encryption
                and multiple security layers to keep your crypto safe.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90 text-white px-8 py-6 transition-all duration-300"
                  onClick={() => window.location.href = "/learn-more"}>
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >

                <div className="relative w-full max-w-md mx-auto">

                <Image
                  src="/security-ill.jpg"
                  alt="Security Illustration"
                  width={500}
                  height={500}
                  className="object-contain"
                />

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Multi-Layer Security</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              We implement multiple layers of security to ensure your assets are protected at all times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Key className="h-6 w-6 text-bold-lavender" />,
                title: "Private Key Encryption",
                description:
                  "Your private keys are encrypted and never leave your device. Only you have access to your funds.",
              },
              {
                icon: <Fingerprint className="h-6 w-6 text-bold-lavender" />,
                title: "Biometric Authentication",
                description: "Secure access with fingerprint or face recognition for quick and secure access.",
              },
              {
                icon: <Eye className="h-6 w-6 text-bold-lavender" />,
                title: "Privacy Protection",
                description: "Your personal data is never shared with third parties and is fully encrypted.",
              },
              {
                icon: <Server className="h-6 w-6 text-bold-lavender" />,
                title: "Secure Infrastructure",
                description: "Our servers are protected by enterprise-grade security and regular security audits.",
              },
              {
                icon: <FileCheck className="h-6 w-6 text-bold-lavender" />,
                title: "Regular Security Audits",
                description: "Our code is regularly audited by independent security researchers.",
              },
              {
                icon: <AlertTriangle className="h-6 w-6 text-bold-lavender" />,
                title: "Fraud Detection",
                description: "Advanced algorithms detect and prevent suspicious activities in real-time.",
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

      {/* Security Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Our Security Process</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Security is not just a feature, it's a continuous process that we take very seriously.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bold-lavender/30"></div>

            {/* Timeline items */}
            {[
              {
                title: "Development",
                description: "Our code follows strict security guidelines and best practices from the ground up.",
                icon: <Code className="h-6 w-6 text-white" />,
              },
              {
                title: "Internal Testing",
                description: "Rigorous testing by our security team to identify and fix vulnerabilities.",
                icon: <Search className="h-6 w-6 text-white" />,
              },
              {
                title: "External Audits",
                description: "Independent security researchers audit our code to ensure maximum security.",
                icon: <FileCheck className="h-6 w-6 text-white" />,
              },
              {
                title: "Continuous Monitoring",
                description: "24/7 monitoring of our systems to detect and prevent security threats.",
                icon: <Activity className="h-6 w-6 text-white" />,
              },
              {
                title: "Regular Updates",
                description: "Frequent updates to address new security threats and vulnerabilities.",
                icon: <RefreshCw className="h-6 w-6 text-white" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <h3 className="text-xl font-bold mb-2 text-bold-lavender">{item.title}</h3>
                  <p className="text-bold-lavender/80">{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-bold-lavender rounded-full flex items-center justify-center z-10">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-bold-lavender">Security Certifications</h2>
            <p className="text-lg text-bold-lavender/80 max-w-2xl mx-auto">
              Our security measures are certified by leading industry standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src={`/digital-security-emblem.png?height=80&width=80&query=security certification badge ${i}`}
                    alt={`Security Certification ${i}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-bold text-center text-bold-lavender">Security Certification {i}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Security FAQ</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">Common questions about our security measures.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5 text-white">
                  How are my private keys stored?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  Your private keys are encrypted using AES-256 encryption and stored locally on your device. They never
                  leave your device and are not stored on our servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5 text-white">
                  What happens if I lose my device?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  You can recover your wallet using your recovery phrase. This is a 12 or 24-word phrase that you should
                  write down and keep in a safe place. With this phrase, you can restore your wallet on any device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5 text-white">
                  Has CryptoWallet ever been hacked?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  No, CryptoWallet has never been hacked. We implement the highest security standards and regularly
                  conduct security audits to ensure your assets are safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-bold-lavender/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bold-lavender/5 text-white">
                  Do you have a bug bounty program?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  Yes, we have a bug bounty program that rewards security researchers for finding and reporting
                  vulnerabilities in our system. This helps us maintain the highest level of security.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Your Security Is Our Priority</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Download our app today and experience the peace of mind that comes with knowing your crypto assets are
            secure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white hover:bg-white/90 text-purple-600 px-8 py-6 transition-all duration-300"
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
