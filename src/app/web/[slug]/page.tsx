"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Construction, ChevronRight, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import { pagesData } from "@/data/pages";

export default function DynamicPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const data = pagesData[slug];

    const formatTitle = (str: string) => {
        if (!str) return "";
        return str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    if (!data) {
        return (
            <main className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="glass-panel max-w-2xl mx-auto p-12 rounded-3xl border border-white/10">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                            <Construction className="w-10 h-10 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{formatTitle(slug)}</h1>
                        <p className="text-xl text-gray-400 mb-8">This section is currently under construction.</p>
                        <Link href="/" className="btn-primary inline-flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> Return to Base
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 relative">
            {/* Background Elements */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium bg-white/5 px-4 py-2 rounded-full mb-6">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-gray-400">{data.title}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">{data.title}</h1>
                    {data.subtitle && <p className="text-xl text-gray-400">{data.subtitle}</p>}
                </div>

                {/* Sections */}
                <div className="space-y-16 max-w-5xl mx-auto">
                    {data.sections.map((section, idx) => (
                        <div key={idx} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                            {section.title && (
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                                    {section.title}
                                </h2>
                            )}

                            {section.type === "text" && (
                                <div className="glass-panel p-8 rounded-3xl border border-white/10 text-lg text-gray-300 leading-relaxed">
                                    {section.content}
                                </div>
                            )}

                            {section.type === "grid" && section.items && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.items.map((item: any, i: number) => (
                                        <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === "team" && section.items && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {section.items.map((item: any, i: number) => (
                                        <div key={i} className="glass-panel p-6 rounded-2xl text-center border border-white/5 hover:-translate-y-1 transition-transform">
                                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 text-2xl">
                                                {item.name.charAt(0)}
                                            </div>
                                            <h3 className="font-bold text-white">{item.name}</h3>
                                            <p className="text-cyan-400 text-sm">{item.role}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === "list" && section.items && (
                                <ul className="space-y-3 glass-panel p-8 rounded-3xl border border-white/10">
                                    {section.items.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
