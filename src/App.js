import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Award, Users, Heart, Shield, Sparkles, Zap, Star, X, Check } from 'lucide-react';

const ShaxHealthCare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const slides = [
    {
      title: "Enhance Your Natural Beauty with Expert Cosmetic Care",
      subtitle: "Professional cosmetology services for radiant, healthy skin",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
      gradient: "from-purple-600/80 to-pink-600/80"
    },
    {
      title: "Advanced Skin Rejuvenation",
      subtitle: "State-of-the-art treatments for lasting results",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80",
      gradient: "from-blue-600/80 to-teal-600/80"
    },
    {
      title: "Non-Surgical Facial Enhancement",
      subtitle: "Natural-looking results with minimal downtime",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80",
      gradient: "from-indigo-600/80 to-purple-600/80"
    },
    {
      title: "Personalized Skincare Solutions",
      subtitle: "Tailored treatments for your unique needs",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=80",
      gradient: "from-rose-600/80 to-orange-600/80"
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "HydraFacial Treatment",
      description: "Deep cleansing, exfoliation, and hydration for glowing skin",
      price: "$150",
      duration: "60 min",
      benefits: ["Deep Pore Cleansing", "Skin Hydration", "Instant Glow"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Laser Skin Resurfacing",
      description: "Advanced laser technology for skin rejuvenation",
      price: "$300",
      duration: "45 min",
      benefits: ["Reduces Wrinkles", "Evens Skin Tone", "Minimizes Scars"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Chemical Peel",
      description: "Professional peels for smooth, refreshed skin",
      price: "$120",
      duration: "30 min",
      benefits: ["Exfoliates Dead Skin", "Brightens Complexion", "Reduces Acne"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Anti-Aging Treatment",
      description: "Comprehensive anti-aging solutions for youthful skin",
      price: "$250",
      duration: "90 min",
      benefits: ["Reduces Fine Lines", "Firms Skin", "Boosts Collagen"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Acne Treatment",
      description: "Targeted treatments for clear, healthy skin",
      price: "$180",
      duration: "45 min",
      benefits: ["Reduces Breakouts", "Controls Oil", "Prevents Scarring"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Microdermabrasion",
      description: "Gentle exfoliation for smoother skin texture",
      price: "$140",
      duration: "40 min",
      benefits: ["Smooth Texture", "Reduce Pores", "Enhance Radiance"]
    }
  ];
   useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 4000); 
  return () => clearInterval(timer);
}, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Simulate sending email notification
    console.log('Booking Details:', bookingData);
    
    // Show success message
    setShowSuccess(true);
    setShowBookingModal(false);
    
    // Reset form
    setBookingData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .nav-item {
          animation: popIn 0.4s ease-out;
          animation-fill-mode: both;
        }
        
        .nav-item:nth-child(1) { animation-delay: 0.1s; }
        .nav-item:nth-child(2) { animation-delay: 0.2s; }
        .nav-item:nth-child(3) { animation-delay: 0.3s; }
        .nav-item:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
          <Check className="w-6 h-6" />
          <div>
            <p className="font-bold">Booking Confirmed!</p>
            <p className="text-sm">We've sent confirmation to {bookingData.email}</p>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Book Your Appointment
            </h2>
            <p className="text-gray-600 mb-6">Fill in your details and we'll send you a confirmation email</p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Select Service *</label>
                <select
                  name="service"
                  value={bookingData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Any special requests or questions..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Email Confirmation</p>
                    <p>We'll send booking details to <span className="font-semibold">{bookingData.email || 'your email'}</span></p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
              >
                Confirm Booking & Send Notification
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shax Health Care
                </h1>
                <p className="text-xs text-gray-600">Excellence in Cosmetology</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-item text-gray-700 hover:text-blue-600 transition font-medium relative ${
                    activeSection === item.id ? 'text-blue-600' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />
                  )}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl text-white">
                <div className={`transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-blue-50 drop-shadow">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveSection('services')}
                      className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-xl"
                    >
                      View Services
                    </button>
                    <button
                      onClick={() => setShowBookingModal(true)}
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Award className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">12+</p>
                <p className="text-sm text-blue-100">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">5000+</p>
                <p className="text-sm text-blue-100">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-blue-100">Safe & Certified</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-blue-100">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Why Choose Shax Health Care?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience personalized cosmetology treatments designed for stunning, natural results with our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Cosmetologists</h3>
              <p className="text-gray-600">Benefit from our highly skilled and experienced cosmetic specialists with years of expertise.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">We utilize cutting-edge techniques for safe, effective cosmetic procedures.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-pink-600 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
              <p className="text-gray-600">Customized treatment plans ensure your unique needs and goals are met precisely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Premium Cosmetic Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional cosmetic services designed to enhance your natural beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <span className="text-2xl">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-700">Key Benefits:</p>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setBookingData({ ...bookingData, service: service.title });
                    setShowBookingModal(true);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Book This Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to answer your questions and help you achieve your aesthetic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">Mon-Fri 9AM-7PM</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-blue-600">+91 7892823912</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-full flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">We'll respond within 24h</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-purple-600">info@shaxhealthcare.com</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-pink-600 to-orange-600 w-14 h-14 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-gray-600">Visit us today</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-pink-600">13th cross hosahalli Extention Vijaynagar bangaluru,560440</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Shax Health Care. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShaxHealthCare;