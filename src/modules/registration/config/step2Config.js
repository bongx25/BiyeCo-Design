import { Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const getStep2Hero = (isManaged, role = 'candidate') => {
  const roleCap = role.charAt(0).toUpperCase() + role.slice(1);
  return {
    eyebrow: "Let's Begin",
    titleLines: isManaged ? [`${roleCap}'s`, "Details"] : ["Create Your", "Profile"],
    description: isManaged ? `Tell us about the ${role}'s.` : "Tell us about yourself.",
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

export const getStep2Questions = (isManaged) => [
  {
    id: "candidateFirstName",
    title: "First Name",
    type: "input",
    placeholder: "Enter first name",
    required: true
  },
  {
    id: "candidateLastName",
    title: "Last Name",
    type: "input",
    placeholder: "Enter last name",
    required: true
  },
  {
    id: "candidateDOB",
    title: "Date of Birth",
    type: "datePicker",
    placeholder: "Select date of birth",
    required: true
  }
];
