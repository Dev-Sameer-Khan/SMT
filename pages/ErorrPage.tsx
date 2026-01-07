
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const ErrorPage: React.FC = () => {
  return (
    <div className="h-screen bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center space-y-8 animate-reveal">
        <div className="flex justify-center mb-4">
          <div className="p-4 border border-blue-500/30 rounded-full">
            <AlertTriangle className="w-12 h-12 text-blue-500" />
          </div>
        </div>
        
        <h1 className="text-[120px] md:text-[200px] font-black text-white leading-none tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          404
        </h1>
        
        <div className="space-y-4 relative">
          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.5em] block">SYSTEM ANOMALY DETECTED</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Route Not Found</h2>
          <p className="text-white/40 text-lg max-w-md mx-auto font-light leading-relaxed">
            The requested technical directory or resource is unavailable or has been moved to a secure partition.
          </p>
        </div>

        <div className="pt-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all duration-500"
          >
            <ArrowLeft className="w-4 h-4" /> REBOOT TO HOME
          </Link>
        </div>
        
        <div className="pt-24 opacity-20">
          <p className="text-[8px] font-mono text-white uppercase tracking-[0.4em]">ERROR_CODE: 0x404_DIR_NULL | LOGGED_AT_SYSTEM_TIME</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
