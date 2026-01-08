import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../App";
import { PRODUCTS } from "../constants";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Wind,
  Cog,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Warehouse,
  Globe,
  Zap,
  Settings,
  Shield,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";
import Customers from "@/components/Customers";

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: any;
}) {
  // Helper hook to animate numbers when card enters viewport
  // Now supports values like "12.5k+", just shows value directly
  function parseNumber(str: string) {
    if (/^[\d,.]+$/.test(str.replace(/,/g, "")))
      return parseFloat(str.replace(/,/g, ""));
    return null;
  }
  const displayValue =
    typeof value === "string" && parseNumber(value) !== null
      ? parseNumber(value)
      : null;

  const useCountUp = (target: number, duration = 1200) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      let observer: IntersectionObserver | undefined;
      let frame: number | undefined;
      let startTime: number | null = null;

      const animateCount = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.round(progress * (target - 0));
        setCount(current);
        if (progress < 1) {
          frame = requestAnimationFrame(animateCount);
        } else {
          setCount(target);
        }
      };

      if (target > 0 && ref.current) {
        observer = new window.IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              requestAnimationFrame(animateCount);
              observer && observer.disconnect();
            }
          },
          { threshold: 0.6 }
        );
        observer.observe(ref.current);
      }

      return () => {
        if (frame !== undefined) cancelAnimationFrame(frame);
        if (observer && observer.disconnect) observer.disconnect();
      };
    }, [target, duration]);

    return { count, ref };
  };

  const isNumber = typeof displayValue === "number" && !isNaN(displayValue);
  const { count, ref } = useCountUp(isNumber ? (displayValue as number) : 0);

  return (
    <div
      ref={ref}
      className="glass-dark p-8 rounded-sm border border-white/10 flex flex-col items-center text-center group hover:border-blue-500/50 transition-all duration-500"
    >
      <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-4xl font-bold text-black mb-2 font-mono tracking-tighter">
        {/* If number, count up with + if original had +, else just value */}
        {isNumber
          ? value.toString().endsWith("+")
            ? `${count.toLocaleString()}+`
            : count.toLocaleString()
          : value}
      </h3>
      <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}

