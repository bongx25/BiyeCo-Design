import { Home, Users, MapPin, Map, Baby, PawPrint, ShieldCheck, Gem, Headphones, Users as UsersIcon } from 'lucide-react';

export const step10Config = {
  hero: {
    eyebrow: "Let's Continue",
    titleLines: ["Family and", "Future Plans"],
    description: "Complete profile in 30 seconds",
    buttonText: "CREATE YOUR PROFILE",
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
      id: "livingSituation",
      title: "Living\nSituation",
      icon: Home,
      options: ["Living with Parents", "Living Alone", "Living with Roommates", "Other"]
    },
    {
      id: "siblingsCount",
      title: "Siblings\nCount",
      icon: Users,
      options: ["None", "1", "2", "3", "4+"]
    },
    {
      id: "ancestralState",
      title: "Ancestral\nDivision/State",
      icon: MapPin,
      options: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Gujarat", "Uttar Pradesh", "Other"]
    },
    {
      id: "ancestralDistrict",
      title: "Ancestral\nDistrict",
      icon: Map,
      options: ["Central District", "North District", "South District", "East District", "West District", "Other"]
    },
    {
      id: "childrenPreference",
      title: "Children\nPreference",
      icon: Baby,
      options: ["Want children", "Don't want children", "Open to having children", "Not sure yet"]
    },
    {
      id: "petPreference",
      title: "Pet\nPreference",
      icon: PawPrint,
      options: ["Have pets", "Love pets but don't have", "Don't want pets", "Allergic to pets"]
    }
  ]
};
