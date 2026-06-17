import { IconUsers as UsersIcon, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones } from '@tabler/icons-react';

export const step4Hero = {
  eyebrow: "Family Details",
  titleLines: ["Tell Us About", "Yourself"],
  description: "This information belongs to the family member creating the account.",
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
    id: "guardianFirstName",
    title: "First Name",
    type: "input",
    placeholder: "Enter your first name",
    required: true
  },
  {
    id: "guardianLastName",
    title: "Last Name",
    type: "input",
    placeholder: "Enter your last name",
    required: true
  }
];
