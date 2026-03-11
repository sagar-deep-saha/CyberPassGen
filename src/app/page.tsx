"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { generatePassword, checkPasswordStrength } from "@/lib/password-utils";
import { CyberButton } from "@/components/CyberButton";
import { PasswordDisplay } from "@/components/PasswordDisplay";
import { Shield, Lock, Zap, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [password, setPassword] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [strength, setStrength] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    const newPass = generatePassword();
    setPassword(newPass);
    setStrength(checkPasswordStrength(newPass));
    setTimeout(() => {
      setIsGenerating(false);
    }, 300); // Duration of the glitch effect
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-background text-foreground">
      {/* Retro-Digital Background Elements */}
      <div className="scanline-overlay" />
      <div className="moving-scanline" />
      <div className="fixed inset-0 z-[-1] opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div 
        className="w-full max-w-4xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <header className="mb-12 flex flex-col items-center md:items-start md:flex-row justify-between gap-6 border-b-[4px] border-black pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className="p-2 bg-primary border-[2px] border-black shadow-[3px_3px_0px_0px_#000]"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Shield className="text-black" size={24} />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground leading-none">
                Cyber<span className="text-primary">Pass Gen</span>
              </h1>
            </div>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase max-w-md">
              Version 1.0 // Phase: Developed
            </p>
          </div>
          
          <div className="hidden md:flex flex-col items-end text-right">
            <div className="flex gap-2 mb-2">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              <span className="w-2 h-2 bg-secondary animate-pulse [animation-delay:0.2s]" />
              <span className="w-2 h-2 bg-accent animate-pulse [animation-delay:0.4s]" />
            </div>
            <span className="text-[10px] font-mono opacity-50">ENCRYPTION: AES-256 BIT</span>
            <span className="text-[10px] font-mono opacity-50">STATUS: SYSTEM_READY</span>
          </div>
        </header>

        {/* Password Area */}
        <div className="relative mb-12">
          <PasswordDisplay password={password} isGenerating={isGenerating} />
        </div>
        
        {/* Password Strength */}
        {password && (
          <div className="w-full max-w-md mx-auto mb-12">
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden border-2 border-black">
              <motion.div 
                className={cn("h-full rounded-full", {
                  "bg-red-500": strength < 3,
                  "bg-yellow-500": strength === 3,
                  "bg-green-500": strength > 3,
                })}
                initial={{ width: 0 }}
                animate={{ width: `${(strength / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-xs text-center mt-2 font-bold uppercase text-muted-foreground">
              {["Very Weak", "Weak", "Okay", "Good", "Strong"][strength - 1] || "Password Strength"}
            </p>
          </div>
        )}

        {/* Action Area */}
        <div className="flex flex-col items-center gap-12">
          <div className="w-full flex justify-center">
            <CyberButton 
              size="lg" 
              onClick={handleGenerate}
              className="w-full md:w-auto"
            >
              <div className="flex items-center gap-3">
                <Zap className="fill-current" size={20} />
                Generate Secure Key
              </div>
            </CyberButton>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <FeatureBox 
              icon={<Lock size={18} />} 
              title="Dictionary Entropy" 
              description="Pulling from thousands of human-readable words for high memorability." 
              accent="primary"
            />
            <FeatureBox 
              icon={<Cpu size={18} />} 
              title="Complexity Protocol" 
              description="Strict CamelCase + Symbols + Numeric suffixes for brute-force resistance." 
              accent="secondary"
            />
            <FeatureBox 
              icon={<Zap size={18} />} 
              title="Instant Delivery" 
              description="Generated locally on your hardware. No data ever leaves your session." 
              accent="accent"
            />
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-20 border-t-[3px] border-black pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest text-muted-foreground uppercase gap-4">
          <div className="flex gap-6">
            <span className="hover:text-primary transition-colors cursor-pointer">Security Audited</span>
            <span className="hover:text-secondary transition-colors cursor-pointer">Open Source Logic</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
          </div>
          <div className="opacity-40">
            © 2026 CODE_FALCON_SYSTEMS // ALL RIGHTS RESERVED
          </div>
        </footer>
      </motion.div>
    </main>
  );
}

function FeatureBox({ 
  icon, 
  title, 
  description, 
  accent 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  accent: "primary" | "secondary" | "accent"
}) {
  const accentColors = {
    primary: "border-primary text-primary",
    secondary: "border-secondary text-secondary",
    accent: "border-accent text-accent",
  };

  return (
    <motion.div 
      className="bg-card border-[2px] border-black p-6 shadow-brutalist-sm cursor-default group"
      whileHover={{
        boxShadow: "8px 8px 0px 0px #000",
        x: -4,
        y: -4,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={cn("mb-4 inline-block p-2 border-[1.5px] border-black", accentColors[accent])}>
        {icon}
      </div>
      <h3 className="text-sm font-black uppercase mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
