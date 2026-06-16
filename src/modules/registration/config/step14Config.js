import { Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const step14Config = {
  hero: {
    eyebrow: "Final Step",
    titleLines: ["Add Profile", "Photo"],
    description: "Meaningful connections.\nBuilt on trust, values &\ntradition.",
    buttonText: "CONTINUE",
    verifiedText: "100% VERIFIED PROFILES",
    verifiedSubText: "SAFE & SECURE",
    trustItems: [
      { id: '1', title: "Trusted by", subtitle: "1M+ Families", icon: UsersIcon },
      { id: '2', title: "Verified & Secure", subtitle: "100% Verified Profiles", icon: ShieldCheck },
      { id: '3', title: "Premium Matches", subtitle: "Curated for you", icon: Gem },
      { id: '4', title: "Personal Support", subtitle: "At every step", icon: Headphones }
    ]
  }
};

