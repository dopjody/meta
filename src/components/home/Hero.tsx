"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="max-w-2xl space-y-8 animate-in slide-in-from-bottom-10 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        The Future of Blockchain is Here
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        The New Standard of <br />
                        <span className="neon-text-gradient">Blockchain World</span>
                    </h1>

                    <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                        MetaChain is creating the digital ecosystem of the future by increasing the efficiency of metaverse technology with blockchain. Secure, fast, and scalable.
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

                    <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                        <div>
                            <h4 className="text-2xl font-bold text-white">700K+</h4>
                            <p className="text-gray-500 text-sm">Transactions/sec</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white">0.01s</h4>
                            <p className="text-gray-500 text-sm">Latency</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white">50M+</h4>
                            <p className="text-gray-500 text-sm">Wallets</p>
                        </div>
                    </div>
                </div>

                {/* Visual/3D Placeholder */}
                <div className="hidden lg:flex justify-center animate-in fade-in duration-1000 delay-300">
                    {/* Abstract 3D shape representation using CSS */}
                    <div className="relative w-96 h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
                        <div className="relative w-full h-full glass-panel rounded-3xl border border-white/20 p-8 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-all duration-700">
                            <div className="text-center space-y-4">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                                    <span className="text-5xl font-bold text-white">M</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">MetaChain</h3>
                                <p className="text-gray-400 text-sm">Powering the Next Gen<br />Metaverse Economy</p>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 glass-panel rounded-2xl flex items-center justify-center animate-bounce delay-700">
                            <span className="text-2xl">💎</span>
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-16 h-16 glass-panel rounded-xl flex items-center justify-center animate-bounce delay-1000">
                            <span className="text-xl">🚀</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
