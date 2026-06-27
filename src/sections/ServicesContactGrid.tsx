import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  'Design Workshop',
  'Brief & Preparation',
  'Feasibility Study',
  'Developed Design',
  'Technical Design',
  'Construction',
  'Post Completion',
];

export function ServicesContactGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4"
    >
      {/* Services Card */}
      <div className="bg-highlight rounded-card p-6 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {services.map((service) => (
            <span
              key={service}
              className="inline-block px-3 py-1.5 rounded-pill border border-black/30 text-black text-sm"
            >
              {service}
            </span>
          ))}
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-black text-beige hover:bg-black/80 transition-colors group"
        >
          All Services <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Project Card */}
      <div className="card-light overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="/assets/portal-hub.jpg"
            alt="Maesteg Children's Library"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-black text-lg">Maesteg Children's Library</p>
          <p className="text-black/60 text-sm mb-2">Cwm Llynfi</p>
          <Link
            to="/works/maesteg-childrens-library"
            className="text-highlight text-sm hover:underline"
          >
            VIEW PROJECT
          </Link>
        </div>
      </div>

      {/* Contact Card */}
      <div className="card-beige border border-black/10 p-6 lg:p-8 flex flex-col justify-center">
        <div className="overflow-hidden h-20 mb-4">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-black text-2xl lg:text-3xl inline-block">
              Got an idea? Get in touch! &nbsp;&nbsp; Got an idea? Get in touch! &nbsp;&nbsp; Got an idea? Get in touch! &nbsp;&nbsp;
            </span>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-black text-black hover:text-highlight hover:border-highlight transition-all duration-200 group w-fit"
        >
          Contact us <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.section>
  );
}
