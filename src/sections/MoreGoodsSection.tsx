import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    id: 'notion-client-portal',
    name: 'Notion Client Portal',
    price: '£48',
    image: '/assets/thumbnail-portal.jpg',
    href: '/products/notion-client-portal',
  },
  {
    id: 'diagram-toolkit',
    name: 'Diagram Toolkit',
    price: '£15',
    image: '/assets/thumbnail-diagram.jpg',
    href: '/products/diagram-toolkit',
  },
  {
    id: 'project-filing-system',
    name: 'Project Filing System',
    price: '£0',
    image: '/assets/thumbnail-filing.jpg',
    href: '/products/project-filing-system',
  },
];

interface MoreGoodsSectionProps {
  onAddToCart: (product: Product) => void;
}

export function MoreGoodsSection({ onAddToCart }: MoreGoodsSectionProps) {
  return (
    <section className="mb-4">
      <h2 className="text-3xl lg:text-4xl text-center text-black mb-8">More goods</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <Link to={product.href} className="block">
              <div className="card-light aspect-square overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="flex items-start justify-between">
              <div>
                <Link to={product.href}>
                  <p className="text-black text-sm group-hover:text-highlight transition-colors">{product.name}</p>
                </Link>
                <p className="text-black/60 text-sm">{product.price}</p>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="flex items-center gap-1 text-xs text-black/60 hover:text-highlight transition-colors"
              >
                <Plus className="w-3 h-3" /> Quick Add
              </button>
            </div>
          </motion.div>
        ))}

        {/* Collaborate CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="card-beige border border-black/10 p-6 flex flex-col items-center justify-center text-center"
        >
          <p className="text-black text-xl lg:text-2xl mb-4">
            Want to<br />collaborate?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-black text-black hover:text-highlight hover:border-highlight transition-all duration-200 group"
          >
            Contact Us <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill border border-black text-black hover:text-highlight hover:border-highlight transition-all duration-200 group"
        >
          See all works <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
