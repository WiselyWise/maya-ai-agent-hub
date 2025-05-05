
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up';
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  className,
  animation = 'fade-in-up',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        ...(isVisible ? {} : { transform: animation === 'fade-in-up' ? 'translateY(20px)' : 'none' })
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
