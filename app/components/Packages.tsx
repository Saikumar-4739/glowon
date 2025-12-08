'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'Party Ready',
    price: '₹3,499',
    features: [
      'Party Makeup (HD)',
      'Hair Styling',
      'Basic Manicure',
      'Eyebrow Threading',
      'Complimentary Eyelashes',
    ],
    popular: false,
  },
  {
    name: 'Bridal Royale',
    price: '₹29,999',
    features: [
      'Complete Bridal Makeup with Trial',
      'Hair Styling & Saree Draping',
      'Pre-Bridal Facial & Cleanup',
      'Mehendi Application (Hands & Feet)',
      'Manicure & Pedicure with Gel',
      'On-Location Service Available',
      'Complimentary Touch-up Kit',
      'Family Member Makeup (2 persons)',
    ],
    popular: true,
  },
  {
    name: 'Glow & Glamour',
    price: '₹5,999',
    features: [
      'Gold/Diamond Facial',
      'Hair Spa & Deep Conditioning',
      'Full Body Waxing (Rica/Chocolate)',
      'Manicure & Pedicure with Nail Art',
      'Threading (Eyebrow, Upper Lip, Forehead)',
      'Hair Styling',
      'Take-home Beauty Care Kit',
    ],
    popular: false,
  },
];

export default function Packages() {
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
    <section id="packages" className="py-24 bg-gradient-to-b from-[#1a1410] via-[#2a2420] to-[#1a1410] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-6">
            Exclusive Packages
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f1e8] mb-6">
            Beauty Packages
          </h2>
          <p className="text-lg text-[#b8a890] max-w-2xl mx-auto">
            Choose from our specially designed packages for complete beauty makeover
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative bg-gradient-to-br from-[#2a2420] via-[#1a1410] to-[#2a2420] border-2 rounded-3xl p-8 shadow-2xl hover:shadow-[#d4af37]/30 hover:-translate-y-3 hover:scale-105 transition-all duration-500 ${
                pkg.popular 
                  ? 'border-[#d4af37] shadow-[#d4af37]/20' 
                  : 'border-[#d4af37]/30 hover:border-[#d4af37]/60'
              } ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] via-[#f4e5c2] to-[#cd7f32] text-[#1a1410] px-8 py-2 rounded-full text-sm font-bold shadow-xl animate-shimmer">
                  ⭐ MOST POPULAR ⭐
                </div>
              )}

              <h3 className="text-3xl font-bold text-[#f5f1e8] mb-4 text-center">
                {pkg.name}
              </h3>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#d4af37] to-[#cd7f32] bg-clip-text text-transparent mb-8 text-center">
                {pkg.price}
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#b8a890] border-b border-[#d4af37]/10 pb-3 last:border-0"
                  >
                    <span className="text-[#d4af37] font-bold mr-3 text-lg">✓</span>
                    <span className="text-[#f5f1e8]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <Link
                href="#contact"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#cd7f32] text-[#1a1410] font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
