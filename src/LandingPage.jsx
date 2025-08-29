import React, { useState } from "react";

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
      icon: (
        <svg 
          fill="currentColor" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          className="w-12 h-12"
        >
          <path d="M469.333,64V42.667C469.333,19.136,450.197,0,426.667,0H85.333C61.803,0,42.667,19.136,42.667,42.667V64 c0,23.531,19.136,42.667,42.667,42.667v128c-23.531,0-42.667,19.136-42.667,42.667v21.333c0,23.531,19.136,42.667,42.667,42.667 v128C85.333,492.864,104.469,512,128,512h256c23.531,0,42.667-19.136,42.667-42.667v-128c23.531,0,42.667-19.136,42.667-42.667 v-21.333c0-23.531-19.136-42.667-42.667-42.667v-128C450.197,106.667,469.333,87.531,469.333,64z M277.333,405.333h-42.667 c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h42.667c11.797,0,21.333,9.557,21.333,21.333 S289.131,405.333,277.333,405.333z M426.688,298.667h-21.355H106.667H85.333v-21.333h21.333h298.667h21.333L426.688,298.667z M213.333,149.333c0-11.776,9.536-21.333,21.333-21.333h42.667c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333 h-42.667C222.869,170.667,213.333,161.109,213.333,149.333z M405.333,64H106.667H85.333V42.667h341.333L426.688,64H405.333z" />
        </svg>
      )
    },
    {
      title: "Custom Builds",
      description: "Tailored solutions for your specific needs",
      items: [
        "Custom pallet building based on client specifications"
      ],
      icon: (
        <svg 
          fill="currentColor" 
          viewBox="0 -4.91 122.88 122.88" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M0,100.07h14.72V1.57c0-0.86,0.71-1.57,1.57-1.57h49.86c0.86,0,1.57,0.71,1.57,1.57V38.5h44.12 c0.86,0,1.57,0.71,1.57,1.57v59.99h9.47v12.99H0V100.07L0,100.07z M27.32,14.82h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36 c0,0.31-0.26,0.57-0.57,0.57h-10.2c-0.31,0-0.57-0.26-0.57-0.57V15.39C26.75,15.08,27.01,14.82,27.32,14.82L27.32,14.82z M44.6,76.3h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V76.87 C44.03,76.55,44.29,76.3,44.6,76.3L44.6,76.3z M27.32,76.3h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V76.87C26.75,76.55,27.01,76.3,27.32,76.3L27.32,76.3z M44.6,55.8h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V56.38 C44.03,56.06,44.29,55.8,44.6,55.8L44.6,55.8z M27.32,55.8h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V56.38C26.75,56.06,27.01,55.8,27.32,55.8L27.32,55.8z M44.6,35.31h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V35.88 C44.03,35.57,44.29,35.31,44.6,35.31L44.6,35.31z M27.32,35.31h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V35.88C26.75,35.57,27.01,35.31,27.32,35.31L27.32,35.31z M44.6,14.82h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V15.39 C44.03,15.08,44.29,14.82,44.6,14.82L44.6,14.82z M23.17,7.32h35.92c0.62,0,1.13,0.61,1.13,1.35v85.87c0,0.74-0.51,1.35-1.13,1.35 H23.17c-0.62,0-1.13-0.61-1.13-1.35V8.67C22.04,7.93,22.55,7.32,23.17,7.32L23.17,7.32z M72.61,53.43h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57h-10.2c-0.31,0-0.57-0.26-0.57-0.57V54 C72.04,53.69,72.3,53.43,72.61,53.43L72.61,53.43z M89.89,76.3h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V76.87C89.32,76.55,89.58,76.3,89.89,76.3L89.89,76.3z M72.61,76.3h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57h-10.2c-0.31,0-0.57-0.26-0.57-0.57V76.87 C72.04,76.55,72.3,76.3,72.61,76.3L72.61,76.3z M89.89,53.43h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V54C89.32,53.69,89.58,53.43,89.89,53.43L89.89,53.43z M68.86,45.82h35.92 c0.62,0,1.13,0.61,1.13,1.35v47.37c0,0.74-0.51,1.35-1.13,1.35H68.86c-0.62,0-1.13-0.61-1.13-1.35V47.17 C67.73,46.43,68.24,45.82,68.86,45.82L68.86,45.82z" />
        </svg>
      )
    },
    {
      title: "Special Projects",
      description: "Handling complex logistics challenges",
      items: ["Re-works", "Co-packing", "Packaging", "Audits"],
      icon: (
        <svg 
          fill="currentColor" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 500.001 500.001"
          className="w-12 h-12"
        >
          <path d="M252.005,254.641L33.001,127.589c-1.232-0.716-2.756-0.72-4.004-0.004c-1.24,0.712-2.004,2.036-2.004,3.464v237.908 c0,1.424,0.756,2.744,1.992,3.46l219.004,127.044c0.62,0.36,1.316,0.54,2.008,0.54c0.688,0,1.38-0.18,1.996-0.536 c1.24-0.712,2.004-2.036,2.004-3.464v-237.9C253.997,256.677,253.241,255.357,252.005,254.641z M245.997,489.057L34.993,366.649 V137.993l211.004,122.412V489.057z" />
          <path d="M471.001,127.581c-1.244-0.716-2.764-0.712-4.008,0.012L248.381,254.645c-1.904,1.108-2.556,3.556-1.444,5.468 c1.108,1.908,3.556,2.544,5.468,1.444l212.6-123.56v228.656l-216.7,125.892c-1.908,1.108-2.56,3.552-1.448,5.464 c0.74,1.28,2.08,1.992,3.46,1.992c0.684,0,1.376-0.176,2.004-0.54l218.692-127.048c1.236-0.712,1.992-2.032,1.992-3.456V131.049 C473.005,129.621,472.241,128.297,471.001,127.581z" />
          <path d="M471.017,127.593L252.569,0.545c-1.24-0.724-2.768-0.728-4.016-0.004L28.989,127.589 c-1.908,1.104-2.564,3.548-1.456,5.464c1.1,1.908,3.544,2.564,5.464,1.456L250.553,8.625l216.44,125.88 c0.632,0.368,1.324,0.544,2.008,0.544c1.38,0,2.72-0.712,3.46-1.988C473.577,131.153,472.929,128.701,471.017,127.593z" />
          <path d="M319.305,188.821L124.481,75.673c-1.904-1.108-4.356-0.464-5.464,1.448c-1.116,1.908-0.464,4.356,1.448,5.464 l194.824,113.148c0.632,0.368,1.32,0.544,2.004,0.544c1.38,0,2.72-0.712,3.46-1.992 C321.869,192.377,321.217,189.929,319.305,188.821z" />
          <path d="M381.457,180.329l-218.02-126.62c-1.904-1.112-4.356-0.464-5.464,1.448c-1.116,1.908-0.464,4.356,1.448,5.464 l218.02,126.62c0.632,0.368,1.32,0.544,2.004,0.544c1.38,0,2.72-0.712,3.46-1.992 C384.021,183.885,383.369,181.437,381.457,180.329z" />
          <path d="M339.945,203.069c-2.212,0-4,1.788-4,4v234.56c0,2.212,1.788,4,4,4c2.212,0,4-1.788,4-4v-234.56 C343.945,204.857,342.157,203.069,339.945,203.069z" />
          <path d="M379.057,179.517c-2.212,0-4,1.788-4,4v215.092c0,2.212,1.788,4,4,4c2.208,0,4-1.788,4-4V183.517 C383.057,181.305,381.269,179.517,379.057,179.517z" />
        </svg>
      )
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
      icon: (
        <svg 
          fill="currentColor" 
          viewBox="0 -30.87 122.88 122.88" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M105.01,40.54c-5.7,0-10.30,4.63-10.30,10.30c0,5.7,4.63,10.30,10.30,10.30c5.7,0,10.30-4.63,10.30-10.30 C115.31,45.14,110.68,40.54,105.01,40.54L105.01,40.54z M61.86,41.46c-5.2,0-9.38,4.22-9.38,9.38c0,5.2,4.22,9.38,9.38,9.38 c5.2,0,9.38-4.22,9.38-9.38C71.24,45.64,67.02,41.46,61.86,41.46L61.86,41.46z M61.86,47.23c-1.99,0-3.61,1.62-3.61,3.61 s1.62,3.61,3.61,3.61c1.99,0,3.61-1.62,3.61-3.61S63.85,47.23,61.86,47.23L61.86,47.23z M24.11,41.46c-5.2,0-9.38,4.22-9.38,9.38 c0,5.2,4.22,9.38,9.38,9.38c5.2,0,9.38-4.22,9.38-9.38C33.5,45.64,29.28,41.46,24.11,41.46L24.11,41.46z M24.11,47.23 c-1.99,0-3.61,1.62-3.61,3.61s1.62,3.61,3.61,3.61c1.99,0,3.61-1.62,3.61-3.61S26.11,47.23,24.11,47.23L24.11,47.23z M47.37,53.53 H38.1v-3.01h9.27V53.53L47.37,53.53z M10.46,53.53H5.63c-1.55,0-2.95-0.66-3.96-1.71c-1.01-1.05-1.65-2.50-1.65-4.02V8.06 c0-2.44-0.36-4.44,1.62-6.42C2.66,0.63,4.05,0,5.60,0h73.32c1.55,0,2.95,0.63,3.96,1.65c1.01,1.01,1.65,2.41,1.65,3.96l0,7.26 l10.27,0.07l3.62,0.02l0,0c0.73,0.79,1.40,1.60,2.01,2.42c2.71,3.64,4.23,7.94,4.52,12.11l16.38,6.27l1.55,16.51h-5.01 c-2.31-18.03-25.03-15.84-25.73,0l-7.61,0v1.74c0,0.86-0.67,1.52-1.52,1.52l-6.69,0v-3.04h5.16V5.61c0-0.70-0.28-1.33-0.76-1.81 c-0.48-0.48-1.11-0.76-1.81-0.76H5.60c-0.70,0-1.33,0.29-1.81,0.76C2.76,4.77,3.07,6.43,3.07,7.70v40.10c0,0.73,0.32,1.43,0.79,1.93 c0.48,0.48,1.08,0.79,1.77,0.79h4.82V53.53L10.46,53.53z M94.46,17.89l-5.83-0.09v9.69h11.02C99.12,23.98,97.49,20.90,94.46,17.89 L94.46,17.89z M105.01,46.88c-2.19,0-3.96,1.77-3.96,3.96c0,2.19,1.77,3.96,3.96,3.96c2.19,0,3.96-1.77,3.96-3.96 C108.97,48.65,107.20,46.88,105.01,46.88L105.01,46.88z" />
        </svg>
      )
    },
    {
      title: "Overflow Space",
      description: "Flexible storage solutions when you need them",
      items: [
        "Solutions for overflow storage",
        "Receiving and shipping freight from TMH facilities"
      ],
      icon: (
        <svg 
          fill="currentColor" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          className="w-12 h-12"
        >
          <g>
            <g>
              <g>
                <rect x="128" y="170.667" width="256" height="42.667"></rect>
                <rect x="128" y="256" width="256" height="42.667"></rect>
                <path d="M128,512h64V405.333c0-11.776,9.536-21.333,21.333-21.333h85.333c11.797,0,21.333,9.557,21.333,21.333V512h64V341.333 H128V512z"></path>
                <path d="M490.667,0H21.333C9.536,0,0,9.557,0,21.333v469.333C0,502.443,9.536,512,21.333,512h64V149.333 c0-11.776,9.536-21.333,21.333-21.333h298.667c11.797,0,21.333,9.557,21.333,21.333V512h64c11.797,0,21.333-9.557,21.333-21.333 V21.333C512,9.557,502.464,0,490.667,0z"></path>
                <rect x="234.667" y="426.667" width="42.667" height="85.333"></rect>
              </g>
            </g>
          </g>
        </svg>
      )
    }
  ];

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