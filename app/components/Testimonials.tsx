'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bridal Client',
    initial: 'P',
    text: 'The bridal makeup was absolutely stunning! The team made me look like a dream on my wedding day. The HD makeup and hairstyling were perfect. Highly recommend GlowOn!',
    rating: 5,
  },
  {
    name: 'Anjali Reddy',
    role: 'Regular Client',
    initial: 'A',
    text: 'I come here every month for my facial and hair treatments. The staff is so professional and the results are amazing. My skin has never looked better!',
    rating: 5,
  },
  {
    name: 'Kavya Rao',
    role: 'Makeup Enthusiast',
    initial: 'K',
    text: 'The party makeup service is fantastic! They use premium products and the makeup lasts all night. The hairstyling is also top-notch. I\'m a loyal customer!',
    rating: 5,
  },
  {
    name: 'Divya Patel',
    role: 'Beauty Lover',
    initial: 'D',
    text: 'Best beauty parlour in Vizag! From waxing to manicure, everything is done with such care. The gold facial treatment gave me instant glow. Thank you GlowOn!',
    rating: 5,
  },
];

export default function Testimonials() {
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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#1a1410] via-[#2a2420] to-[#1a1410] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f1e8] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#b8a890] max-w-2xl mx-auto">
            Real experiences from our valued guests
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/20 hover:-translate-y-2 hover:border-[#d4af37]/60 transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Stars */}
              <div className="text-[#d4af37] text-2xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#b8a890] italic mb-6 leading-relaxed text-lg">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#d4af37]/20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#cd7f32] flex items-center justify-center text-[#1a1410] font-bold text-xl shadow-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-[#f5f1e8] font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#b8a890] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
