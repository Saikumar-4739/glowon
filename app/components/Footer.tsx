import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Packages' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Refund Policy' },
  ];

  const socialLinks = [
    { href: '#', icon: '📷', label: 'Instagram' },
    { href: '#', icon: '📘', label: 'Facebook' },
    { href: '#', icon: '💬', label: 'WhatsApp' },
    { href: '#', icon: '🎥', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] border-t border-[#d4af37]/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4e5c2] to-[#cd7f32] bg-clip-text text-transparent mb-4">
              GlowOn Beauty Parlour
            </h3>
            <p className="text-[#b8a890] leading-relaxed mb-4">
              Experience professional makeup, hair styling, facials, and premium beauty services in the heart of Visakhapatnam.
            </p>
            <div className="flex items-center gap-2 text-[#b8a890]">
              <span className="text-xl">📍</span>
              <span className="text-sm">Beach Road, Vizag, AP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-[#d4af37] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#b8a890] hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-[#d4af37] mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-[#b8a890] text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 891 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@glowonbeauty.in</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Mon-Sat: 9 AM - 9 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-[#d4af37]/20">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2420] to-[#1a1410] border border-[#d4af37]/30 flex items-center justify-center text-2xl hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#cd7f32] hover:border-[#d4af37] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#b8a890] hover:text-[#d4af37] transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-[#b8a890] text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} GlowOn Beauty Parlour. All rights reserved.
          </p>
          <p className="text-xs text-[#b8a890]/60">
            Crafted with ❤️ for beauty and elegance in Visakhapatnam
          </p>
        </div>
      </div>
    </footer>
  );
}
