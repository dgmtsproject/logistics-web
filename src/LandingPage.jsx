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
        "Floor unload freight and palletize",
        "Unloading and palletizing floor-loaded freight",
        "Floor loading freight into shipping containers"
      ],
      image: "/assets/lumping-services.png"
    },
    {
      title: "Order Filling",
      description: "Comprehensive picking solutions for all your needs",
      items: [
        "Pallet pick",
        "Case pick", 
        "Unit pick",
        "We do it all with accuracy and efficiency"
      ],
      image: "/assets/Order-Filling.png"
    },
    {
      title: "Custom Builds",
      description: "Tailored solutions for your specific needs",
      items: [
        "Build customized display pallets",
        "Custom pallet building based on client specifications"
      ],
      image: "/assets/Custom-Builds.png"
    },
    {
      title: "VAS Projects",
      description: "Value-added services to enhance your operations",
      items: [
        "Co-packing",
        "Re-works", 
        "Packaging",
        "QA Audits"
      ],
      image: "/assets/VAS-Projects.jpg"
    },
    {
      title: "Reverse Logistics",
      description: "Efficient returns processing and management",
      items: [
        "Returns Processing",
        "Re-packaging"
      ],
      image: "/assets/Reverse-Logistics.png"
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
      image: "/assets/Yard-management.png"
    },
    {
      title: "Distribution Center Set-up",
      description: "Let us set your DC up for safety, accuracy and efficiency",
      items: [
        "Lay-out",
        "Striping",
        "Aisle and location signage"
      ],
      image: "/assets/distribution-center-set-up-1.png",
      image2: "/assets/distribution-center-set-up-2.png"
    },
    {
      title: "Overflow Warehouse Management",
      description: "Flexible storage solutions when you need them",
      items: [
        "Solutions for overflow storage",
        "Inventory Management",
        "Forecast",
        "Advanced Inventory Analysis"
      ],
      image: "/assets/overflow-warehouse-management.png"
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
                   {/* Enhanced Navigation with Primary Background */}
       <nav className="bg-[var(--primary-color)] shadow-lg sticky top-0 z-50 w-full border-b border-[var(--primary-color)]/20">
         <div className="max-w-7xl mx-auto px-6">
           <div className="flex items-center justify-between h-20">
             {/* Logo */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="flex-shrink-0"
             >
               <img 
                 src="/assets/TMH Logistics Original Logo Cropped No Subtitle-p-500.jpg" 
                 alt="TMH Logistics" 
                 className="h-16 w-auto hover:scale-105 transition-transform duration-300"
               />
             </motion.div>
             
             {/* Navigation Links */}
             <motion.ul 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="hidden md:flex space-x-1"
             >
               {[
                 { href: '#home', label: 'Home' },
                 { href: '#about', label: 'About' },
                 { href: '#services', label: 'Services' },
                 { href: '#contact', label: 'Contact' }
               ].map((item, idx) => (
                 <motion.li 
                   key={idx}
                   whileHover={{ y: -2 }}
                   className="relative group"
                 >
                   <a 
                     onClick={(e) => handleScroll(e, item.href)}
                     href={item.href} 
                     className="relative px-4 py-2 font-medium text-white hover:text-[var(--hover-yellow)] transition-all duration-300 uppercase tracking-wide text-sm group-hover:scale-105"
                   >
                     {item.label}
                     {/* Animated underline */}
                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-[var(--hover-yellow)] group-hover:w-full transition-all duration-300 rounded-full"></span>
                   </a>
                 </motion.li>
               ))}
             </motion.ul>
             
             {/* CTA Button */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="hidden md:block"
             >
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={(e) => handleScroll(e, '#contact')}
                 className="px-6 py-2.5 bg-[var(--hover-yellow)] hover:bg-[var(--hover-yellow)]/90 text-[var(--primary-color)] font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
               >
                 Get Quote
               </motion.button>
             </motion.div>
             
             {/* Mobile Menu Button */}
             <motion.button 
               whileTap={{ scale: 0.95 }}
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
             >
               <div className="w-6 h-6 relative">
                 <motion.span
                   animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                   className="absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300"
                 />
                 <motion.span
                   animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                   className="absolute w-6 h-0.5 bg-white rounded-full top-2 transition-all duration-300"
                 />
                 <motion.span
                   animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                   className="absolute w-6 h-0.5 bg-white rounded-full top-4 transition-all duration-300"
                 />
               </div>
             </motion.button>
           </div>
         </div>

         {/* Enhanced Mobile Menu */}
         <motion.div 
           initial={false}
           animate={{ 
             height: isMobileMenuOpen ? 'auto' : 0,
             opacity: isMobileMenuOpen ? 1 : 0
           }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
           className="md:hidden overflow-hidden bg-[var(--primary-color)] border-t border-white/20"
         >
           <div className="px-6 py-4 space-y-2">
             {[
               { href: '#home', label: 'Home', icon: '🏠' },
               { href: '#about', label: 'About', icon: 'ℹ️' },
               { href: '#services', label: 'Services', icon: '🔧' },
               { href: '#contact', label: 'Contact', icon: '📞' }
             ].map((item, idx) => (
               <motion.a
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.3, delay: idx * 0.1 }}
                 onClick={(e) => handleScroll(e, item.href)}
                 href={item.href}
                 className="flex items-center gap-3 px-4 py-3 text-white hover:text-[var(--hover-yellow)] hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
               >
                 <span className="text-lg">{item.icon}</span>
                 <span className="uppercase tracking-wide text-sm">{item.label}</span>
               </motion.a>
             ))}
             
             {/* Mobile CTA Button */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3, delay: 0.4 }}
               className="pt-4"
             >
               <button
                 onClick={(e) => handleScroll(e, '#contact')}
                 className="w-full px-6 py-3 bg-[var(--hover-yellow)] hover:bg-[var(--hover-yellow)]/90 text-[var(--primary-color)] font-semibold rounded-lg transition-all duration-300 shadow-md"
               >
                 Get Quote
               </button>
             </motion.div>
           </div>
         </motion.div>
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

      {/* Services Section - Redesigned */}
      <section id="services" className="py-16 md:py-24 bg-white px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/3 to-[var(--hover-yellow)]/3"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--primary-color)]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--hover-yellow)]/8 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions designed to streamline your operations and drive efficiency.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`group relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                                 <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                   {/* Image Section */}
                   <div className="w-full md:w-1/2 relative order-1">
                     <motion.div
                       whileHover={{ scale: 1.02 }}
                       transition={{ duration: 0.3 }}
                       className="relative overflow-hidden rounded-2xl shadow-2xl"
                     >
                       {service.image2 ? (
                         <div className="grid grid-cols-2 gap-2">
                           <img 
                             src={service.image} 
                             alt={service.title} 
                             className="w-full h-64 md:h-80 object-cover rounded-l-2xl group-hover:scale-105 transition-transform duration-500"
                           />
                           <img 
                             src={service.image2} 
                             alt={service.title} 
                             className="w-full h-64 md:h-80 object-cover rounded-r-2xl group-hover:scale-105 transition-transform duration-500"
                           />
                         </div>
                       ) : (
                         <img 
                           src={service.image} 
                           alt={service.title} 
                           className="w-full h-64 md:h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                         />
                       )}
                       
                       {/* Brand color overlay on hover */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                     </motion.div>
                   </div>
                   
                   {/* Content Section */}
                   <div className="w-full md:w-1/2 space-y-6 order-2">
                     <motion.div
                       initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.6, delay: 0.2 }}
                       viewport={{ once: true }}
                     >
                       <div className="relative">
                         <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4 group-hover:text-[var(--hover-yellow)] transition-colors duration-300">
                           {service.title}
                         </h3>
                         {/* Animated underline */}
                         <div className="w-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--hover-yellow)] group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>
                       </div>
                       
                       <p className="text-lg text-gray-700 leading-relaxed mb-6">
                         {service.description}
                       </p>
                       
                       {/* Service items with custom styling */}
                       <div className="space-y-3">
                         {service.items.map((item, i) => (
                           <motion.div
                             key={i}
                             initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                             viewport={{ once: true }}
                             className="flex items-start group/item"
                           >
                             <div className="flex-shrink-0 w-2 h-2 bg-[var(--hover-yellow)] rounded-full mt-3 mr-4 group-hover/item:scale-150 transition-transform duration-300"></div>
                             <span className="text-gray-700 text-base group-hover/item:text-gray-900 transition-colors duration-300">
                               {item}
                             </span>
                           </motion.div>
                         ))}
                       </div>
                       
                       {/* Call to action button */}
                       <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         onClick={(e) => handleScroll(e, '#contact')}
                         className="mt-8 px-8 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] hover:from-[var(--hover-yellow)] hover:to-[var(--hover-yellow)] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                       >
                         Learn More
                       </motion.button>
                     </motion.div>
                   </div>
                 </div>
                
                {/* Connecting line between services */}
                {idx < services.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-full w-px h-16 bg-gradient-to-b from-[var(--primary-color)] to-[var(--hover-yellow)] transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
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