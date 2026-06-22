"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate: Record<string, string> = {
    up: "translateY(24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    none: "none",
  };

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : translate[direction],
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
