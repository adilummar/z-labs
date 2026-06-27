import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function ContractSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="card-dark relative overflow-hidden mb-4"
    >
      {/* 12-col ↔ 12-col: 1.jpg (contract) slides with 11.jpg (seven pages — far end) */}
      <SlidingImageCard
        primaryImage="/assets/1.jpg"
        secondaryImage="/assets/11.jpg"
        primaryAlt="Contract on laptop"
        secondaryAlt="Seven pages overview"
        className="w-full h-full"
        duration={1100}
        holdDuration={3200}
      />
    </motion.section>
  );
}
