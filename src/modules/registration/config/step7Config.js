import { Briefcase, Contact, GraduationCap, BookOpen, User, Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';

export const step7Config = {
  hero: {
    eyebrow: "Let's Continue",
    titleLines: ["Your", "Profile"],
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
      id: "profession",
      title: "Current\nProfession",
      icon: Briefcase,
      options: ["Software Engineer", "Doctor", "Teacher", "Business", "Other"]
    },
    {
      id: "employmentStatus",
      title: "Employment\nStatus",
      icon: Contact,
      options: ["Employed", "Self-Employed", "Not Working"]
    },
    {
      id: "education",
      title: "Highest Education\nAttained",
      icon: GraduationCap,
      options: ["Bachelors", "Masters", "PhD", "High School", "Other"]
    },
    {
      id: "fieldOfStudy",
      title: "Field of\nStudy",
      icon: BookOpen,
      options: ["Computer Science", "Engineering", "Arts", "Science", "Commerce"]
    },
    {
      id: "fatherProfession",
      title: "Father's\nProfession",
      icon: User,
      options: ["Business", "Service", "Retired", "Not Employed", "Other"]
    },
    {
      id: "motherProfession",
      title: "Mother's\nProfession",
      icon: User,
      options: ["Homemaker", "Business", "Service", "Retired", "Other"]
    }
  ]
};
