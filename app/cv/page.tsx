"use client";

import { motion } from "framer-motion";
import { MagicCircle, MiniMagicCircle } from "../components/MagicCircle";
import { FloatingParticles } from "../components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Wrench,
  Code2,
  ExternalLink,
  Calendar,
  Printer,
  Share2,
  Globe
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function CVPage() {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  // Close share menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    }
    
    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareMenu]);

  // Personal Info
  const personalInfo = {
    name: "John Howard P. Garcia",
    title: "Front-End Developer & Virtual Assistant",
    email: "johnhowardgarcia23@gmail.com",
    phone: "+639073170635",
    location: "Philippines",
    summary: "Results-driven Front-End Developer with expertise in building modern, responsive web applications using Next.js, React, and TypeScript. Experienced in providing virtual assistance services including email/chat management and Shopify store customization. Passionate about creating intuitive user experiences and delivering high-quality work that exceeds client expectations."
  };

  // Work Experience Data
  const experiences = [
    {
      title: "Front-End Developer",
      company: "PrimeX Ventures",
      period: "2025 – Present",
      description: "Develop custom web applications and websites for clients using modern technologies. Focus on creating responsive, accessible, and performant user interfaces.",
      achievements: [
        "Build responsive web applications using Next.js, React, and TypeScript",
        "Implement modern UI/UX designs with Tailwind CSS and Framer Motion",
        "Optimize website performance and SEO for better search rankings",
        "Collaborate with clients to understand requirements and deliver solutions",
        "Maintain code quality through version control and best practices"
      ]
    },
    {
      title: "Virtual Assistant & Web Support Specialist",
      company: "Freelance / Self-Employed",
      period: "2025 – 2025",
      description: "Provided comprehensive virtual assistance while supporting web operations. Managed customer communications and performed basic Shopify customizations.",
      achievements: [
        "Managed email and live chat support for customer inquiries",
        "Performed basic Shopify Liquid customizations and theme edits",
        "Handled product listings, inventory updates, and order processing",
        "Maintained organized documentation and streamlined workflows",
        "Collaborated with team members to improve customer experience"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Freelance / Self-Employed",
      period: "2025 – Present",
      description: "Assisted in the development of client websites and web applications. Gained hands-on experience with front-end technologies and industry best practices.",
      achievements: [
        "Developed responsive web pages using HTML, CSS, and JavaScript",
        "Assisted senior developers with React component development",
        "Participated in code reviews and implemented feedback",
        "Maintained and updated existing client websites",
        "Learned and applied modern web development workflows"
      ]
    }
  ];

  // Education Data
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "AMA Computer College",
      period: "2020 - 2024",
      details: "Relevant coursework: Web Development, Database Management, Software Engineering, UI/UX Design"
    },
    {
      degree: "Web Development",
      school: "Online",
      period: "2024 - 2025",
      details: "Intensive program covering HTML, CSS, JavaScript, React, and Node.js"
    }
  ];

  // Skills Data
  const skills = {
    frontend: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Git", "GitHub"],
    ecommerce: ["Shopify Liquid"],
    softSkills: ["Time Management", "Problem Solving", "Client Relations"]
  };

  // Projects Data
  const projects = [
    {
      title: "Professional Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills. Features dark/light mode, smooth animations, and responsive design.",
      highlights: [
        "Implemented theme switching with persistent user preference",
        "Created smooth page transitions using Framer Motion",
        "Built with Next.js for optimal performance and SEO",
        "Fully responsive design for all screen sizes"
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: { code: "https://github.com/Howard-23/Howard", demo: "https://howard-project.vercel.app/" }
    },
    {
      title: "Attendance System",
      description: "A New Attendance Monitoring that helps a company and the employees to monitor their attendance.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      links: { code: "https://github.com/Howard-23/attandance-system", demo: "https://attandance-system.vercel.app/" }
    },
    {
      title: "Barangay System",
      description: "A Modern Barangay System that Helps other to request their clearance and etc also helps barangay to know the population in their barangay.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      links: { code: "https://github.com/Howard-23/barangay", demo: "https://barangay-three.vercel.app/" }
    },
    {
      title: "Office Management System",
      description: "Helps a company and their Employee to track their duties and also to get the goal of the company.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: { code: "https://github.com/Howard-23/office-management", demo: "https://office-management-pi.vercel.app/login" }
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects. Features drag-and-drop organization, priority levels, and progress tracking to help users stay organized.",
      highlights: [
        "Implemented drag-and-drop functionality for task organization",
        "Built persistent storage using local storage for offline support",
        "Created intuitive UI with priority indicators and progress bars",
        "Added filtering and sorting capabilities for task management"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: { code: "https://github.com/Howard-23/Task-Manager", demo: "https://task-manager-lime-theta-49.vercel.app/" }
    },
    {
      title: "Shopify Landing Page",
      description: "A custom landing page template designed for Shopify stores. Features sections for products, testimonials, and call-to-action buttons optimized for conversions.",
      highlights: [
        "Created customizable sections using Nextjs",
        "Optimized for fast loading and SEO performance",
        "Designed mobile-first responsive layout",
        "Integrated with Shopify's native features and apps"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: { code: "https://github.com/Howard-23/shopify-landing-page", demo: "https://shopify-landing-page-omega.vercel.app/" }
    },
    {
      title: "CCTV Management System",
      description: "A modern cctv management that helps you to track and report an accident that it will auto detect.",
      tags: ["Next.js", "Python", "Tailwind CSS", "TypeScript"],
      links: { code: "https://github.com/Howard-23/CCTV-Management-System", demo: "https://cctv-management-system-gcyl.vercel.app/dashboard" }
    },
    {
      title: "Prescription Reader",
      description: "It helps all the elderly and pharmacist to read the prescription of the Doctor's that It's Hard to read.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      links: { code: "https://github.com/Howard-23/Medi-Scan-Prescription-Scanner", demo: "https://medi-scan-prescription-scanner.vercel.app/" }
    },
    {
      title: "E-Commerce Dashboard",
      description: "A dashboard for managing online store operations with analytics, order tracking, and inventory management.",
      highlights: [
        "Built interactive data visualizations",
        "Implemented responsive data tables",
        "Created reusable component library"
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      links: { code: "https://github.com/Howard-23/e-commerce", demo: "https://e-commerce-psi-dusky-70.vercel.app/" }
    }
  ];

  // Languages
  const languages = [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Filipino", proficiency: "Native" }
  ];

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'John Howard P. Garcia - CV',
          text: 'Check out my portfolio and CV!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Handle download PDF
  const handleDownloadPDF = () => {
    handlePrint();
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <FloatingParticles count={30} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#FFD700]/10 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a href="/">
              <motion.div 
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-[family-name:var(--font-cinzel)] text-xs sm:text-sm">Back to Home</span>
              </motion.div>
            </a>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative" ref={shareMenuRef}>
                <Button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  variant="outline"
                  className="border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10 text-xs sm:text-sm px-2 sm:px-4"
                >
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
                
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 top-full mt-2 bg-[#12121a] border border-[#FFD700]/20 rounded-lg p-2 min-w-[150px] z-50 max-w-[calc(100vw-2rem)]"
                  >
                    <button
                      onClick={() => { handleShare(); setShowShareMenu(false); }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10 rounded transition-colors"
                    >
                      Copy Link
                    </button>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10 rounded transition-colors"
                    >
                      Share on LinkedIn
                    </a>
                  </motion.div>
                )}
              </div>

              <Button
                onClick={handlePrint}
                variant="outline"
                className="border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10 text-xs sm:text-sm px-2 sm:px-4"
              >
                <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Print</span>
              </Button>

              <Button
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-[family-name:var(--font-cinzel)] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-20 sm:pt-24 pb-8 sm:pb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="scale-75 sm:scale-100">
            <MagicCircle size={300} animate={false} />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-2xl sm:text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">John Howard P.</span>
              <span className="text-gold-gradient"> Garcia</span>
            </h1>
            <p className="text-[#9932CC] font-[family-name:var(--font-cinzel)] text-sm sm:text-lg mb-3 sm:mb-4">
              Front-End Developer & Virtual Assistant
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-1 hover:text-[#FFD700] transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                {personalInfo.email}
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center gap-1 hover:text-[#FFD700] transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                {personalInfo.phone}
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <span className="flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                {personalInfo.location}
              </span>
            </div>

            <div className="flex justify-center gap-3 mt-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Howard-23/Howard-23" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-howard-garcia-31a075390/" },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1a1a2e] border border-[#FFD700]/20 flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6 sm:space-y-8">
        
        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#12121a] rounded-lg border border-[#FFD700]/20 p-4 sm:p-6 print:border-gray-300"
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2 print:text-black">
            <MiniMagicCircle className="w-6 h-6 sm:w-8 sm:h-8 print:hidden" />
            Professional Summary
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base print:text-gray-700">
            {personalInfo.summary}
          </p>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2 print:text-black">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] print:hidden" />
            Work Experience
          </h2>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#12121a] rounded-lg border border-[#FFD700]/10 p-4 sm:p-5 hover:border-[#FFD700]/30 transition-colors print:border-gray-200 print:bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-cinzel)] text-base sm:text-lg font-semibold text-white print:text-black">
                      {exp.title}
                    </h3>
                    <p className="text-[#9932CC] text-xs sm:text-sm print:text-purple-700">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-[#FFD700]/30 text-[#FFD700] text-xs w-fit print:border-gray-400 print:text-gray-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 print:text-gray-600">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-500 flex items-start gap-2 print:text-gray-600">
                      <span className="text-[#FFD700] mt-1 print:text-gray-400">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2 print:text-black">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] print:hidden" />
            Education
          </h2>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#12121a] rounded-lg border border-[#FFD700]/10 p-4 sm:p-5 hover:border-[#FFD700]/30 transition-colors print:border-gray-200 print:bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-cinzel)] text-base sm:text-lg font-semibold text-white print:text-black">
                      {edu.degree}
                    </h3>
                    <p className="text-[#9932CC] text-xs sm:text-sm print:text-purple-700">{edu.school}</p>
                  </div>
                  <Badge variant="outline" className="border-[#FFD700]/30 text-[#FFD700] text-xs w-fit print:border-gray-400 print:text-gray-600">
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm print:text-gray-600">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2 print:text-black">
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] print:hidden" />
            Skills
          </h2>
          
          <div className="bg-[#12121a] rounded-lg border border-[#FFD700]/10 p-4 sm:p-5 print:border-gray-200 print:bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider print:text-gray-700">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 bg-[#4169E1]/20 text-[#87CEEB] text-xs rounded border border-[#4169E1]/30 print:bg-gray-100 print:text-gray-800 print:border-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider print:text-gray-700">Backend & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 bg-[#228B22]/20 text-[#90EE90] text-xs rounded border border-[#228B22]/30 print:bg-gray-100 print:text-gray-800 print:border-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider print:text-gray-700">E-Commerce</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ecommerce.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 bg-[#9932CC]/20 text-[#DA70D6] text-xs rounded border border-[#9932CC]/30 print:bg-gray-100 print:text-gray-800 print:border-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider print:text-gray-700">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded border border-[#FFD700]/30 print:bg-gray-100 print:text-gray-800 print:border-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2 print:text-black">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] print:hidden" />
            Languages
          </h2>
          
          <div className="bg-[#12121a] rounded-lg border border-[#FFD700]/10 p-4 sm:p-5 print:border-gray-200 print:bg-white">
            <div className="grid sm:grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.language} className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm print:text-gray-700">{lang.language}</span>
                  <span className="text-[#FFD700] text-xs print:text-gray-600">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2 print:text-black">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] print:hidden" />
            Projects
          </h2>
          
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#12121a] rounded-lg border border-[#FFD700]/10 p-4 sm:p-5 hover:border-[#FFD700]/30 transition-colors print:border-gray-200 print:bg-white"
              >
                <h3 className="font-[family-name:var(--font-cinzel)] text-base sm:text-lg font-semibold text-white mb-2 print:text-black">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 print:text-gray-600">{project.description}</p>
                
                {project.highlights && (
                  <ul className="space-y-1 mb-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-500 flex items-start gap-2 print:text-gray-600">
                        <span className="text-[#FFD700] mt-1 print:text-gray-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-[#1a1a2e] text-gray-400 text-xs rounded border border-white/5 print:bg-gray-100 print:text-gray-600 print:border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:ml-auto print:hidden">
                    <a 
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9932CC] text-xs sm:text-sm hover:text-[#FFD700] transition-colors flex items-center gap-1 whitespace-nowrap"
                    >
                      View Code <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9932CC] text-xs sm:text-sm hover:text-[#FFD700] transition-colors flex items-center gap-1 whitespace-nowrap"
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Download Button at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8 print:hidden"
        >
          <Button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-[family-name:var(--font-cinzel)] font-semibold px-6 sm:px-8 py-5 sm:py-6 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Download Full Resume (PDF)
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-[#FFD700]/10 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-4">
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
                className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#FFD700]/20 flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            © 2026 {personalInfo.name}
          </p>
        </div>
      </footer>
    </main>
  );
}
