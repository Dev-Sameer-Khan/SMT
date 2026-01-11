import { React, useEffect, useState, useRef } from "react";
import { useLanguage } from "../App";
import {
  Shield,
  Target,
  Users,
  Globe,
  ArrowRight,
  Warehouse,
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Customers from "@/components/Customers";
import { Link } from "react-router-dom";

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
      className="shadow-md bg-black/5 hover:shadow-xl p-8 rounded-sm flex border-white/5 flex-col items-center text-center group border hover:border-blue-500/50 transition-all duration-500"
    >
      <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-4xl font-bold text-black mb-2  tracking-tighter">
        {/* If number, count up with + if original had +, else just value */}
        {isNumber
          ? value.toString().endsWith("+")
            ? `${count.toLocaleString()}+`
            : count.toLocaleString()
          : value}
      </h3>
      <p className="text-black/60 text-[10px] font-bold uppercase tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}

const About: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-28 bg-white min-h-screen">
      <section className="py-20 border-b border-black/50 relative">
      <div className="absolute -top-0 right-0 w-1/2 h-full bg-blue-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-blue-500 text-4xl font-bold uppercase mb-4 block">
              ABOUT US
            </span>
            <h1 className="text-6xl md:text-8xl text-black font-black tracking-tighter mb-12 leading-none">
              {t.aboutTitle}
            </h1>
            <p className="text-2xl text-black/80 mb-12 font-light leading-relaxed">
              Established in 2014, the company has grown from a focused
              distribution operation into an integrated engineering and
              industrial solutions platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/factory/1200/800"
                alt="Factory"
                className="w-full grayscale border border-gray-200"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500/5 -z-10"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-7xl text-black font-black">
                {t.aboutSubtitle}
              </h2>
              <p className="text-black/80 leading-relaxed text-lg">
                {t.aboutText}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-500 rounded-sm flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-1">
                      Reliability
                    </h4>
                    <p className="text-md text-black/60">
                      ISO 9001:2015 Certified Supply Chain
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-500 rounded-sm flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-1">
                      Global
                    </h4>
                    <p className="text-md text-black/60">
                      Active Presence in 40+ Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Precision Pricing",
                text: "Fair market value for high-tolerance components, ensuring your projects remain within budgetary constraints.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                text: "Senior engineers available 24/7 for technical troubleshooting and part identification support.",
              },
              {
                icon: Shield,
                title: "Warranty Guard",
                text: "Comprehensive warranty on all industrial compressors and critical engine components.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-10 bg-black/5 shadow-sm border hover:border-blue-500/50 hover:shadow-2xl rounded-md transition-all duration-500"
              >
                <value.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-black font-bold mb-4 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-black/80 text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Customers />

      {/* 6. About the Company (Editorial Showcase) */}
      <section className="py-32 max-[599px]:py-10 bg-white relative border-y border-black/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-0 md:gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-8 max-[599px]:space-y-2">
              <span className="text-4xl -mb-4 font-bold uppercase  text-blue-500 block">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter leading-none">
                Clinical Precision in Supply.
              </h2>
              <div className="space-y-6 max-[599px]:space-y-3 text-black/80 text-base sm:text-lg leading-relaxed">
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
              <ul className="space-y-1 sm:space-y-4 py-2 sm:py-8">
                {[
                  "ISO 9001:2015 Certified Quality Management",
                  "Rigorous 12-point component verification",
                  "Strategic global warehouse synchronization",
                  "Expert after-sales technical support division",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-black/80"
                  >
                    <div className="w-2 h-2 bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 sm:gap-3 text-blue-500 font-bold uppercase text-xs sm:text-xs tracking-widest hover:gap-5 transition-all"
              >
                LEARN MORE ABOUT OUR PROCESS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-2xl w-full max-w-lg sm:max-w-sm md:max-w-full mx-auto">
                <img
                  src="/bg.jpeg"
                  alt="Industrial Engineering"
                  className="w-full h-full object-cover "
                />
              </div>
              {/* Show quote card below image on mobile/tablet, overlay on desktop */}
              <div
                className="absolute bottom-5 md:-bottom-0 md:-left-0 glass rounded p-6 sm:p-8 md:p-10 max-w-xs border border-white/5 mt-6 md:mt-0 w-[90%] md:w-auto
                  block"
              >
                <p className=" text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest">
                  "We don't just supply parts; we supply the peace of mind that
                  your operations will never grind to a halt."
                </p>
                <p className="text-blue-500 font-bold mt-2 sm:mt-4 text-xs">
                  — DIRECTOR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission, Vision & Impact Stats */}
      <section className="py-32 max-[599px]:py-10 bg-white relative border-y border-black/50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-[599px]:gap-6 items-center">
            <div className="space-y-12 max-[599px]:space-y-6">
              <div className="space-y-4 ">
                <span className="text-4xl font-bold uppercase  text-blue-500">
                  ENGINEERING EXPERTISE
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.95]">
                  Reliability isn’t accidental.
                  <br />
                  It is engineered.
                </h2>
              </div>
              <p className="text-black/80 text-xl leading-relaxed">
                We eliminate industrial volatility through a proprietary
                12-point quality protocol, verifying every component from the
                smallest gasket to the largest compressor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-[599px]:gap-6 pt-12 max-[599px]:pt-6 border-t border-black/50">
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-blue-500">
                    Our Mission
                  </h4>
                  <p className="text-black/50 text-lg">
                    To sustain global industrial productivity through the
                    relentless pursuit of part integrity and supply chain
                    velocity.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-blue-500">
                    Our Vision
                  </h4>
                  <p className="text-black/50 text-lg">
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

      <Testimonials />

      {/* 11. Quick Contact Section (New) */}
      <section className="py-10 md:py-24 lg:py-32 bg-white border-t border-black/50 relative overflow-hidden">
        {/* Decorative Grid Line */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 hidden md:block"></div> */}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-12 max-[599px]:gap-0 lg:gap-20">
            {/* Text & Contacts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="text-left space-t-8">
                <div>
                  <span className="text-blue-500 text-4xl font-bold uppercase mb-4 max-[599px]:mb-1 block">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black tracking-tighter leading-none">
                    Connect with Engineering.
                  </h2>
                </div>
                <p className="text-black/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg pt-4 max-[599px]:pt-2 sm:pt-6">
                  Direct access to our technical desk and logistics hubs
                  worldwide. We respond to industrial emergencies 24/7.
                </p>
                <div className="pt-6 max-[599px]:pt-2 sm:pt-8 pb-4 max-[599px]:pb-0 sm:pb-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 sm:gap-4 text-black font-bold uppercase text-xs tracking-[0.3em] hover:text-blue-500 transition-colors group"
                  >
                    GOTO TECHNICAL DESK{" "}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                    className="bg-black/5 shadow-md hover:shadow-xl rounded p-6 sm:p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-500 group flex flex-col justify-center"
                  >
                    <item.icon className="w-6 h-6 text-blue-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-1 sm:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-black/60 text-xs sm:text-sm  break-words">
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            {/* Map - hides on mobile below md screens */}
            <div className="w-full lg:w-1/2 h-64 sm:h-96 lg:h-full mt-8 lg:mt-0">
              <div className="relative h-full w-full shadow-md rounded-md overflow-hidden aspect-[4/3] md:aspect-auto">
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

      {/* 10. FAQs */}
      <section className="py-32 max-[599px]:py-10 bg-white relative border-y border-black/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 max-[599px]:mb-6">
            <span className="text-blue-500 text-4xl font-bold uppercaset mb-4 max-[599px]:mb-0 block">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">
              {t.faqTitle}
            </h2>
          </div>
          <div className="divide-y divide-black/50">
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
              <details
                key={i}
                className="group py-8 max-[599px]:py-2"
                open={openFaq === i}
              >
                <summary
                  className="list-none cursor-pointer text-black/70 flex justify-between items-center font-bold uppercase tracking-wide text-md group-hover:text-blue-500 transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === i ? null : i);
                  }}
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 text-black/80 transition-all duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </summary>
                {openFaq === i && (
                  <div className="mt-6 max-[599px]:mt-3 text-black/80 text-md font-bold leading-wide max-w-2xl">
                    {faq.a}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
