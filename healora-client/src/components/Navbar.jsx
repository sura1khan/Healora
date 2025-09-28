"use client"

import { useState } from "react"
import { ShoppingCart, Globe, Menu, X, User } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This will be managed by auth later

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H+</span>
            </div>
            <span className="text-xl font-bold text-foreground">Healora</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#shop" className="text-muted-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">EN</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Section */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                >
                  <User className="w-4 h-4 text-white" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-border">
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      Update Profile
                    </a>
                    <a
                      href="#dashboard"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      Dashboard
                    </a>
                    <button className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-muted transition-colors">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a
                href="/login"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Join Us
              </a>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-foreground font-medium">
                Home
              </a>
              <a href="#shop" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                Shop
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Categories
              </a>
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
