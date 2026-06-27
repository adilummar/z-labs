import { useEffect, useRef } from 'react';
import { animate, cubicBezier } from 'animejs';

interface SlidingImageCardProps {
  /** The primary (current section) image — shown first */
  primaryImage: string;
  /** The secondary image — from the opposite end of the page, same column size */
  secondaryImage: string;
  primaryAlt?: string;
  secondaryAlt?: string;
  className?: string;
  /** objectFit position for primary image */
  primaryObjectPosition?: string;
  /** objectFit position for secondary image */
  secondaryObjectPosition?: string;
  /** Duration of each slide transition in ms */
  duration?: number;
  /** How long each image is held before sliding, in ms */
  holdDuration?: number;
}

export function SlidingImageCard({
  primaryImage,
  secondaryImage,
  primaryAlt = '',
  secondaryAlt = '',
  className = '',
  primaryObjectPosition = 'center',
  secondaryObjectPosition = 'center',
  duration = 1100,
  holdDuration = 2800,
}: SlidingImageCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indexRef = useRef(0);
  const isInViewRef = useRef(false);

  const slideToIndex = (idx: number) => {
    if (!trackRef.current) return;
    // idx=0 → show primary (translateX 0%), idx=1 → show secondary (translateX -50%)
    const xTarget = idx === 0 ? '0%' : '-50%';
    animRef.current = animate(trackRef.current, {
      translateX: xTarget,
      duration,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    });
  };

  const scheduleNext = () => {
    if (!isInViewRef.current) return;
    timerRef.current = setTimeout(() => {
      if (!isInViewRef.current) return;
      indexRef.current = indexRef.current === 0 ? 1 : 0;
      slideToIndex(indexRef.current);
      scheduleNext();
    }, holdDuration + duration);
  };

  const startSliding = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Always snap back to primary when entering view
    if (trackRef.current) {
      // instant reset without animation
      animate(trackRef.current, { translateX: '0%', duration: 0 });
    }
    indexRef.current = 0;
    scheduleNext();
  };

  const stopSliding = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    animRef.current?.pause?.();
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isInViewRef.current = true;
          startSliding();
        } else {
          isInViewRef.current = false;
          stopSliding();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      stopSliding();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {/*
        Track: two images side by side, total width = 200%.
        We translate X from 0% (show primary) to -50% (show secondary).
        Each child is 50% of the 200% track = 100% of the container width.
      */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '200%',
          height: '100%',
          willChange: 'transform',
        }}
      >
        {/* Slide 0 – primary (left) */}
        <div style={{ flex: '0 0 50%', height: '100%', overflow: 'hidden' }}>
          <img
            src={primaryImage}
            alt={primaryAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: primaryObjectPosition,
              display: 'block',
            }}
            draggable={false}
          />
        </div>

        {/* Slide 1 – secondary (right) */}
        <div style={{ flex: '0 0 50%', height: '100%', overflow: 'hidden' }}>
          <img
            src={secondaryImage}
            alt={secondaryAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: secondaryObjectPosition,
              display: 'block',
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
