import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  rating: number;
  text: React.ReactNode;
  author: string;
  title?: string;
  initials?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: (
      <>
        <p className="mb-3">My <span className="bg-highlight text-white px-1">clients love the idea of having a central place for all documentation</span> (since a lot tends to get lost in emails) and where they can also give their feedback.</p>
        <p className="mb-3">For me, as a solopreneur, <span className="bg-highlight text-white px-1">it's such a great way to stay organised</span>, particularly when dealing with multiple projects. I absolutely enjoy having all the contracts and invoices bundled up (and with timers for clients to make their payments).</p>
        <p>Also, <span className="bg-highlight text-white px-1">the entire template is visually so pleasing</span>. Thank you very much!</p>
      </>
    ),
    author: 'Angelique Kamsteeg',
  },
  {
    id: 2,
    rating: 5,
    text: (
      <>
        <p className="mb-3"><span className="bg-highlight text-white px-1">Excellent template</span> (Project Portal(s))!</p>
        <p className="mb-3">Well thought out in terms guiding the Client (and PM) through the process.</p>
        <p>The <span className="bg-highlight text-white px-1">mobile compatibility is also extremely convenient and works well</span>... thanks so much !</p>
      </>
    ),
    author: 'Susan',
    title: 'Architect at MCO',
    initials: 'M',
  },
  {
    id: 3,
    rating: 5,
    text: (
      <>
        <p className="mb-3">I'm a brand strategist but I pull tons of inspo from architects; there's a lot of crossover.</p>
        <p className="mb-3">When it comes to a brand experience, the more thought that's put into every touch point matters. So by offering my clients one centralized place that makes it easier to follow along with me during a project AND aligns visually to the quality I hold myself to, makes all the difference.</p>
        <p>And <span className="bg-highlight text-white px-1">$40 is such a steal for the amount of value this adds to the client</span> experience.</p>
      </>
    ),
    author: 'Gordon Chuate',
    title: 'Brand Strategist',
  },
  {
    id: 4,
    rating: 5,
    text: (
      <>
        <p className="mb-3">Hello, thank you for your Notion Client Portal.</p>
        <p className="mb-3">I have been looking for something that would <span className="bg-highlight text-white px-1">allow me to manage all the project information in one place</span> to upgrade the communication between the client and the designer/architect in the Czech Republic. This seems like a <span className="bg-highlight text-white px-1">great option</span>.</p>
        <p>Thank you! I wish you much success.</p>
      </>
    ),
    author: 'Jakub',
  },
  {
    id: 5,
    rating: 5,
    text: (
      <>
        <p className="mb-3"><span className="bg-highlight text-white px-1">The absolute cleanest template EVER!</span></p>
        <p className="mb-3">I own a marketing agency and it's perfectly suited for me, not just architects.</p>
        <p>Smashed it Ross, thank you :)</p>
      </>
    ),
    author: 'Kie Sproston',
    title: 'Owner',
  },
  {
    id: 6,
    rating: 5,
    text: (
      <>
        <p className="mb-3">So far I'm impressed. I am fairly new to Notion and do not really know the ins and outs as of yet.</p>
        <p><span className="bg-highlight text-white px-1">I'm sure we will find this very useful.</span></p>
      </>
    ),
    author: 'Larry Walker, Assoc. AIA',
    title: 'Managing Member',
  },
];

export function TestimonialsSection() {
  return (
    <section className="space-y-4 mb-4">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="card-dark p-6 lg:p-8"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-white text-white" />
            ))}
          </div>

          {/* Text */}
          <div className="text-white/80 text-base leading-relaxed mb-6">
            {testimonial.text}
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            {testimonial.initials && (
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-medium">
                {testimonial.initials}
              </div>
            )}
            <div>
              <p className="text-white text-sm">{testimonial.author}</p>
              {testimonial.title && (
                <p className="text-white/60 text-xs">{testimonial.title}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
