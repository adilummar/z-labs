import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SlidingImageCard } from '../components/SlidingImageCard';

interface HeroSectionProps {
  onAddToCart: () => void;
}

export function HeroSection({ onAddToCart }: HeroSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      {/* Product Image Card — 6-col ↔ 6-col: 7.jpg slides with DASH 1.jpg (WhatsIncluded, far end) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-dark relative overflow-hidden"
      >
        <SlidingImageCard
          primaryImage="/assets/7.jpg"
          secondaryImage="/assets/DASH 1.jpg"
          primaryAlt="Architect OS dashboard"
          secondaryAlt="Dashboard view"
          className="w-full h-full"
          duration={1100}
          holdDuration={2800}
        />
      </motion.div>

      {/* Product Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card-dark p-6 lg:p-8 flex flex-col justify-between"
      >
        <div>
          <p className="text-white/80 text-lg mb-2"></p>
          <h1 className="text-3xl lg:text-4xl text-white mb-6">ARCHITECT OS – STUDIO CORE</h1>
          <p className="text-white/70 text-base leading-relaxed mb-4">
            The complete project management system for architects ever built for Notion. One workspace. Every tool your team needs from Task Management, site visits to sprint planning, all wired together in a live, intelligent database.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Designed for solo-architects and small studios, our template provides a one-stop-shop for project management and project Coordination. Architect OS surfaces the right information at the right time automatically. No manual sorting, no missed deadlines, no surprises.
          </p>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-pill border border-white/40 text-white hover:border-highlight hover:text-highlight transition-all duration-200 group"
        >
          Add to cart <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  );
}
