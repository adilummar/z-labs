import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function BriefSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
    >
      {/* Left: Phone with Brief — 6-col ↔ 6-col: 8.jpg slides with 3.jpg (ImportantNotes, far end) */}
      <div className="card-dark relative overflow-hidden">
        <SlidingImageCard
          primaryImage="/assets/8.jpg"
          secondaryImage="/assets/3.jpg"
          primaryAlt="Brief questionnaire on phone"
          secondaryAlt="Feedback collection"
          className="w-full h-full"
          primaryObjectPosition="right"
          duration={1100}
          holdDuration={2700}
        />
      </div>

      {/* Right: Questionnaire — 6-col ↔ 6-col: 33.jpg slides with 2.jpg (HowToUse, far end) */}
      <div className="card-dark relative overflow-hidden aspect-[4/3]">
        <SlidingImageCard
          primaryImage="/assets/33.jpg"
          secondaryImage="/assets/2.jpg"
          primaryAlt="Questionnaire and budget worksheet"
          secondaryAlt="Billing on phone"
          className="w-full h-full"
          duration={1100}
          holdDuration={3300}
        />
      </div>
    </motion.section>
  );
}
