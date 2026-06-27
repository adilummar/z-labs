import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function HowToUseSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
    >
      {/* Left: How to Use Text — no image, keep as-is */}
      <div className="card-dark p-6 lg:p-8">
        <h2 className="text-2xl text-white mb-6">How to Use?</h2>
        <div className="space-y-6">
          <div>
            <p className="text-white text-lg mb-2">+ Video Tutorial</p>
            <p className="text-white/70 text-base leading-relaxed">
              We have provided a detailed tutorial and template walk-through on our YouTube channel{' '}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight hover:underline"
              >
                HERE
              </a>.
            </p>
          </div>
          <div>
            <p className="text-white text-lg mb-2">+ PDF download</p>
            <p className="text-white/70 text-base leading-relaxed">
              You will receive a pdf download including a Notion Page link that you can 'duplicate' to your own Notion dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Billing Image — 6-col ↔ 6-col: 2.jpg slides with 33.jpg (brief, far end) */}
      <div className="card-dark relative overflow-hidden ">
        <SlidingImageCard
          primaryImage="/assets/2.jpg"
          secondaryImage="/assets/33.jpg"
          primaryAlt="Billing on phone"
          secondaryAlt="Brief questionnaire"
          className="w-full h-full"
          duration={1100}
          holdDuration={2850}
        />
      </div>
    </motion.section>
  );
}
