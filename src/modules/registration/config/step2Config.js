import { Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const step2Hero = {
  eyebrow: "Let's Begin",
  titleLines: ["Create Your", "Profile"],
  description: "Tell us about yourself.",
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

export const step2Questions = [
  {
    id: "firstName",
    title: "First Name",
    type: "input",
    placeholder: "Enter your first name",
    required: true
  },
  {
    id: "lastName",
    title: "Last Name",
    type: "input",
    placeholder: "Enter your last name",
    required: true
  },
  {
    id: "dateOfBirth",
    title: "Date of Birth",
    type: "datePicker",
    placeholder: "Select your date of birth",
    required: true
  }
];
