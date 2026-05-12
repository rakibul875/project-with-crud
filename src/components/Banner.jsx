import React from "react";

import bannerImage from '@/assets/image/Banner.png'


const Banner = () => {
  return (
    <section className="relative h-screen min-h-[70vh] w-full overflow-hidden">
      
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
        }}
      />

      
      <div className="absolute inset-0 bg-black/55" />

     
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-5xl">
          
          
          <h1 className="text-white font-light leading-[0.95] tracking-tight text-[52px] sm:text-[72px] md:text-[90px] lg:text-[110px]">
            Discover Your
            <br />
            Next Adventure
          </h1>

          <p className="mt-6 text-white/85 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button className="group bg-[#14B9E5] hover:bg-[#0ea5cf] transition-all duration-300 text-white px-8 py-4 font-medium uppercase tracking-wide flex items-center gap-3">
              Explore Now
             
            </button>

            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all duration-300 text-white px-8 py-4 font-medium uppercase tracking-wide border border-white/20">
              View Destination
            </button>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="grid grid-cols-2 md:grid-cols-5">
          
          <div className="bg-white/15 backdrop-blur-md border border-white/10 px-5 py-4">
            <p className="text-white text-lg font-medium">Location</p>
            <span className="text-white/70 text-sm">
              Address, City Or Zip
            </span>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/10 px-5 py-4">
            <p className="text-white text-lg font-medium">Date/Duration</p>
            <span className="text-white/70 text-sm">
              Anytime/3 Days
            </span>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/10 px-5 py-4">
            <p className="text-white text-lg font-medium">Budget</p>
            <span className="text-white/70 text-sm">$0-$3000</span>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/10 px-5 py-4">
            <p className="text-white text-lg font-medium">People</p>
            <span className="text-white/70 text-sm">5-10</span>
          </div>

        
          <button className="bg-[#14B9E5] hover:bg-[#0ea5cf] transition-all duration-300 text-white text-lg font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;