const ThreeDIcon: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group/icon flex mb-8">
      {/* Outer Glow on Hover (blue, matches theme) */}
      {/* <div className="absolute inset-0 bg-blue-500/40 blur-[30px] rounded-full scale-150 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-700" /> */}
      {/* Main 3D cube */}
      <div className="relative w-16 h-16 rounded-[18px] flex items-center justify-center bg-white shadow-[10px_10px_22px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_10px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3">

        {/* Border and subtle gradient */}
        <div className="absolute inset-[3px] rounded-[15px] bg-gradient-to-br from-white via-[#f0f0f0] to-[#e0e0e0] border border-black/10 shadow-inner overflow-hidden">
          <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[conic-gradient(from_45deg,transparent,rgba(0,0,0,0.08),transparent)] animate-[spin_15s_linear_infinite] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_75%)]" />
        </div>

        {/* Icon / child */}
        <div className="relative z-10 text-black ]">
          <div style={{ filter: '' }}>
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center will-change-transform transition-transform duration-100 ease-out scale-110"
          style={{
            // backgroundImage: `url('/bg.jpeg')`,
            backgroundImage: `url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80')`,
            transform: `translateY(${scrollY * 0.25}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl animate-reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-blue-500"></span>
              <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
                Quality You Can Trust Since 2014
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.9] text-reveal">
              {t.heroTitle}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-xl md:text-2xl text-white/80 font-medium mb-8 leading-relaxed">
                  {t.heroDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/products"
                    className="px-10 py-5 bg-blue-500 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 group"
                  >
                    {t.heroBtnProducts}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-10 py-5 glass text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all duration-500 flex items-center justify-center"
                  >
                    {t.heroBtnInquiry}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-white/50 text-[10px] font-mono uppercase tracking-[0.3em] leading-loose">
                  Global Distribution Hubs
                  <br />
                  Abu Dhabi / Dubai / Qatar / Bahrain / Kuwait / Oman / Sharjah
                  / Turkey / Germany / Asia Pacific
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Customers />

      {/* 4. New Launch – Compressor Division */}
      <section className="py-32 max-[599px]:py-16 bg-white relative border-y border-white/5">
        <div className="absolute inset-0 -z-2 pointer-events-none ">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <img
          className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1655165312002-9d781ad4046e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="container mx-auto px-6 relative z-2">
          <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="px-3 py-1 bg-blue-500 text-white text-[9px] font-bold tracking-widest relative">
                  {t.launchBadge}
                  <div className="absolute inset-0 bg-blue-500 animate-ping opacity-20"></div>
                </div> */}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8">
                {t.launchTitle}
              </h2>
              <p className="text-white/50 text-xl leading-relaxed">
                Introducing the next generation of air compression. SMT
                Enterprises delivers reliable solutions engineered for 24/7
                industrial operations with uncompromising performance and
                durability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-black/5 border border-white/50">
            {[
              {
                title: "Oil-Free Systems",
                icon: Wind,
                text: "Medical and food-grade air purity standards with patented screw technology.",
              },
              {
                title: "Variable Frequency",
                icon: Cog,
                text: "Optimize energy consumption with intelligent load-sensing motor controllers.",
              },
              {
                title: "Integrated Cooling",
                icon: ShieldCheck,
                text: "Advanced thermal management for continuous operation in high-ambient regions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-12 hover:bg-white/[0.02] border border-white/50 transition-colors group"
              >
                <ThreeDIcon>
                  <item.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                </ThreeDIcon>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission, Vision & Impact Stats */}
      <section className="py-32 max-[599px]:py-16 bg-white relative border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                  CORPORATE IDENTITY
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.95]">
                  Reliability isn’t accidental.
                  <br />
                  It is engineered.
                </h2>
              </div>
              <p className="text-gray-600 text-xl leading-relaxed">
                We eliminate industrial volatility through a proprietary
                12-point quality protocol, verifying every component from the
                smallest gasket to the largest compressor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-black">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-blue-500">
                    Our Mission
                  </h4>
                  <p className="text-gray-500 text-sm leading-loose">
                    To sustain global industrial productivity through the
                    relentless pursuit of part integrity and supply chain
                    velocity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-blue-500">
                    Our Vision
                  </h4>
                  <p className="text-gray-500 text-sm leading-loose">
                    To become the singular technical benchmark for heavy-duty
                    engine and air power solutions across the MENA region.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                label={t.statsProducts}
                value="12.5k+"
                icon={Warehouse}
              />
              <StatCard
                label={t.statsExperience}
                value="11+"
                icon={ShieldCheck}
              />
              <StatCard label={t.statsProjects} value="1200+" icon={Globe} />
              <StatCard label={t.statsClients} value="45+" icon={CheckCircle} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. About the Company (Editorial Showcase) */}
      <section className="py-32 max-[599px]:py-16 bg-white relative border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                ENGINEERING EXPERTISE
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                Clinical Precision in Supply.
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Industrial Precision operates at the intersection of
                  mechanical legacy and digital logistics. We maintain an
                  exhaustive inventory of OEM and premium aftermarket components
                  designed to withstand the harshest industrial environments.
                </p>
                <p className="font-medium text-black">
                  Our commitment to technical support extends beyond the sale,
                  offering 24/7 engineering consultation for global fleet
                  operators.
                </p>
              </div>
              <ul className="space-y-4 py-8">
                {[
                  "ISO 9001:2015 Certified Quality Management",
                  "Rigorous 12-point component verification",
                  "Strategic global warehouse synchronization",
                  "Expert after-sales technical support division",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/70"
                  >
                    <div className="w-2 h-2 bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-blue-500 font-bold uppercase text-xs tracking-widest hover:gap-5 transition-all"
              >
                LEARN MORE ABOUT OUR PROCESS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                  alt="Industrial Engineering"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-10 hidden md:block max-w-xs border border-black/5">
                <p className="text-black font-mono text-[10px] leading-relaxed uppercase tracking-widest">
                  "We don't just supply parts; we supply the peace of mind that
                  your operations will never grind to a halt."
                </p>
                <p className="text-blue-500 font-bold mt-4 text-xs">
                  — DIRECTOR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Products & Capabilities (Awwwards-style showcase) */}
      <section className="py-32 max-[599px]:py-16 bg-white relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                PORTFOLIO
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                Core Capabilities
              </h2>
            </div>
            <Link
              to="/products"
              className="px-12 py-5 font-bold uppercase text-[10px] tracking-[0.2em] bg-white/10 text-black backdrop-blur-md border border-white/20 hover:bg-blue-500 hover:border-blue-500 transition-all"
            >
              EXPLORE FULL INVENTORY
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Engine Components",
                count: "4,500+ SKUs",
                img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80",
                desc: "Pistons, liners, valves, and crankshafts for CAT, Cummins, and Komatsu units.",
              },
              {
                title: "Screw Compressors",
                count: "32 Models",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
                desc: "Industrial air power solutions from 5.5kW to 350kW with integrated drying.",
              },
              {
                title: "Heavy Spares",
                count: "2,800+ SKUs",
                img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80",
                desc: "Gasket kits, sealing solutions, and wear parts for earthmoving machinery.",
              },
              {
                title: "Filtration Systems",
                count: "1,200+ SKUs",
                img: "https://images.unsplash.com/photo-1730201127761-15888d9ddf98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "High-pressure fuel, oil, and air filtration units with nanofiber technology.",
              },
            ].map((cat, i) => (
              <Link
                key={i}
                to="/products"
                className="group block relative aspect-[16/10] overflow-hidden bg-gray-100"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                  <div className="space-y-4">
                    <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">
                      {cat.count}
                    </span>
                    <h3 className="text-3xl font-bold text-black uppercase tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-black/50 text-sm max-w-xs group-hover:text-black transition-colors">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center text-black backdrop-blur-md border border-white/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* 8. Office & Warehouse Presence */}
      <section className="py-32 max-[599px]:py-16 bg-white relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
                SPATIAL FOOTPRINT
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8 leading-none">
                Global Hubs.
                <br />
                Local Expertise.
              </h2>
              <div className="space-y-8 mt-12">
                <div className="glass-dark p-8 border-l-4 border-l-blue-500">
                  <h4 className="text-black font-bold uppercase tracking-widest text-sm mb-2">
                    Head Offices
                  </h4>
                  <p className="text-black/40 text-sm">
                    Al Eid Complex Car Exhi Al Jawhara(Jeddah) - Saudi Arabia
                  </p>
                  <p className="text-blue-500 text-[10px] font-mono mt-4">
                    COORD: 21.43512° N, 39.26288° E
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full bg-[#111] border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.854678326949!2d39.25990641127877!3d21.434956273620404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cb006b0ff9c5%3A0x37d1ce70f1ae0f86!2sSumou%20Al%20Ebdaa%20Est!5e0!3m2!1sen!2sin!4v1767180371100!5m2!1sen!2sin"
                width="800"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location-map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-32 max-[599px]:py-16 bg-white relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24">
            <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              {t.faqTitle}
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              {
                q: "What are your delivery timelines for critical engine parts?",
                a: "Stocked items are dispatched within 6 hours. International freight usually takes 3-5 business days via our premium logistics partners.",
              },
              {
                q: "Do you offer warranty on aftermarket components?",
                a: "All premium aftermarket parts supplied by Industrial Precision carry a standard 12-month operational warranty, matching OEM standards.",
              },
              {
                q: "Can you provide customized compressor configurations?",
                a: "Yes. Our engineering team can modify screw compressor outputs and filtration stages to meet specific industrial environments, including high-salinity or desert conditions.",
              },
            ].map((faq, i) => (
              <details key={i} className="group py-8" open={openFaq === i}>
                <summary
                  className="list-none cursor-pointer flex justify-between items-center font-bold uppercase tracking-wide text-sm group-hover:text-blue-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === i ? null : i);
                  }}
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </summary>
                {openFaq === i && (
                  <div className="mt-6 text-gray-500 text-sm leading-relaxed max-w-2xl">
                    {faq.a}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* 11. Quick Contact Section (New) */}
      <section className="py-32 bg-white border-t border-white/5 relative overflow-hidden">
        {/* Decorative Grid Line */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 hidden md:block"></div> */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="w-full flex items-center gap-20">
            <div className="w-1/2 flex flex-col gap-6">
              <div className="text-left space-t-8">
                <div>
                  <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
                    Connect with Engineering.
                  </h2>
                </div>
                <p className="text-black/40 text-xl leading-relaxed max-w-lg pt-6">
                  Direct access to our technical desk and logistics hubs
                  worldwide. We respond to industrial emergencies 24/7.
                </p>
                <div className="pt-8 pb-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-4 text-black font-bold uppercase text-xs tracking-[0.3em] hover:text-red-600 transition-colors group"
                  >
                    GOTO TECHNICAL DESK{" "}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Technical Support",
                    desc: "logistics@iprecision.com",
                    icon: Mail,
                    action: "mailto:logistics@iprecision.com",
                  },
                  {
                    title: "Direct Hotline",
                    desc: "+971 4 000 0000",
                    icon: Phone,
                    action: "tel:+97140000000",
                  },
                  {
                    title: "Global HQ",
                    desc: "Dubai Industrial Area 4, UAE",
                    icon: MapPin,
                    action: "/contact",
                  },
                  {
                    title: "Europe Hub",
                    desc: "Berlin-Adlershof, DE",
                    icon: Globe,
                    action: "/contact",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={
                      item.action.startsWith("http") ||
                      item.action.startsWith("mailto") ||
                      item.action.startsWith("tel")
                        ? item.action
                        : undefined
                    }
                    className="glass-dark p-8 border border-white/5 hover:border-red-600/50 transition-all duration-500 group flex flex-col justify-center"
                  >
                    <item.icon className="w-6 h-6 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-2">
                      {item.title}
                    </h4>
                    <p className="text-black/40 text-sm font-mono">
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="relative h-full w-full bg-[#111] border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.854678326949!2d39.25990641127877!3d21.434956273620404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cb006b0ff9c5%3A0x37d1ce70f1ae0f86!2sSumou%20Al%20Ebdaa%20Est!5e0!3m2!1sen!2sin!4v1767180371100!5m2!1sen!2sin"
                  width="900"
                  height="700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="location-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
