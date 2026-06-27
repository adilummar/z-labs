import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function PortalHubBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="card-dark relative overflow-hidden mb-4"
    >
      {/* 12-col ↔ 12-col: 6.jpg (portal hub) slides with 12.jpg (directory — far end) */}
      <SlidingImageCard
        primaryImage="/assets/6.jpg"
        secondaryImage="/assets/12.jpg"
        primaryAlt="Portal Hub on tablet"
        secondaryAlt="Directory"
        className="w-full h-full"
        duration={1100}
        holdDuration={2900}
      />
    </motion.section>
  );
}
