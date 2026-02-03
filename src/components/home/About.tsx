"use client";

import React from "react";
import { Info, HelpCircle } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: What is META? */}
                    <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
                        <div className="inline-flex items-center gap-2 text-purple-400 font-medium tracking-wider uppercase text-sm">
                            <Info className="w-4 h-4" />
                            About The Ecosystem
                        </div>
                        <h2 className="text-4xl font-bold">What Is <span className="text-white">META?</span></h2>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/5">
                            <p className="text-gray-300 leading-relaxed">
                                Smart apps, digital products, hundreds of different services... Now imagine being able to use them all in a single ecosystem, in harmony. MetaChain enables you to take part in the world of the future with the most comprehensive digital ecosystem planned with you in mind.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">What Sets MetaChain Apart?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                MetaChain is building the world's most comprehensive blockchain ecosystem. Much more than a digital asset platform, MetaChain completely changes the understanding of blockchain.
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    Fastest transaction check time (Proof of Meta)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    Insurmountable asymmetric encryption security
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    Minimal commissions and investment fees
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    Eco-friendly MetaEnergy consumption
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Solutions */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                        <div className="inline-flex items-center gap-2 text-cyan-400 font-medium tracking-wider uppercase text-sm">
                            <HelpCircle className="w-4 h-4" />
                            Our Solutions
                        </div>
                        <h2 className="text-4xl font-bold">What Solutions Does <br /><span className="text-cyan-400">MetaChain Offer?</span></h2>

                        <p className="text-gray-400 leading-relaxed">
                            MetaChain makes the use of blockchain technology accessible to all by providing an extensive ecosystem built on MetaChain which can be applied to various industries.
                        </p>

                        <div className="relative h-64 w-full rounded-2xl overflow-hidden glass-panel border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40" />
                            {/* Abstract illustration overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-24 h-24 rounded-full border border-cyan-400/50" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-medium text-center">Unlocking the full potential of blockchain in daily life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
