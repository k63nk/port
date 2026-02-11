
import React from 'react';

const Hero: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/nguyen-khanh-huyen-304871244/";

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-10 max-w-5xl mx-auto text-center">
      <div className="relative mb-10">
        <div className="w-48 h-48 md:w-56 md:h-56 organic-shape bg-primary-blue p-1 overflow-hidden shadow-xl ring-4 ring-accent-yellow ring-offset-4 ring-offset-white">
          <img 
            alt="Nguyễn Khánh Huyền" 
            className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVU35gTxgesrXcm9BmJ7W5CHtITkX7ieW7JwhiUkrQK1K7LT3DIZps5JkPVxsSXILZ94xX69DP2oj-zgGMjvvDsFrCKbJSprUYNLomDsIkr9eVC8c7hx0y6Au1t13XhMjFYbDG4dh5iKzEH8VFmJxeCg6iuWF1gPBivJNsiZxwUTHEQ4_qujF2Z7GlZcNzhuNVS2Apx6jTeGKECGit7u2WiP2j7LdkQDVr2L2uo1LWF05uqx3Znx17WMJ3l2GV7_HBDCzWhxr1rYdn"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-accent-yellow text-primary-blue px-4 py-1 font-black text-xs tracking-widest border-2 border-primary-blue transform rotate-6">
          FTU STUDENT
        </div>
      </div>

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black text-primary-blue tracking-tighter uppercase mb-4">
          Nguyễn Khánh Huyền
        </h1>
        <p className="text-lg md:text-xl font-bold text-primary-blue uppercase tracking-tight mb-8">
          <span className="bg-accent-yellow px-2 py-0.5">Sinh viên năm 2 ngành Kinh doanh Quốc tế</span>
        </p>
        
        <div className="w-16 h-1.5 bg-primary-blue mx-auto mb-8"></div>
        
        <p className="text-base md:text-lg font-medium leading-relaxed text-dark max-w-2xl mx-auto mb-10">
          Tôi yêu thích làm việc với con người, dữ liệu và các hoạt động kinh doanh gắn với giá trị cộng đồng. Luôn tìm kiếm cơ hội tạo ra giá trị ý nghĩa thông qua tư duy chiến lược và sự sáng tạo.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <a 
            href={linkedinUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-3 bg-primary-blue text-white font-black uppercase text-sm tracking-widest hover:bg-primary-blue/90 transition-all shadow-lg hover:shadow-primary-blue/30 rounded-full inline-block"
          >
            CONNECT WITH ME
          </a>
          
          <div className="flex gap-4">
            <a 
              href="mailto:huyen.khanh.nguyen@example.com" 
              className="w-12 h-12 flex items-center justify-center bg-accent-yellow text-primary-blue rounded-full border-2 border-primary-blue hover:bg-white transition-all shadow-md group"
              title="Gmail"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">mail</span>
            </a>
            <a 
              href={linkedinUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 flex items-center justify-center bg-accent-yellow text-primary-blue rounded-full border-2 border-primary-blue hover:bg-white transition-all shadow-md group"
              title="LinkedIn"
            >
              <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
