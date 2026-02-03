import { Share2, Globe, Cpu, Users, Award, Briefcase, Building } from "lucide-react";

export interface PageContent {
    title: string;
    subtitle?: string;
    heroImage?: string;
    sections: {
        title?: string;
        content?: string;
        type?: "text" | "grid" | "list" | "team" | "contact";
        items?: any[];
    }[];
}

export const pagesData: Record<string, PageContent> = {
    "about-us": {
        title: "About Us",
        subtitle: "Get to Know MetaChain Ecosystem Better",
        sections: [
            {
                title: "Future's Digital Products",
                content: "We offer innovative digital products and services within the ecosystem. We provide infrastructure with distributed servers located throughout the world.",
                type: "text"
            },
            {
                title: "Our Vision",
                content: "We are removing the boundaries between reality and the digital world with the most comprehensive digital ecosystem project planned in line with our goals. With our products and projects, we meet today's digital needs and bring tomorrow's technologies to people.",
                type: "text"
            },
            {
                title: "Meet Our Executive Staff",
                type: "team",
                items: [
                    { name: "Mark Zuckerberg", role: "CEO & Co Founder" },
                    { name: "Nick Clegg", role: "President Global Affairs" },
                    { name: "Susan Li", role: "CFO" },
                    { name: "Javier Olivan", role: "COO" },
                    { name: "Chris Cox", role: "CPO" },
                    { name: "Andrew 'Boz' Bosworth", role: "CTO" },
                ]
            },
            {
                title: "Our Offices",
                type: "grid",
                items: [
                    { title: "Meta Headquarters", desc: "1 Hacker Way, Menlo Park, CA 94025, USA" },
                    { title: "Meta New York", desc: "770 Broadway, New York, NY 10003, USA" },
                    { title: "Meta London", desc: "1 Rathbone Square, Fitzrovia, London W1T 1FB, UK" },
                    { title: "Meta Singapore", desc: "South Beach Tower, 38 Beach Rd, Singapore 189767" },
                ]
            }
        ]
    },
    "meta-chain": {
        title: "MetaChain",
        subtitle: "Fast, Secure, and Scalable",
        sections: [
            {
                title: "Proof of Meta",
                content: "MetaAnthill minimizes the speed, security, and scalability issues in blockchain networks. With Proof of Meta, users can choose the most suitable mining method for their hardware.",
                type: "text"
            },
            {
                title: "MVM & Performance",
                content: "MetaVirtualMachine provides fast transfer approval with its unique consensus. With a Transaction Control Speed (TCPS) of over 700,000 transactions per second, MetaChain minimizes scalability issues.",
                type: "text"
            },
            {
                title: "Mining Types",
                type: "grid",
                items: [
                    { title: "MetaMiner", desc: "Uses high-powered computers to mine META." },
                    { title: "MacroMiner", desc: "Mine on all devices including personal computers." },
                    { title: "MicroMiner", desc: "Mine META with cell phones." },
                ]
            }
        ]
    },
    "metaairdrop": {
        title: "MetaAirdrop",
        subtitle: "Meet the necessary conditions and win now the equivalent of 10,000 MetaChain",
        sections: [
            {
                title: "How to Join?",
                content: "Register now to start earning META. Unlike ordinary airdrops, earn rewards with MetaAirtime.",
                type: "text"
            },
            {
                title: "New Account Bonus",
                type: "grid",
                items: [
                    { title: "10,000 META", desc: "Register Now and Start Earning immediately." }
                ]
            }
        ]
    },
    "manifesto": {
        title: "Manifesto",
        subtitle: "The Future is Open",
        sections: [
            { content: "We believe in a future where... (Placeholder for manifesto text)", type: "text" }
        ]
    },
    "tokenomics": {
        title: "Tokenomics",
        subtitle: "The Economy of Tomorrow",
        sections: [
            {
                title: "Token Distribution",
                type: "list",
                items: ["40% Ecosystem Growth", "20% Team", "10% Advisors", "30% Public Sale"]
            }
        ]
    },
    "contacts": {
        title: "Contact Us",
        subtitle: "We are here to help",
        sections: [
            {
                title: "Get in Touch",
                type: "grid",
                items: [
                    { title: "Live Chat", desc: "Chat with our support team 24/7." },
                    { title: "Email Support", desc: "support@metaversechain.net" }
                ]
            },
            {
                title: "Our Offices",
                type: "text",
                content: "Visit us at our global headquarters in Menlo Park, CA, or our regional offices in New York, London, and Singapore."
            }
        ]
    },
    "dictionary": { title: "Dictionary", subtitle: "Blockchain Terms Explained", sections: [{ content: "A comprehensive glossary of blockchain terms...", type: "text" }] },
    "roadmap": { title: "Roadmap", subtitle: "Our Journey to the Future", sections: [{ content: "Q1 2026: MetaChain Mainnet Launch...", type: "text" }] },
    "meta-coin": { title: "MetaCoin", subtitle: "The Currency of the Metaverse", sections: [{ content: "MetaCoin is the native utility token...", type: "text" }] },
    "dex": { title: "MetaDex", subtitle: "Decentralized Exchange", sections: [{ content: "Swap tokens instantly with low fees.", type: "text" }] },
    "exchange": { title: "MetaExchange", subtitle: "Pro Trading Platform", sections: [{ content: "Advanced trading tools for professional traders.", type: "text" }] },
    "explorer": { title: "MetaExplorer", subtitle: "Blockchain Explorer", sections: [{ content: "Track transactions and blocks in real-time.", type: "text" }] },
    "launchpad": { title: "MetaLaunchpad", subtitle: "Token Launch Platform", sections: [{ content: "Launch your own token on MetaChain.", type: "text" }] },
    "meta-nft": { title: "MetaNFT", subtitle: "NFT Marketplace", sections: [{ content: "Buy, sell, and trade NFTs.", type: "text" }] },
    "meta-realestate": { title: "MetaRealEstate", subtitle: "Digital Real Estate", sections: [{ content: "Invest in virtual land and property.", type: "text" }] },
    "meta-wallet": { title: "MetaWallet", subtitle: "Secure Digital Wallet", sections: [{ content: "Store your assets safely.", type: "text" }] },
    "meta-mlm": { title: "Meta MLM", subtitle: "Referral Program", sections: [{ content: "Earn rewards by inviting friends.", type: "text" }] },
    "meta-movie": { title: "Meta Movie", subtitle: "Film Fundraising", sections: [{ content: "Support the next big blockbuster on blockchain.", type: "text" }] },
    "meta-music": { title: "Meta Music", subtitle: "Music Platform", sections: [{ content: "Direct-to-fan music distribution.", type: "text" }] },
    "meta-payment": { title: "Meta Payment", subtitle: "Payment Gateway", sections: [{ content: "Accept crypto payments easily.", type: "text" }] },
    "privacy-policy": { title: "Privacy Policy", subtitle: "Your Data Protection", sections: [{ content: "We value your privacy...", type: "text" }] },
    "careers": { title: "Careers", subtitle: "Join the Team", sections: [{ content: "View open positions...", type: "text" }] }
};
