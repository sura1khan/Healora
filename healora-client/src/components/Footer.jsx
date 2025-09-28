import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    services: [
      { name: "Online Pharmacy", href: "#" },
      { name: "Consultation", href: "#" },
      { name: "Health Checkups", href: "#" },
      { name: "Lab Tests", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Track Order", href: "#" },
      { name: "Returns", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
  ]

  return (
    <footer className="bg-foreground text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">M+</span>
              </div>
              <span className="text-xl font-bold">MediCare Plus</span>
            </div>
            <p className="text-black mb-6 leading-relaxed">
              Your trusted partner in healthcare. We provide authentic medicines, expert consultation, and reliable
              delivery services to keep you and your family healthy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-black" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-black" />
                <span className="text-sm">support@medicareplus.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-black" />
                <span className="text-sm">123 Healthcare Ave, Medical City, MC 12345</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-black hover:text-black transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-black hover:text-black transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-black hover:text-black transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-black hover:text-black transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            © 2025 MediCare Plus. All rights reserved. Licensed Pharmacy #12345
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-black hover:text-black transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
