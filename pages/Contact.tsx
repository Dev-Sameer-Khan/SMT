import React, { useState } from "react";
import { useLanguage } from "../App";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [state, handleFormspreeSubmit] = useForm("meeoyany");

  // Reset form on success
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    });
    window.location.reload(); // reload to fully reset formspree state
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((fd) => ({
      ...fd,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Only send mapped fields for Formspree
    await handleFormspreeSubmit(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: formData.message,
      },
    );
  };

  return (
    <div className="pt-32 max-[599px]:py-16 bg-white min-h-screen text-black pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 max-[599px]:gap-0">
          {/* Info Side */}
          <div className="space-y-20 max-[599px]:space-y-10">
            <div>
              <span className="text-blue-500 text-4xl max-[599px]:text-2xl font-bold uppercase mb-2 max-[599px]:mb-1 mt-10 block">
                {t.establishConnection}
              </span>
              <h1 className="text-6xl max-[599px]:text-4xl text-black md:text-8xl font-black text-black tracking-tighter mb-6 max-[599px]:mb-3 leading-[0.85]">
                {t.contactTitle}
              </h1>
              <p className="text-black/80 text-2xl leading-relaxed max-[599px]:leading-tight max-w-2xl font-light">
                {t.contactDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-[599px]:gap-6">
              <div className="space-y-3 max-[599px]:space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <h4 className="text-md font-bold uppercase tracking-widest text-black">
                    {t.operationalHours}
                  </h4>
                </div>
                <p className="text-black/80 text-md leading-relaxed">
                  Monday — Friday: 08:00 – 18:00 GST
                  <br />
                  Saturday: 09:00 – 14:00 GST
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <h4 className="text-md font-bold uppercase tracking-widest text-black">
                    {t.encryption}
                  </h4>
                </div>
                <p className="text-black/80 text-md leading-relaxed">
                  All technical data transmissions are secured with AES-256
                  industrial standards.
                </p>
              </div>
            </div>

            <div className="space-y-6 max-[599px]:space-y-4 border-t border-white/10">
              <div className="flex gap-8 max-[599px]:gap-2 -ml-3 items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-black">
                    {t.location}
                  </h4>
                  <p className="text-black/80 text-lg leading-relaxed">
                  <a href="https://maps.app.goo.gl/nTAq2daNfWs85L6cA" target="_blank" rel="noopener noreferrer" className="text-md text-black/80 hover:text-black transition-colors">Al Eid Complex Car Exhi Al Jawhara(Jeddah) - Saudi Arabia</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-8 max-[599px]:gap-2 -ml-3 items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase text-black">
                    {t.phoneNumber}
                  </h4>
                  <p className="text-black/80 text-lg leading-relaxed flex gap-4">
                  <a href="tel:+971 0532962420" target="_blank" rel="noopener noreferrer" className="text-md text-black/80 hover:text-black transition-colors">+966 0532962420</a>
                  <a href="tel:+971 0568331257" target="_blank" rel="noopener noreferrer" className="text-md text-black/80 hover:text-black transition-colors">+971 0568331257</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-8 max-[599px]:gap-2 -ml-3 items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase  text-black">
                    {t.email}
                  </h4>
                  <p className="text-black/80 text-lg leading-relaxed">
                  <a href="mailto:mail2smtengines.com" target="_blank" rel="noopener noreferrer" className="text-md text-black/80 hover:text-black transition-colors">mail2smtengines.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative pt-16">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full"></div>
            <div className="bg-black/5 shadow-lg rounded-md transition-all duration-500 p-10 max-[599px]:p-4 md:p-16 relative z-10">
              {state.succeeded ? (
                <div className="h-full py-20 flex flex-col items-center justify-center text-center space-y-8 animate-reveal">
                  <div className="w-24 h-24 bg-blue-500 text-black flex items-center justify-center rounded-sm">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl  font-black text-black uppercase tracking-tight">
                    {t.dataTransmitted}
                  </h3>
                  <p className="text-black text-lg leading-relaxed">
                    {t.dataTransmittedDesc}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-blue-500 transition-all"
                  >
                    {t.resetForm}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 max-[599px]:space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-4xl max-[599px]:text-2xl font-black text-black uppercase tracking-tight">
                      {t.technicalInquiry}
                    </h2>
                    <span className="text-sm max-[599px]:text-xs text-black uppercase">
                      FORM-ID: IP-2940
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-[599px]:gap-4">
                    <div className="space-y-3  max-[599px]:space-y-1">
                      <label className="text-md font-bold uppercase text-blue-500">
                        {t.authorizedPersonnel}
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:border-blue-500 outline-none transition-all placeholder:text-black"
                      />
                    </div>
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                    <div className="space-y-3 max-[599px]:space-y-1">
                      <label className="text-md font-bold uppercase text-blue-500">
                        {t.corporateEmail}
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                        className="w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:border-blue-500 outline-none transition-all placeholder:text-black"
                      />
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-[599px]:gap-4">
                    <div className="space-y-3 max-[599px]:space-y-1">
                      <label className="text-md font-bold uppercase text-blue-500">
                        {t.directContact}
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+00 000 000 000"
                        className="w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:border-blue-500 outline-none transition-all placeholder:text-black"
                      />
                    </div>
                    <div className="space-y-3 max-[599px]:space-y-1">
                      <label className="text-md font-bold uppercase text-blue-500">
                        {t.organizationName}
                      </label>
                      <input
                        required
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="LLC / Ltd / Corp"
                        className="w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:border-blue-500 outline-none transition-all placeholder:text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 max-[599px]:space-y-1">
                    <label className="text-md font-bold uppercase text-blue-500">
                      {t.technicalDetails}
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Include machine model and part numbers..."
                      className="w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:border-blue-500 outline-none transition-all resize-none placeholder:text-black"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    disabled={state.submitting}
                    type="submit"
                    className="w-full py-6 max-[599px]:py-4 bg-blue-500 text-white font-bold uppercase text-lg max-[599px]:text-sm tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:bg-gray-400 shadow-xl shadow-blue-500/20"
                  >
                    {state.submitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        {t.executeTransmission} <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
