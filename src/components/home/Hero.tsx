"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Clock, Wallet, Coins } from "lucide-react";

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
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            The Future of Blockchain is Here
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The World's Most <br />
            Comprehensive <br />
            <span className="neon-text-gradient">Blockchain Ecosystem</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            MetaChain is creating the digital ecosystem of the future by increasing the efficiency of metaverse technology with blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="btn-primary flex items-center justify-center gap-2 group">
              Start Exploring
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#" className="btn-outline flex items-center justify-center gap-2 group">
              <Play className="w-4 h-4 fill-current" />
              Watch Demo
            </Link>
          </div>

          {/* Token Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Used</p>
              <h4 className="text-2xl font-bold text-white tabular-nums">4,802,826,056</h4>
              <p className="text-cyan-400 text-xs font-bold">META</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Available</p>
              <h4 className="text-2xl font-bold text-white tabular-nums">10,000,000,000</h4>
              <p className="text-purple-400 text-xs font-bold">META</p>
            </div>
          </div>
        </div>

        {/* ICO Timer Board */}
        <div className="relative animate-in fade-in duration-1000 delay-300">
          <div className="glass-panel rounded-3xl p-8 border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">ICO Ends In</h3>
              <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium bg-cyan-500/10 py-1 px-3 rounded-full mx-auto w-fit">
                <Clock className="w-3 h-3" />
                1 META = 0.001979 USDT
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.minutes, label: "Minutes" },
                { val: timeLeft.seconds, label: "Seconds" },
              ].map((item, i) => (
                <div key={i} className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
                  <div className="text-3xl font-bold text-white tabular-nums mb-1">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full btn-primary py-4 text-lg shadow-xl shadow-cyan-500/20">
                Buy Now
              </button>
              <div className="flex items-center justify-between text-xs text-gray-400 px-2">
                <span>15% Ref Bonus</span>
                <Link href="#" className="hover:text-white transition-colors">Your Referral Link</Link>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-6 -right-6 glass-panel p-3 rounded-xl flex items-center gap-3 animate-bounce delay-700">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Raised</div>
              <div className="text-sm font-bold text-white">$9.5M+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
