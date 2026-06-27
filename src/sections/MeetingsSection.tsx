import { motion } from 'framer-motion';
import { SlidingImageCard } from '../components/SlidingImageCard';

export function MeetingsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
    >
      {/* Left: Meetings Image — 6-col ↔ 6-col: meetings.jpg slides with dashboard.jpg */}
      <div className="card-dark relative overflow-hidden aspect-[16/9]">
        <SlidingImageCard
          primaryImage="/assets/meetings.jpg"
          secondaryImage="/assets/dashboard.jpg"
          primaryAlt="Meetings on laptop"
          secondaryAlt="Dashboard"
          className="w-full h-full"
          duration={1100}
          holdDuration={2700}
        />
      </div>

      {/* Right: Track/Create/Record — 6-col ↔ 6-col: dashboard.jpg slides with meetings.jpg */}
      <div className="card-dark relative overflow-hidden aspect-[16/9]">
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
          <div className="text-right">
            <p className="text-white/80 text-lg">track meetings</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-lg">create agendas</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-lg">record notes</p>
          </div>
        </div>
        <SlidingImageCard
          primaryImage="/assets/dashboard.jpg"
          secondaryImage="/assets/meetings.jpg"
          primaryAlt="Meeting management features"
          secondaryAlt="Meetings on laptop"
          className="w-full h-full"
          duration={1100}
          holdDuration={3100}
        />
      </div>
    </motion.section>
  );
}
