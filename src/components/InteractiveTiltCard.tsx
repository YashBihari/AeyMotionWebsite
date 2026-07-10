import { motion, useSpring, MotionProps } from 'motion/react';
import React from 'react';

interface InteractiveTiltCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps>, MotionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  containerClassName?: string;
}

export default function InteractiveTiltCard({
  children,
  className = "",
  style = {},
  maxTilt = 12,
  containerClassName = "",
  ...props
}: InteractiveTiltCardProps) {
  const rotateX = useSpring(0, { damping: 25, stiffness: 150 });
  const rotateY = useSpring(0, { damping: 25, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    
    // Normalize mouse coords to range [-0.5, 0.5] from the center of the card
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    rotateX.set(-mouseY * maxTilt);
    rotateY.set(mouseX * maxTilt);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    rotateX.set(0);
    rotateY.set(0);
    if (props.onMouseLeave) {
      props.onMouseLeave(e);
    }
  };

  // Destructure onMouseLeave from props so it isn't passed down and overrides ours in {...props}
  const { onMouseLeave: _ignored, ...remainingProps } = props;

  return (
    <div 
      className={`relative ${containerClassName}`} 
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          ...style,
        }}
        className={className}
        {...remainingProps}
      >
        {children}
      </motion.div>
    </div>
  );
}
