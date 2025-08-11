"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/public/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const alignTimeout = useRef<number | null>(null);
  const scrollIdleTimeout = useRef<number | null>(null);
  const isScrollingRef = useRef(false);
  const [bottomSpacer, setBottomSpacer] = useState(0);
  const scrollRaf = useRef<number | null>(null);
  const [alignTick, setAlignTick] = useState(0);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useEffect(() => {
    if (cardRefs.current.length !== cardLength) {
      cardRefs.current = Array(cardLength)
        .fill(null)
        .map(() => React.createRef<HTMLDivElement>());
    }
  }, [cardLength]);

  const updateActiveCard = () => {
    if (!ref.current) return;

    // Handle explicit top/bottom edge cases to ensure first/last cards activate
    const { scrollTop, scrollHeight, clientHeight } = ref.current;
    const atTop = scrollTop <= 2;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
    if (atTop) {
      setActiveCard(0);
      return;
    }
    if (atBottom) {
      setActiveCard(cardLength - 1);
      return;
    }

    const containerRect = ref.current.getBoundingClientRect();
    const containerMid = (containerRect.top + containerRect.bottom) / 2;

    // Prefer the card whose center is closest to the container's midpoint.
    // This improves activation for the last (Creatives) card.
    let bestIndex = activeCard;
    let bestDistance = Number.POSITIVE_INFINITY;

    content.forEach((_, index) => {
      const card = cardRefs.current[index]?.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardMid = (rect.top + rect.bottom) / 2;
      const distance = Math.abs(cardMid - containerMid);
      // Only consider cards with some overlap in the viewport of the container
      const overlapTop = Math.max(rect.top, containerRect.top);
      const overlapBottom = Math.min(rect.bottom, containerRect.bottom);
      const isOverlapping = overlapBottom - overlapTop > 0;
      if (isOverlapping && distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    setActiveCard(bestIndex);
  };

  // Rely on onScroll; avoid double-firing updateActiveCard from framer-motion events
  useMotionValueEvent(scrollYProgress, "change", () => {
    // no-op
  });

  const backgroundColors = [
    "rgb(15 23 42)", // slate-900
    "rgb(0 0 0)", // black
    "rgb(23 23 23)", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  // Mobile detection to render a simplified, reliable layout on phones
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile('matches' in e ? e.matches : (e as MediaQueryList).matches);
    };
    onChange(mql);
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange as (e: MediaQueryListEvent) => void);
    } else if ((mql as any).addListener) {
      (mql as any).addListener(onChange);
    }
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange as (e: MediaQueryListEvent) => void);
      } else if ((mql as any).removeListener) {
        (mql as any).removeListener(onChange);
      }
    };
  }, []);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, alignTick]);

  // Update bottom spacer based on image & last card height so last card can center-align to image
  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    const updateSpacer = () => {
      const img = imageRef.current;
      const lastCard = cardRefs.current[cardRefs.current.length - 1]?.current;
      if (!img || !lastCard) return;
      const imgRect = img.getBoundingClientRect();
      const lastRect = lastCard.getBoundingClientRect();
      // Allow enough trailing space: half image height + half last-card height, then tighten slightly
      const space = Math.max(0, Math.round(imgRect.height / 2 + lastRect.height / 2) - 12);
      setBottomSpacer(space);
    };
    updateSpacer();
    window.addEventListener('resize', updateSpacer);
    return () => window.removeEventListener('resize', updateSpacer);
  }, []);

  // Ensure activeCard is correctly set on mount and when layout changes
  useEffect(() => {
    const handleResize = () => updateActiveCard();
    updateActiveCard();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [content.length]);

  // Keep the active card's text aligned vertically with the sticky image box (tablet/desktop only)
  useEffect(() => {
    // Avoid auto-snapping on small screens to preserve natural touch scrolling
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    // Only auto-align for the last card (Creatives) to avoid jitter when scrolling up other sections
    if (activeCard !== content.length - 1) return;

    const container = ref.current;
    if (!container) return;

    const card = cardRefs.current[activeCard]?.current;
    if (!card) return;

    // If user is currently scrolling, skip alignment until idle
    if (isScrollingRef.current) return;

    // Debounce to avoid jitter
    if (alignTimeout.current) {
      window.clearTimeout(alignTimeout.current as unknown as number);
      alignTimeout.current = null;
    }

    alignTimeout.current = window.setTimeout(() => {
      // Center the active card to the sticky image box center if available
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const imageEl = imageRef.current;

      if (imageEl) {
        const imageRect = imageEl.getBoundingClientRect();
        // Prefer aligning the title text with the image
        const titleEl = card.querySelector('h2');
        const targetRect = titleEl ? titleEl.getBoundingClientRect() : cardRect;
        const targetMid = (targetRect.top + targetRect.bottom) / 2;
        const imageMid = (imageRect.top + imageRect.bottom) / 2;
        // For the last card (Creatives), use zero bias and a tighter snap threshold
        const isLast = activeCard === content.length - 1;
        const mqLg = window.matchMedia('(min-width: 1024px)').matches;
        const fineTune = isLast ? 0 : (mqLg ? -20 : -12); // no bias for Creatives
        const delta = (targetMid - imageMid) + fineTune;
        const threshold = isLast ? 1 : 4;
        if (Math.abs(delta) > threshold) {
          const target = Math.max(0, Math.min(container.scrollTop + delta, container.scrollHeight - container.clientHeight));
          container.scrollTo({ top: target, behavior: 'smooth' });
        }
      } else {
        // Fallback: align card top with typical sticky offset
        const getStickyOffset = () => {
          if (window.matchMedia('(min-width: 1024px)').matches) return 80; // lg:top-20
          if (window.matchMedia('(min-width: 768px)').matches) return 48; // md:top-12
          return 32; // top-8
        };
        const stickyOffset = getStickyOffset();
        const delta = (cardRect.top - containerRect.top) - stickyOffset;
        if (Math.abs(delta) > 4) {
          const target = Math.max(0, Math.min(container.scrollTop + delta, container.scrollHeight - container.clientHeight));
          container.scrollTo({ top: target, behavior: 'smooth' });
        }
      }
    }, 120);

    return () => {
      if (alignTimeout.current) {
        window.clearTimeout(alignTimeout.current as unknown as number);
        alignTimeout.current = null;
      }
    };
  }, [activeCard]);

  // Mobile: simple per-card rendering (no sticky, no active scroll logic)
  if (isMobile) {
    return (
      <div className="w-full bg-slate-900 p-4 space-y-10">
        {content.map((item, index) => (
          <div key={item.title + index} className="w-full">
            <div className={cn("w-full h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-green-400/20 mb-4", contentClassName)}>
              <div className="relative w-full h-full">
                {React.isValidElement(item.content) ? (
                  React.cloneElement(item.content as React.ReactElement, {
                    className: 'w-full h-full object-cover',
                  })
                ) : (
                  item.content
                )}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white font-product-bungee mb-3">{item.title}</h2>
            <p className="text-base text-product-text-light leading-relaxed font-product-manrope">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

  // Tablet/Desktop: sticky image with scroll-synced text
  const handleScroll: React.UIEventHandler<HTMLDivElement> = () => {
    isScrollingRef.current = true;
    if (scrollIdleTimeout.current) {
      window.clearTimeout(scrollIdleTimeout.current as unknown as number);
      scrollIdleTimeout.current = null;
    }
    scrollIdleTimeout.current = window.setTimeout(() => {
      isScrollingRef.current = false;
      // After idle, try one more alignment in case last section needs centering
      // Trigger effect to re-align even if activeCard hasn't changed
      setAlignTick((t) => t + 1);
    }, 180);
    if (scrollRaf.current == null) {
      scrollRaf.current = window.requestAnimationFrame(() => {
        updateActiveCard();
        if (scrollRaf.current) {
          window.cancelAnimationFrame(scrollRaf.current);
        }
        scrollRaf.current = null;
      });
    }
  };

  return (
    <div
      className="h-[60rem] md:h-[70rem] lg:h-[80rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative lg:space-x-6 p-8 md:p-12 lg:p-20 scrollbar-hide bg-slate-900"
      style={{
        background: "transparent",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch"
      }}
      ref={ref}
      onScroll={handleScroll}
    >
      <div className="relative z-10 flex items-start px-4 md:px-8 lg:px-12 order-2 lg:order-1 pt-0 lg:pt-0 mt-0 md:mt-0">
        <div className="max-w-full lg:max-w-5xl">
          {content.map((item, index) => (
            <div
              ref={cardRefs.current[index]}
              key={item.title + index}
              className={cn(
                "my-24 md:my-32 lg:my-32",
                index === 0 ? "mt-6 md:mt-24" : "",
                index === content.length - 1 ? "my-8 md:my-12 lg:my-16" : ""
              )}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-white font-product-bungee mb-6 md:mb-8 lg:mb-12"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base md:text-lg lg:text-2xl text-product-text-light max-w-full lg:max-w-3xl mt-4 md:mt-6 lg:mt-8 leading-relaxed font-product-manrope"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-2 md:h-0 lg:h-0" />
          {/* Extra internal spacer only for md+ to allow last card to center to image without increasing external gap */}
          <div className="hidden md:block" style={{ height: bottomSpacer }} aria-hidden />
        </div>
      </div>
      <div
        className={cn(
          "relative z-0 block w-full lg:w-[36rem] h-96 md:h-80 lg:h-[28rem] rounded-2xl bg-white md:sticky top-8 md:top-12 lg:top-20 overflow-hidden shadow-2xl border-2 border-green-400/20 mt-0 md:mt-0 mb-4 md:mb-6 lg:mb-0 order-1 lg:order-2",
          contentClassName
        )}
        style={{
          background: backgroundGradient
        }}
        ref={imageRef}
      >
        <motion.div className="relative w-full h-full">
          {React.isValidElement(content[activeCard].content) ? (
            React.cloneElement(content[activeCard].content as React.ReactElement, {
              className: 'w-full h-full object-cover transition-all duration-300 ease-in-out'
            })
          ) : (
            content[activeCard].content
          )}
        </motion.div>
      </div>
    </div>
  );
};