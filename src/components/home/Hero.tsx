"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Clock, Wallet, Coins, Cpu, Zap } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 11,
    minutes: 13,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Neon Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none animate-pulse" style={{ backgroundColor: 'rgba(255, 0, 255, 0.1)' }} />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="space-y-10 animate-in slide-in-from-left-10 duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-black tracking-[0.3em] uppercase italic">
            <Cpu className="w-4 h-4 animate-spin-slow" />
            Next-Gen Digital Evolution
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase italic">
              <span className="block text-white">THE WORLD'S</span>
              <span className="block neon-text-cyan">MOST POWERFUL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500" style={{ backgroundImage: 'linear-gradient(90deg, #00f3ff, #ff00ff)' }}>BAYUVERSE</span>
            </h1>
          </div>

          <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-light italic border-l-4 border-magenta-500 pl-6">
            Bayuverse is engineering the digital frontier. Seamlessly integrating blockchain efficiency with a hyper-immersive metaverse experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#" className="btn-primary flex items-center justify-center gap-3">
              Enter Universe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </Link>
            <Link href="#" className="btn-outline flex items-center justify-center gap-3">
              <Zap className="w-5 h-5 fill-current" />
              Whitepaper
            </Link>
          </div>

          {/* Token Stats Panel */}
          <div className="glass-panel p-8 rounded-3xl grid grid-cols-2 gap-10 max-w-xl">
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-mono">Total Used</p>
              <h4 className="text-3xl font-black text-white tabular-nums tracking-tighter">
                4,887,107,014
              </h4>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 bg-cyan-500/30 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[48%]" />
                </div>
                <span className="text-cyan-400 text-[10px] font-bold">BAYU</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-mono">Total Available</p>
              <h4 className="text-3xl font-black text-white/60 tabular-nums tracking-tighter">
                10,000,000,000
              </h4>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 bg-magenta-500/30 rounded-full overflow-hidden">
                  <div className="h-full bg-magenta-500 w-[100%]" style={{ backgroundColor: '#ff00ff' }} />
                </div>
                <span className="text-magenta-400 text-[10px] font-bold" style={{ color: '#ff00ff' }}>BAYU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: ICO Board */}
        <div className="relative animate-in slide-in-from-right-10 duration-1000 delay-200">
          <div className="glass-panel rounded-[3rem] p-1 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20">
            <div className="bg-[#02040a]/90 rounded-[2.9rem] p-10 relative overflow-hidden">
              {/* Internal Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" style={{ backgroundColor: 'rgba(255, 0, 255, 0.1)' }} />

              <div className="text-center mb-12">
                <div className="inline-block mb-6 relative">
                  <Image src="/assets/logo.png" alt="Bayuverse Logo" width={80} height={80} className="drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] animate-pulse" />
                </div>
                <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">ICO PHASE 01</h3>
                <div className="inline-flex items-center gap-3 text-cyan-400 text-sm font-black bg-cyan-500/10 py-2 px-6 rounded-xl border border-cyan-500/20 uppercase tracking-widest">
                  <Clock className="w-4 h-4" />
                  1 BAYU = 0.002049 USDT
                </div>
              </div>

              {/* Countdown Grid */}
              <div className="grid grid-cols-4 gap-4 mb-12">
                {[
                  { val: timeLeft.days, label: "Days" },
                  { val: timeLeft.hours, label: "Hours" },
                  { val: timeLeft.minutes, label: "Mins" },
                  { val: timeLeft.seconds, label: "Secs" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 group hover:border-cyan-500/40 transition-all">
                    <div className="text-4xl font-black text-white tabular-nums mb-1 tracking-tighter group-hover:neon-text-cyan transition-colors">
                      {String(item.val).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <button className="w-full btn-primary group">
                  <span className="flex items-center justify-center gap-3">
                    ACQUIRE BAYU
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>

                <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Growth Factor</span>
                    <span className="text-xs font-black text-magenta-400 uppercase tracking-widest">+15% REWARD</span>
                  </div>
                  <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-between group cursor-pointer hover:bg-cyan-500/10 transition-colors">
                    <span className="text-[10px] text-cyan-400/70 font-mono">BA-REF-X992-001</span>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase underline underline-offset-4">COPY LINK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="absolute -bottom-8 -right-8 glass-panel py-4 px-6 rounded-2xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 rounded-xl bg-magenta-500/20 flex items-center justify-center text-magenta-400" style={{ backgroundColor: 'rgba(255, 0, 255, 0.2)', color: '#ff00ff' }}>
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Liquidity Locked</div>
              <div className="text-lg font-black text-white">$9,542,000+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
