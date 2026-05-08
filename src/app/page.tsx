"use client";

import {
  ChevronDown, Menu, X, ArrowRight, FileText, Stethoscope, Cog,
  Monitor, Briefcase, GraduationCap, BookOpen, MapPin, Users,
  Building2, Library as LibraryIcon, Star, Globe, MessageCircle, Camera,
  Video, Phone, Mail, CheckCircle2, TrendingUp, Award, Zap
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Parallax Header
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

  // Mouse Parallax for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-500, 500], [5, -5]);
  const rotateY = useTransform(smoothX, [-500, 500], [-5, 5]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Academics", href: "#", hasDropdown: true },
    { name: "Admissions", href: "#", hasDropdown: true },
    { name: "Life at Campus", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden selection:bg-red-100 selection:text-[#b31b1b]">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-[#b31b1b] text-white py-2.5 px-4 md:px-8 text-[11px] font-medium flex flex-col md:flex-row justify-between items-center z-[60] relative"
      >
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><Phone size={12} /> 042 111 000 000</span>
          <span className="hidden sm:inline-block w-px h-3 bg-white/30"></span>
          <span className="flex items-center gap-1.5"><Mail size={12} /> info@superior.edu.pk</span>
        </div>
        <div className="flex gap-5 mt-2 md:mt-0 items-center">
          <a href="#" className="hover:text-red-200 transition-colors">Student Portal</a>
          <div className="flex gap-4">
            <Globe size={14} className="cursor-pointer hover:scale-125 transition-transform" />
            <MessageCircle size={14} className="cursor-pointer hover:scale-125 transition-transform" />
            <Camera size={14} className="cursor-pointer hover:scale-125 transition-transform" />
          </div>
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        style={{ y: headerY, opacity: headerOpacity }}
        className={`fixed left-0 right-0 transition-all duration-500 z-50 ${scrolled
            ? "top-0 mx-0 bg-white/90 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-100"
            : "top-[40px] md:top-[36px] bg-white/50 backdrop-blur-md border-b border-gray-100 py-5"
          } px-4 md:px-10 flex justify-between items-center`}
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-black text-2xl leading-[0.85] cursor-pointer"
          >
            <span className="text-[#b31b1b] tracking-tighter">SUPERIOR</span>
            <br />
            <span className="text-[9px] text-gray-500 font-bold tracking-[0.3em] uppercase">Group of Colleges</span>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-gray-800">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group flex items-center gap-1 overflow-hidden"
              whileHover={{ color: "#b31b1b" }}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b31b1b] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#8b0000" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#b31b1b] text-white px-7 py-3 rounded-xl text-sm font-bold shadow-xl shadow-red-900/20 hidden md:block transition-all"
          >
            Apply Now
          </motion.button>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-gray-800 bg-gray-100 rounded-lg shadow-sm"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[100] lg:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="font-black text-2xl text-[#b31b1b]">SUPERIOR</div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-800">
                  <X size={24} />
                </button>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <motion.a
                    variants={fadeInUp}
                    key={link.name}
                    href={link.href}
                    className="text-3xl font-black text-gray-900 hover:text-[#b31b1b] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
              <div className="mt-auto pt-10 border-t border-gray-100">
                <button className="w-full bg-[#b31b1b] text-white py-5 rounded-2xl font-black text-xl shadow-2xl">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 relative bg-slate-50 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/hero.png"
            alt="Campus Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            style={{
              x: useTransform(smoothX, [-500, 500], [20, -20]),
              y: useTransform(smoothY, [-500, 500], [20, -20]),
              scale: 1.1
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              x: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-red-100/50 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
              x: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full text-[12px] font-black mb-8 items-center gap-2 border border-red-100 text-[#b31b1b] shadow-sm uppercase tracking-wider"
            >
              <Zap size={14} className="fill-[#b31b1b]" />
              Admissions Open — Session 2026
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight text-gray-900"
            >
              Future <br />
              <span className="text-gradient">Starts Here.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-10 max-w-xl text-lg md:text-xl leading-relaxed font-medium"
            >
              Empowering Pakistan's youth through innovation, character building, and world-class academics. Join 50,000+ students on a journey of excellence.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 mb-16">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#b31b1b] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-red-900/30 group"
              >
                Apply Online <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-lg border-2 border-gray-100 shadow-xl transition-colors"
              >
                Explore Programs
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "200+", lbl: "Campuses" },
                { val: "25+", lbl: "Years" },
                { val: "50K+", lbl: "Students" },
                { val: "100%", lbl: "Excellence" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-3xl font-black text-gray-900 group-hover:text-[#b31b1b] transition-colors"
                  >
                    {stat.val}
                  </motion.div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">{stat.lbl}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative perspective-1000 hidden lg:block"
          >
            {/* Main Hero Image Wrapper */}
            <div className="relative z-10 rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white group">
              <motion.img
                src="/hero.png"
                alt="Main Campus"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  <span className="font-black text-lg uppercase tracking-widest">Main Campus</span>
                </div>
                <h3 className="text-3xl font-black leading-tight">World Class <br />Infrastructure.</h3>
              </div>
            </div>

            {/* Floating Registration Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -right-12 top-20 bg-white p-8 rounded-[40px] shadow-2xl z-20 border border-gray-50 w-72"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#b31b1b]">
                  <GraduationCap size={24} />
                </div>
                <div className="font-black text-gray-900 leading-tight text-sm">Join Our <br />Next Session</div>
              </div>
              <div className="space-y-3">
                {['FSc Pre-Medical', 'ICS Computer Science', 'Bachelor Degrees'].map((prog) => (
                  <div key={prog} className="text-xs font-bold text-gray-500 py-2 border-b border-gray-50 last:border-0">{prog}</div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-[#b31b1b] text-white rounded-xl font-black text-xs shadow-lg shadow-red-900/20">
                Register Today
              </button>
            </motion.div>

            {/* Success Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 bottom-20 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-gray-50"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="font-black text-gray-900 text-sm">100% Guaranteed</div>
                <div className="text-[9px] text-gray-400 font-bold uppercase">Success Pathway</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Strip */}
      <div className="bg-white border-y border-gray-100 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 opacity-20 grayscale hover:grayscale-0 transition-all"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-20">
                {["Quality Education", "Career Planning", "Personality Development", "Academic Excellence", "Leadership"].map((text) => (
                  <span key={text} className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">{text}</span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-32 px-4 md:px-8 relative bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl group">
              <motion.img
                src="/library.png"
                alt="Library Life"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b31b1b]/40 to-transparent"></div>
            </div>

            {/* Stat Overlay Card */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="absolute -bottom-10 -right-10 bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl z-20 border border-slate-800"
            >
              <div className="text-5xl font-black mb-2 tracking-tighter">25+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Years of Legacy</div>
            </motion.div>

            {/* Animated Circles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl -z-10"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="text-[#b31b1b] font-black text-xs tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-[#b31b1b] rounded-full"></span>
              The Superior Advantage
            </motion.h4>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Where Potential <br />
              <span className="text-gradient">Meets Purpose.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-10 leading-relaxed text-xl font-medium">
              Superior Group of Colleges is more than an institution; it's a movement. We focus on academic rigor while ensuring students develop the emotional intelligence and leadership skills needed for real-world success.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <Award size={24} />, title: "Quality Audit", desc: "Top-tier educational standards." },
                { icon: <Users size={24} />, title: "Student Care", desc: "Holistic development programs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="text-[#b31b1b] mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <div className="font-black text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-500 font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b31b1b] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-900/20 flex items-center gap-3"
            >
              Explore Our History <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-32 px-4 md:px-8 bg-slate-900 text-white rounded-[50px] md:rounded-[100px] mx-4 md:mx-10 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b31b1b_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.h4 variants={fadeInUp} className="text-red-500 font-black text-xs tracking-[0.4em] uppercase mb-6">World Class Academics</motion.h4>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">Your Future <br /><span className="text-gradient">Architected.</span></motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">Curriculum designed by experts to prepare you for the next decade of industry challenges.</motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: 'FSc Pre-Medical', icon: <Stethoscope size={32} />, desc: 'A rigorous pathway for aspiring medical professionals with 100% board prep.' },
              { title: 'FSc Pre-Engineering', icon: <Cog size={32} />, desc: 'Advanced foundation in sciences for future engineers and innovators.' },
              { title: 'ICS Computer Science', icon: <Monitor size={32} />, desc: 'Master coding, data, and digital logic in our high-tech computer labs.' },
              { title: 'I.COM Commerce', icon: <Briefcase size={32} />, desc: 'Business intelligence and accounting for the next generation of leaders.' },
              { title: 'Bachelor Degrees', icon: <GraduationCap size={32} />, desc: 'Diverse degree programs recognized internationally by top universities.' },
              { title: 'Level 3 Diploma', icon: <BookOpen size={32} />, desc: 'Professional vocational training to fast-track your career entrance.' }
            ].map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -15, backgroundColor: "#1e293b", borderColor: "#b31b1b" }}
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-12 rounded-[50px] transition-all cursor-pointer group"
              >
                <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-all">
                  {prog.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-red-500 transition-colors">{prog.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium group-hover:text-slate-300 transition-colors">{prog.desc}</p>
                <div className="flex items-center gap-3 text-red-500 font-black text-sm uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                  Program Details <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us / Stats */}
      <section className="py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-gray-900 mb-12 leading-none tracking-tighter">
                Excellence <br />
                <span className="text-gradient">is Our Standard.</span>
              </motion.h2>
              <div className="space-y-12">
                {[
                  { title: "World Class Faculty", desc: "Learn from Ph.D. scholars and industry experts with years of experience.", icon: <Users className="text-[#b31b1b]" /> },
                  { title: "Modern Facilities", desc: "Fully equipped labs, digital libraries, and smart classrooms.", icon: <Zap className="text-[#b31b1b]" /> },
                  { title: "Placement Cell", desc: "Connecting our graduates with the top 500 companies in Pakistan.", icon: <TrendingUp className="text-[#b31b1b]" /> }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#b31b1b] group-hover:text-white transition-all shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-lg text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              <div className="absolute inset-0 bg-red-50 blur-[120px] -z-10 rounded-full opacity-50"></div>
              {[
                { val: "98%", lbl: "Board Rate", color: "bg-[#b31b1b]" },
                { val: "300+", lbl: "Campuses", color: "bg-orange-600" },
                { val: "50k+", lbl: "Active Students", color: "bg-slate-900" },
                { val: "100%", lbl: "Character", color: "bg-blue-600" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -15, scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className={`${stat.color} p-12 rounded-[60px] text-white shadow-2xl flex flex-col justify-center aspect-square border-4 border-white/10`}
                >
                  <div className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">{stat.val}</div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] opacity-80">{stat.lbl}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-32 px-4 md:px-8 bg-slate-50 relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#b31b1b] font-black text-xs tracking-[0.5em] uppercase mb-6">Our Footprint</h4>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">Pakistan's <br />Largest Network</h2>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border-2 border-gray-200 rounded-2xl font-black text-gray-900 shadow-xl text-lg flex items-center gap-3"
            >
              Find Nearby Campus <MapPin size={20} className="text-[#b31b1b]" />
            </motion.button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { city: 'Lahore', area: 'Central Punjab Hub', icon: <Building2 /> },
              { city: 'Faisalabad', area: 'Industrial Capital', icon: <GraduationCap /> },
              { city: 'Multan', area: 'Southern Punjab', icon: <MapPin /> },
              { city: 'Rawalpindi', area: 'Northern Sector', icon: <LibraryIcon /> }
            ].map((campus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, borderColor: "#b31b1b" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all border border-gray-100 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-[#b31b1b] mb-10 group-hover:rotate-12 transition-all">
                  {campus.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">{campus.city}</h3>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-10">{campus.area}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#b31b1b] uppercase tracking-widest">Active Admissions</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#b31b1b] group-hover:translate-x-2 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#b31b1b] font-black text-xs tracking-[0.4em] uppercase mb-6"
            >
              Success Stories
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter"
            >
              What Our <span className="text-gradient">Students Say.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Ayesha Malik", role: "FSc Pre-Medical", text: "Superior gave me the confidence to pursue my dreams. The teachers are incredibly supportive and the environment is perfect for learning.", avatar: "AM" },
              { name: "Zain Ahmed", role: "ICS (Comp Science)", text: "The labs at Superior are world-class. I learned more here in two years than I could have anywhere else. Highly recommended!", avatar: "ZA" },
              { name: "Sana Khan", role: "Bachelor of Commerce", text: "From personality development to academic excellence, Superior has transformed me into a leader. I'm ready for the corporate world.", avatar: "SK" }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -20, rotate: i % 2 === 0 ? 1 : -1 }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className="bg-slate-50 p-12 rounded-[50px] border border-slate-100 relative group"
              >
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100 group-hover:bg-[#b31b1b] group-hover:text-white transition-all">
                  <Star size={30} className="fill-current" />
                </div>
                <div className="text-[#b31b1b] mb-8">
                  <FileText size={40} className="opacity-20" />
                </div>
                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10 italic">"{testi.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#b31b1b] to-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {testi.avatar}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">{testi.name}</div>
                    <div className="text-xs font-black text-[#b31b1b] uppercase tracking-widest">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 md:px-8 relative bg-[#b31b1b] overflow-hidden rounded-t-[60px] md:rounded-t-[180px] shadow-[0_-50px_100px_-20px_rgba(179,27,27,0.4)]">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] border-[80px] border-white/5 rounded-full -mr-96 -mt-96"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-12 border border-white/20"
          >
            <Zap size={40} className="fill-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black mb-12 leading-none tracking-tighter"
          >
            Claim Your <br />Future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-medium mb-16 text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            Admissions for Session 2026 are filling rapidly. Secure your academic excellence today.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <motion.button
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#b31b1b] px-16 py-7 rounded-[30px] font-black text-2xl shadow-[0_30px_60px_-15px_rgba(255,255,255,0.4)]"
            >
              Apply Online Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="border-4 border-white/30 text-white px-16 py-7 rounded-[30px] font-black text-2xl"
            >
              Get Prospectus
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-40 pb-16 px-4 md:px-8 border-t border-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="font-black text-4xl text-[#b31b1b] mb-10 leading-none tracking-tighter">
              SUPERIOR <br />
              <span className="text-[11px] text-gray-400 tracking-[0.5em] uppercase font-bold">Group of Colleges</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed mb-12 text-xl max-w-sm">
              Pakistan's leading educational group committed to transforming lives through academic excellence and character building.
            </p>
            <div className="flex gap-6">
              {[Globe, MessageCircle, Camera, Video].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, backgroundColor: "#b31b1b", color: "#fff", rotate: 5 }}
                  className="w-16 h-16 bg-slate-50 text-gray-400 rounded-3xl flex items-center justify-center cursor-pointer transition-all border border-slate-100 shadow-sm"
                >
                  <Icon size={26} />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl text-gray-900 mb-12 uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-6">
              {["Our Story", "Campus Directory", "Student Life", "Academic Calendar", "Latest Blogs"].map((item) => (
                <li key={item}><a href="#" className="text-gray-500 font-bold hover:text-[#b31b1b] transition-all text-lg flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-1 bg-[#b31b1b] rounded-full transition-all"></span>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl text-gray-900 mb-12 uppercase tracking-[0.3em]">Programs</h4>
            <ul className="space-y-6">
              {["FSc Pre-Medical", "FSc Pre-Engineering", "ICS Computer Science", "I.COM Commerce", "Bachelor Degrees"].map((item) => (
                <li key={item}><a href="#" className="text-gray-500 font-bold hover:text-[#b31b1b] transition-all text-lg flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-1 bg-[#b31b1b] rounded-full transition-all"></span>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl text-gray-900 mb-12 uppercase tracking-[0.3em]">InTouch</h4>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#b31b1b] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Call Us</div>
                  <div className="font-black text-gray-900 text-xl tracking-tighter">042 111 000 000</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Email Us</div>
                  <div className="font-black text-gray-900 text-xl tracking-tighter">info@superior.edu.pk</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10 text-gray-400 font-black text-xs uppercase tracking-[0.4em]">
          <div>© 2026 SUPERIOR GROUP OF COLLEGES. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
