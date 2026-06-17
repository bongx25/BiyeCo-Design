import { IconToolsKitchen2 as Utensils, IconBarbell as Activity, IconSmoking as Cigarette, IconGlassFull as Wine, IconDeviceGamepad2 as Gamepad2, IconFileText as FileText, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones, IconUsers as UsersIcon } from '@tabler/icons-react';

export const step9Config = {
  hero: {
    eyebrow: "Let's Continue",
    titleLines: ["Lifestyle and", "Introduction"],
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
      id: "dietPreference",
      title: "Diet\nPreference",
      icon: Utensils,
      options: ["Vegetarian", "Non-Vegetarian", "Eggetarian", "Jain", "Vegan"]
    },
    {
      id: "exerciseRoutine",
      title: "Exercise\nRoutine",
      icon: Activity,
      options: ["Daily", "Sometimes", "Never"]
    },
    {
      id: "smokingHabit",
      title: "Smoking\nHabit",
      icon: Cigarette,
      options: ["No", "Occasionally", "Yes"]
    },
    {
      id: "drinkingHabit",
      title: "Drinking\nHabit",
      icon: Wine,
      options: ["No", "Occasionally", "Yes"]
    },
    {
      id: "hobbies",
      title: "Hobbies",
      icon: Gamepad2,
      isMulti: true,
      options: ["Reading", "Traveling", "Music", "Movies", "Sports", "Cooking", "Photography", "Art", "Dancing", "Gaming", "Other"]
    },
    {
      id: "aboutAndStory",
      title: "About\nand Story",
      icon: FileText,
      type: 'form',
      questions: [
        { id: "q1", title: "Choose one word that describes you best" },
        { id: "q2", title: "What matters most to you in life and marriage?" },
        { id: "q3", title: "How would family and friends describe you?" },
        { id: "q4", title: "What kind of future are you hoping to build?" }
      ]
    }
  ]
};
