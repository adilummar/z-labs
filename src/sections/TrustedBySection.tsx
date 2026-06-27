import { motion } from 'framer-motion';

export function TrustedBySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4"
    >
      {/* Left: Powered by Notion */}
      <div className="card-dark p-6 lg:p-8 flex flex-col items-center justify-center text-center">
        <p className="text-white/60 text-sm mb-4">powered by</p>
        <p className="text-white text-xl mb-4">Notion</p>
        <div className="w-24 h-24 bg-white/10 rounded-xl flex items-center justify-center">
          <span className="text-white text-4xl font-bold">N</span>
        </div>
      </div>

      {/* Middle: What users are saying */}
      <div className="card-dark p-6 lg:p-8 flex flex-col items-center justify-center text-center">
        <p className="text-white/80 text-xl lg:text-2xl italic">
          what our users<br />are saying...
        </p>
        <div className="mt-4 text-highlight text-4xl">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 3.5L18.5 19h-13L12 5.5z" />
          </svg>
        </div>
      </div>

      {/* Right: Trusted by */}
      <div className="card-light p-6 lg:p-8 flex flex-col justify-center">
        <p className="text-black/60 text-sm mb-4">Trusted by 800+:</p>
        <ul className="text-black text-2xl lg:text-3xl space-y-1">
          <li>Architects</li>
          <li>Designers</li>
          <li>Technicians</li>
          <li>Creatives</li>
        </ul>
      </div>
    </motion.section>
  );
}
