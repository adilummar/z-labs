import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function ImportantNotesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
    >
      {/* Left: Important Notes text — no image, keep as-is */}
      <div className="card-dark p-6 lg:p-8">
        <h2 className="text-2xl text-white mb-6">Important Notes</h2>
        <ul className="text-white/70 text-base space-y-3">
          <li>+ template hosted on Notion and is not it's own software</li>
          <li>+ compatible with a free Notion plan if uploading files up to 5MB</li>
          <li>+ Notion Plus required for unlimited file uploads / storage</li>
          <li>+ free for clients to access</li>
          <li>+ this is a digital asset so all sales are final, no refunds or exchanges</li>
          <li>+ text, colours and logos fully customisable to your brand</li>
          <li>+ suited to solopreneurs or small studios</li>
        </ul>
      </div>

      {/* Right: Feedback Image — 6-col ↔ 6-col: 3.jpg slides with 8.jpg (brief, far end) */}
      <div className="card-dark relative overflow-hidden">
        <SlidingImageCard
          primaryImage="/assets/3.jpg"
          secondaryImage="/assets/8.jpg"
          primaryAlt="Feedback collection"
          secondaryAlt="Brief questionnaire on phone"
          className="w-full h-full"
          duration={1100}
          holdDuration={2950}
        />
      </div>
    </motion.section>
  );
}
