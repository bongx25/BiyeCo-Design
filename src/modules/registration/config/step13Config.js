import { IconToolsKitchen2 as Utensils, IconBarbell as Activity, IconSmoking as Flame, IconGlassFull as Coffee, IconMessages as Languages, IconWorld as Globe, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones, IconUsers as UsersIcon } from '@tabler/icons-react';

export const step13Config = {
  hero: {
    eyebrow: "Partner Preferences",
    titleLines: ["Lifestyle and", "Compatibility"],
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
      id: "prefDiet",
      title: "Preferred\nDiet",
      icon: Utensils,
      isMulti: true,
      options: ["Vegetarian", "Non-Vegetarian", "Eggetarian", "Vegan", "Any"]
    },
    {
      id: "prefExercise",
      title: "Preferred\nExercise Routine",
      icon: Activity,
      isMulti: true,
      options: ["Daily", "Sometimes", "Never", "Any"]
    },
    {
      id: "prefSmoking",
      title: "Preferred\nSmoking Habit",
      icon: Flame,
      isMulti: true,
      options: ["Non-smoker", "Occasional", "Regular", "Any"]
    },
    {
      id: "prefDrinking",
      title: "Preferred\nDrinking Habit",
      icon: Coffee,
      isMulti: true,
      options: ["Non-drinker", "Occasional", "Regular", "Any"]
    },
    {
      id: "prefLanguage",
      title: "Preferred\nLanguage Spoken",
      icon: Languages,
      isMulti: true,
      options: ["English", "Hindi", "Bengali", "Marathi", "Telugu", "Tamil", "Gujarati", "Urdu", "Kannada", "Odia", "Malayalam", "Punjabi", "Other", "Any"]
    },
    {
      id: "prefCitizenship",
      title: "Preferred\nCitizenship",
      icon: Globe,
      isMulti: true,
      options: ["Indian", "NRI", "USA", "UK", "Canada", "Australia", "Other", "Any"]
    }
  ]
};
