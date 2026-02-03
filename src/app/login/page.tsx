"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Wallet, ArrowRight, Lock, User } from "lucide-react";

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<"email" | "wallet">("email");

    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="w-full max-w-md relative z-10 px-6">
                <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                            <span className="text-3xl font-bold text-white">M</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-gray-400 text-sm">Sign in to access your digital assets</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex p-1 bg-black/40 rounded-xl mb-8 border border-white/5">
                        <button
                            onClick={() => setActiveTab("email")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "email" ? "bg-white/10 text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </button>
                        <button
                            onClick={() => setActiveTab("wallet")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "wallet" ? "bg-white/10 text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                        >
                            <Wallet className="w-4 h-4" />
                            Wallet
                        </button>
                    </div>

                    {/* Forms */}
                    <div className="space-y-6">
                        {activeTab === "email" ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Email Address</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input type="email" placeholder="Enter your email" className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input type="password" placeholder="Enter your password" className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-xs">
                                    <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                                        <input type="checkbox" className="rounded bg-white/10 border-white/10 text-cyan-500 focus:ring-0" />
                                        Remember me
                                    </label>
                                    <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Forgot Password?</Link>
                                </div>

                                <button className="w-full btn-primary py-3 rounded-xl flex items-center justify-center gap-2 group mt-2">
                                    Sign In
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6 py-4 animate-in fade-in slide-in-from-bottom-2 duration-300 text-center">
                                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                                    <Wallet className="w-8 h-8 text-cyan-400" />
                                </div>
                                <p className="text-gray-400 text-sm">Connect your preferred wallet to sign in securely without a password.</p>
                                <button className="w-full btn-outline py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5">
                                    Connect Wallet
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 text-center text-xs text-gray-500">
                        Don't have an account? <Link href="#" className="text-white font-medium hover:underline underline-offset-4">Register Now</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
