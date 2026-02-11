
import React from 'react';

const ColorCloud: React.FC = () => {
  const keywords = [
    { text: "KINH DOANH", style: "text-xl md:text-2xl font-black text-white border-2 border-white px-4 py-1 rotate-2 uppercase tracking-tighter" },
    { text: "KHÁM PHÁ", style: "text-3xl md:text-5xl font-black text-primary-blue bg-accent-yellow px-6 py-2 -rotate-3 uppercase tracking-tighter" },
    { text: "CHỈN CHU", style: "text-lg md:text-2xl font-black text-white italic tracking-widest" },
    { text: "KHỞI NGHIỆP", style: "text-2xl md:text-4xl font-black text-accent-yellow underline decoration-white decoration-4 underline-offset-8 uppercase tracking-tighter" },
    { text: "ĐI VÀ ĐI", style: "text-lg md:text-xl font-black text-white border border-white/40 px-3 py-1 rotate-6 uppercase" },
    { text: "LEADER", style: "text-4xl md:text-6xl font-black text-accent-yellow uppercase tracking-[0.05em]" },
    { text: "UY TÍN", style: "text-2xl md:text-3xl font-black text-white border-b-4 border-accent-yellow uppercase" },
    { text: "TRÁCH NHIỆM", style: "text-xl md:text-2xl font-black text-white bg-white/20 px-4 py-1 -rotate-2 uppercase tracking-tight" },
    { text: "DỮ LIỆU", style: "text-3xl md:text-5xl font-black text-transparent text-stroke-yellow uppercase tracking-tighter" },
    { text: "THAM VỌNG", style: "text-2xl md:text-4xl font-black text-white uppercase tracking-widest" },
    { text: "SỐNG CHẤT", style: "text-lg md:text-2xl font-black text-primary-blue bg-accent-yellow px-3 py-0.5 rotate-3 uppercase" },
    { text: "ĐỘC LẬP", style: "text-xl md:text-3xl font-black text-white border-b-2 border-white uppercase" },
    { text: "HỌC HỎI", style: "text-2xl md:text-3xl font-black text-accent-yellow uppercase tracking-tighter -rotate-1" },
    { text: "VUI VẺ", style: "text-lg md:text-2xl font-bold text-white uppercase bg-white/10 px-4" }
  ];

  return (
    <div className="py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <header className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-black text-primary-blue tracking-tighter uppercase leading-none">
            MÀU SẮC <span className="bg-accent-yellow px-4 py-1">CỦA TÔI</span>
          </h2>
        </header>

        <div className="relative w-full max-w-6xl flex items-center justify-center">
          <div className="organic-shape w-full h-[450px] md:h-[500px] bg-primary-blue relative flex items-center justify-center p-6 md:p-12 shadow-[24px_24px_0px_rgba(37,99,235,0.1)]">
            <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-x-6 gap-y-10 max-w-4xl mx-auto content-center">
              {keywords.map((kw, i) => (
                <span key={i} className={`${kw.style} shrink-0 hover:scale-110 transition-transform cursor-default`}>
                  {kw.text}
                </span>
              ))}
            </div>

            {/* Icons decorations */}
            <div className="absolute top-8 right-12 opacity-30">
              <span className="material-symbols-outlined text-5xl text-white">flare</span>
            </div>
            <div className="absolute bottom-10 left-12 opacity-30">
              <span className="material-symbols-outlined text-5xl text-accent-yellow">pentagon</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-blue bg-accent-yellow px-3 py-1">Khám phá thế giới của tôi</span>
          <div className="w-12 h-1 bg-primary-blue"></div>
        </div>
      </div>
    </div>
  );
};

export default ColorCloud;
