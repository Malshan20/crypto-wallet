"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Globe,
  Twitter,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"

export default function ContactPage() {
  const [isColorTransitioned, setIsColorTransitioned] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
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
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-bold-lavender/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions about CryptoWallet? Our team is here to help you with anything you need.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-bold-lavender/20 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-bold-lavender">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-bold-lavender/80">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="border-bold-lavender/20 focus:border-bold-lavender"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-bold-lavender/80">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="border-bold-lavender/20 focus:border-bold-lavender"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-bold-lavender/80">
                        Subject
                      </label>
                      <Select name="subject">
                        <SelectTrigger className="border-bold-lavender/20 focus:border-bold-lavender">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-bold-lavender/80">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="border-bold-lavender/20 focus:border-bold-lavender resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-bold-lavender to-bold-lavender hover:from-bold-lavender hover:to-white/90 text-white transition-all duration-300"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 text-green-700 rounded-md"
                      >
                        Thank you for your message! We'll get back to you soon.
                      </motion.div>
                    )}

                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 text-red-700 rounded-md"
                      >
                        There was an error sending your message. Please try again.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className={`text-2xl font-bold mb-6 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20" : "bg-bold-lavender/10"} mr-4`}
                    >
                      <Mail className={`h-5 w-5 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                        Email
                      </h3>
                      <p className={isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}>
                        <a href="mailto:support@cryptowallet.com" className="hover:underline">
                          support@cryptowallet.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20" : "bg-bold-lavender/10"} mr-4`}
                    >
                      <Phone className={`h-5 w-5 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                        Phone
                      </h3>
                      <p className={isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}>
                        <a href="tel:+18005551234" className="hover:underline">
                          +1 (800) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20" : "bg-bold-lavender/10"} mr-4`}
                    >
                      <MapPin className={`h-5 w-5 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                        Office
                      </h3>
                      <p className={isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}>
                        123 Blockchain Avenue
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20" : "bg-bold-lavender/10"} mr-4`}
                    >
                      <Clock className={`h-5 w-5 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`} />
                    </div>
                    <div>
                      <h3 className={`font-medium ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                        Hours
                      </h3>
                      <p className={isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}>
                        Monday - Friday: 9AM - 6PM PST
                        <br />
                        Saturday: 10AM - 4PM PST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className={`text-2xl font-bold mb-6 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20 text-white hover:bg-white/30" : "bg-bold-lavender/10 text-bold-lavender hover:bg-bold-lavender/20"} transition-colors`}
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20 text-white hover:bg-white/30" : "bg-bold-lavender/10 text-bold-lavender hover:bg-bold-lavender/20"} transition-colors`}
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20 text-white hover:bg-white/30" : "bg-bold-lavender/10 text-bold-lavender hover:bg-bold-lavender/20"} transition-colors`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className={`p-3 rounded-full ${isColorTransitioned ? "bg-white/20 text-white hover:bg-white/30" : "bg-bold-lavender/10 text-bold-lavender hover:bg-bold-lavender/20"} transition-colors`}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender/5 to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
              Visit Our Office
            </h2>
            <p className={`max-w-2xl mx-auto ${isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}`}>
              We're located in the heart of San Francisco's Financial District. Stop by to meet our team!
            </p>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397618613!2d-122.43913217412364!3d37.77710275895522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a379575d%3A0x6cf7a313d6a53ec7!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CryptoWallet Office Location"
              className="absolute inset-0"
            ></iframe>

            {/* Map Overlay */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs">
              <h3 className="font-bold text-bold-lavender mb-2">CryptoWallet HQ</h3>
              <p className="text-gray-700 text-sm">
                123 Blockchain Avenue
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
              <div className="mt-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bold-lavender hover:underline flex items-center"
                >
                  <Globe className="h-3 w-3 mr-1" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
              Frequently Asked Questions
            </h2>
            <p className={`max-w-2xl mx-auto ${isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}`}>
              Find quick answers to common questions about contacting us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's the fastest way to get support?",
                answer:
                  "For immediate assistance, we recommend using our live chat feature during business hours. For less urgent matters, you can email our support team or submit a request through this contact form.",
              },
              {
                question: "How long does it take to get a response?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, our live chat support provides the fastest response times.",
              },
              {
                question: "Do you offer phone support?",
                answer:
                  "Yes, our phone support is available Monday through Friday from 9AM to 6PM PST. You can reach us at +1 (800) 555-1234.",
              },
              {
                question: "Can I schedule a demo of CryptoWallet?",
                answer:
                  "You can request a personalized demo by selecting 'Demo Request' in the subject dropdown of our contact form, or by emailing demo@cryptowallet.com.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isColorTransitioned
                    ? "bg-white/10 backdrop-blur-md"
                    : "bg-white shadow-md border border-bold-lavender/10"
                }`}
              >
                <h3 className={`font-bold text-lg mb-3 ${isColorTransitioned ? "text-white" : "text-bold-lavender"}`}>
                  {faq.question}
                </h3>
                <p className={isColorTransitioned ? "text-white/80" : "text-bold-lavender/80"}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button
                variant="outline"
                className={`${
                  isColorTransitioned
                    ? "border-white text-bold-lavender hover:bg-white/10"
                    : "border-bold-lavender text-bold-lavender hover:bg-bold-lavender/10"
                }`}
              >
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bold-lavender to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Download CryptoWallet today and experience the most elegant way to manage your crypto assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white hover:bg-white/90 text-bold-lavender px-8 py-6 transition-all duration-300"
              onClick={() => window.location.href = '/download'}
            >
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
