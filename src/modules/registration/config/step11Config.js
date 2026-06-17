import { IconSchool as GraduationCap, IconBriefcase as Briefcase, IconAddressBook as Contact, IconPray as Heart, IconMapPin as MapPin, IconHome as Home, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones, IconUsers as UsersIcon } from '@tabler/icons-react';

export const step11Config = {
  hero: {
    eyebrow: "Partner Preferences",
    titleLines: ["Education", "and Career"],
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
      id: "prefEducation",
      title: "Preferred\nEducation Level",
      icon: GraduationCap,
      isMulti: true,
      options: ["Bachelors", "Masters", "PhD", "High School", "Diploma", "Other", "Any"]
    },
    {
      id: "prefProfession",
      title: "Preferred\nProfession",
      icon: Briefcase,
      isMulti: true,
      options: ["Software Engineer", "Doctor", "Teacher", "Business", "Government", "Other", "Any"]
    },
    {
      id: "prefEmployment",
      title: "Preferred\nEmployment",
      icon: Contact,
      isMulti: true,
      options: ["Employed", "Self-Employed", "Not Working", "Any"]
    },
    {
      id: "prefReligion",
      title: "Preferred\nReligion",
      icon: Heart,
      isMulti: true,
      options: ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Other", "Any"]
    },
    {
      id: "prefLocation",
      title: "Preferred\nLocation",
      icon: MapPin,
      isMulti: true,
      options: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Gujarat", "Other", "Any"]
    },
    {
      id: "prefLivingSituation",
      title: "Preferred\nLiving Situation",
      icon: Home,
      isMulti: true,
      options: ["Living with Parents", "Living Alone", "Living with Roommates", "Other", "Any"]
    }
  ]
};
