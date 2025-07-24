"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  threshold?: number;
  duration?: number;
  ease?: string;
}

export default function FadeContent({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
  duration = 0.6,
  ease = "easeOut",
}: FadeContentProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease,
        type: "tween",
      }}
      className={`will-change-[transform,opacity] ${className}`}
      style={{ 
        transform: "translateZ(0)", // Force GPU acceleration
      }}
    >
      {children}
    </motion.div>
  );
}