"use client";

import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  projects?: any[];
  [key: string]: any;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 5,
  projects,
  ...props
}: MarqueeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <motion.button
        onClick={() => scroll('left')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Marquee Container */}
      <div
        {...props}
        ref={scrollRef}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className,
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              })}
            >
              {projects ? projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-none w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
                  style={{ scrollSnapAlign: 'start' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )) : children}
            </div>
          ))}
      </div>

      {/* Right Arrow */}
      <motion.button
        onClick={() => scroll('right')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </div>
  );
} 