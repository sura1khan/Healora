import { Shield, Truck, Clock, Award } from "lucide-react"

export default function TrustSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Authentic",
      description: "All medicines are sourced directly from certified manufacturers and authorized distributors.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Same-day delivery available in major cities with temperature-controlled packaging.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and pharmacist consultation for your health needs.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Licensed Pharmacy",
      description: "Fully licensed and regulated pharmacy with certified healthcare professionals.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose MediCare Plus?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your health and safety are our top priorities. We ensure quality, authenticity, and reliability in every
            aspect of our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
