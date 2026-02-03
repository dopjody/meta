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
        subtitle: "The Foundation of the Metaverse",
        sections: [
            {
                title: "Proof of Meta (PoM)",
                content: "Fast, Secure, and Scalable. MetaAnthill is a structure that minimizes speed, security, and scalability issues. PoM is a consensus where users choose mining methods suitable for their hardware.",
                type: "text"
            },
            {
                title: "MVM (Meta Virtual Machine)",
                content: "MetaVirtualMachine is a consensus that provides fast transfer approval. TCPS (Transaction Control Speed) allows over 700,000 transactions per second.",
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
        subtitle: "Meet the necessary conditions and win 10,000 META",
        sections: [
            {
                title: "How to Join",
                content: "Register now to start earning. Unlike ordinary airdrops, earn rewards with MetaAirtime. New accounts receive 10,000 META equivalent immediately upon verification.",
                type: "text"
            },
            {
                title: "Earning Mechanisms",
                type: "list",
                items: [
                    "MetaAirtime: Continuous rewards for active users.",
                    "Referral Bonus: Earn when friends join via your link.",
                    "Verification Reward: Immediate bonus after KYC."
                ]
            }
        ]
    },
    "manifesto": {
        title: "Manifesto",
        subtitle: "The Future is Open",
        sections: [
            { content: "We believe in a future where community-driven technology empowers individuals to reclaim their digital sovereignty. MetaChain is not just a network; it's a movement towards an open, interoperable metaverse.", type: "text" }
        ]
    },
    "discover": {
        title: "Discover MetaChain",
        subtitle: "Everything You Need to Know About MetaChain Ecosystem",
        sections: [
            {
                title: "Comprehensive Ecosystem",
                type: "grid",
                items: [
                    { title: "MetaChain", desc: "Security, scalability, and efficiency with PoM consensus." },
                    { title: "MetaCoin", desc: "New-Gen Local Digital Asset." },
                    { title: "MetaExchange", desc: "Secure and User-Friendly Digital Asset Platform." },
                    { title: "MetaLaunchpad", desc: "Create and list your own digital asset easily." },
                    { title: "MetaNFT", desc: "Redefining NFTs with a Brand New Experience." },
                    { title: "MetaWallet", desc: "Next-Gen Digital Wallet for all values." },
                    { title: "MetaMLM", desc: "Unique reward system where everyone wins." },
                    { title: "MetaRealEstate", desc: "Affordable Real Estate via Digital Ownership." },
                    { title: "MetaPayment", desc: "The future of cross-border and local payments." }
                ]
            },
            {
                title: "What is MetaChain?",
                content: "MetaChain is building the world's most comprehensive blockchain ecosystem. Much more than a digital asset platform, it completely changes the understanding of blockchain with its ecosystem and responds to every need of individuals.",
                type: "text"
            }
        ]
    },
    "meta-coin": {
        title: "MetaCoin (META)",
        subtitle: "The Native Asset of MetaChain",
        sections: [
            {
                title: "Burn Mechanisms",
                content: "MetaChain will be burned regularly with three different mechanisms: Auto-Burn, Fee-Burn, and Strategic Burn to ensure long-term value.",
                type: "text"
            },
            {
                title: "Utility",
                type: "grid",
                items: [
                    { title: "Events", desc: "Participate in MetaAirdrop events to earn META." },
                    { title: "All Products", desc: "Use MetaChain for all products in the ecosystem." }
                ]
            }
        ]
    },
    "exchange": {
        title: "MetaExchange",
        subtitle: "Trade Without Limits",
        sections: [
            {
                title: "Trading Interfaces",
                type: "grid",
                items: [
                    { title: "Lite Mode", desc: "Clean interface for beginners." },
                    { title: "Pro Mode", desc: "Advanced tools for professional traders." },
                    { title: "Meta Mode", desc: "Customizable workspace for institutions." }
                ]
            }
        ]
    },
    "launchpad": {
        title: "MetaLaunchpad",
        subtitle: "Launch Your Vision",
        sections: [
            {
                title: "Easy Token Creation",
                content: "Create your own digital asset within minutes without any software knowledge. Use our Wizard for automated deployment or Advanced Mode for customization.",
                type: "text"
            },
            {
                title: "Features",
                type: "grid",
                items: [
                    { title: "Advanced Mode", desc: "Customize assets without software knowledge." },
                    { title: "Wizard", desc: "Create digital assets within minutes." },
                    { title: "Airdrop Tools", desc: "Organize airdrops with AI-backed tools." }
                ]
            }
        ]
    },
    "meta-nft": {
        title: "MetaNFT",
        subtitle: "Own the Digital Future",
        sections: [
            {
                title: "Features",
                type: "grid",
                items: [
                    { title: "Fractional NFTs", desc: "Own a piece of high-value digital assets." },
                    { title: "NFT Marketplace", desc: "The gateway to unique digital collectibles." },
                    { title: "Meta Studio", desc: "Create and mint NFTs effortlessly." }
                ]
            }
        ]
    },
    "meta-realestate": {
        title: "MetaRealEstate",
        subtitle: "Global Property Ownership",
        sections: [
            {
                title: "Digital Ownership",
                content: "Affordable real estate investment is now possible. Tokenize properties to reach global investors and earn regular income from rental yields.",
                type: "text"
            },
            {
                title: "Advantages",
                type: "list",
                items: ["Low Capital Requirement", "Regular Income Distribution", "No Intermediary Fees"]
            }
        ]
    },
    "meta-wallet": {
        title: "MetaWallet",
        subtitle: "Control Your Wealth",
        sections: [
            {
                title: "Multi-Chain Support",
                content: "Store and manage all your digital assets in one place. One click, all assets. Secure, private, and powerful.",
                type: "text"
            },
            {
                title: "Platforms",
                type: "grid",
                items: [
                    { title: "Browser Extension", desc: "Seamless browsing and access to services." },
                    { title: "Mobile App", desc: "Manage assets on the go." },
                    { title: "Desktop App", desc: "Powerful and secure asset management." }
                ]
            }
        ]
    },
    "meta-mlm": {
        title: "Meta MLM",
        subtitle: "Connect and Grow",
        sections: [
            {
                title: "Earning for the Whole Ecosystem",
                content: "Refer friends and earn up to Step 19. A system that scales with the community and distributes rewards fairly based on contribution.",
                type: "text"
            }
        ]
    },
    "meta-movie": {
        title: "Meta Movie",
        subtitle: "Decentralized Cinema",
        sections: [
            {
                title: "Funding Projects",
                content: "Revolutionize the film industry. Fund your creative projects through tokenization and share future revenues with your supporters.",
                type: "text"
            }
        ]
    },
    "meta-music": {
        title: "Meta Music",
        subtitle: "Sound of the Future",
        sections: [
            {
                title: "Raise Funds for Your Demo",
                content: "Artists can tokenize their work to raise funds directly from fans. No middlemen, full transparency, and global reach.",
                type: "text"
            }
        ]
    },
    "meta-payment": {
        title: "Meta Payment",
        subtitle: "Seamless Global Payments",
        sections: [
            {
                title: "Payment Solutions",
                type: "grid",
                items: [
                    { title: "MetaCard", desc: "Spend crypto anywhere cards are accepted." },
                    { title: "Online Gateway", desc: "Accept META on your website." },
                    { title: "Point of Sale", desc: "Physical POS systems for retail shops." }
                ]
            }
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
