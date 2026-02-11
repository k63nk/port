
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ColorCloud from './components/ColorCloud';
import Journey from './components/Journey';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('portfolio');

  useEffect(() => {
    const sections = ['portfolio', 'colors', 'journey'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'portfolio', label: 'TRANG CHỦ' },
    { id: 'colors', label: 'MÀU SẮC' },
    { id: 'journey', label: 'HÀNH TRÌNH' },
  ];

  return (
    <div className="min-h-screen selection:bg-accent-yellow selection:text-primary-blue scroll-smooth">
      {/* Background stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="absolute top-[8%] left-[10%] w-10 h-10 hand-drawn-star rotate-12 opacity-80"></div>
        <div className="absolute top-[20%] left-[5%] w-6 h-6 hand-drawn-star -rotate-45 opacity-60"></div>
        <div className="absolute bottom-[15%] left-[6%] w-12 h-12 hand-drawn-star rotate-[30deg] opacity-90"></div>
        <div className="absolute top-[12%] right-[8%] w-16 h-16 hand-drawn-star -rotate-12 opacity-80"></div>
        <div className="absolute bottom-[20%] right-[10%] w-11 h-11 hand-drawn-star rotate-12 opacity-90"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-white/60 backdrop-blur-md border-b border-primary-blue/10">
        <div className="text-primary-blue font-black text-2xl tracking-tighter">
          KHANH<span className="bg-accent-yellow px-1">HUYEN.</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm tracking-tight items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all duration-300 px-3 py-1.5 rounded-sm ${
                activeSection === item.id
                  ? 'text-primary-blue font-black bg-accent-yellow animate-pulse scale-110 shadow-sm'
                  : 'text-primary-blue/60 font-bold hover:text-primary-blue'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="relative z-10">
        <section id="portfolio" className="pt-20">
          <Hero />
        </section>
        
        <section id="colors" className="py-24 border-t border-primary-blue/5">
          <ColorCloud />
        </section>

        <section id="journey" className="py-24 border-t border-primary-blue/5">
          <Journey />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
