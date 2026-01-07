
import React from 'react';
import { useLanguage } from '../App';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32  max-[599px]:py-16 bg-[#0A0A0A] min-h-screen  pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">DATA INTEGRITY</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 leading-none">PRIVACY POLICY</h1>
        
        <div className="space-y-12 font-light text-gray-400 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold  uppercase tracking-widest border-b border-black pb-2">01. DATA COLLECTION</h2>
            <p>
              We collect corporate data necessary to facilitate technical inquiries and logistics coordination. This includes authorized personnel names, corporate email addresses, and organizational technical requirements. We do not engage in consumer-level tracking or behavioral profiling.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold  uppercase tracking-widest border-b border-black pb-2">02. ENCRYPTION STANDARDS</h2>
            <p>
              As detailed in our communication protocols, all technical data transmissions are secured using AES-256 industrial encryption. This ensures that sensitive part specifications and procurement lists remain confidential between your organization and our engineering hubs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold  uppercase tracking-widest border-b border-black pb-2">03. THIRD-PARTY DISCLOSURE</h2>
            <p>
              Data is only shared with verified logistics partners (e.g., DHL Global Forwarding, Maersk) to the extent required for physical delivery of components. We never monetize or trade corporate data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold  uppercase tracking-widest border-b border-black pb-2">04. DATA RETENTION</h2>
            <p>
              Technical inquiry logs are maintained for a period of 5 years to facilitate historical part identification and warranty tracking, after which they are purged from our secure servers.
            </p>
          </section>

          <div className="pt-12 border-t border-gray-100">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Security Protocol: IP-SEC-V4 | Managed by Global Cyber-Infrastructure Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
