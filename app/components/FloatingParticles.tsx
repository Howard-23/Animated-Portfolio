"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ["#FFD700", "#FFA500", "#228B22", "#9932CC", "#87CEEB"];
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function MagicRune({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className={className}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="runeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#228B22" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#runeGradient)"
        strokeWidth="1"
        strokeDasharray="5 5"
      />
      
      {/* Inner Circle */}
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="url(#runeGradient)"
        strokeWidth="0.5"
      />
      
      {/* Runic Symbols */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M 50 5 L 53 15 L 47 15 Z"
            fill="#FFD700"
            fillOpacity="0.2"
          />
        </g>
      ))}
      
      {/* Center Star */}
      <path
        d="M 50 25 L 53 45 L 75 50 L 53 55 L 50 75 L 47 55 L 25 50 L 47 45 Z"
        fill="none"
        stroke="#FFD700"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
    </motion.svg>
  );
}
