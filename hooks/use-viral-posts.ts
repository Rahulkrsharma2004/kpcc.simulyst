"use client"

import { useState, useEffect, useCallback } from "react"
import type { ViralPost, FilterState } from "@/types/dashboard"

const generateMockViralPosts = (filters: FilterState): ViralPost[] => {
  const posts = [
    {
      content: "Great progress on Anna Bhagya scheme implementation across Karnataka!",
      author: "@KPCCOfficial",
      platform: "x" as const,
      sentiment: "positive" as const,
    },
    {
      content: "Concerns raised about power supply issues in rural areas",
      author: "@CitizenVoice",
      platform: "x" as const,
      sentiment: "negative" as const,
    },
  ]

  return posts.map((post, index) => ({
    id: `post-${index}`,
    content: post.content,
    author: post.author,
    platform: post.platform,
    engagement: {
      likes: Math.floor(Math.random() * 1000) + 100,
      shares: Math.floor(Math.random() * 500) + 50,
      comments: Math.floor(Math.random() * 200) + 20,
    },
    sentiment: post.sentiment,
    timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
  }))
}

export function useViralPosts(filters: FilterState) {
  const [data, setData] = useState<ViralPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(undefined)

    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const mockData = generateMockViralPosts(filters)
      setData(mockData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch viral posts")
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
