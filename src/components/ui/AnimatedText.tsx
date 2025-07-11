"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
  once?: boolean; 
}

export const AnimatedText = ({ children, className }: AnimatedTextProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "10px" }} 
        transition={{
          duration: 0.9, 
          ease: [0.16, 1, 0.3, 1], 
          delay: 0.05, 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

