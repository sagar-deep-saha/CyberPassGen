"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface PasswordDisplayProps {
  password?: string;
  isGenerating?: boolean;
}

export function PasswordDisplay({ password, isGenerating }: PasswordDisplayProps) {
  const [displayText, setDisplayText] = useState("--- --- ---");
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    if (!password) {
      setDisplayText("--- --- ---");
      return;
    }

    if (isGenerating) {
      setDisplayText("!@#$%^&*()_+");
      return;
    }

    let iterations = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    
    const interval = setInterval(() => {
      setDisplayText(prev => 
        password
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return password[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= password.length) {
        clearInterval(interval);
      }
      
      iterations += 1;
    }, 40);

    return () => clearInterval(interval);
  }, [password, isGenerating]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setIsCopying(true);
    toast({
      title: "COPIED TO SYSTEM",
      description: "Password is now in your clipboard.",
      variant: "default",
    });
    setTimeout(() => setIsCopying(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 relative">
      <div className="bg-card border-[3px] border-black p-8 md:p-12 shadow-brutalist relative overflow-hidden">
        {/* Background texture inside container */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_#14DEE6_1px,_transparent_1px)] bg-[length:20px_20px]" />
        
        <div className="flex flex-col items-center justify-center min-h-[120px] gap-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Generated Secret</span>
            <h2 className={cn(
              "text-2xl md:text-4xl lg:text-5xl font-black break-all selection:bg-accent tracking-tighter",
              !password ? "text-muted-foreground opacity-30" : "text-foreground",
              isGenerating ? "glitch" : ""
            )}>
              {displayText}
            </h2>
          </div>
          
          {password && (
            <button
              onClick={copyToClipboard}
              className={cn(
                "p-4 border-[2px] border-black transition-all flex items-center gap-2 uppercase text-sm font-bold tracking-widest",
                isCopying 
                  ? "bg-secondary shadow-none" 
                  : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              )}
            >
              {isCopying ? <Check size={20} /> : <Copy size={20} />}
              {isCopying ? "Copied" : "Copy to Clipboard"}
            </button>
          )}
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-primary border border-black z-20" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary border border-black z-20" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent border border-black z-20" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border border-black z-20" />
    </div>
  );
}
