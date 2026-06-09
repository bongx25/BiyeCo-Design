import { Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const getStep5Hero = (isManaged) => ({
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
});

export const getStep5Questions = (isManaged, role = 'candidate') => {
  const roleCap = role.charAt(0).toUpperCase() + role.slice(1);
  if (!isManaged) {
    return [
      {
        id: "email",
        title: "Your Email",
        type: "input",
        inputType: "email",
        placeholder: "Enter your email address",
        required: true
      },
      {
        id: "candidatePhone",
        title: "Your Mobile Number",
        type: "phone",
        placeholder: "Enter mobile number",
        required: true
      }
    ];
  }

  return [
    {
      id: "section_family",
      type: "sectionTitle",
      title: "Your Contact Details",
      subtitle: "(Family Member)"
    },
    {
      id: "email",
      title: "Your Email",
      type: "input",
      inputType: "email",
      placeholder: "Enter your email address",
      required: true
    },
    {
      id: "guardianPhone",
      title: "Your Mobile Number",
      type: "phone",
      placeholder: "Enter mobile number",
      required: true
    },
    {
      id: "section_candidate",
      type: "sectionTitle",
      title: `${roleCap} Contact Details`,
      subtitle: "(Optional)"
    },
    {
      id: "candidateEmail",
      title: `${roleCap} Email`,
      type: "input",
      inputType: "email",
      placeholder: `Enter ${role} email`,
      required: false
    },
    {
      id: "candidatePhone",
      title: `${roleCap} Mobile Number`,
      type: "phone",
      placeholder: `Enter ${role} mobile`,
      required: false
    }
  ];
};
