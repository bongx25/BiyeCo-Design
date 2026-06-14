import { Ruler, Scale, User, Heart, Globe, UserCheck, ShieldCheck, Gem, Headphones, Users as UsersIcon } from 'lucide-react';

export const step8Config = {
  hero: {
    eyebrow: "Let's Continue",
    titleLines: ["Personal", "Details"],
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
      id: "height",
      title: "Height",
      icon: Ruler,
      options: ["4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\""]
    },
    {
      id: "weight",
      title: "Weight",
      icon: Scale,
      options: ["40 kg", "45 kg", "50 kg", "55 kg", "60 kg", "65 kg", "70 kg", "75 kg", "80 kg", "85 kg", "90 kg", "95 kg", "100 kg"]
    },
    {
      id: "bodyType",
      title: "Body\nType",
      icon: User,
      options: ["Slim", "Average", "Athletic", "Heavy"]
    },
    {
      id: "religion",
      title: "Religion",
      icon: Heart,
      options: ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Parsi", "Jewish", "Other"]
    },
    {
      id: "languagesSpoken",
      title: "Languages\nSpoken",
      icon: Globe,
      isMulti: true,
      options: ["English", "Hindi", "Bengali", "Marathi", "Telugu", "Tamil", "Gujarati", "Urdu", "Kannada", "Odia", "Malayalam", "Punjabi", "Other"]
    },
    {
      id: "maritalStatus",
      title: "Marital\nStatus",
      icon: UserCheck,
      options: ["Never Married", "Divorced", "Widowed", "Awaiting Divorce"]
    }
  ]
};
