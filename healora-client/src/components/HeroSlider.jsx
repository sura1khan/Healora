"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Premium Quality Medicines",
      subtitle: "Trusted healthcare solutions for your family",
      description: "Get authentic medicines from certified pharmacies with fast delivery and expert consultation.",
      image: "/wellness-products-and-health-supplements.jpg",
      cta: "Shop Now",
      discount: "Up to 30% OFF",
    },
    {
      id: 2,
      title: "Expert Medical Consultation",
      subtitle: "Professional healthcare guidance",
      description: "Connect with licensed pharmacists and healthcare professionals for personalized advice.",
      image: "/wellness-products-and-health-supplements.jpg",
      cta: "Consult Now",
      discount: "Free Consultation",
    },
    {
      id: 3,
      title: "Fast & Secure Delivery",
      subtitle: "Your health, delivered safely",
      description: "Temperature-controlled delivery ensuring medicine quality and safety to your doorstep.",
      image: "/wellness-products-and-health-supplements.jpg",
      cta: "Order Now",
      discount: "Same Day Delivery",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Content */}
              <div className="space-y-6" data-aos="fade-right" data-aos-duration="800">
                <div className="inline-block bg-medical-green text-medical-green-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {slide.discount}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">{slide.title}</h1>
                <p className="text-xl text-primary font-medium">{slide.subtitle}</p>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{slide.description}</p>
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
                  {slide.cta}
                </button>
              </div>

              {/* Image */}
              <div className="relative" data-aos="fade-left" data-aos-duration="800">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
