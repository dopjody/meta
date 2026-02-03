"use client";

import React from "react";
import { Smartphone, CreditCard, Lock, Zap } from "lucide-react";

export default function Products() {
    const products = [
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Mining",
            description: "Mine with your mobile devices using MetaChain's flexible structure and Proof of Meta consensus mechanism. Energy efficient and accessible.",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Advanced Security",
            description: "MetaChain provides complete protection with its decentralized structure and advanced asymmetric encryption measures.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "High Performance",
            description: "Save time with 700,000+ transaction checks per second. The fastest blockchain network in the ecosystem.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "MetaPayment",
            description: "Conduct all your payments flexibly with MetaPayment. Low fees, instant transfers, and global acceptance.",
            color: "from-emerald-500 to-teal-500"
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Products Equipped with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Future Technologies</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            MetaChain is not just a blockchain; it's a complete suite of products designed to integrate seamlessly into your daily life. From payments to mining, we have it all.
                        </p>
                        <button className="btn-primary">
                            View All Products
                        </button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {products.map((product, idx) => (
                            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                                    {product.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                                <p className="text-sm text-gray-400">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
