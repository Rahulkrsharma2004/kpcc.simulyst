"use client"

import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, TrendingDown, Minus, AlertCircle } from "lucide-react"
import { useTrendingTopics } from "@/hooks/use-trending-topics"
import type { FilterState, TrendDirection, SentimentType } from "@/types/dashboard"

interface TrendingTopicsProps {
  filters?: FilterState
}

function TrendIcon({ trend }: { trend: TrendDirection }) {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-green-500" />
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-500" />
    case "stable":
      return <Minus className="h-4 w-4 text-gray-500" />
  }
}

function SentimentBadge({ sentiment }: { sentiment: SentimentType }) {
  const variant = sentiment === "positive" ? "default" : sentiment === "negative" ? "destructive" : "secondary"

  return (
    <Badge variant={variant} className="text-xs">
      {sentiment}
    </Badge>
  )
}

export function TrendingTopics({ filters = { source: "all", region: "all" } }: TrendingTopicsProps) {
  const { data, loading, error } = useTrendingTopics(filters)

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
            <div className="flex items-center gap-3">
              <Skeleton className="h-4 w-6" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      {data.map((topic, index) => (
        <div key={topic.id} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
            <div>
              <p className="font-medium">{topic.keyword}</p>
              <p className="text-sm text-muted-foreground">{topic.mentions.toLocaleString()} mentions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SentimentBadge sentiment={topic.sentiment} />
            <TrendIcon trend={topic.trend} />
          </div>
        </div>
      ))}
    </div>
  )
}
