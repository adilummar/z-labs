import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function WhatsIncludedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 h-[90vh]"
    >
      {/* Left: What's Included Text — no image, keep as-is */}
      <div className="card-dark p-6 lg:p-8 ">
        <h2 className="text-2xl text-white mb-6">What's Included?</h2>
        <p className="text-white/70 text-base leading-relaxed mb-4">
          Based on the RIBA Plan of Work (and easily customisable to the AIA phases), our Notion template provides a central hub from which to manage and create your project specific Client Portals.
        </p>
        <p className="text-white/70 text-base leading-relaxed mb-4">
          Our pre-made Client Portal template provides seven pages and pre-loaded text for effective project management, including:
        </p>
        <ul className="text-white/70 text-base space-y-1">
          <li>(1) dashboard</li>
          <li>(2) introduction</li>
          <li>(3) brief</li>
          <li>(4) contract</li>
          <li>(5) billing</li>
          <li>(6) directory</li>
          <li>(7) meetings</li>
          <li>+ a space for collecting feedback</li>
        </ul>
      </div>

      {/* Right: Dashboard Image — 6-col ↔ 6-col: DASH 1.jpg slides with 7.jpg (hero, far end) */}
      <div className="card-dark relative overflow-hidden">
        <SlidingImageCard
          primaryImage="/assets/DASH 1.jpg"
          secondaryImage="/assets/7.jpg"
          primaryAlt="Dashboard view"
          secondaryAlt="Architect OS dashboard"
          className="w-full h-full"
          duration={1100}
          holdDuration={3000}
        />
      </div>
    </motion.section>
  );
}
