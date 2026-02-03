"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { useParams } from "next/navigation";

export default function DynamicPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const formatTitle = (str: string) => {
        if (!str) return "";
        return str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="glass-panel max-w-2xl mx-auto p-12 rounded-3xl border border-white/10">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                        <Construction className="w-10 h-10 text-cyan-400" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {formatTitle(slug)}
                    </h1>

                    <p className="text-xl text-gray-400 mb-8">
                        This section of the Metaverse is currently under construction.
                        <br />
                        Our architects are building the future.
                    </p>

                    <Link href="/" className="btn-primary inline-flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Return to Base
                    </Link>
                </div>
            </div>
        </main>
    );
}
