"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/icons/logo.svg"

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(false), 1500);
    const timer2 = setTimeout(() => setIsMounted(false), 2000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`
      fixed inset-0 z-[9999] bg-white flex items-center justify-center
      transition-opacity duration-1000 ease-in-out
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      <div className={`
        animate-[pulse_2s_ease-in-out_infinite]
        transition-all duration-1000
        ${isVisible ? 'scale-80' : 'scale-50'}
      `}>
        <Image
          src={Logo}
          alt="КСК Арамис"
          width={80}
          height={80}
          className="opacity-60"
        />
      </div>
    </div>
  );
}