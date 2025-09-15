export const PLATFORMS = [
  { value: "all", label: "All Sources" },
  { value: "x", label: "X (Twitter)" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "youtube", label: "YouTube" },
  { value: "newspapers", label: "Newspapers" },
] as const

export const REGIONS = [
  { value: "all", label: "All Regions" },
  { value: "bangalore", label: "Bangalore" },
  { value: "mysore", label: "Mysore" },
  { value: "hubli", label: "Hubli" },
  { value: "mangalore", label: "Mangalore" },
] as const

export const TABS = [
  { value: "overview", label: "Overview", icon: "BarChart3" },
  { value: "bjp", label: "BJP Tracker", icon: "TrendingUp" },
  { value: "guarantees", label: "Guarantees", icon: "Shield" },
  { value: "tools", label: "Tools", icon: "Wrench" },
  { value: "chat", label: "AI Chat", icon: "Bot" },
] as const

export const SENTIMENT_COLORS = {
  positive: "hsl(var(--chart-1))",
  negative: "hsl(var(--chart-3))",
  neutral: "hsl(var(--chart-2))",
} as const

export const GUARANTEE_SCHEMES = [
  {
    id: "anna-bhagya",
    name: "Anna Bhagya",
    description: "Free rice distribution scheme",
  },
  {
    id: "gruha-lakshmi",
    name: "Gruha Lakshmi",
    description: "Financial assistance to women",
  },
  {
    id: "shakti",
    name: "Shakti",
    description: "Free bus travel for women",
  },
  {
    id: "gruha-jyoti",
    name: "Gruha Jyoti",
    description: "Free electricity up to 200 units",
  },
  {
    id: "yuva-nidhi",
    name: "Yuva Nidhi",
    description: "Unemployment allowance for graduates",
  },
] as const
