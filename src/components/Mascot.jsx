"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Mascot({ isCoveringEyes, lookDirection }) {
  // lookDirection is a value between -1 and 1 for x and y
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Map lookDirection (-1 to 1) to pupil movement range (e.g., -5 to 5 pixels)
    if (!isCoveringEyes) {
        setPupilPosition({
            x: lookDirection.x * 10,
            y: lookDirection.y * 5 + 5 // slightly lower default gaze
        });
    } else {
        setPupilPosition({ x: 0, y: 0 });
    }
  }, [lookDirection, isCoveringEyes]);

  const handVariants = {
    hidden: { y: 120, opacity: 0 },
    visible: { 
      y: 15, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 15,
        mass: 1
      }
    }
  };

  const eyeVariants = {
    normal: { scaleY: 1 },
    blink: { scaleY: 0.1, transition: { duration: 0.1 } }
  };

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
        if (!isCoveringEyes && Math.random() > 0.7) {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
        }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, [isCoveringEyes]);

  return (
    <div className="w-48 h-48 mx-auto relative overflow-hidden flex justify-center items-end" aria-hidden="true">
      <svg
        width="180"
        height="160"
        viewBox="0 0 200 180"
        xmlns="http://www.w3.org/2000/svg"
        className="transform translate-y-2"
      >
        {/* Body/Head - Dark Blueish Grey */}
        <path
          d="M100 180 C 40 180, 20 130, 20 90 C 20 40, 50 10, 100 10 C 150 10, 180 40, 180 90 C 180 130, 160 180, 100 180 Z"
          fill="#374151" 
        />
        
        {/* Ears */}
        <circle cx="35" cy="45" r="15" fill="#374151" />
        <circle cx="165" cy="45" r="15" fill="#374151" />
        <circle cx="35" cy="45" r="7" fill="#4B5563" />
        <circle cx="165" cy="45" r="7" fill="#4B5563" />

        {/* Face Patch - Lighter Grey */}
        <ellipse cx="100" cy="100" rx="65" ry="55" fill="#E5E7EB" />
        
        {/* Nose */}
        <ellipse cx="100" cy="110" rx="8" ry="5" fill="#1F2937" />

        {/* Mouth - Simple smile */}
        <path d="M 90 125 Q 100 135 110 125" stroke="#1F2937" strokeWidth="2" fill="none" />

        {/* Eyes Group */}
        <g>
            {/* Left Eye */}
            <motion.g animate={isBlinking ? "blink" : "normal"} variants={eyeVariants} style={{ originY: "45%" }}>
                <circle cx="70" cy="80" r="12" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                <motion.circle 
                    cx="70" 
                    cy="80" 
                    r="5" 
                    fill="#1F2937" 
                    animate={{ cx: 70 + pupilPosition.x, cy: 80 + pupilPosition.y }}
                />
            </motion.g>

            {/* Right Eye */}
            <motion.g animate={isBlinking ? "blink" : "normal"} variants={eyeVariants} style={{ originY: "45%" }}>
                <circle cx="130" cy="80" r="12" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                <motion.circle 
                    cx="130" 
                    cy="80" 
                    r="5" 
                    fill="#1F2937" 
                    animate={{ cx: 130 + pupilPosition.x, cy: 80 + pupilPosition.y }}
                />
            </motion.g>
        </g>

        {/* Hands - Animated to cover eyes */}
        {/* Left Hand */}
        <motion.path
          d="M 30 160 C 30 140, 50 120, 80 120 C 90 120, 95 130, 90 150 L 90 180 L 30 180 Z"
          fill="#374151"
          variants={handVariants}
          initial="hidden"
          animate={isCoveringEyes ? "visible" : "hidden"}
        />
         {/* Right Hand */}
        <motion.path
          d="M 170 160 C 170 140, 150 120, 120 120 C 110 120, 105 130, 110 150 L 110 180 L 170 180 Z"
          fill="#374151"
          variants={handVariants}
          initial="hidden"
          animate={isCoveringEyes ? "visible" : "hidden"}
        />

      </svg>
    </div>
  );
}
