import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Send, Github } from "lucide-react";

export default function Footer() {
    const footerLinks = {
        corporate: [
            { name: "About Us", href: "#" },
            { name: "Career", href: "#" },
            { name: "Contact", href: "#" },
            { name: "Documents", href: "#" },
            { name: "Privacy Policy", href: "#" },
        ],
        products: [
            { name: "MetaChain", href: "#" },
            { name: "MetaDex", href: "#" },
            { name: "MetaNFT", href: "#" },
            { name: "MetaWallet", href: "#" },
            { name: "MetaLaunchpad", href: "#" },
        ],
        learn: [
            { name: "Whitepaper", href: "#" },
            { name: "Tokenomics", href: "#" },
            { name: "Roadmap", href: "#" },
            { name: "Dictionary", href: "#" },
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
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <span className="text-white font-bold text-xl">M</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                MetaChain
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Building the digital ecosystem of the future. The new standard of the blockchain world with advanced security and infinite scalability.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Send, Github].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-cyan-400 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
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
