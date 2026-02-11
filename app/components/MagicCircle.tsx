"use client";

import { motion } from "framer-motion";

interface MagicCircleProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function MagicCircle({ size = 400, className = "", animate = true }: MagicCircleProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer Ring */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={animate ? { rotate: 360 } : {}}
        transition={animate ? { duration: 30, repeat: Infinity, ease: "linear" } : {}}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Main Circle */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeDasharray="10 5"
        />
        
        {/* Decorative Runes */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 200)`}>
            <path
              d="M 200 15 L 205 25 L 195 25 Z"
              fill="#FFD700"
              fillOpacity="0.6"
            />
            <circle cx="200" cy="30" r="3" fill="#FFD700" fillOpacity="0.4" />
          </g>
        ))}
      </motion.svg>

      {/* Middle Ring - Reverse Rotation */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={animate ? { rotate: -360 } : {}}
        transition={animate ? { duration: 25, repeat: Infinity, ease: "linear" } : {}}
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#FFD700"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        
        {/* Inner Runes */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 200 200)`}>
            <rect
              x="195"
              y="45"
              width="10"
              height="20"
              fill="#228B22"
              fillOpacity="0.5"
              rx="2"
            />
          </g>
        ))}
      </motion.svg>

      {/* Inner Ring */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={animate ? { rotate: 360 } : {}}
        transition={animate ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
      >
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          strokeDasharray="20 10"
          strokeOpacity="0.6"
        />
        
        {/* Clover Symbol */}
        <g transform="translate(200, 200)">
          {[0, 90, 180, 270].map((rotation, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-35"
              rx="20"
              ry="35"
              fill={i === 3 ? "none" : "#228B22"}
              fillOpacity={i === 3 ? 0 : 0.6}
              stroke={i === 3 ? "#FFD700" : "none"}
              strokeWidth={i === 3 ? "2" : "0"}
              transform={`rotate(${rotation})`}
            />
          ))}
        </g>
      </motion.svg>

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500]"
          animate={animate ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={animate ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
          style={{ filter: "blur(20px)" }}
        />
      </div>
    </div>
  );
}

export function MiniMagicCircle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <circle
        cx="30"
        cy="30"
        r="25"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <circle
        cx="30"
        cy="30"
        r="18"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        strokeDasharray="4 2"
        strokeOpacity="0.4"
      />
      {/* Four leaf clover */}
      <g transform="translate(30, 30)">
        {[0, 90, 180, 270].map((rotation, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-8"
            rx="5"
            ry="8"
            fill={i === 3 ? "#FFD700" : "#228B22"}
            fillOpacity={i === 3 ? 0.8 : 0.6}
            transform={`rotate(${rotation})`}
          />
        ))}
      </g>
    </motion.svg>
  );
}
