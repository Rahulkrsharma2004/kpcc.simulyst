"use client"

import { useState, useEffect, useCallback } from "react"
import type { TrendingTopic, FilterState } from "@/types/dashboard"

const generateMockTrendingTopics = (filters: FilterState): TrendingTopic[] => {
  const topics = [
    { keyword: "Power Cuts", sentiment: "negative" as const },
    { keyword: "Anna Bhagya", sentiment: "positive" as const },
    { keyword: "Corruption", sentiment: "negative" as const },
    { keyword: "Farmer Schemes", sentiment: "positive" as const },
    { keyword: "Unemployment", sentiment: "negative" as const },
  ]

  return topics.map((topic, index) => ({
    id: `topic-${index}`,
    keyword: topic.keyword,
    mentions: Math.floor(Math.random() * 1000) + 100,
    trend: ["up", "down", "stable"][Math.floor(Math.random() * 3)] as "up" | "down" | "stable",
    change: Math.floor(Math.random() * 50) + 5,
    sentiment: topic.sentiment,
  }))
}

export function useTrendingTopics(filters: FilterState) {
  const [data, setData] = useState<TrendingTopic[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(undefined)

    try {
      await new Promise((resolve) => setTimeout(resolve, 300))
      const mockData = generateMockTrendingTopics(filters)
      setData(mockData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch trending topics")
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
