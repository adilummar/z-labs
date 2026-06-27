import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function DirectorySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="card-dark relative overflow-hidden mb-4"
    >
      {/* 12-col ↔ 12-col: 12.jpg (directory) slides with 6.jpg (portal hub — far end) */}
      <SlidingImageCard
        primaryImage="/assets/12.jpg"
        secondaryImage="/assets/6.jpg"
        primaryAlt="Directory on tablet"
        secondaryAlt="Portal hub"
        className="w-full h-full"
        duration={1100}
        holdDuration={2600}
      />
    </motion.section>
  );
}
