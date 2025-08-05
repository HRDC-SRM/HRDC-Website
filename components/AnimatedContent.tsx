import { useRef, useEffect } from "react";

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}: {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import GSAP only on client side
    const initAnimation = async () => {
      const { gsap } = await import('gsap');
      
      const el = ref.current;
      if (!el) return;

      const axis = direction === "horizontal" ? "x" : "y";
      const offset = reverse ? -distance : distance;

      // Set initial state
      gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
      });

      // Create the animation - trigger immediately since component is conditionally rendered
      gsap.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        delay,
        onComplete,
      });
    };

    initAnimation();

    return () => {
      // Cleanup will be handled by GSAP's internal cleanup
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref} className="animated-content">{children}</div>;
};

export default AnimatedContent; 