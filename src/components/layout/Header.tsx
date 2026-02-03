"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, LayoutGrid, Coins, Globe, Wallet, Building, Music, Clapperboard, CreditCard, ShoppingBag, Cpu, Users } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cubeMenuOpen, setCubeMenuOpen] = useState(false);
    const cubeMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        const handleClickOutside = (event: MouseEvent) => {
            if (cubeMenuRef.current && !cubeMenuRef.current.contains(event.target as Node)) {
                setCubeMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navItems = [
        {
            label: "Corporate",
            items: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/web/about-us" },
                { name: "Career", href: "/web/careers" },
                { name: "Contact", href: "/web/contacts" },
                { name: "Documents", href: "#" },
                { name: "Discover", href: "/web/discover" },
                { name: "Privacy Policy", href: "/web/privacy-policy" },
            ],
        },
        {
            label: "Products",
            items: [
                { name: "Home", href: "/" },
                { name: "MetaAirdrop", href: "/web/metaairdrop" },
                { name: "MetaChain", href: "/web/meta-chain" },
                { name: "MetaDex", href: "/web/dex" },
                { name: "MetaExplorer", href: "#" },
                { name: "MetaNFT Marketplace", href: "/web/meta-nft" },
                { name: "MetaWallet", href: "/web/meta-wallet" },
            ],
        },
        {
            label: "Learn",
            items: [
                { name: "Home", href: "/" },
                { name: "Dictionary", href: "/web/dictionary" },
                { name: "Whitepaper", href: "/web/whitepaper" },
                { name: "Tokenomics", href: "/web/tokenomics" },
                { name: "Roadmap", href: "/web/roadmap" },
                { name: "Listing Platforms", href: "/web/listing-platforms" },
            ],
        },
    ];

    const ecosystemApps = [
        { name: "Discover", icon: <Globe className="w-5 h-5 text-orange-400" />, href: "/web/discover" },
        { name: "Airdrop", icon: <Coins className="w-5 h-5 text-yellow-400" />, href: "/web/metaairdrop" },
        { name: "MetaChain", icon: <Cpu className="w-5 h-5 text-blue-400" />, href: "/web/meta-chain" },
        { name: "MetaCoin", icon: <Coins className="w-5 h-5 text-purple-400" />, href: "/web/meta-coin" },
        { name: "Exchange", icon: <Coins className="w-5 h-5 text-yellow-500" />, href: "/web/exchange" },
        { name: "Launchpad", icon: <LayoutGrid className="w-5 h-5 text-green-400" />, href: "/web/launchpad" },
        { name: "NFTs", icon: <ShoppingBag className="w-5 h-5 text-pink-400" />, href: "/web/meta-nft" },
        { name: "RealEstate", icon: <Building className="w-5 h-5 text-blue-500" />, href: "/web/meta-realestate" },
        { name: "Wallet", icon: <Wallet className="w-5 h-5 text-cyan-400" />, href: "/web/meta-wallet" },
        { name: "MLM", icon: <Users className="w-5 h-5 text-orange-500" />, href: "/web/meta-mlm" },
        { name: "Movies", icon: <Clapperboard className="w-5 h-5 text-red-400" />, href: "/web/meta-movie" },
        { name: "Music", icon: <Music className="w-5 h-5 text-purple-500" />, href: "/web/meta-music" },
        { name: "Payment", icon: <CreditCard className="w-5 h-5 text-green-500" />, href: "/web/meta-payment" },
        { name: "Login", icon: <Users className="w-5 h-5 text-gray-400" />, href: "/login" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "glass-panel py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/assets/logo.png"
                                alt="Bayuverse Logo"
                                fill
                                className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                            />
                        </div>
                        <div className="relative w-32 h-8 hidden sm:block">
                            <Image
                                src="/assets/name.png"
                                alt="Bayuverse"
                                fill
                                className="object-contain brightness-200"
                            />
                        </div>
                    </Link>

                    {/* Cube Menu (App Launcher) */}
                    <div className="relative" ref={cubeMenuRef}>
                        <button
                            onClick={() => setCubeMenuOpen(!cubeMenuOpen)}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${cubeMenuOpen ? "bg-white/10 text-cyan-400" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                        >
                            <LayoutGrid className="w-6 h-6" />
                        </button>

                        {/* Cube Dropdown */}
                        <div className={`absolute top-full left-0 mt-4 w-[400px] p-6 rounded-3xl bg-[#0f1115] border border-white/20 shadow-2xl shadow-black ring-1 ring-white/10 transition-all duration-300 origin-top-left ${cubeMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}`}>
                            <div className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-wider">Meta Ecosystem</div>
                            <div className="grid grid-cols-3 gap-3">
                                {ecosystemApps.map((app) => (
                                    <Link
                                        key={app.name}
                                        href={app.href}
                                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all group"
                                        onClick={() => setCubeMenuOpen(false)}
                                    >
                                        <div className="p-2 rounded-full bg-black/60 group-hover:scale-110 transition-transform shadow-lg">
                                            {app.icon}
                                        </div>
                                        <span className="text-xs font-medium text-gray-300 group-hover:text-white">{app.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((category) => (
                        <div key={category.label} className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                                {category.label}
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Dropdown */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-4 rounded-2xl glass-panel opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 border border-white/10">
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

                    <Link href="/web/whitepaper" className="btn-outline text-sm">
                        Whitepaper
                    </Link>
                    <Link href="/login" className="btn-primary text-sm shadow-lg shadow-purple-600/20">
                        Login / App
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-10 overflow-y-auto pb-32">
                    {navItems.map((category) => (
                        <div key={category.label}>
                            <h3 className="text-lg font-semibold text-white mb-2">{category.label}</h3>
                            <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                                {category.items.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-400 hover:text-cyan-400 py-1 block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Link href="/login" className="btn-primary w-full justify-center">Login / Launch App</Link>
                </div>
            )}
        </header>
    );
}
