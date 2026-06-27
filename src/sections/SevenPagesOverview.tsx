import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function SevenPagesOverview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="card-dark relative overflow-hidden mb-4"
    >
      {/* 12-col ↔ 12-col: 11.jpg (seven pages) slides with 1.jpg (contract — far end) */}
      <SlidingImageCard
        primaryImage="/assets/11.jpg"
        secondaryImage="/assets/1.jpg"
        primaryAlt="7-page portal overview"
        secondaryAlt="Contract"
        className="w-full h-full"
        duration={1100}
        holdDuration={3100}
      />
    </motion.section>
  );
}
