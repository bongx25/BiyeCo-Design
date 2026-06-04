import { Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const step4Hero = {
  eyebrow: "Stay Connected",
  titleLines: ["How Can We", "Reach You?"],
  description: "Your contact details help us keep your profile secure and updated.",
  buttonText: "CREATE YOUR PROFILE",
  verifiedText: "100% VERIFIED PROFILES",
  verifiedSubText: "SAFE & SECURE",
  trustItems: [
    { id: '1', title: "Trusted by", subtitle: "1M+ Families", icon: UsersIcon },
    { id: '2', title: "Verified & Secure", subtitle: "100% Verified Profiles", icon: ShieldCheck },
    { id: '3', title: "Premium Matches", subtitle: "Curated for you", icon: Gem },
    { id: '4', title: "Personal Support", subtitle: "At every step", icon: Headphones }
  ]
};

export const step4Questions = [
  {
    id: "email",
    title: "Your Email",
    type: "input",
    inputType: "email",
    placeholder: "Enter your email address",
    required: true
  },
  {
    id: "phone",
    title: "Your Mobile Number",
    type: "phone",
    placeholder: "Enter mobile number",
    required: true
  }
];
