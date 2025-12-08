import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#1a1410]"
    >
      {/* Background Image with Dark Overlay - Beauty Parlour Interior */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-float"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410]/85 via-[#2a2420]/80 to-[#1a1410]/90" />
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/10 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#d4af37]/20 rounded-full blur-sm animate-sparkle" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-[#cd7f32]/20 rounded-full blur-sm animate-sparkle" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-6">
            Premium Beauty Services
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f5f1e8] mb-6 drop-shadow-2xl leading-tight">
          GlowOn Beauty Parlour
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#d4af37] via-[#f4e5c2] to-[#cd7f32] bg-clip-text text-transparent mb-4 font-semibold">
          Where Beauty Meets Perfection
        </p>
        
        <p className="text-lg md:text-xl text-[#b8a890] mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience professional makeup, hair styling, facials, and complete beauty services in the heart of Visakhapatnam
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="group px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#cd7f32] text-[#1a1410] font-bold rounded-full shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4e5c2] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="#services"
            className="px-10 py-5 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37] hover:text-[#1a1410] hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>

        {/* Location Badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[#b8a890]">
          <span className="text-2xl">📍</span>
          <span className="text-sm md:text-base">Visakhapatnam, Andhra Pradesh</span>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1410] to-transparent" />
    </section>
  );
}
