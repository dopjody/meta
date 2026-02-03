import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Send, Github } from "lucide-react";

export default function Footer() {
    const footerLinks = {
        corporate: [
            { name: "About Us", href: "/web/about-us" },
            { name: "Career", href: "/web/careers" },
            { name: "Contact", href: "/web/contacts" },
            { name: "Documents", href: "#" },
            { name: "Privacy Policy", href: "/web/privacy-policy" },
        ],
        products: [
            { name: "MetaChain", href: "/web/meta-chain" },
            { name: "MetaDex", href: "/web/dex" },
            { name: "MetaNFT", href: "/web/meta-nft" },
            { name: "MetaWallet", href: "/web/meta-wallet" },
            { name: "MetaLaunchpad", href: "/web/launchpad" },
        ],
        learn: [
            { name: "Whitepaper", href: "/web/whitepaper" },
            { name: "Tokenomics", href: "/web/tokenomics" },
            { name: "Roadmap", href: "/web/roadmap" },
            { name: "Dictionary", href: "/web/dictionary" },
        ],
    };

    return (
        <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
            {/* Background accents */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Bayuverse Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]"
                                />
                            </div>
                            <div className="relative w-36 h-10">
                                <Image
                                    src="/assets/name.png"
                                    alt="Bayuverse"
                                    fill
                                    className="object-contain brightness-200"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed text-lg font-light italic border-l-2 border-cyan-500/50 pl-4">
                            Bayuverse is creating the digital ecosystem of the future by increasing the efficiency of metaverse technology with blockchain.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Send, Github].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 hover:border-cyan-500/50 hover:text-white hover:bg-white/10 transition-all group"
                                >
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Corporate</h4>
                        <ul className="space-y-4">
                            {footerLinks.corporate.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Products</h4>
                        <ul className="space-y-4">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Learn</h4>
                        <ul className="space-y-4">
                            {footerLinks.learn.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} MetaChain. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
