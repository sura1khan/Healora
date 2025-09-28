"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Mail, Lock, User, Upload, ArrowLeft } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    photo: null,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [photoPreview, setPhotoPreview] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    })
  }, [])

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      const file = e.target.files[0]
      setFormData({
        ...formData,
        photo: file,
      })

      // Create preview
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPhotoPreview(reader.result)
        }
        reader.readAsDataURL(file)
      } else {
        setPhotoPreview(null)
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Signup attempt:", formData)
      setIsLoading(false)
      // Handle signup logic here
    }, 1500)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Signup with ${provider}`)
    // Handle social login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back to Home */}
        <div className="mb-6" data-aos="fade-down">
          <a href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M+</span>
              </div>
              <span className="text-2xl font-bold text-foreground">MediCare Plus</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join us to access quality healthcare</p>
          </div>

          {/* Social Signup */}
          <div className="space-y-3 mb-6" data-aos="fade-up" data-aos-delay="100">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <img src="/google-logo.png" alt="Google" className="w-5 h-5" />
              <span className="font-medium text-foreground">Sign up with Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin("GitHub")}
              className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <img src="/github-logo.png" alt="GitHub" className="w-5 h-5" />
              <span className="font-medium text-foreground">Sign up with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-muted-foreground">Or create account with email</span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="300">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-foreground mb-2">
                Profile Photo
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                  {photoPreview ? (
                    <img
                      src={photoPreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <label className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-center space-x-2 py-3 px-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <Upload className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Upload Photo</span>
                  </div>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={handleChange}
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                Account Type
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="user">Customer</option>
                <option value="seller">Seller/Pharmacy</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="400">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
