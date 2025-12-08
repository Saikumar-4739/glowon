'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
    alt: 'Makeup Application',
    caption: 'Professional Makeup',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80',
    alt: 'Beauty Salon Interior',
    caption: 'Luxury Parlour Ambiance',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80',
    alt: 'Beauty Products',
    caption: 'Premium Beauty Products',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80',
    alt: 'Hair Styling',
    caption: 'Expert Hair Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&q=80',
    alt: 'Nail Art',
    caption: 'Luxury Nail Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&q=80',
    alt: 'Facial Treatment',
    caption: 'Rejuvenating Facials',
  },
];

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 50);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="gallery" className="py-24 bg-[#1a1410] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-6">
            Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f1e8] mb-6">
            Our Work & Space
          </h2>
          <p className="text-lg text-[#b8a890] max-w-2xl mx-auto">
            Discover our beautiful parlour and stunning transformations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`relative h-80 rounded-2xl overflow-hidden border-2 border-[#d4af37]/20 shadow-xl cursor-pointer group transition-all duration-500 hover:border-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/30 ${
                visibleItems.includes(index)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-125"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent opacity-60" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/95 via-[#cd7f32]/90 to-[#1a1410]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="text-[#1a1410] text-2xl font-bold mb-2">
                    {image.caption}
                  </div>
                  <div className="w-16 h-1 bg-[#1a1410] mx-auto" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1a1410] to-transparent">
                <p className="text-[#f5f1e8] font-semibold text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
