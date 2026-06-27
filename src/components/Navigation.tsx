import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlassSurface from './GlassSurface';

interface NavigationProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export function Navigation({ cartCount, onCartClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: 'padding 0.35s ease-in-out',
        padding: scrolled ? '8px 16px' : '0px',
      }}
    >
      <GlassSurface
        width="100%"
        height={scrolled ? 60 : 72}
        borderRadius={scrolled ? 24 : 0}
        blur={14}
        brightness={55}
        opacity={0.9}
        distortionScale={-160}
        backgroundOpacity={scrolled ? 0.15 : 0.05}
        saturation={1.2}
        className="w-full transition-all duration-350"
        style={{
          transition: 'height 0.35s ease-in-out, border-radius 0.35s ease-in-out',
          boxShadow: scrolled
            ? '0 4px 24px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.3) inset'
            : 'none',
        }}
      >
        <div className="w-full flex items-center justify-start px-6 sm:px-10">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/zy grey.png"
              alt="Logo"
              className="h-8 sm:h-9 w-auto object-contain select-none"
              draggable={false}
              style={{
                filter: scrolled ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.35s ease-in-out',
              }}
            />
          </Link>
        </div>
      </GlassSurface>
    </div>
  );
}
