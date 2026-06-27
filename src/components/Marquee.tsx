import { cn } from '@/lib/utils';

interface MarqueeProps {
  words: string[];
  className?: string;
  textClassName?: string;
  reverse?: boolean;
}

export function Marquee({ words, className, textClassName, reverse = false }: MarqueeProps) {
  const content = words.join('    ');

  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div
        className={cn(
          'inline-flex',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        )}
      >
        <span className={cn('inline-block', textClassName)}>
          {content}&nbsp;&nbsp;&nbsp;&nbsp;{content}&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={cn('inline-block', textClassName)}>
          {content}&nbsp;&nbsp;&nbsp;&nbsp;{content}&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}
