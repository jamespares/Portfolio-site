"use client";

import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

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
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Calculate new scroll position
    let newScroll = currentScroll + scrollAmount;

    // Handle infinite scroll effect
    if (direction === 'right' && currentScroll >= maxScroll - 10) {
      // If we're at the end, jump to start
      newScroll = 0;
    } else if (direction === 'left' && currentScroll <= 0) {
      // If we're at the start, jump to end
      newScroll = maxScroll;
    }

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener to handle infinite scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      
      // When near the end, prepare to loop
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        // Add more items if needed
        // This ensures continuous scrolling
        const firstSet = Array.from(container.children[0].children);
        const lastSet = container.children[container.children.length - 1];
        if (lastSet) {
          firstSet.forEach(child => {
            const clone = child.cloneNode(true);
            lastSet.appendChild(clone);
          });
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
          "group flex overflow-x-auto scrollbar-hide scroll-smooth",
          className
        )}
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 gap-4"
            >
              {projects ? projects.map((project) => (
                <motion.div
                  key={`${project.id}-${i}`}
                  className="flex-none w-[300px]"
                  style={{ scrollSnapAlign: 'start' }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full border-2 border-transparent hover:border-sky-500 transition-colors duration-200">
                    <div className="bg-white p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-36 object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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