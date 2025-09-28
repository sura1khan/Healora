"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react"

export default function DiscountProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const discountProducts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      originalPrice: 25.99,
      discountPrice: 18.99,
      discount: 27,
      rating: 4.8,
      reviews: 234,
      image: "/paracetamol-medicine-bottle.jpg",
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 2,
      name: "Vitamin D3 Tablets",
      originalPrice: 45.99,
      discountPrice: 32.99,
      discount: 28,
      rating: 4.9,
      reviews: 189,
      image: "/vitamin-d3-supplement-bottle.jpg",
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 3,
      name: "Cough Syrup 100ml",
      originalPrice: 18.99,
      discountPrice: 13.99,
      discount: 26,
      rating: 4.7,
      reviews: 156,
      image: "/cough-syrup-medicine-bottle.jpg",
      inStock: true,
      fastDelivery: false,
    },
    {
      id: 4,
      name: "Omega-3 Fish Oil",
      originalPrice: 55.99,
      discountPrice: 39.99,
      discount: 29,
      rating: 4.8,
      reviews: 298,
      image: "/omega-3-capsules.png",
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 5,
      name: "Antiseptic Cream",
      originalPrice: 12.99,
      discountPrice: 8.99,
      discount: 31,
      rating: 4.6,
      reviews: 87,
      image: "/antiseptic-cream-tube.jpg",
      inStock: false,
      fastDelivery: false,
    },
    {
      id: 6,
      name: "Blood Pressure Monitor",
      originalPrice: 89.99,
      discountPrice: 64.99,
      discount: 28,
      rating: 4.9,
      reviews: 145,
      image: "/digital-blood-pressure-monitor.png",
      inStock: true,
      fastDelivery: true,
    },
  ]

  const itemsPerView = 4
  const maxIndex = Math.max(0, discountProducts.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12" data-aos="fade-up">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Special Discounts</h2>
            <p className="text-muted-foreground text-lg">Save big on essential medicines and healthcare products</p>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {discountProducts.map((product, index) => (
              <div
                key={product.id}
                className="w-1/4 flex-shrink-0 px-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-medium">
                      -{product.discount}%
                    </div>
                    {product.fastDelivery && (
                      <div className="absolute top-3 right-3 bg-medical-green text-medical-green-foreground px-2 py-1 rounded-md text-xs font-medium">
                        Fast Delivery
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-foreground">${product.discountPrice}</span>
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          product.inStock
                            ? "bg-medical-green/10 text-medical-green"
                            : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    <button
                      disabled={!product.inStock}
                      className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
