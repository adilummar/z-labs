import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-beige py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo */}
        <div>
          <Link to="/" className="text-5xl font-medium tracking-tight">
            INI.
          </Link>
        </div>

        {/* Nav Links */}
        <div className="space-y-2">
          <Link to="/works" className="block text-lg hover:text-highlight transition-colors">Works</Link>
          <Link to="/services" className="block text-lg hover:text-highlight transition-colors">Services</Link>
          <Link to="/about" className="block text-lg hover:text-highlight transition-colors">About</Link>
          <Link to="/shop" className="block text-lg hover:text-highlight transition-colors">Shop</Link>
          <Link to="/contact" className="block text-lg hover:text-highlight transition-colors">Contact</Link>
          <div className="pt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-highlight text-highlight hover:bg-highlight hover:text-black transition-all duration-200"
            >
              Instagram <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Links */}
        <div className="space-y-2 md:text-right">
          <Link to="/awards" className="block text-lg hover:text-highlight transition-colors">Awards</Link>
          <Link to="/refunds" className="block text-lg hover:text-highlight transition-colors">Refunds</Link>
        </div>
      </div>
    </footer>
  );
}
