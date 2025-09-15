export interface SentimentData {
  date: string
  positive: number
  negative: number
  neutral: number
}

export interface TrendingTopic {
  id: string
  keyword: string
  mentions: number
  trend: "up" | "down" | "stable"
  change: number
  sentiment: "positive" | "negative" | "neutral"
}

export interface ViralPost {
  id: string
  content: string
  author: string
  platform: "x" | "instagram" | "facebook" | "youtube"
  engagement: {
    likes: number
    shares: number
    comments: number
  }
  sentiment: "positive" | "negative"
  timestamp: string
}

export interface RegionalData {
  district: string
  sentiment: {
    positive: number
    negative: number
    neutral: number
  }
  totalMentions: number
}

export interface MediaMention {
  id: string
  source: string
  mentions: number
  reach: "high" | "medium" | "low"
  sentiment: "positive" | "negative" | "neutral"
}

export interface GuaranteeScheme {
  id: string
  name: string
  description: string
  sentiment: {
    positive: number
    negative: number
    neutral: number
  }
  mentions: number
  trend: "up" | "down" | "stable"
}

export interface BJPPost {
  id: string
  content: string
  author: string
  engagement: {
    likes: number
    retweets: number
    shares: number
  }
  sentiment: "positive" | "negative"
  timestamp: string
}

export interface BJPLeader {
  name: string
  mentions: number
  sentiment: "positive" | "negative" | "neutral"
  posts: BJPPost[]
}

export interface FilterState {
  source: string
  region: string
  dateFrom?: Date
  dateTo?: Date
}

export interface DashboardState {
  filters: FilterState
  activeTab: string
  loading: boolean
  error?: string
}

export type Platform = "x" | "instagram" | "facebook" | "youtube" | "newspapers"
export type SentimentType = "positive" | "negative" | "neutral"
export type TrendDirection = "up" | "down" | "stable"
