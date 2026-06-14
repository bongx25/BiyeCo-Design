import { Calendar, Ruler, User, UserCheck, Baby, PawPrint, ShieldCheck, Gem, Headphones, Users as UsersIcon } from 'lucide-react';

export const step12Config = {
  hero: {
    eyebrow: "Partner Preferences",
    titleLines: ["Physical and", "Relationship"],
    description: "Tell us what you're looking for in a partner",
    buttonText: "CONTINUE",
    verifiedText: "100% VERIFIED PROFILES",
    verifiedSubText: "SAFE & SECURE",
    trustItems: [
      { id: '1', title: "Trusted by", subtitle: "1M+ Families", icon: UsersIcon },
      { id: '2', title: "Verified & Secure", subtitle: "100% Verified Profiles", icon: ShieldCheck },
      { id: '3', title: "Premium Matches", subtitle: "Curated for you", icon: Gem },
      { id: '4', title: "Personal Support", subtitle: "At every step", icon: Headphones }
    ]
  },
  cards: [
    {
      id: "prefAge",
      title: "Preferred\nAge Range",
      icon: Calendar,
      type: "range",
      minBound: 18,
      maxBound: 70,
      step: 1,
      formatLabel: (val) => `${val} yrs`
    },
    {
      id: "prefHeight",
      title: "Preferred\nHeight Range",
      icon: Ruler,
      type: "range",
      minBound: 48, // 4'0"
      maxBound: 84, // 7'0"
      step: 1,
      formatLabel: (val) => {
        const feet = Math.floor(val / 12);
        const inches = val % 12;
        return `${feet}'${inches}"`;
      }
    },
    {
      id: "prefBodyType",
      title: "Preferred\nBody Type",
      icon: User,
      isMulti: true,
      options: ["Slim", "Average", "Athletic", "Heavy", "Any"]
    },
    {
      id: "prefMaritalStatus",
      title: "Preferred\nMarital Status",
      icon: UserCheck,
      isMulti: true,
      options: ["Never Married", "Divorced", "Widowed", "Awaiting Divorce", "Any"]
    },
    {
      id: "prefChildren",
      title: "Preferred\nChildren",
      icon: Baby,
      isMulti: true,
      options: ["Want children", "Don't want children", "Open to having children", "Not sure yet", "Any"]
    },
    {
      id: "prefPet",
      title: "Preferred\nPet",
      icon: PawPrint,
      isMulti: true,
      options: ["Have pets", "Love pets but don't have", "Don't want pets", "Allergic to pets", "Any"]
    }
  ]
};
