import { motion } from 'framer-motion';

export function IntroProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4"
    >
      {/* Left: Intro Image */}
      {/* <div className="card-dark relative overflow-hidden aspect-[4/3]">
        <div className="absolute top-4 left-4 z-10">
          <p className="text-highlight text-lg">
            <span className="text-highlight mr-1">2.</span>
            <em className="text-white">intro-</em>
          </p>
          <p className="text-white/60 text-sm">your design process,</p>
          <p className="text-white/60 text-sm">studio details and FAQs</p>
        </div>
        <img
          src="/assets/intro.jpg"
          alt="Intro page on iPad"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Middle: Process Image */}
      {/* <div className="card-dark relative overflow-hidden aspect-[4/3]">
        <img
          src="/assets/dashboard.jpg"
          alt="Process and communication"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Right: Recommended For */}
      <div className="card-light p-6 lg:p-8 flex flex-col justify-center">
        {/* <p className="text-black/60 text-sm mb-4">Recommended for:</p> */}
        {/* <ul className="text-black text-2xl lg:text-3xl space-y-1"> */}
          {/* <li>Architects</li>
          <li>Designers</li>
          <li>Technicians</li>
          <li>Creatives</li> */}
          <p className="uppercase text-center py-20 text-black text-2xl lg:text-3xl space-y-1">the complete <span className="font-bold">project management</span> <br/> system for architects</p>

          {/* Animated Get Started Button */}
          <motion.button
            className="relative overflow-hidden border-[3px] border-highlight text-black uppercase py-3 pl-8 pr-2 rounded-full text-xl w-fit mx-auto block cursor-pointer select-none"
            initial="idle"
            whileHover="hover"
            style={{ isolation: 'isolate' }}
          >
            {/* Sliding fill layer — sweeps left→right on hover, retreats right→left on leave */}
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: '#ff5100', zIndex: 0 }}
              variants={{
                idle: { x: '-101%' },
                hover: { x: '0%' },
              }}
              transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
            />

            {/* Button label + arrow */}
            <span className="relative z-10 flex items-center gap-6">
              <motion.span
                variants={{
                  idle: { color: '#000000' },
                  hover: { color: '#ffffff' },
                }}
                transition={{ duration: 0.25, delay: 0.1 }}
              >
                get started today
              </motion.span>

              {/* Arrow that slides in left → right on hover */}
              <span className="inline-flex items-center" style={{ width: '1.4em', overflow: 'hidden' }}>
                <motion.svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '1em', height: '1em', flexShrink: 0 }}
                  variants={{
                    idle: { x: '-150%', color: '#000000', opacity: 0 },
                    hover: { x: '0%', color: '#ffffff', opacity: 1 },
                  }}
                  transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </motion.svg>
              </span>
            </span>
          </motion.button>
          
        {/* </ul> */}
      </div>
    </motion.section>
  );
}
