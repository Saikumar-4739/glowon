'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '💄',
    title: 'Professional Makeup',
    description:
      'Expert makeup application for all occasions - party, wedding, engagement, and special events with premium products',
    price: '₹1,999',
  },
  {
    icon: '💇‍♀️',
    title: 'Hair Styling & Treatment',
    description:
      'Professional haircuts, styling, coloring, highlights, smoothening, and keratin treatments for all hair types',
    price: '₹999',
  },
  {
    icon: '👰',
    title: 'Bridal Makeup & Hair',
    description:
      'Complete bridal makeover with HD makeup, hairstyling, saree draping, and pre-wedding beauty packages',
    price: '₹15,999',
  },
  {
    icon: '💅',
    title: 'Manicure & Pedicure',
    description:
      'Luxury nail care with gel polish, nail art, French manicure, and complete hand and foot treatments',
    price: '₹899',
  },
  {
    icon: '🌸',
    title: 'Facial & Cleanup',
    description:
      'Deep cleansing facials, gold facial, diamond facial, fruit facial, and regular cleanup for glowing skin',
    price: '₹1,499',
  },
  {
    icon: '✨',
    title: 'Threading & Waxing',
    description:
      'Professional threading, full body waxing, chocolate wax, Rica wax for smooth and hair-free skin',
    price: '₹299',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="services" className="py-24 bg-[#1a1410] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f1e8] mb-6">
            Premium Beauty Services
          </h2>
          <p className="text-lg text-[#b8a890] max-w-2xl mx-auto">
            Expert beauty treatments and styling services for every occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/20 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/20 hover:-translate-y-3 hover:border-[#d4af37]/50 transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#f5f1e8] mb-4 group-hover:text-[#d4af37] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#b8a890] mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#cd7f32] bg-clip-text text-transparent">
                Starting at {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
