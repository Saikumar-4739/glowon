'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your booking request! Our team will contact you shortly to confirm your appointment.');
    setFormData({ name: '', phone: '', email: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1410] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-6">
            Book Appointment
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f1e8] mb-6">
            Visit Us Today
          </h2>
          <p className="text-lg text-[#b8a890] max-w-2xl mx-auto">
            Ready to experience luxury and tranquility? Get in touch with us
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 rounded-3xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#f5f1e8] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#1a1410] border-2 border-[#d4af37]/30 rounded-xl text-[#f5f1e8] placeholder-[#b8a890] focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#f5f1e8] font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 bg-[#1a1410] border-2 border-[#d4af37]/30 rounded-xl text-[#f5f1e8] placeholder-[#b8a890] focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#f5f1e8] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#1a1410] border-2 border-[#d4af37]/30 rounded-xl text-[#f5f1e8] placeholder-[#b8a890] focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-[#f5f1e8] font-medium mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1410] border-2 border-[#d4af37]/30 rounded-xl text-[#f5f1e8] focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#f5f1e8] font-medium mb-2">
                  Message / Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your preferences or any special requests"
                  className="w-full px-4 py-3 bg-[#1a1410] border-2 border-[#d4af37]/30 rounded-xl text-[#f5f1e8] placeholder-[#b8a890] focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#cd7f32] text-[#1a1410] font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300"
              >
                Book Appointment Now
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-3">
                    Visit Our Parlour
                  </h3>
                  <p className="text-[#f5f1e8] leading-relaxed">
                    GlowOn Beauty Parlour<br />
                    Beach Road, Opposite RK Beach<br />
                    Visakhapatnam, Andhra Pradesh<br />
                    PIN: 530002
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🕐</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-3">
                    Working Hours
                  </h3>
                  <p className="text-[#f5f1e8] leading-relaxed">
                    Monday - Saturday: 9:00 AM - 9:00 PM<br />
                    Sunday: 10:00 AM - 7:00 PM<br />
                    <span className="text-[#b8a890] text-sm mt-2 block">
                      (Appointments recommended)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-3">
                    Contact Us
                  </h3>
                  <p className="text-[#f5f1e8] leading-relaxed">
                    Phone: +91 891 XXX XXXX<br />
                    WhatsApp: +91 XXXXX XXXXX<br />
                    Email: info@glowonbeauty.in
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 rounded-3xl h-64 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-5xl mb-3">🗺️</div>
                <p className="text-[#b8a890] italic">
                  Google Maps Location<br />
                  <span className="text-sm">(Embed your map here)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
