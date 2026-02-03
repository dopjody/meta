"use client";

import React from "react";
import { Smartphone, CreditCard, Lock, Zap, ArrowRight, Shield, Cpu } from "lucide-react";

export default function Products() {
    const products = [
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Neural Mining",
            description: "Mine with your mobile devices using Bayuverse's flexible structure and Proof of Bayu consensus mechanism. Hyper-efficient and accessible.",
            color: "from-cyan-400 to-cyan-600",
            glow: "shadow-cyan-500/20"
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Quantum Cipher",
            description: "Bayuverse provides complete protection with its decentralized structure and advanced asymmetric quantum encryption protocols.",
            color: "from-magenta-400 to-magenta-600",
            glow: "shadow-magenta-500/20"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Overclocked Web3",
            description: "Surge ahead with 700,000+ transaction checks per second. The fastest neural-blockchain network in existence.",
            color: "from-cyan-400 to-magenta-500",
            glow: "shadow-white/10"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "BayuPayment",
            description: "Execute all your global transactions instantly with BayuPayment. Near-zero fees, biometric validation, and universal acceptance.",
            color: "from-magenta-500 to-purple-600",
            glow: "shadow-purple-500/20"
        },
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-[#02040a]">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-magenta-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 space-y-10 animate-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-magenta-500/5 border border-magenta-500/20 text-magenta-400 text-xs font-black tracking-[0.3em] uppercase italic">
                            <Cpu className="w-4 h-4" />
                            Eco-System Hardware
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9]">
                            PROTOCOLS <br />
                            <span className="neon-text-cyan">FOR THE FUTURE</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-light italic border-l-4 border-cyan-500 pl-6">
                            Bayuverse is not just a protocol; it's a hyper-integrated suite of products engineered to fuse seamlessly into your existence. From neural mining to instant liquid settlements.
                        </p>
                        <button className="btn-primary flex items-center gap-3">
                            CATALOG ACCESS
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {products.map((product, idx) => (
                            <div key={idx} className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 group">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-2xl ${product.glow} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {product.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3 uppercase italic tracking-tight">{product.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light italic">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

