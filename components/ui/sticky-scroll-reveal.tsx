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
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
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
    let maxRatio = 0;
    let newActive = activeCard;

    content.forEach((_, index) => {
      const card = cardRefs.current[index]?.current;
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const top = Math.max(cardRect.top, containerRect.top);
        const bottom = Math.min(cardRect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, bottom - top);
        const ratio = visibleHeight / cardRect.height;

        if (ratio > maxRatio) {
          maxRatio = ratio;
          newActive = index;
        }
      }
    });

    setActiveCard(newActive);
  };

  useMotionValueEvent(scrollYProgress, "change", () => {
    updateActiveCard();
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
  }, [activeCard]);

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

    const container = ref.current;
    if (!container) return;

    const card = cardRefs.current[activeCard]?.current;
    if (!card) return;

    const getStickyOffset = () => {
      // Tailwind top-8 (32px), md:top-12 (48px), lg:top-20 (80px)
      if (window.matchMedia('(min-width: 1024px)').matches) return 80;
      if (window.matchMedia('(min-width: 768px)').matches) return 48;
      return 32;
    };

    // Compute how much to scroll so the card's top aligns just below the sticky image top
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const stickyOffset = getStickyOffset();
    const delta = (cardRect.top - containerRect.top) - stickyOffset;

    // Only adjust if noticeably misaligned and scrolling stays in bounds
    if (Math.abs(delta) > 4) {
      const target = Math.max(0, Math.min(container.scrollTop + delta, container.scrollHeight - container.clientHeight));
      container.scrollTo({ top: target, behavior: 'smooth' });
    }
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
  return (
    <div
      className="h-[60rem] md:h-[70rem] lg:h-[80rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative lg:space-x-24 p-8 md:p-12 lg:p-20 scrollbar-hide bg-slate-900"
      style={{
        background: "transparent",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch"
      }}
      ref={ref}
      onScroll={updateActiveCard}
    >
      <div className="relative z-10 flex items-start px-4 md:px-8 lg:px-12 order-2 lg:order-1 pt-0 lg:pt-0 mt-0 md:mt-0">
        <div className="max-w-full lg:max-w-5xl">
          {content.map((item, index) => (
            <div ref={cardRefs.current[index]} key={item.title + index} className={cn("my-24 md:my-32 lg:my-40", index === 0 ? "mt-6 md:mt-24" : "")}>
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
          <div className="h-40 md:h-60 lg:h-80" />
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