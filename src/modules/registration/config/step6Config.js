import { IconUsers as UsersIcon, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones } from '@tabler/icons-react';

export const step6Config = {
  hero: {
    eyebrow: "Almost There",
    titleLines: ["Create Your", "Password"],
    description: "Secure your account with a strong password and verify your contact method to continue.",
    buttonText: "CREATE YOUR PROFILE",
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
