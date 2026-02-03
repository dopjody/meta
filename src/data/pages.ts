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
    "discover": {
        title: "Discover MetaChain",
        subtitle: "Everything You Need to Know About MetaChain Ecosystem",
        sections: [
            {
                title: "Ecosystem Overview",
                type: "grid",
                items: [
                    { title: "MetaChain", desc: "Security, scalability, and efficiency." },
                    { title: "MetaCoin", desc: "New-Gen Local Digital Asset." },
                    { title: "MetaExchange", desc: "Secure and User-Friendly Digital Asset Platform." },
                    { title: "MetaLaunchpad", desc: "Create and list your own digital asset." },
                    { title: "MetaNFT", desc: "Redefining NFTs with a Brand New Experience." },
                    { title: "MetaWallet", desc: "Next-Gen Digital Wallet." },
                ]
            },
            {
                title: "What Sets MetaChain Apart?",
                content: "MetaChain is building the world's most comprehensive blockchain ecosystem. Much more than a digital asset platform, it changes the understanding of blockchain with its Proof of Meta consensus mechanism, offering fast transaction speeds and insurmountable security.",
                type: "text"
            }
        ]
    },
    "meta-coin": {
        title: "MetaCoin",
        subtitle: "Digital World's Cryptocurrency",
        sections: [
            {
                title: "Mechanisms",
                content: "MetaChain will be burned regularly with three different burning mechanisms: Auto-Burn, Fee-Burn, and Strategic Burn.",
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
        subtitle: "The Future of Asset Trading",
        sections: [
            {
                title: "Trading Modes",
                type: "grid",
                items: [
                    { title: "Lite", desc: "Designed for beginners and anyone entering crypto." },
                    { title: "Pro", desc: "Advanced indicator tables and tools for experienced investors." },
                    { title: "Meta", desc: "Customizable panel for financial professionals." }
                ]
            }
        ]
    },
    "launchpad": {
        title: "MetaLaunchpad",
        subtitle: "Create Digital Asset Easily",
        sections: [
            {
                title: "Launch Your Token",
                type: "list",
                items: [
                    "Create MetaChain Account",
                    "Verify with Phone & Mail",
                    "Launch Your Token effortlessly"
                ]
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
        subtitle: "A Brand New NFT Experience",
        sections: [
            {
                title: "The Gateway to NFTs",
                type: "grid",
                items: [
                    { title: "Rent or Fractionalize", desc: "Rent, fractionalize, and share ownership of NFTs." },
                    { title: "Easy Creation", desc: "Create NFTs with no coding knowledge." },
                    { title: "Customization", desc: "Personalize NFTs using user-friendly tools." }
                ]
            }
        ]
    },
    "meta-realestate": {
        title: "MetaRealEstate",
        subtitle: "Invest Smarter Tokenize Easier",
        sections: [
            {
                title: "Unique Features",
                type: "grid",
                items: [
                    { title: "Digital Estate", desc: "Own real-world real estate with digital ownership." },
                    { title: "Tokenize", desc: "Tokenize assets to reach global investors." },
                    { title: "Accessible", desc: "Capitalize on real estate with low entry barriers." }
                ]
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
        subtitle: "Store Securely Transact Easily",
        sections: [
            {
                title: "One Click, All Assets",
                content: "From stocks to deeds, gold to crypto - manage everything on one screen. Eliminate intermediaries with direct asset exchange.",
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
        subtitle: "Unleash the Power of Connection",
        sections: [
            {
                title: "Ecosystem Rewards",
                content: "Invite friends to digital products and earn up to step 19. Collect customized points and increase your MetaAirdrop rewards.",
                type: "text"
            }
        ]
    },
    "meta-movie": {
        title: "Meta Movie",
        subtitle: "Change the Cinema Industry with Blockchain",
        sections: [
            {
                title: "Revolutionize Filmmaking",
                type: "grid",
                items: [
                    { title: "Creativity", desc: "Present creative projects without professional equipment." },
                    { title: "Funding", desc: "Determine funding amount and raise funds globally." },
                    { title: "Tokenization", desc: "Projects are tokenized for investor purchase." }
                ]
            }
        ]
    },
    "meta-music": {
        title: "Meta Music",
        subtitle: "Create, Tokenize, and Share Your Music",
        sections: [
            {
                title: "For Artists",
                type: "list",
                items: [
                    "Create a demo of your music project.",
                    "Tokenize your work with simple steps.",
                    "Showcase to investors and raise funds."
                ]
            }
        ]
    },
    "meta-payment": {
        title: "Meta Payment",
        subtitle: "Break the Boundaries in Payment Solutions",
        sections: [
            {
                title: "All Payment Methods",
                type: "grid",
                items: [
                    { title: "MetaCard", desc: "Make daily expenses with digital assets." },
                    { title: "MetaPos", desc: "Receive payments easily from e-commerce." },
                    { title: "Physical Pos", desc: "Accept digital assets at physical branches." },
                    { title: "QR Code", desc: "Secure payments via MetaChain app." }
                ]
            }
        ]
    },
    "privacy-policy": { title: "Privacy Policy", subtitle: "Your Data Protection", sections: [{ content: "We value your privacy...", type: "text" }] },
    "careers": { title: "Careers", subtitle: "Join the Team", sections: [{ content: "View open positions...", type: "text" }] }
};
