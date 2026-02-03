"use client";

import React from "react";
import { Info, HelpCircle, Shield, Zap } from "lucide-react";

export default function About() {
    return (
        <section className="py-32 bg-[#02040a] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side: What is BAYU? */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div className="inline-flex items-center gap-3 text-magenta-400 font-black tracking-[0.2em] uppercase text-xs italic">
                            <Shield className="w-4 h-4" />
                            Core Protocol
                        </div>
                        <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">
                            What Is <span className="neon-text-cyan">BAYU?</span>
                        </h2>
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                            <p className="text-gray-300 text-lg leading-loose font-light italic">
                                Smart apps, digital products, hundreds of different services... Now imagine being able to use them all in a single ecosystem, in harmony. Bayuverse enables you to take part in the world of the future with the most comprehensive digital ecosystem planned with you in mind. designed for transactions within multi-dimensional services and products.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white uppercase italic">THE BAYU ADVANTAGE</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { text: "Fastest Check (Proof of Bayu)", color: "bg-cyan-500" },
                                    { text: "Asymmetric Encryption Security", color: "bg-magenta-500" },
                                    { text: "Minimal Investment Fees", color: "bg-cyan-500" },
                                    { text: "Eco-friendly BayuEnergy", color: "bg-purple-500" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
                                        <div className={`w-2 h-2 rounded-full ${item.color} group-hover:scale-150 transition-transform`} />
                                        <span className="text-gray-400 text-sm font-medium italic">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Solutions */}
                    <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                        <div className="inline-flex items-center gap-3 text-cyan-400 font-black tracking-[0.2em] uppercase text-xs italic">
                            <Zap className="w-4 h-4" />
                            The Solution
                        </div>
                        <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">
                            Engineered <br /><span className="neon-text-magenta">By Bayuverse</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed font-light italic">
                            Bayuverse makes the use of blockchain technology accessible to all by providing an extensive ecosystem built on our proprietary protocol which can be applied to various global industries.
                        </p>

                        <div className="relative h-80 w-full rounded-[2.5rem] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-magenta-900/20 glass-panel" />
                            {/* Animated Scanner Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_3s_ease-in-out_infinite]" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-4 rounded-full border-2 border-magenta-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transform hover:rotate-45 transition-transform duration-700">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-magenta-500 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-0 right-0 px-8">
                                <p className="text-white text-sm font-black text-center uppercase tracking-[0.2em] italic">Unlocking existence in daily life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

