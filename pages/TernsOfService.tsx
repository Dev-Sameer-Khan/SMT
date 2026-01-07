
import React from 'react';
import { useLanguage } from '../App';

const TermsOfService: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="pt-32  max-[599px]:py-16 bg-[#0A0A0A] min-h-screen pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">LEGAL FRAMEWORK</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 leading-none">TERMS OF SERVICE</h1>
        
        <div className="space-y-12 font-light text-gray-400 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-2">01. B2B ENGAGEMENT</h2>
            <p>
              Industrial Precision operates strictly within B2B (Business-to-Business) parameters. All transactions, inquiries, and technical data exchanges are considered commercial engagements between legal entities. By utilizing this portal, you confirm your authority to represent your organization.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-2">02. TECHNICAL SPECIFICATIONS</h2>
            <p>
              While we strive for clinical accuracy, technical specifications provided on this platform are for informational purposes. Final verification of part compatibility remains the responsibility of the purchaser's engineering department. Industrial Precision is not liable for operational failures resulting from incorrect part selection by the client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-2">03. LOGISTICS & DELIVERY</h2>
            <p>
              Delivery timelines are estimates based on standard global shipping cycles. "Urgent" or "Critical" dispatches are subject to specific surcharge protocols and local customs clearances beyond our direct control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest border-b border-black pb-2">04. INTELLECTUAL PROPERTY</h2>
            <p>
              The visual hierarchy, engineered assets, and technical documentation presented on this platform are the exclusive intellectual property of Industrial Precision Ltd. Unauthorized duplication or scraping of our inventory database is strictly prohibited.
            </p>
          </section>

          <div className="pt-12 border-t border-gray-100">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Last Revision: OCT 2024 | Version 2.4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
