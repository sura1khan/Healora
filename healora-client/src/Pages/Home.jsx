"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "../components/Navbar"
import HeroSlider from "../components/HeroSlider"
import CategoryCards from "../components/CategoryCards"
import DiscountProducts from "../components/DiscountProducts"
import TrustSection from "../components/TrustSection"
import NewsletterSection from "../components/NewsletterSection"
import Footer from "../components/Footer"

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">

      <main>
        <section id="home">
          <HeroSlider />
        </section>

        <section id="categories">
          <CategoryCards />
        </section>

        <section id="discounts">
          <DiscountProducts />
        </section>

        <section id="trust">
          <TrustSection />
        </section>

        <section id="newsletter">
          <NewsletterSection />
        </section>
      </main>
   
    </div>
  )
}
