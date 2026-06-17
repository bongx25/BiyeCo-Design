import { IconUsers as UsersIcon, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones } from '@tabler/icons-react';

export const getStep3Hero = (isManaged, role = 'candidate') => {
  const roleCap = role.charAt(0).toUpperCase() + role.slice(1);
  return {
  eyebrow: "Let's Continue",
  titleLines: ["Your Perfect", "Match Starts Here"],
  description: isManaged ? `Tell us where the ${role}'s lives.` : "Tell us where you live so we can personalize your experience.",
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
};

export const getStep3Questions = (isManaged, role = 'candidate') => [
  {
    id: "country",
    title: "Country",
    type: "select",
    placeholder: "Select your country",
    options: ["United States", "United Kingdom", "Canada", "India", "Australia", "UAE"],
    required: true
  },
  {
    id: "state",
    title: "State / Province",
    type: "select",
    placeholder: "Select your state or province",
    options: ["New York", "California", "Texas", "London", "Dubai"],
    required: true
  },
  {
    id: "pinCode",
    title: "Pin Code",
    type: "input",
    placeholder: "Enter your pin code",
    required: true
  }
];
