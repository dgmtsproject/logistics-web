import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Users, 
  Shield, 
  DollarSign, 
  MapPin, 
  Settings,
  ArrowRight,
  Star,
  Truck,
  Warehouse,
  Package,
  Clock,
  TrendingUp,
  Headphones,
  Send
} from "lucide-react";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      title: "Lumping Services",
      description: "Professional freight handling and palletizing",
      items: [
        "Unloading and palletizing floor-loaded freight",
        "Floor loading freight into shipping containers"
      ],
      icon: <Truck className="w-12 h-12" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Custom Builds",
      description: "Tailored solutions for your specific needs",
      items: [
        "Custom pallet building based on client specifications"
      ],
      icon: <Package className="w-12 h-12" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Special Projects",
      description: "Handling complex logistics challenges",
      items: ["Re-works", "Co-packing", "Packaging", "Audits"],
      icon: <Settings className="w-12 h-12" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Yard Management",
      description: "Comprehensive yard operations support",
      items: [
        "Yard jockey services",
        "Shuttling",
        "Yard checks",
        "YMS management"
      ],
      icon: <Warehouse className="w-12 h-12" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Overflow Space",
      description: "Flexible storage solutions when you need them",
      items: [
        "Solutions for overflow storage",
        "Receiving and shipping freight from TMH facilities"
      ],
      icon: <Package className="w-12 h-12" />,
      color: "from-red-500 to-red-600"
    }
  ];

  const reasons = [
    { 
      title: 'Reliable Delivery', 
      desc: 'Consistent SLAs and proactive communication across every engagement.',
      icon: <Clock className="w-8 h-8" />,
      color: "bg-blue-50 border-blue-200"
    },
    { 
      title: 'Scalable Crews', 
      desc: 'Rapidly deploy teams sized to your volume and timelines.',
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-50 border-green-200"
    },
    { 
      title: 'Safety First', 
      desc: 'OSHA-aligned practices, training, and ongoing site audits.',
      icon: <Shield className="w-8 h-8" />,
      color: "bg-red-50 border-red-200"
    },
    { 
      title: 'Transparent Pricing', 
      desc: 'Clear estimates, milestone visibility, and no surprises.',
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-yellow-50 border-yellow-200"
    },
    { 
      title: 'Nationwide Coverage', 
      desc: 'Support where you need it through our partner network.',
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-purple-50 border-purple-200"
    },
    { 
      title: 'Tailored Solutions', 
      desc: 'We adapt to your SOPs, WMS, and KPIs.',
      icon: <Settings className="w-8 h-8" />,
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  const processSteps = [
    { 
      step: '1', 
      title: 'Discovery', 
      desc: 'Understand ops, constraints, and success metrics.',
      icon: <Headphones className="w-8 h-8" />
    },
    { 
      step: '2', 
      title: 'Design', 
      desc: 'Craft a right-sized, measurable logistics plan.',
      icon: <Settings className="w-8 h-8" />
    },
    { 
      step: '3', 
      title: 'Execution', 
      desc: 'Deploy crews, tech, and oversight with SLAs.',
      icon: <Truck className="w-8 h-8" />
    },
    { 
      step: '4', 
      title: 'Optimize', 
      desc: 'Continuously monitor and improve performance.',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const testimonials = [
    { 
      quote: 'TMH scaled with us during peak season flawlessly. Their team handled our 3x volume increase without missing a beat. Professional, reliable, and exactly what we needed.',
      name: 'Sarah Chen', 
      role: 'Operations Director', 
      company: 'National 3PL',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    { 
      quote: 'Professional teams and impeccable communication. They solved our yard management challenges and improved our efficiency by 40%. Highly recommend!',
      name: 'Michael Rodriguez', 
      role: 'Facility Manager', 
      company: 'Food & Bev DC',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    { 
      quote: 'They solved our overflow and yard headaches fast. The custom pallet builds saved us thousands in shipping costs. TMH is our go-to logistics partner.',
      name: 'Jennifer Thompson', 
      role: 'Logistics Lead', 
      company: 'Retail 3PL',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5
    }
  ];

  const faqs = [
    { q: 'Do you operate nationwide?', a: 'Yes. We operate across the U.S. through our partner network and onsite crews.' },
    { q: 'Can you support short-term peak projects?', a: 'Absolutely. From day-rate teams to turnkey projects with tight SLAs.' },
    { q: 'Are you insured and safety-compliant?', a: 'Yes. We carry comprehensive coverage and maintain strict safety programs.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation - Keeping original style exactly */}
      <nav className="navbar shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 ml-12">
              <img 
                src="/assets/TMH Logistics Original Logo Cropped No Subtitle-p-500.jpg" 
                alt="TMH Logistics" 
                className="h-20 w-auto"
              />
            </div>
            
            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-8 mr-40">
              <li>
                <a 
                onClick={(e)=>handleScroll(e,'#home')}
                
                href="#home" className="nav-link px-2 py-1 font-light uppercase tracking-wide text-sm">
                  Home
                </a>
              </li>
              <li>
                <a 
                onClick={(e)=>handleScroll(e,'#about')}
                href="#about" className="nav-link px-2 py-1 font-light uppercase tracking-wide text-sm">
                  About
                </a>
              </li>
              <li>
                <a 
                onClick={(e)=>handleScroll(e,'#services')}
                href="#services" className="nav-link px-2 py-1 font-light uppercase tracking-wide text-sm">
                  Services
                </a>
              </li>
              <li>
                <a 
                onClick={(e)=>handleScroll(e,'#contact')}
                href="#contact" className="nav-link px-2 py-1 font-light uppercase tracking-wide text-sm">
                  Contact
                </a>
              </li>
            </ul>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <ul className="py-4">
                <li>
                  <a onClick={(e) => handleScroll(e, '#home')} href="#home" className="block px-6 py-3 text-[var(--primary-color)] hover:text-[var(--hover-yellow)] font-light uppercase tracking-wide text-sm transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={(e) => handleScroll(e, '#about')} href="#about" className="block px-6 py-3 text-[var(--primary-color)] hover:text-[var(--hover-yellow)] font-light uppercase tracking-wide text-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a onClick={(e) => handleScroll(e, '#services')} href="#services" className="block px-6 py-3 text-[var(--primary-color)] hover:text-[var(--hover-yellow)] font-light uppercase tracking-wide text-sm transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a onClick={(e) => handleScroll(e, '#contact')} href="#contact" className="block px-6 py-3 text-[var(--primary-color)] hover:text-[var(--hover-yellow)] font-light uppercase tracking-wide text-sm transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-cover bg-center bg-no-repeat text-white py-24 md:py-32 text-center px-4" style={{backgroundImage: 'url(/assets/hero.jpeg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Trusted 4PL Partner For Comprehensive Logistics Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto leading-relaxed">
            Supporting 3PL Operations With Exceptional Services
          </p>
          <button onClick={(e) => handleScroll(e, '#contact')} className="btn-primary text-lg px-8 py-3 rounded-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/about.jpeg" 
                alt="About TMH Logistics" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-color)]">
                Welcome to TMH Logistics
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Your premier 4PL partner dedicated to enhancing the efficiency and effectiveness of 3PL operations. 
                With a commitment to excellence and innovation, 
                we offer a comprehensive suite of services designed to streamline your logistics processes and support your business growth. 
                From custom pallet builds and specialized projects to yard management and overflow space solutions, 
                TMH Logistics is equipped to handle any challenge, big or small. 
                Let us take care of your logistical headaches, so you can focus on what truly matters to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Enhanced */}
      <section id="why-us" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--hover-yellow)]/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--primary-color)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--hover-yellow)]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              Why Choose TMH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through proven expertise, scalable solutions, and unwavering commitment to your success.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${reason.color} group-hover:border-[var(--hover-yellow)] relative overflow-hidden`}
                >
                  {/* Icon background */}
                  <div className={`absolute top-4 right-4 w-16 h-16 rounded-full ${reason.color.replace('bg-', 'bg-').replace('border-', 'bg-')} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="text-[var(--primary-color)] mb-6 group-hover:text-[var(--hover-yellow)] transition-colors duration-300">
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)] group-hover:text-[var(--hover-yellow)] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.desc}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--hover-yellow)] group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section id="process" className="py-16 md:py-24 bg-white px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures seamless execution and measurable results for every project.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 relative"
          >
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--hover-yellow)] z-0"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative text-center"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[var(--hover-yellow)] relative group z-10"
                >
                  {/* Step number with gradient background */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--hover-yellow)] text-white flex items-center justify-center font-bold text-xl md:text-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-[var(--primary-color)] mb-4 group-hover:text-[var(--hover-yellow)] transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)] group-hover:text-[var(--hover-yellow)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--hover-yellow)]/5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from logistics professionals who trust TMH with their operations.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group h-full"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[var(--hover-yellow)] relative overflow-hidden h-full flex flex-col"
                >
                  {/* Quote decoration */}
                  <div className="absolute top-4 right-4 text-6xl text-[var(--hover-yellow)] opacity-20 group-hover:opacity-30 transition-opacity duration-300">"</div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--hover-yellow)] text-[var(--hover-yellow)]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                    {t.quote}
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[var(--primary-color)]"
                    />
                    <div>
                      <div className="font-semibold text-[var(--primary-color)]">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                      <div className="text-sm text-[var(--hover-yellow)] font-medium">{t.company}</div>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--hover-yellow)] group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section id="faq" className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services and operations.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((f, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[var(--hover-yellow)] transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left px-6 py-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--primary-color)]/5 group-hover:to-[var(--hover-yellow)]/5"
                  >
                    <span className="font-semibold text-lg text-[var(--primary-color)] group-hover:text-[var(--hover-yellow)] transition-colors duration-300">
                      {f.q}
                    </span>
                    <motion.svg 
                      className="w-6 h-6 text-[var(--primary-color)] group-hover:text-[var(--hover-yellow)] transition-colors duration-300" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: openFaqIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openFaqIndex === idx ? 'auto' : 0,
                      opacity: openFaqIndex === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-6 text-gray-700 bg-white border-t border-gray-100">
                      {f.a}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section id="cta" className="py-20 md:py-24 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-color)]/90 text-white text-center px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--hover-yellow)]/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--hover-yellow)]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--hover-yellow)]/20 to-transparent rounded-full blur-3xl"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to streamline your operations?
          </h3>
          <p className="mt-4 md:mt-6 text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's build a plan that hits your KPIs and transforms your logistics efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, '#contact')} 
              className="btn-secondary px-10 py-4 text-lg font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--hover-yellow)] to-[var(--hover-yellow)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, '#services')} 
              className="px-10 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--hover-yellow)]" />
              <span>OSHA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--hover-yellow)]" />
              <span>Certified Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--hover-yellow)]" />
              <span>Nationwide Coverage</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-[var(--primary-color)]">
            Our Services
          </h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="text-4xl mb-4 text-[var(--primary-color)]">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-color)]">{service.title}</h3>
                <ul className="space-y-2 mt-2 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[var(--primary-color)] mr-2 mt-1.5">•</span>
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[var(--primary-color)]">
            Contact Us
          </h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 px-4 border-2 border-[var(--primary-color)] rounded-lg hover:border-[var(--hover-yellow)] focus:border-[var(--hover-yellow)] focus:ring-0 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 px-4 border-2 border-[var(--primary-color)] rounded-lg hover:border-[var(--hover-yellow)] focus:border-[var(--hover-yellow)] focus:ring-0 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 px-4 border-2 border-[var(--primary-color)] rounded-lg hover:border-[var(--hover-yellow)] focus:border-[var(--hover-yellow)] focus:ring-0 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 border-2 border-[var(--primary-color)] rounded-lg hover:border-[var(--hover-yellow)] focus:border-[var(--hover-yellow)] focus:ring-0 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message *"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 px-4 border-2 border-[var(--primary-color)] rounded-lg hover:border-[var(--hover-yellow)] focus:border-[var(--hover-yellow)] focus:ring-0 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button type="submit" className="btn-primary px-10 py-3 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
              <div className="text-6xl mb-4 text-green-500">✅</div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">Your submission has been received!</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary px-6 py-2"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary-color)] text-white pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img 
            src="/assets/TMH Logistics Original Logo Cropped-p-500.jpg" 
            alt="TMH Logistics" 
            className="h-32 w-auto mb-6"
          />
          <div className="flex flex-col items-center gap-4 text-lg mb-8">
            <a href="tel:(770)-215-7606" className="flex items-center gap-3 hover:text-[var(--hover-yellow)] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(770)-215-7606</span>
            </a>
            <a href="mailto:info@tmhlogistics.com" className="flex items-center gap-3 hover:text-[var(--hover-yellow)] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@tmhlogistics.com</span>
            </a>
          </div>
          <div className="text-sm text-gray-200 mt-4">
            &copy; {new Date().getFullYear()} TMH Logistics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}