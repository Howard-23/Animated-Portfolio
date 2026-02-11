"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GrimoireCardProps {
  children: ReactNode;
  className?: string;
  cloverCount?: 3 | 4 | 5;
  title?: string;
  delay?: number;
}

export function GrimoireCard({ 
  children, 
  className = "", 
  cloverCount = 4, 
  title,
  delay = 0 
}: GrimoireCardProps) {
  const cloverColors = {
    3: "#228B22",
    4: "#FFD700", 
    5: "#9932CC"
  };

  const glowColors = {
    3: "rgba(34, 139, 34, 0.3)",
    4: "rgba(255, 215, 0, 0.3)",
    5: "rgba(153, 50, 204, 0.3)"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative group ${className}`}
    >
      {/* Card Container */}
      <div 
        className="relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] rounded-lg overflow-hidden border border-[#FFD700]/20 transition-all duration-500 group-hover:border-[#FFD700]/50"
        style={{
          boxShadow: `0 0 30px ${glowColors[cloverCount]}, inset 0 0 30px rgba(0,0,0,0.5)`
        }}
      >
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFD700]/40 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FFD700]/40 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FFD700]/40 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFD700]/40 rounded-br-lg" />

        {/* Clover Header */}
        {title && (
          <div className="relative px-6 pt-6 pb-2">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 40 40" className="flex-shrink-0">
                <g transform="translate(20, 20)">
                  {[0, 90, 180, 270].slice(0, cloverCount).map((rotation, i) => (
                    <ellipse
                      key={i}
                      cx="0"
                      cy="-10"
                      rx="7"
                      ry="10"
                      fill={cloverColors[cloverCount]}
                      fillOpacity={0.8}
                      transform={`rotate(${rotation})`}
                    />
                  ))}
                </g>
              </svg>
              <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-semibold text-gold-gradient">
                {title}
              </h3>
            </div>
            <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 relative z-10">
          {children}
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${cloverCount}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#FFD700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${cloverCount})`} />
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColors[cloverCount]} 0%, transparent 70%)`
          }}
        />
      </div>
    </motion.div>
  );
}

interface SpellCardProps {
  name: string;
  type: string;
  description: string;
  level: number;
  delay?: number;
}

export function SpellCard({ name, type, description, level, delay = 0 }: SpellCardProps) {
  const typeColors: Record<string, string> = {
    "Anti-Magic": "#DC143C",
    "Wind": "#87CEEB",
    "Light": "#FFD700",
    "Dark": "#9932CC",
    "Fire": "#FF4500",
    "Water": "#4169E1",
    "Earth": "#8B4513",
    "Creation": "#228B22"
  };

  const color = typeColors[type] || "#FFD700";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group cursor-pointer"
    >
      <div 
        className="relative bg-[#12121a]/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-all duration-300 group-hover:border-[#FFD700]/50 overflow-hidden"
        style={{
          boxShadow: `0 4px 20px ${color}20`
        }}
      >
        {/* Level Stars */}
        <div className="absolute top-2 right-2 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill={i < level ? color : "transparent"}
              stroke={color}
              strokeWidth="1"
            >
              <path d="M6 1l1.5 3.5L11 5 8 7.5 9 11 6 9 3 11l1-3.5L1 5l3.5-.5z" />
            </svg>
          ))}
        </div>

        {/* Spell Type Badge */}
        <div 
          className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
          style={{ 
            backgroundColor: `${color}20`,
            color: color,
            border: `1px solid ${color}40`
          }}
        >
          {type} Magic
        </div>

        {/* Spell Name */}
        <h4 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold text-white mb-1 group-hover:text-gold-gradient transition-colors">
          {name}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* Glow Effect on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}15 0%, transparent 70%)`
          }}
        />
      </div>
    </motion.div>
  );
}
