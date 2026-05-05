"use client";

import { 
  ChevronDown, Menu, ArrowRight, FileText, Stethoscope, Cog, 
  Monitor, Briefcase, GraduationCap, BookOpen, MapPin, Users, 
  Building2, Library, Star, Globe, MessageCircle, Camera, 
  Video, Phone, Mail 
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="bg-[#b31b1b] text-white py-2 px-4 md:px-8 text-xs flex flex-col md:flex-row justify-between items-center z-50 relative">
        <div>Admissions Helpline: 042 111 000 000 | Monday-Saturday: 8AM-5PM</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-200 transition-colors">Portal Login</a>
          <a href="#" className="hover:text-red-200 transition-colors">Facebook</a>
          <a href="#" className="hover:text-red-200 transition-colors">Instagram</a>
          <a href="#" className="hover:text-red-200 transition-colors">YouTube</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md py-4 px-4 md:px-8 flex justify-between items-center shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="font-bold text-xl leading-tight">
            <span className="text-[#b31b1b]">SUPERIOR</span>
            <br />
            <span className="text-[10px] text-gray-500 font-normal tracking-widest">GROUP OF COLLEGES</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-[#b31b1b] transition-colors">Home</a>
          <a href="#" className="hover:text-[#b31b1b] transition-colors">About Us</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#b31b1b] transition-colors group">Academics <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/></div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#b31b1b] transition-colors group">Admissions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/></div>
          <a href="#" className="hover:text-[#b31b1b] transition-colors">Life at Campus</a>
          <a href="#" className="hover:text-[#b31b1b] transition-colors">Facilities</a>
          <a href="#" className="hover:text-[#b31b1b] transition-colors">Blogs</a>
          <a href="#" className="hover:text-[#b31b1b] transition-colors">Contact</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#b31b1b] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-red-800 transition-colors hidden md:block shadow-lg shadow-red-900/20"
        >
          Apply Now
        </motion.button>
        <button className="lg:hidden text-gray-700"><Menu/></button>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#b31b1b] to-[#8b0000] text-white px-4 md:px-8 py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold mb-6 items-center gap-2 border border-white/20 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Admissions Open 2026
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              Facilitating Success<br />Across Pakistan
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-red-100 mb-10 max-w-lg text-lg leading-relaxed font-light">
              Transforming lives through quality education, personality development, and career planning. Join 50,000+ students building their future at Superior Group of Colleges.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-[#b31b1b] px-8 py-4 rounded-md font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-2xl">
                Apply Now <ArrowRight size={18} className="text-[#b31b1b]" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white/80 text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                Explore Programs
              </motion.button>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
              {[
                { val: "200+", lbl: "College Campuses" },
                { val: "20+", lbl: "Years of Excellence" },
                { val: "50K+", lbl: "Students Enrolled" },
                { val: "15+", lbl: "Academic Programs" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black drop-shadow-md">{stat.val}</div>
                  <div className="text-xs text-red-200 mt-1 font-medium">{stat.lbl}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end perspective-1000"
          >
            <div className="bg-white/95 backdrop-blur-xl text-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl relative border border-white/20 transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#b31b1b] shadow-inner">
                   <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-gray-900">Admissions 2026</h3>
                  <p className="text-xs text-red-600 font-semibold mt-1">Register before the deadline!</p>
                </div>
              </div>
              <div className="space-y-3">
                {['FSc Pre-Medical', 'FSc Pre-Engineering', 'ICS — Computer Science', 'I.COM — Commerce', 'F.A — Arts', 'BSC / BCOM / BA', 'Level 3 Diploma'].map((prog, i) => (
                  <motion.div 
                    key={prog} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-3 rounded-lg transition-colors cursor-pointer group"
                  >
                    <span className="font-semibold text-sm text-gray-700 group-hover:text-[#b31b1b] transition-colors">{prog}</span>
                    <span className="text-[10px] bg-red-50 text-[#b31b1b] px-2.5 py-1 rounded-md font-bold border border-red-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h4 variants={fadeInUp} className="text-[#b31b1b] font-black text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#b31b1b] inline-block"></span>
              SUPERIOR GROUP OF COLLEGES
            </motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Two Decades of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b31b1b] to-red-600">Educational Excellence</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
              We are committed to enhancing the potential of our students, faculty, and staff by bringing positive change in their personal and professional lives. We motivate them for self-enlightenment through Quality Education, Personality Development, True Professionalism, and Career Planning to add value to our nation and humanity.
            </motion.p>
            <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#b31b1b] text-white px-8 py-4 rounded-md font-semibold hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20">
              Read More About Us
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#b31b1b] to-red-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -right-10 -top-16 text-[240px] font-black opacity-[0.03] leading-none select-none">20</div>
              <div className="absolute -left-10 -bottom-16 text-[240px] font-black opacity-[0.03] leading-none select-none">20</div>
              
              <div className="relative z-10">
                <div className="text-2xl font-medium mb-1 text-red-200">Years of</div>
                <div className="text-5xl md:text-6xl font-black mb-4 tracking-tight">SUPERIORITY</div>
                <p className="text-red-100 mb-12 text-lg font-light">A Journey of Accomplishments.</p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-black">200+</div>
                    <div className="text-xs text-red-200 mt-2 font-semibold tracking-wider uppercase">Campuses</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black">50K+</div>
                    <div className="text-xs text-red-200 mt-2 font-semibold tracking-wider uppercase">Students</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black">15+</div>
                    <div className="text-xs text-red-200 mt-2 font-semibold tracking-wider uppercase">Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 text-center relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-16">
            <motion.h4 variants={fadeInUp} className="text-[#b31b1b] font-black text-xs tracking-widest uppercase mb-4">ACADEMIC EXCELLENCE</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Academic Programs</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-2xl mx-auto text-lg font-light">A comprehensive range of intermediate and bachelor programs designed to shape future leaders.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            {[
              { title: 'FSc Pre-Medical', icon: <Stethoscope size={28} className="text-[#b31b1b]"/>, desc: 'Prepare for MDCAT and a career in medicine, dentistry, or health sciences.' },
              { title: 'FSc Pre-Engineering', icon: <Cog size={28} className="text-[#b31b1b]"/>, desc: 'Build a solid foundation in physics, mathematics, and chemistry.' },
              { title: 'ICS — Computer Science', icon: <Monitor size={28} className="text-[#b31b1b]"/>, desc: 'Explore computing, programming, and IT in the modern digital world.' },
              { title: 'I.COM — Commerce', icon: <Briefcase size={28} className="text-[#b31b1b]"/>, desc: 'Master business, accounting, and economics for a corporate career.' },
              { title: 'BSC / BCOM / BA', icon: <GraduationCap size={28} className="text-[#b31b1b]"/>, desc: 'Bachelor level programs with advanced degree in science, commerce, arts.' },
              { title: 'Level 3 Diploma', icon: <BookOpen size={28} className="text-[#b31b1b]"/>, desc: 'Internationally recognized diploma for early professional endeavors.' }
            ].map((prog, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group cursor-pointer flex gap-5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500 ease-out z-0"></div>
                
                <motion.div variants={{ rest: { rotate: 0 }, hover: { rotate: 10 } }} className="bg-red-50 p-4 rounded-xl h-max group-hover:bg-[#b31b1b] group-hover:text-white transition-colors duration-300 [&>svg]:group-hover:text-white z-10 shadow-sm">
                  {prog.icon}
                </motion.div>
                <div className="z-10">
                  <h3 className="font-extrabold text-xl mb-3 text-gray-900 group-hover:text-[#b31b1b] transition-colors">{prog.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">{prog.desc}</p>
                  <span className="text-[#b31b1b] font-bold text-xs flex items-center gap-2 group-hover:underline uppercase tracking-wide">
                    Learn More <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h4 variants={fadeInUp} className="text-[#b31b1b] font-black text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#b31b1b] inline-block"></span>
              WHY CHOOSE US
            </motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Excellence in Every<br />Dimension
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-12 leading-relaxed text-lg font-light">
              An all-inclusive educational ecosystem. Our holistic approach ensures every student is prepared for academic success, professional achievement, and personal growth.
            </motion.p>
            
            <div className="space-y-8">
              {[
                { icon: <MapPin size={24} />, title: "300+ Campuses Nationwide", desc: "Find a campus near you, across all major cities and towns in Pakistan." },
                { icon: <Users size={24} />, title: "Expert Faculty", desc: "Highly qualified, experienced teachers dedicated to student success and growth." },
                { icon: <Briefcase size={24} />, title: "Career Planning Support", desc: "Dedicated career counseling and placement assistance for every student." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-5 items-start group">
                  <div className="bg-red-50 p-4 rounded-xl text-[#b31b1b] shadow-sm group-hover:bg-[#b31b1b] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-base text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Background blur for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-red-100 to-blue-50 blur-3xl -z-10 rounded-full opacity-50"></div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#b31b1b] to-red-700 rounded-3xl p-8 md:p-10 text-white aspect-square flex flex-col justify-center shadow-xl shadow-red-900/20"
              >
                <div className="text-5xl md:text-6xl font-black mb-3">98%</div>
                <div className="text-sm md:text-base text-red-100 font-bold uppercase tracking-wider">Board Result Rate</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#ea580c] to-orange-600 rounded-3xl p-8 md:p-10 text-white aspect-square flex flex-col justify-center shadow-xl shadow-orange-900/20"
              >
                <div className="text-5xl md:text-6xl font-black mb-3">200+</div>
                <div className="text-sm md:text-base text-orange-100 font-bold uppercase tracking-wider">Campus Locations</div>
              </motion.div>
            </div>
            <div className="space-y-6 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1e293b] to-gray-800 rounded-3xl p-8 md:p-10 text-white aspect-square flex flex-col justify-center shadow-xl shadow-gray-900/20"
              >
                <div className="text-5xl md:text-6xl font-black mb-3">500+</div>
                <div className="text-sm md:text-base text-gray-300 font-bold uppercase tracking-wider">Award Winning Initiatives</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#3b82f6] to-blue-600 rounded-3xl p-8 md:p-10 text-white aspect-square flex flex-col justify-center shadow-xl shadow-blue-900/20"
              >
                <div className="text-5xl md:text-6xl font-black mb-3">20k+</div>
                <div className="text-sm md:text-base text-blue-100 font-bold uppercase tracking-wider">Annual Graduates</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* College Campuses Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 text-center relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-16">
            <motion.h4 variants={fadeInUp} className="text-[#b31b1b] font-black text-xs tracking-widest uppercase mb-4">COLLEGE CAMPUSES</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Find a Campus Near You</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto text-lg font-light">With 300+ campuses across Pakistan, quality education is always within reach.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              { city: 'Lahore - Main Campus', desc: 'Gulberg, Lahore', uan: 'UAN: 042 - 111 000 - 000', icon: <Building2 size={56}/> },
              { city: 'Faisalabad - Campus', desc: 'D Ground, Faisalabad', uan: 'UAN: 041 - 111 000 - 000', icon: <GraduationCap size={56}/> },
              { city: 'Multan - Campus', desc: 'Bosan Road, Multan', uan: 'UAN: 061 - 111 000 - 000', icon: <BookOpen size={56}/> },
              { city: 'Rawalpindi - Campus', desc: 'Saddar, Rawalpindi', uan: 'UAN: 051 - 111 000 - 000', icon: <Library size={56}/> }
            ].map((campus, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover="hover" initial="rest" animate="rest" className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer text-left flex flex-col border border-gray-100">
                <div className="bg-[#b31b1b] h-48 flex items-center justify-center text-white/50 group-hover:text-white transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-0 transition-opacity z-10"></div>
                  <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.2 } }} transition={{ duration: 0.5, ease: "easeOut" }} className="relative z-20">
                    {campus.icon}
                  </motion.div>
                </div>
                <div className="p-8 flex-grow bg-white">
                  <h3 className="font-extrabold text-xl text-gray-900 mb-2">{campus.city}</h3>
                  <p className="text-base text-gray-500 mb-6 font-light">{campus.desc}</p>
                  <p className="text-sm font-black text-[#b31b1b] bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-100">{campus.uan}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="bg-[#b31b1b] text-white px-10 py-4 rounded-md font-bold hover:bg-red-800 transition-colors inline-flex items-center gap-3 shadow-xl shadow-red-900/20 text-lg"
          >
            View all Campuses <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Student Voices Section */}
      <section className="py-24 px-4 md:px-8 bg-white text-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-16">
            <motion.h4 variants={fadeInUp} className="text-[#b31b1b] font-black text-xs tracking-widest uppercase mb-4">STUDENT VOICES</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">What Our Student Say</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto text-lg font-light">Real stories from students who built their future at Superior.</motion.p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { text: "Superior College gave me everything I needed to crack my MDCAT. The faculty is incredible and the support system is unlike anything else. I got into MBBS on my first attempt!", name: "Ayesha Malik", prog: "FSc Pre-Medical, Lahore", initial: "A" },
              { text: "The computer science program here is exceptional. Teachers are very knowledgeable and practical projects prepared me well for university. Highly recommended for IT students.", name: "Usman Ahmed", prog: "ICS, Faisalabad", initial: "U" },
              { text: "From career counseling to board exam preparation, Superior College held my hand every step of the way. Secured straight As and got into my dream university.", name: "Zain Idrees", prog: "ICS, Multan", initial: "Z" },
            ].map((test, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -8 }} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute top-6 right-8 text-8xl text-gray-200/50 font-serif leading-none select-none">&quot;</div>
                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-8 gap-1.5">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 text-base leading-loose mb-10 italic">&quot;{test.text}&quot;</p>
                </div>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b31b1b] to-red-800 text-white flex items-center justify-center font-black text-xl shadow-inner">
                    {test.initial}
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-gray-900">{test.name}</div>
                    <div className="text-sm text-gray-500 font-medium">{test.prog}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7f1d1d] text-white py-32 px-4 md:px-8 text-center relative overflow-hidden">
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></motion.div>
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/40 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px] pointer-events-none"></motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-red-200 font-black text-xs tracking-widest uppercase mb-6">START YOUR JOURNEY</motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg">Your Future Begins Here</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-red-100 mb-12 text-xl md:text-2xl font-light">Admissions are open for 2026. Secure your seat today before the deadline.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-[#7f1d1d] px-10 py-4 rounded-md font-extrabold text-lg hover:bg-gray-100 transition-colors shadow-2xl">
              Apply Now
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white/30 bg-black/10 backdrop-blur-md text-white px-10 py-4 rounded-md font-extrabold text-lg hover:bg-white/10 transition-colors">
              Find a Campus
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-8 px-4 md:px-8 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-8">
          <div>
            <div className="font-extrabold text-3xl leading-tight mb-6 flex flex-col">
              SUPERIOR
              <span className="text-[11px] text-gray-400 font-bold mt-1 tracking-[0.2em]">GROUP OF COLLEGES</span>
            </div>
            <p className="text-gray-400 text-base mb-8 leading-relaxed font-light">
              Facilitating success across Pakistan through quality education, personality development, and career planning for over 20 years.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ y: -4, backgroundColor: "#b31b1b" }} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer transition-colors"><Globe size={20} /></motion.div>
              <motion.div whileHover={{ y: -4, backgroundColor: "#b31b1b" }} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer transition-colors"><MessageCircle size={20} /></motion.div>
              <motion.div whileHover={{ y: -4, backgroundColor: "#b31b1b" }} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer transition-colors"><Camera size={20} /></motion.div>
              <motion.div whileHover={{ y: -4, backgroundColor: "#b31b1b" }} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer transition-colors"><Video size={20} /></motion.div>
            </div>
          </div>
          
          <div>
            <h4 className="font-extrabold mb-8 text-xl tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-base font-medium">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Campus Facilities</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Life At Campus</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">College Campuses</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Become a Franchise</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Blogs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold mb-8 text-xl tracking-wide">Academics</h4>
            <ul className="space-y-4 text-gray-400 text-base font-medium">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">FSc Pre-Medical</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">FSc Pre-Engineering</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">ICS</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">I.COM</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">F.A</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">BSC / BCOM / BA</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Level 3 Diploma</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold mb-8 text-xl tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-gray-400 text-base font-medium">
              <li className="flex items-start gap-4">
                <div className="bg-[#b31b1b]/20 p-2 rounded-lg text-[#b31b1b]"><Phone size={18} /></div>
                <span className="mt-1">042 111 000 000</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#b31b1b]/20 p-2 rounded-lg text-[#b31b1b]"><Mail size={18} /></div>
                <span className="mt-1">info@superior.edu.pk</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#b31b1b]/20 p-2 rounded-lg text-[#b31b1b]"><MapPin size={18} /></div>
                <span className="mt-1">Lahore, Pakistan</span>
              </li>
              <li className="pt-4"><a href="#" className="text-white hover:text-[#b31b1b] transition-colors font-bold uppercase tracking-wider text-sm border border-white/20 px-6 py-3 rounded-md block text-center">Admissions Office</a></li>
              <li><a href="#" className="text-white hover:text-[#b31b1b] transition-colors font-bold uppercase tracking-wider text-sm border border-white/20 px-6 py-3 rounded-md block text-center">Student Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6 font-medium">
          <div>© 2026 Superior Group of Colleges. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
