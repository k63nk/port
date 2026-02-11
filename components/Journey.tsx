import React from 'react';

const Journey: React.FC = () => {
  const experiences = [
    {
      id: "01",
      role: "Thành viên Ban Marketing",
      company: "IBConnect FTU",
      desc: "Tham gia lập kế hoạch và triển khai hoạt động marketing cho fanpage IB Connect FTU, tập trung vào sáng tạo nội dung và thiết kế hình ảnh cho các chiến dịch truyền thông. Góp phần xây dựng hệ thống nội dung thu hút, tăng mức độ kết nối và truyền cảm hứng trong cộng đồng sinh viên Kinh doanh Quốc tế.",
      img: "https://drive.google.com/file/d/1_VTQUwKjaN_795WGrBtwekqQofbEjg84/view?usp=sharing",
    },
    {
      id: "02",
      role: "Thực tập sinh vận hành sàn E-commerce & Booking KOL",
      company: "Mialala",
      desc: "Hỗ trợ vận hành, phân tích hiệu suất của shop trên các sàn thương mại điện tử Shopee, Tiktok. Phối hợp làm việc với hơn 200 KOL/Influencer trong thực tế trong triển khai chiến dịch, làm việc liên phòng ban trong môi trường kinh doanh năng động.",
      img: "https://www.pinterest.com/pin/38843615661454856/",
    },
    {
      id: "03",
      role: "Tình nguyện viên Dự án xã hội",
      company: "Tết đong đầy FTU",
      desc: "Tham gia các hoạt động bán hàng gây quỹ nhằm lan tỏa sự quan tâm và hỗ trợ đến những hoàn cảnh khó khăn. Góp phần tổ chức và triển khai các hoạt động ý nghĩa với tinh thần trách nhiệm, sự đồng cảm và mong muốn tạo ra tác động tích cực cho cộng đồng.",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "04",
      role: "Phó Trưởng ban Gây quỹ",
      company: "Dự án Student for Society FTU",
      desc: "Phụ trách lên kế hoạch và triển khai các hoạt động gây quỹ nhằm đảm bảo nguồn lực tài chính cho dự án cộng đồng. Tham gia xây dựng chiến lược kêu gọi tài trợ, làm việc với đối tác và điều phối hoạt động nội bộ, qua đó phát triển kỹ năng lãnh đạo, lập kế hoạch và quản lý nguồn lực hiệu quả vì mục tiêu xã hội.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-primary-blue leading-none uppercase tracking-tighter">
          HÀNH TRÌNH <br />
          <span className="bg-accent-yellow px-4 py-1 inline-block mt-2">KHÁM PHÁ</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-gray-500 font-medium text-lg italic">
          "Hành trình vạn dặm bắt đầu từ một bước chân. Đây là những dấu ấn tôi đã đi qua và tôi sẽ tiếp tục chinh phục ước mơ của mình"
        </p>
      </div>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 group ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section - Always on Left for visual consistency or Alternating for style */}
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[16/10] overflow-hidden rounded-sm bg-gray-100 shadow-[20px_20px_0px_rgba(37,99,235,0.05)] ring-1 ring-primary-blue/10">
                <img
                  src={exp.img}
                  alt={exp.role}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue text-white flex items-center justify-center font-black text-xl z-10">
                {exp.id}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="inline-block px-3 py-1 bg-accent-yellow/30 text-primary-blue font-bold text-xs tracking-widest uppercase">
                {exp.company}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-primary-blue uppercase leading-tight tracking-tight">
                {exp.role}
              </h3>
              <div className="w-12 h-1 bg-primary-blue group-hover:w-24 transition-all duration-500"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium pt-2">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block p-1 bg-primary-blue/5 rounded-full mb-4">
          <div className="bg-white border-2 border-primary-blue px-8 py-3 rounded-full">
            <span className="text-primary-blue font-black uppercase tracking-widest text-sm">To be continued...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;