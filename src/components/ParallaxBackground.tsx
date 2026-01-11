import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface ParallaxBackgroundProps {
  children: ReactNode;
  showStars?: boolean;
  showBlackHole?: boolean;
}

export function ParallaxBackground({
  children,
  showStars = true,
  showBlackHole = false,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  return (
    <div ref={ref} className="relative min-h-screen">
      {/* Deep Space Background Layer */}
      <motion.div className="fixed inset-0 z-0" style={{ y: y1, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-deep to-navy-dark" />

        {showBlackHole && (
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-purple-nebula/20 to-transparent blur-3xl animate-pulse" />
            <div className="absolute inset-20 rounded-full bg-gradient-radial from-space-black via-indigo-space/30 to-transparent blur-2xl" />
          </div>
        )}

        {showStars && (
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${seededRandom(i) * 100}%`,
                  left: `${seededRandom(i) * 100}%`,
                  opacity: seededRandom(i) * 0.7 + 0.3,
                  animation: `twinkle ${seededRandom(i) * 3 + 2}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Blue Gradient Layer */}
      <motion.div className="fixed inset-0 z-0" style={{ y: y2 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-sky/10 via-transparent to-blue-ocean/10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-glow/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-ocean/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Cosmic Dust Layer */}
      <motion.div className="fixed inset-0 z-0" style={{ y: y3 }}>
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-bright/20 blur-xl"
              style={{
                top: `${seededRandom(i) * 100}%`,
                left: `${seededRandom(i) * 100}%`,
                width: `${seededRandom(i) * 100 + 50}px`,
                height: `${seededRandom(i) * 100 + 50}px`,
                animation: `float ${
                  seededRandom(i) * 10 + 10
                }s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
