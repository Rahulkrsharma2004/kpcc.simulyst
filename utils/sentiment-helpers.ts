import type { SentimentType } from "@/types/dashboard"

export function calculateSentimentPercentage(
  positive: number,
  negative: number,
  neutral: number,
): Record<SentimentType, number> {
  const total = positive + negative + neutral
  if (total === 0) return { positive: 0, negative: 0, neutral: 0 }

  return {
    positive: Math.round((positive / total) * 100),
    negative: Math.round((negative / total) * 100),
    neutral: Math.round((neutral / total) * 100),
  }
}

export function getSentimentColor(sentiment: SentimentType): string {
  const colors = {
    positive: "hsl(var(--chart-1))",
    negative: "hsl(var(--chart-3))",
    neutral: "hsl(var(--chart-2))",
  }
  return colors[sentiment]
}

export function getSentimentLabel(sentiment: SentimentType): string {
  const labels = {
    positive: "Positive",
    negative: "Negative",
    neutral: "Neutral",
  }
  return labels[sentiment]
}
