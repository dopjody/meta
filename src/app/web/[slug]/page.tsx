"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Construction, ChevronRight, ArrowRight, Clock, Play, Layout, Zap, Share2, Shield, Globe } from "lucide-react";
import { useParams } from "next/navigation";
import { pagesData } from "@/data/pages";
import { PageData, Section, SectionItem } from "@/types";

const isSectionItem = (item: string | SectionItem): item is SectionItem => {
    return typeof item === "object";
};

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
        <main className="min-h-screen pt-40 pb-24 relative bg-[#02040a]">
            {/* Professional Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:50px_50px] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Enhanced Breadcrumb / Home Button */}
                <div className="mb-12 flex items-center justify-center">
                    <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="text-sm font-medium">Home</span>
                        </Link>
                        <ChevronRight className="w-3 h-3 text-gray-600" />
                        <span className="text-sm font-semibold text-cyan-400">{data.title}</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        {data.title}
                    </h1>
                    {data.subtitle && (
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
                            <p className="relative text-xl md:text-2xl text-cyan-400/90 font-medium tracking-wide uppercase">
                                {data.subtitle}
                            </p>
                        </div>
                    )}
                </div>

                {/* Content Sections */}
                <div className="space-y-24 max-w-6xl mx-auto">
                    {data.sections.map((section: Section, idx: number) => (
                        <section key={idx} className="animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${idx * 150}ms` }}>
                            {section.title && (
                                <div className="flex items-center gap-4 mb-10">
                                    <h2 className="text-3xl font-black text-white uppercase italic tracking-tight underline decoration-cyan-500/50 underline-offset-8">
                                        {section.title}
                                    </h2>
                                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                </div>
                            )}

                            {section.type === "text" && section.content && (
                                <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                                    <p className="text-gray-300 text-lg leading-loose font-light italic">
                                        {section.content}
                                    </p>
                                </div>
                            )}

                            {section.type === "grid" && section.items && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {section.items.map((item: string | SectionItem, i: number) => {
                                        if (isSectionItem(item)) {
                                            return (
                                                <div key={i} className="group glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors" />
                                                    <div className="relative z-10">
                                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase italic flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            )}

                            {section.type === "list" && section.items && (
                                <div className="space-y-4 max-w-4xl">
                                    {section.items.map((item: string | SectionItem, i: number) => (
                                        <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group shadow-lg">
                                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-black group-hover:scale-110 transition-transform">
                                                {i + 1}
                                            </div>
                                            <p className="text-gray-300 font-light italic tracking-wide">
                                                {typeof item === 'string' ? item : item.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
