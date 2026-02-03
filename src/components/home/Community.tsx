"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Users } from "lucide-react";

export default function Community() {
    const [memberCount, setMemberCount] = useState(0);
    const targetCount = 1250000; // Fake high number

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = targetCount / (duration / 16);

        const timer = setInterval(() => {
            start += step;
            if (start >= targetCount) {
                setMemberCount(targetCount);
                clearInterval(timer);
            } else {
                setMemberCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 text-center">
                <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 space-y-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                            <Users className="w-8 h-8 text-cyan-400" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold">
                            Join us now and be part of <br />
                            <span className="text-purple-400">Our Community</span>
                        </h2>

                        <p className="text-gray-400 max-w-xl mx-auto">
                            Welcome to our member count section! Track the growth of our community and get a sense of the scale of our ecosystem.
                        </p>

                        <div className="py-8">
                            <div className="text-6xl md:text-7xl font-bold neon-text-gradient tabular-nums">
                                {memberCount.toLocaleString()}+
                            </div>
                            <p className="text-gray-500 mt-2 uppercase tracking-widest text-sm">Registered Members</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="#" className="btn-primary flex items-center justify-center gap-2">
                                <Download className="w-5 h-5" />
                                Download App
                            </Link>
                            <Link href="#" className="btn-outline flex items-center justify-center gap-2">
                                Join Discord
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
