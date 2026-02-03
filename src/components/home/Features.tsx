"use client";

import React from "react";
import { Layers, Zap, Globe, Shield } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Layers className="w-8 h-8 text-cyan-400" />,
            title: "All-in-One Ecosystem",
            description: "MetaChain makes your life easier by offering all digital solutions on a single platform. Trade, manage, and earn.",
        },
        {
            icon: <Globe className="w-8 h-8 text-purple-400" />,
            title: "MetaNFT Marketplace",
            description: "Rent, split and sell your NFTs. Manage your digital collection with advanced tools and low fees.",
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "MetaAirdrop",
            description: "Take your place in MetaAirdrop & earn rewards. The easiest way to start your crypto journey.",
        },
        {
            icon: <Shield className="w-8 h-8 text-green-400" />,
            title: "Secure Trading",
            description: "Next-gen digital asset trading platform with military-grade security and instant settlement.",
        },
    ];

    return (
        <section className="py-20 bg-black/50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                    <h2 className="text-4xl font-bold">
                        Capture the <span className="text-cyan-400">Future</span> in Every Area of Life
                    </h2>
                    <p className="text-gray-400">
                        Experience the next evolution of blockchain technology. We provide the infrastructure for a decentralized tomorrow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
