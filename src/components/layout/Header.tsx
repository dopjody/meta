"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            label: "Corporate",
            items: [
                { name: "About Us", href: "#" },
                { name: "Career", href: "#" },
                { name: "Contact", href: "#" },
                { name: "Documents", href: "#" },
                { name: "Discover", href: "#" },
                { name: "Privacy Policy", href: "#" },
            ],
        },
        {
            label: "Products",
            items: [
                { name: "MetaAirdrop", href: "#" },
                { name: "MetaChain", href: "#" },
                { name: "MetaDex", href: "#" },
                { name: "MetaExplorer", href: "#" },
                { name: "MetaNFT Marketplace", href: "#" },
                { name: "MetaWallet", href: "#" },
            ],
        },
        {
            label: "Learn",
            items: [
                { name: "Dictionary", href: "#" },
                { name: "Whitepaper", href: "#" },
                { name: "Tokenomics", href: "#" },
                { name: "Roadmap", href: "#" },
                { name: "Listing Platforms", href: "#" },
            ],
        },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "glass-panel py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all">
                        <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                        MetaChain
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((category) => (
                        <div key={category.label} className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                                {category.label}
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Dropdown */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-4 rounded-2xl glass-panel opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                                <div className="flex flex-col gap-2">
                                    {category.items.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-sm text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors flex items-center justify-between group/item"
                                        >
                                            {item.name}
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-cyan-400" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link href="#" className="btn-outline text-sm">
                        Whitepaper
                    </Link>
                    <Link href="#" className="btn-primary text-sm shadow-lg shadow-purple-600/20">
                        Launch App
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-10">
                    {navItems.map((category) => (
                        <div key={category.label}>
                            <h3 className="text-lg font-semibold text-white mb-2">{category.label}</h3>
                            <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                                {category.items.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-400 hover:text-cyan-400 py-1 block"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}
