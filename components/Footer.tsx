
import React from 'react';

const Footer: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/nguyen-khanh-huyen-304871244/";

  return (
    <footer className="py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-primary-blue font-black text-3xl tracking-tighter mb-4">
          KHANH<span className="bg-accent-yellow px-1">HUYEN.</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-blue/30 mb-8">
          © 2024 — FTU STUDENT — INTERNATIONAL BUSINESS
        </p>
        <div className="flex justify-center gap-10 font-black text-xs uppercase text-primary-blue/60">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-blue transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary-blue transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
