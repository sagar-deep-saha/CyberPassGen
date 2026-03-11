"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

export function CyberButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: CyberButtonProps) {
  const variants = {
    primary: "bg-primary text-black hover:bg-[#12cbd1]",
    secondary: "bg-secondary text-black hover:bg-[#28b584]",
    accent: "bg-accent text-white hover:bg-[#e6005c]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm font-bold",
    lg: "px-12 py-6 text-lg font-black",
  };

  return (
    <motion.button
      className={cn(
        "neo-brutalist-button uppercase tracking-tighter transition-all duration-75",
        "relative inline-flex items-center justify-center overflow-hidden",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
