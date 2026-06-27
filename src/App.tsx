import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { CartDrawer, useCart } from './components/CartDrawer';
import { Marquee } from './components/Marquee';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { PortalHubBanner } from './sections/PortalHubBanner';
import { SevenPagesOverview } from './sections/SevenPagesOverview';
import { WhatsIncludedSection } from './sections/WhatsIncludedSection';
import { IntroProcessSection } from './sections/IntroProcessSection';
import { BriefSection } from './sections/BriefSection';
import { ContractSection } from './sections/ContractSection';
import { HowToUseSection } from './sections/HowToUseSection';
import { DirectorySection } from './sections/DirectorySection';
import { ImportantNotesSection } from './sections/ImportantNotesSection';
import { TrustedBySection } from './sections/TrustedBySection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { MoreGoodsSection } from './sections/MoreGoodsSection';
import { ServicesContactGrid } from './sections/ServicesContactGrid';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const marqueeWords = ['Adapt', 'Conserve', 'Retro-fit', 'Transform', 'Re-imagine', 'Sustain', 'Re-use'];

function HomePage({
  items,
  isOpen,
  addItem,
  updateQuantity,
  removeItem,
  openCart,
  closeCart,
}: {
  items: ReturnType<typeof useCart>['items'];
  isOpen: ReturnType<typeof useCart>['isOpen'];
  addItem: ReturnType<typeof useCart>['addItem'];
  updateQuantity: ReturnType<typeof useCart>['updateQuantity'];
  removeItem: ReturnType<typeof useCart>['removeItem'];
  openCart: ReturnType<typeof useCart>['openCart'];
  closeCart: ReturnType<typeof useCart>['closeCart'];
}) {
  const handleAddToCart = () => {
    addItem({
      id: 'notion-client-portal',
      name: 'Notion Client Portal',
      price: 48,
      image: '/assets/thumbnail-portal.jpg',
    });
    openCart();
  };

  const handleQuickAdd = (product: { id: string; name: string; price: string; image: string }) => {
    const price = parseFloat(product.price.replace('£', ''));
    addItem({
      id: product.id,
      name: product.name,
      price,
      image: product.image,
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-beige">
      <CartDrawer
        isOpen={isOpen}
        onClose={closeCart}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* Main Content */}
      <div>
        <div className="pt-20 sm:pt-24 px-4 lg:px-8 pb-8">
          <HeroSection onAddToCart={handleAddToCart} />
          <PortalHubBanner />
          <SevenPagesOverview />
          <WhatsIncludedSection />
          <IntroProcessSection />
          <BriefSection />
          <ContractSection />
          <HowToUseSection />
          <DirectorySection />
          {/* <MeetingsSection /> */}
          <ImportantNotesSection />
          <TrustedBySection />
          <TestimonialsSection />
          <MoreGoodsSection onAddToCart={handleQuickAdd} />
          <ServicesContactGrid />

          {/* Marquee Section */}
          <div className="my-8">
            <div className="bg-black py-4 rounded-lg mb-2">
              <Marquee
                words={marqueeWords}
                textClassName="text-beige text-2xl lg:text-3xl tracking-wide"
              />
            </div>
            <div className="bg-beige border border-black py-4 rounded-lg">
              <Marquee
                words={marqueeWords}
                textClassName="text-black text-2xl lg:text-3xl tracking-wide"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const {
    items,
    isOpen,
    addItem,
    updateQuantity,
    removeItem,
    openCart,
    closeCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-beige">
      <ScrollToTop />
      <div className="min-h-screen bg-beige">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <HomePage
              items={items}
              isOpen={isOpen}
              addItem={addItem}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              openCart={openCart}
              closeCart={closeCart}
            />
          } />
          <Route path="/works" element={<PlaceholderPage title="Works" />} />
          <Route path="/services" element={<PlaceholderPage title="Services" />} />
          <Route path="/about" element={<PlaceholderPage title="About" />} />
          <Route path="/shop" element={<PlaceholderPage title="Shop" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="pt-28 sm:pt-32 px-8 min-h-screen">
      <h1 className="text-4xl text-black">{title}</h1>
      <p className="text-black/60 mt-4">Coming soon...</p>
    </div>
  );
}

export default App;
