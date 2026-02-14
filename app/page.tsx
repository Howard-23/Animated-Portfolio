"use client";

import { motion } from "framer-motion";
import { MagicCircle, MiniMagicCircle } from "./components/MagicCircle";
import { GrimoireCard } from "./components/GrimoireCard";
import { FloatingParticles, MagicRune } from "./components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Printer,
  Eye,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Code2,
  Briefcase,
  Wrench,
  User,
  ExternalLink,
  Zap,
  Layout,
  ShoppingCart,
  Users,
  Calendar,
  Phone,
  MapPin,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Account for fixed header (h-16 = 64px + padding)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Skill data with proficiency
  const skills = [
    { 
      category: "Frontend Development", 
      proficiency: 90,
      icon: Code2,
      color: "#4169E1",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS", "C#"]
    },
    { 
      category: "Backend & Tools", 
      proficiency: 75,
      icon: Wrench,
      color: "#228B22",
      tags: ["Node.js", "Laravel", "MySQL/PstgreSQL"]
    },
    { 
      category: "E-Commerce", 
      proficiency: 85,
      icon: ShoppingCart,
      color: "#9932CC",
      tags: ["Shopify Liquid", "Store Customization"]
    },
    { 
      category: "Virtual Assistance", 
      proficiency: 95,
      icon: Users,
      color: "#FFD700",
      tags: ["Email Management", "Chat Support", "Data Entry", "Calendar Management"]
    },
  ];

  // Experience data
  const experiences = [
    {
      title: "Front-End Developer",
      company: "PrimeX Ventures",
      period: "2025 – 2026",
      type: "freelance",
      description: "Building responsive, modern web applications for clients using Next.js, React, and Tailwind CSS. Specializing in creating intuitive user interfaces and seamless user experiences.",
      achievements: [
        "Build responsive web applications using Next.js, React, and TypeScript",
        "Implement modern UI/UX designs with Tailwind CSS and Framer Motion",
        "Optimize website performance and SEO for better search rankings",
        "Collaborate with clients to understand requirements and deliver solutions",
        "Maintain code quality through version control and best practices"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Freelance",
      period: "2025 – Present",
      type: "junior",
      description: "Developed and maintained responsive websites, implemented UI components, and collaborated with senior developers on various client projects. Gained hands-on experience with modern web technologies.",
      achievements: [
        "Developed responsive web pages using HTML, CSS, and JavaScript",
        "Assisted senior developers with React component development",
        "Participated in code reviews and implemented feedback",
        "Maintained and updated existing client websites",
        "Learned and applied modern web development workflows"
      ]
    }
  ];

  // Projects data with actual links
  const projects = [
    {
      title: "Professional Portfolio",
      description: "A modern, responsive portfolio website built with Next.js and TypeScript. Features dark/light mode toggle, smooth animations, and a clean, professional design optimized for showcasing work.",
      icon: "💼",
      color: "#4169E1",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Howard-23/Howard",
      liveUrl: "https://howard-project.vercel.app/",
      highlights: [
        "Implemented seamless dark/light mode with local storage persistence",
        "Created fluid page transitions and micro-interactions using Framer Motion",
        "Optimized performance with Next.js Image and static generation",
        "Fully responsive design that works beautifully on all devices"
      ]
    },
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations. Features real-time analytics, order management, and inventory tracking with an intuitive user interface.",
      icon: "📊",
      color: "#228B22",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "https://github.com/Howard-23/e-commerce",
      liveUrl: "https://e-commerce-psi-dusky-70.vercel.app/",
      highlights: [
        "Built responsive data visualizations with Recharts",
        "Implemented real-time data updates and state management",
        "Created reusable component library for consistent UI",
        "Integrated with REST APIs for live data fetching"
      ]
    },
    {
      title: "Attendance System",
      description: "A New Attendance Monitoring that helps a company and the employees to monitor their attendance.",
      icon: "✅",
      color: "#FFD700",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Howard-23/attandance-system",
      liveUrl: "https://attandance-system.vercel.app/"
    },
    {
      title: "Barangay System",
      description: "A Modern Barangay System that Helps other to request their clearance and etc also helps barangay to know the population in their barangay.",
      icon: "🏘️",
      color: "#9932CC",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Howard-23/barangay",
      liveUrl: "https://barangay-three.vercel.app/"
    },
    {
      title: "Office Management System",
      description: "Helps a company and their Employee to track their duties and also to get the goal of the company.",
      icon: "🏢",
      color: "#FF6B6B",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Howard-23/office-management",
      liveUrl: "https://office-management-pi.vercel.app/login"
    },
    {
      title: "CCTV Management System",
      description: "A modern cctv management that helps you to track and report an accident that it will auto detect.",
      icon: "📹",
      color: "#4ECDC4",
      tech: ["Next.js", "Python", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Howard-23/CCTV-Management-System",
      liveUrl: "https://cctv-management-system-gcyl.vercel.app/dashboard"
    },
    {
      title: "Prescription Reader",
      description: "It helps all the elderly and pharmacist to read the prescription of the Doctor's that It's Hard to read.",
      icon: "💊",
      color: "#FFA07A",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Howard-23/Medi-Scan-Prescription-Scanner",
      liveUrl: "https://medi-scan-prescription-scanner.vercel.app/"
    },


    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects. Features drag-and-drop organization, priority levels, and progress tracking to help users stay organized.",
      icon: "✓",
      color: "#98D8C8",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Howard-23/Task-Manager",
      liveUrl: "https://task-manager-lime-theta-49.vercel.app/",
      highlights: [
        "Implemented drag-and-drop functionality for task organization",
        "Built persistent storage using local storage for offline support",
        "Created intuitive UI with priority indicators and progress bars",
        "Added filtering and sorting capabilities for task management"
      ]
    },
    {
      title: "Shopify Landing Page",
      description: "A custom landing page template designed for Shopify stores. Features sections for products, testimonials, and call-to-action buttons optimized for conversions.",
      icon: "🛍️",
      color: "#96CEB4",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Howard-23/shopify-landing-page",
      liveUrl: "https://shopify-landing-page-omega.vercel.app/",
      highlights: [
        "Created customizable sections using Nextjs",
        "Optimized for fast loading and SEO performance",
        "Designed mobile-first responsive layout",
        "Integrated with Shopify's native features and apps"
      ]
    }
  ];

  // Handle resume print - opens CV page in print mode
  const handlePrintResume = () => {
    const cvWindow = window.open('/cv', '_blank');
    if (cvWindow) {
      // Wait for the CV page to load, then trigger print
      cvWindow.onload = () => {
        setTimeout(() => {
          cvWindow.print();
        }, 500);
      };
    }
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Open default mail client with pre-filled data
    const mailtoLink = `mailto:johnhowardgarcia23@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <FloatingParticles count={40} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <span className="font-[family-name:var(--font-cinzel-decorative)] text-lg sm:text-xl font-bold text-gold-gradient">
                JHG
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-6"
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-[family-name:var(--font-cinzel)] text-sm text-gray-300 hover:text-[#FFD700] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFD700] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden p-2 text-gray-300 hover:text-[#FFD700] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#FFD700]/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left font-[family-name:var(--font-cinzel)] text-sm text-gray-300 hover:text-[#FFD700] transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-14 sm:pt-16">
        {/* Background Magic Circle */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none px-4">
          <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]">
            <MagicCircle size={600} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg mb-2 sm:mb-4"
            >
              Hi, I&apos;m
            </motion.p>
            
            <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4">
              <span className="text-gold-gradient">John Howard</span>
              <br className="sm:hidden" />
              <span className="text-white sm:ml-4">Garcia</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-[family-name:var(--font-cinzel)] text-base sm:text-xl md:text-2xl text-[#9932CC] mb-4 sm:mb-6 px-2"
            >
              Front-End Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-2 sm:px-4"
            >
              I craft responsive, user-focused web applications using modern technologies. 
              With expertise in Next.js, React, and Shopify, I help businesses build their 
              digital presence while providing efficient virtual assistance.
            </motion.p>

            {/* CTA Buttons - Fully Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 w-full max-w-lg mx-auto px-4 sm:px-0"
            >
              <Button
                onClick={handlePrintResume}
                className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-[family-name:var(--font-cinzel)] font-semibold px-4 sm:px-6 py-3 sm:py-5 text-sm sm:text-base hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
              >
                <Printer className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Print Resume</span>
              </Button>
              <a 
                href="/cv" 
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[#FFD700]/50 text-[#FFD700] font-[family-name:var(--font-cinzel)] font-semibold px-4 sm:px-6 py-3 sm:py-5 text-sm sm:text-base hover:bg-[#FFD700]/10 transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">View CV</span>
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="ghost"
                className="w-full sm:w-auto text-gray-300 hover:text-[#FFD700] font-[family-name:var(--font-cinzel)] font-semibold px-4 sm:px-6 py-3 sm:py-5 text-sm sm:text-base"
              >
                <span className="whitespace-nowrap">Get in Touch</span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-3 sm:gap-4"
            >
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Howard-23/Howard-23" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-howard-garcia-31a075390/" },

                { icon: Mail, label: "Email", href: "mailto:johnhowardgarcia23@gmail.com" },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1a2e] border border-[#FFD700]/20 flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <MagicRune className="absolute top-20 left-10 w-40 h-40" />
          <MagicRune className="absolute bottom-20 right-10 w-60 h-60" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/50 mb-4 font-[family-name:var(--font-cinzel)]">
              <User className="w-3 h-3 mr-1" />
              About Me
            </Badge>
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
              Get to know me better
            </h2>
          </motion.div>

          <GrimoireCard cloverCount={4} title="John Howard P. Garcia">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-1"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a2e]">
                  <img
                    src="/profile.jpg"
                    alt="John Howard P. Garcia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div>
                <h3 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-[#9932CC] mb-4 text-center md:text-left">
                  John Howard P. Garcia
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                  I&apos;m a passionate Front-End Developer and Virtual Assistant based in the Philippines. 
                  With a strong foundation in modern web technologies and a keen eye for detail, 
                  I help businesses establish their digital presence and streamline their operations.
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  When I&apos;m not coding, you can find me learning new technologies, 
                  optimizing workflows, or helping clients achieve their goals through 
                  efficient virtual assistance.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="mailto:johnhowardgarcia23@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    johnhowardgarcia23@gmail.com
                  </a>
                  <a href="tel:+639073170635" className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    +639073170635
                  </a>
                  <span className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    Philippines
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#FFD700]/10">
                  <div className="text-center">
                    <div className="font-[family-name:var(--font-cinzel-decorative)] text-2xl sm:text-3xl font-bold text-gold-gradient">
                      1+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-[family-name:var(--font-cinzel-decorative)] text-2xl sm:text-3xl font-bold text-gold-gradient">
                      8+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-[family-name:var(--font-cinzel-decorative)] text-2xl sm:text-3xl font-bold text-gold-gradient">
                      3+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </GrimoireCard>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent to-[#12121a]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#228B22]/20 text-[#228B22] border-[#228B22]/50 mb-4 font-[family-name:var(--font-cinzel)]">
              <Zap className="w-3 h-3 mr-1" />
              Skills & Expertise
            </Badge>
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
              Technologies and tools
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">I use to bring ideas to life</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <GrimoireCard key={skill.category} cloverCount={3} title={skill.category} delay={index * 0.1}>
                <div className="space-y-4">
                  {/* Proficiency Bar */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-400">Proficiency</span>
                      <span className="text-xs sm:text-sm text-[#FFD700] font-semibold">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GrimoireCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#4169E1]/20 text-[#4169E1] border-[#4169E1]/50 mb-4 font-[family-name:var(--font-cinzel)]">
              <Briefcase className="w-3 h-3 mr-1" />
              Work Experience
            </Badge>
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
              My professional journey
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">and career highlights</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFD700] via-[#FFD700]/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFD700] border-4 border-[#0a0a0f] z-10" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <GrimoireCard cloverCount={3}>
                    <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                      <span className="text-[#9932CC] text-xs sm:text-sm font-semibold mb-1">{exp.period}</span>
                      <h3 className="font-[family-name:var(--font-cinzel)] text-base sm:text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#FFD700] text-xs sm:text-sm mb-3">{exp.company}</p>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3">{exp.description}</p>
                      <ul className={`space-y-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-500 flex items-start gap-2">
                            <span className="text-[#FFD700] mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GrimoireCard>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <GrimoireCard cloverCount={4} title="Education" className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="border-b border-[#FFD700]/10 pb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h4 className="font-[family-name:var(--font-cinzel)] font-semibold text-white text-sm sm:text-base">
                        Bachelor of Science in Computer Engineering
                      </h4>
                      <p className="text-[#9932CC] text-xs sm:text-sm">AMA Computer College</p>
                    </div>
                    <Badge variant="outline" className="border-[#FFD700]/30 text-[#FFD700] text-xs w-fit">
                      2020 - 2024
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Relevant coursework: Web Development, Database Management, Software Engineering, UI/UX Design
                  </p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h4 className="font-[family-name:var(--font-cinzel)] font-semibold text-white text-sm sm:text-base">
                        Web Development
                      </h4>
                      <p className="text-[#9932CC] text-xs sm:text-sm">Online</p>
                    </div>
                    <Badge variant="outline" className="border-[#FFD700]/30 text-[#FFD700] text-xs w-fit">
                      2024 - 2025
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Intensive program covering HTML, CSS, JavaScript, React, and Node.js
                  </p>
                </div>
              </div>
            </GrimoireCard>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#12121a]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#9932CC]/20 text-[#9932CC] border-[#9932CC]/50 mb-4 font-[family-name:var(--font-cinzel)]">
              <Layout className="w-3 h-3 mr-1" />
              Featured Projects
            </Badge>
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
              A selection of my recent work
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">and personal projects</p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div 
                  className="relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] rounded-lg p-4 sm:p-6 border border-white/10 transition-all duration-300 group-hover:border-[#FFD700]/50 h-full flex flex-col"
                  style={{ boxShadow: `0 4px 20px ${project.color}10` }}
                >
                  {/* Icon */}
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-cinzel)] text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-gold-gradient transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 sm:px-2 py-0.5 text-xs rounded bg-[#1a1a2e] text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 sm:px-2 py-0.5 text-xs text-gray-500">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-white/5">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#9932CC] hover:text-[#FFD700] transition-colors"
                    >
                      <Code2 className="w-3 h-3" />
                      Code
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#9932CC] hover:text-[#FFD700] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  </div>

                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${project.color}15 0%, transparent 70%)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/50 mb-4 font-[family-name:var(--font-cinzel)]">
              <Mail className="w-3 h-3 mr-1" />
              Get In Touch
            </Badge>
            <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Let&apos;s work together</p>
          </motion.div>

          <GrimoireCard cloverCount={4} title="Send a Message" className="max-w-2xl mx-auto">
            <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-[family-name:var(--font-cinzel)] text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full min-h-[44px] px-3 sm:px-4 py-3 bg-[#0a0a0f] border border-[#FFD700]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/30 transition-all text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-[family-name:var(--font-cinzel)] text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full min-h-[44px] px-3 sm:px-4 py-3 bg-[#0a0a0f] border border-[#FFD700]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/30 transition-all text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-[family-name:var(--font-cinzel)] text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full min-h-[44px] px-3 sm:px-4 py-3 bg-[#0a0a0f] border border-[#FFD700]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/30 transition-all text-base"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-[family-name:var(--font-cinzel)] text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full min-h-[120px] px-3 sm:px-4 py-3 bg-[#0a0a0f] border border-[#FFD700]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/30 transition-all resize-none text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-[family-name:var(--font-cinzel)] font-semibold py-5 sm:py-6 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-[#FFD700]/10">
              <p className="text-center text-xs sm:text-sm text-gray-500 mb-4">
                Or reach out directly
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a 
                  href="mailto:johnhowardgarcia23@gmail.com"
                  className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  johnhowardgarcia23@gmail.com
                </a>
                <a 
                  href="tel:+639073170635"
                  className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +639073170635
                </a>
              </div>
            </div>
          </GrimoireCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-cinzel-decorative)] text-lg font-bold text-gold-gradient">
                JHG
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-gray-500 hover:text-[#FFD700] transition-colors py-2 px-1 min-h-[44px]"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Howard-23/Howard-23" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-howard-garcia-31a075390/" },
                { icon: Mail, label: "Email", href: "mailto:johnhowardgarcia23@gmail.com" },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-500 hover:text-[#FFD700] transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-4 sm:mt-6 pt-4 border-t border-[#FFD700]/10 text-center">
            <p className="text-xs sm:text-sm text-gray-600">
              © 2026 John Howard P. Garcia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
