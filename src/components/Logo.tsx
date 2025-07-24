import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = false, className = "" }: LogoProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const textSizeMap = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div 
        className={`${sizeMap[size]} gradient-blue rounded-xl flex items-center justify-center mr-3`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-white font-bold text-lg">🤖</span>
      </motion.div>
      {showText && (
        <span className={`font-bold text-white ${textSizeMap[size]}`}>
          AI Stack
        </span>
      )}
    </div>
  );
} 