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
    "dictionary": { title: "Dictionary", subtitle: "Blockchain Terms Explained", sections: [{ title: "Glossary", type: "list", items: ["Bag: Digital assets stored in a wallet.", "Bear Market: A downtrend in cryptocurrency markets.", "Blockchain: Unalterable structure of encrypted data blocks.", "Bull Market: An uptrend in cryptocurrency markets.", "Cold Wallet: Offline storage for digital assets.", "Consensus: Network agreement on transaction validity.", "DeFi: Decentralized Finance.", "Gas Fee: Transaction fee on the blockchain.", "HODL: Holding onto assets despite volatility.", "Mining: Configuring hardware to process transactions.", "NFT: Non-Fungible Token.", "Smart Contract: Self-executing digital contracts.", "Wallet: A tool to store private keys and assets.", "Mainnet: The primary operational network.", "Mempool: Waiting area for unconfirmed transactions.", "Satoshi: The smallest unit of Bitcoin.", "Whale: Someone holding a massive amount of crypto."] }] },
    "roadmap": {
        title: "Roadmap",
        subtitle: "Our Journey to the Future",
        sections: [
            {
                title: "2022 - Foundation",
                type: "text",
                content: "Formation of the MetaChain Initiative as a DAO-managed fork. Divergence from corporate entities to focus on 100% community-driven development. Implementation of Bullshark/Narwhal consensus for fair ordering."
            },
            {
                title: "2025 - Expansion",
                type: "grid",
                items: [
                    { title: "Ecosystem Integrations", desc: "Partnerships with Oracles and RPCs." },
                    { title: "Regulatory Compliance", desc: "Aligning with MiCA and FINMA guidelines." },
                    { title: "Mainnet Launch", desc: "Official launch of MetaChain Mainnet without VC lock-ups." }
                ]
            },
            {
                title: "2026 - Global Scale",
                type: "grid",
                items: [
                    { title: "Community TGE", desc: "Public Token Generation Event (Jan 1, 2026)." },
                    { title: "Exchange Listings", desc: "Listing on Tier-1 CEX and DEX platforms." },
                    { title: "Mobile Light Client", desc: "Secure blockchain verification on smartphones." }
                ]
            },
            {
                title: "2027 - Enterprise",
                type: "grid",
                items: [
                    { title: "Enterprise Subnets", desc: "Dedicated subnets for corporate partners." },
                    { title: "Decentralized ID", desc: "Global rollout of MetaID standard." },
                    { title: "Cross-Chain Interop", desc: "IBC implementation for seamless asset flow." }
                ]
            },
            {
                title: "2028 - Real World",
                type: "grid",
                items: [
                    { title: "RWA Tokenization", desc: "Real estate and commodities trading on-chain." },
                    { title: "Dynamic Sharding", desc: "Scaling network capacity for millions of users." },
                    { title: "Sustainability", desc: "Achieving full carbon neutrality." }
                ]
            },
            {
                title: "2030 - Vision",
                type: "text",
                content: "The Open Metaverse: A fully interoperable digital economy. Protocol Ossification: Reaching stability and immutability. Long-Term Vision: Research into post-quantum cryptography."
            }
        ]
    },
    "careers": {
        title: "Careers",
        subtitle: "Build the Future With Us",
        sections: [
            {
                title: "Why Join Us?",
                type: "grid",
                items: [
                    { title: "Competitive Salary", desc: "Top-tier compensation packages." },
                    { title: "Flexible Work", desc: "Hybrid Remote & In-House options." },
                    { title: "Strong Benefits", desc: "Health insurance, foreign language support." },
                    { title: "Social Diversity", desc: "Inclusive environment for everyone." }
                ]
            },
            {
                title: "Open Positions",
                type: "list",
                items: [
                    "Quality Assurance Engineer - Fulltime",
                    "Javascript Developer - Fulltime",
                    "DevOps Lead - Fulltime",
                    "Technical Project Manager - Fulltime",
                    "Blockchain Developer - Fulltime"
                ]
            }
        ]
    },
    "listing-platforms": {
        title: "Listing Platforms",
        subtitle: "Where to Trade META",
        sections: [
            {
                title: "Available Exchanges",
                type: "grid",
                items: [
                    { title: "Binance", desc: "World's largest crypto exchange." },
                    { title: "Coinbase", desc: "Top US-based trading platform." },
                    { title: "OKX", desc: "Secure and reliable trading." },
                    { title: "KuCoin", desc: "The People's Exchange." },
                    { title: "Huobi (HTX)", desc: "Leading digital asset platform." },
                    { title: "Bybit", desc: "Innovative crypto exchange." },
                    { title: "Gate.io", desc: "Wide range of digital assets." },
                    { title: "MEXC Global", desc: "High performance matching engine." },
                    { title: "Bitget", desc: "Secure platform for trading." },
                    { title: "Crypto.com", desc: "Trusted by 80M+ users." }
                ]
            }
        ]
    },
    "whitepaper": {
        title: "Whitepaper",
        subtitle: "The Technical Foundation",
        sections: [
            {
                title: "The New Standard",
                type: "text",
                content: "MetaChain is creating the digital ecosystem of the future by increasing the efficiency of metaverse technology with blockchain. Our Proof of Meta consensus mechanism ensures speed, security, and scalability."
            },
            {
                title: "Download",
                type: "list",
                items: [
                    "MetaChain Technical Whitepaper v1.0 (PDF)",
                    "Tokenomics Paper (PDF)",
                    "Consensus Mechanism Research (PDF)"
                ]
            }
        ]
    }
};
