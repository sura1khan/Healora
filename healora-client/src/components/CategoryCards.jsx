import { Pill, Heart, Baby, Eye, Stethoscope, Thermometer, Shield, Activity } from "lucide-react"

export default function CategoryCards() {
  const categories = [
    {
      id: 1,
      name: "Pain Relief",
      icon: <Pill className="w-8 h-8" />,
      count: 245,
      image: "/pain-relief-medicines-and-tablets.jpg",
      color: "bg-red-50 text-red-600",
    },
    {
      id: 2,
      name: "Heart Care",
      icon: <Heart className="w-8 h-8" />,
      count: 189,
      image: "/heart-care-medicines-and-supplements.jpg",
      color: "bg-pink-50 text-pink-600",
    },
    {
      id: 3,
      name: "Baby Care",
      icon: <Baby className="w-8 h-8" />,
      count: 156,
      image: "/baby-care-products-and-medicines.jpg",
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: 4,
      name: "Eye Care",
      icon: <Eye className="w-8 h-8" />,
      count: 98,
      image: "/eye-care-drops-and-vision-medicines.jpg",
      color: "bg-green-50 text-green-600",
    },
    {
      id: 5,
      name: "Diagnostics",
      icon: <Stethoscope className="w-8 h-8" />,
      count: 134,
      image: "/medical-diagnostic-equipment-and-tools.jpg",
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: 6,
      name: "Fever Care",
      icon: <Thermometer className="w-8 h-8" />,
      count: 87,
      image: "/fever-medicines-and-thermometers.jpg",
      color: "bg-orange-50 text-orange-600",
    },
    {
      id: 7,
      name: "Immunity",
      icon: <Shield className="w-8 h-8" />,
      count: 203,
      image: "/immunity-boosters-and-vitamins.jpg",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      id: 8,
      name: "Wellness",
      icon: <Activity className="w-8 h-8" />,
      count: 167,
      image: "/wellness-products-and-health-supplements.jpg",
      color: "bg-indigo-50 text-indigo-600",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the right medicines and healthcare products for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-lg ${category.color}`}>{category.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.count} products available</p>
                <button className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors">
                  View All →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
