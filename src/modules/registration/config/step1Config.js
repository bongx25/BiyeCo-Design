import { User, Users as UsersIcon, Gift, Mars, Venus, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const groomOptions = [
  { id: 'myself', label: 'Myself', icon: User },
  { id: 'daughter', label: 'Daughter', icon: User },
  { id: 'sister', label: 'Sister', icon: UsersIcon },
  { id: 'someone_else', label: 'Someone else', icon: Gift }
];

export const brideOptions = [
  { id: 'myself', label: 'Myself', icon: User },
  { id: 'son', label: 'Son', icon: User },
  { id: 'brother', label: 'Brother', icon: UsersIcon },
  { id: 'someone_else', label: 'Someone else', icon: Gift }
];

export const genderOptions = [
  { id: 'male', label: 'Male', icon: Mars },
  { id: 'female', label: 'Female', icon: Venus }
];

export const step1Config = {
  hero: {
    eyebrow: "Find",
    titleLines: ["A Lifetime of", "Togetherness"],
    description: "Meaningful connections.\nBuilt on trust, values & tradition.",
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
