"use client"

import { Mail, Send } from "lucide-react"
import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-16 bg-trust-blue text-trust-blue-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="flex items-center mb-4">
              <Mail className="w-8 h-8 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Stay Informed</h2>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Get the latest health tips, medicine updates, and exclusive offers delivered to your inbox. Join thousands
              of satisfied customers who trust us with their healthcare needs.
            </p>
            <div className="flex items-center space-x-4 text-sm opacity-75">
              <span>✓ Weekly health tips</span>
              <span>✓ Exclusive discounts</span>
              <span>✓ New product alerts</span>
            </div>
          </div>

          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
              <p className="text-xs opacity-75 mt-3">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
